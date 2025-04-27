import { readFileSync,writeFileSync } from 'node:fs';
import {getCompletionRate } from "../utils.mjs";
import { argv } from 'node:process';

const inputGeoJsonPath = argv[2];
const outputPath = argv[3];

/**
 * Read an OSM GeoJSON file
 * @type OsmGeoJSON
 */
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));

/**
 * Get aggregate data
 */
const aggregatedData = getAggregatedData(featuresFile.features);

/**
 * Output to file or to console
 */
if(outputPath) {
    writeFileSync(outputPath, JSON.stringify(aggregatedData));
} else {
    console.log(JSON.stringify(aggregatedData));
}

/**
 * @param {Feature[]} features
 */
function getAggregatedData(features) {
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
        number_cooperative: getWikidataId(features).size,
        number_buildings: buildings_and_parts_count,
        completion_buildings_start_date_percentage: getCompletionRate(feature_start_date_count, buildings_and_parts_count),
        completion_buildings_flats_percentage: getCompletionRate(feature_building_flats_count, buildings_and_parts_count),
        completion_buildings_heating_percentage: getCompletionRate(feature_heating_count, buildings_and_parts_count),
        completion_buildings_architect_percentage: getCompletionRate(feature_architect_count, buildings_and_parts_count),
        completion_buildings_architect_renovation_percentage: getCompletionRate(feature_architect_renovation_count, feature_buildings_last_renovation_count),
        completion_buildings_levels_percentage: getCompletionRate(feature_building_levels_count, buildings_and_parts_count),
        completion_buildings_roof_levels_percentage: getCompletionRate(feature_roof_levels_count, buildings_and_parts_count),
        completion_buildings_roof_shape_percentage: getCompletionRate(feature_roof_shape_count, buildings_and_parts_count)
    };
}

/**
 * @param {Feature[]} features
 */
function getWikidataId(features) {
    const wikidataIds = new Set();

    for(const feature of features) {
        if(feature.properties["owner:wikidata"] && feature.properties["owner:type"] === "cooperative"){
            wikidataIds.add(feature.properties["owner:wikidata"]);
        }
        if(feature.properties["operator:wikidata"] && feature.properties["operator:type"] === "cooperative"){
            wikidataIds.add(feature.properties["operator:wikidata"]);
        }
    }

    return wikidataIds;
}
