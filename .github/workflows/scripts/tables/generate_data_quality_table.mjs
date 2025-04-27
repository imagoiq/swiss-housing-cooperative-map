import { readFileSync,writeFileSync } from 'node:fs';
import {getCompletionRate, operatorFilter, ownerFilter } from "../utils.mjs";
import { argv } from 'node:process';

/** @type Identity */
const identity = argv[2];
/** @type string */
const inputGeojsonPath = argv[3];
/** @type string */
const outputPath = argv[4];

/**
 * Read an OSM GeoJSON file
 * @type OsmGeoJSON
 */
const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

/**
 * Process
 */
const filteredFeatures = featuresFile.features.filter(feature => (feature.properties.building || feature.properties["building:part"]) && identity === "operator" ? operatorFilter(feature) : ownerFilter(feature));

const groupedByIdentity = Object.groupBy(filteredFeatures, feature => feature.properties[identity]);

const aggregatedData = Object.values(groupedByIdentity).map(features => getAggregatedIdentity(features, identity));
const sortedAggregatedData = aggregatedData.sort((a,b) => a.name?.localeCompare(b.name));

/**
 * Output to file or to console
 */
if(outputPath) {
    writeFileSync(outputPath, JSON.stringify(sortedAggregatedData));
} else {
    console.log(JSON.stringify(sortedAggregatedData));
}

/**
 * @param {Feature[]} features
 * @param {Identity} identity
 */
function getAggregatedIdentity(features, identity) {
    const buildings_and_parts_count = features.length;

    let feature_start_date_count = 0;
    let feature_building_flats_count = 0;
    let feature_buildings_last_renovation_count = 0;
    let feature_heating_count = 0;
    let feature_architect_count = 0;
    let feature_architect_renovation_count = 0;
    let feature_building_levels_count = 0;
    let feature_roof_levels_count = 0;
    let feature_roof_shape_count = 0;

    for (const feature of features) {
        if(feature.properties.start_date){
            feature_start_date_count++;
        }
        if(feature.properties["building:flats"]){
            feature_building_flats_count++;
        }
        if(feature.properties.last_renovation){
            feature_buildings_last_renovation_count++;
        }
        if(feature.properties.heating){
            feature_heating_count++;
        }
        if(feature.properties.architect){
            feature_architect_count++;
        }
        if(feature.properties["architect:renovation"]){
            feature_architect_renovation_count++;
        }
        if(feature.properties["building:levels"]){
            feature_building_levels_count++;
        }
        if(feature.properties["roof:levels"]){
            feature_roof_levels_count++;
        }
        if(feature.properties["roof:shape"]){
            feature_roof_shape_count++;
        }
    }

    return  {
        wikidata: features[0].properties[`${identity}:wikidata`],
        abbr: features[0].properties[`${identity}:abbr`],
        name: features[0].properties[`${identity}`],
        website: features[0].properties[`${identity}:website`],
        completion_buildings_start_date_percentage: getCompletionRate(feature_start_date_count, buildings_and_parts_count),
        completion_buildings_flats_percentage: getCompletionRate(feature_building_flats_count, buildings_and_parts_count),
        completion_buildings_heating_percentage: getCompletionRate(feature_heating_count, buildings_and_parts_count),
        completion_buildings_architect_percentage: getCompletionRate(feature_architect_count, buildings_and_parts_count),
        completion_buildings_architect_renovation_percentage: feature_buildings_last_renovation_count > 0 ? getCompletionRate(feature_architect_renovation_count, feature_buildings_last_renovation_count) : null,
        completion_buildings_levels_percentage: getCompletionRate(feature_building_levels_count, buildings_and_parts_count),
        completion_buildings_roof_levels_percentage: getCompletionRate(feature_roof_levels_count, buildings_and_parts_count),
        completion_buildings_roof_shape_percentage: getCompletionRate(feature_roof_shape_count, buildings_and_parts_count)
    };
}
