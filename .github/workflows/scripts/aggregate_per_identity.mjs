import { readFileSync,writeFileSync } from 'node:fs';
import { tsvFormat} from "d3-dsv";
import {getCompletionRate, operatorFilter, ownerFilter, unique} from "./utils.mjs";

const identity = process.argv[2];
const inputGeojsonPath = process.argv[3];
const outputPath = process.argv[4];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

const filteredFeatures = featuresFile.features.filter(feature => feature.properties.building && identity === "operator" ? operatorFilter(feature) : ownerFilter(feature));

const owners = Object.groupBy(filteredFeatures, feature => feature.properties[identity]);

// Output
const aggregatedData = Object.values(owners).map(features => getAggregatedIdentity(features, 'owner'));
const sortedAggregatedData = aggregatedData.sort((a,b) => a.name.localeCompare(b.name));

if(outputPath) {
    writeFileSync(outputPath, outputPath.endsWith('.tsv') ? tsvFormat(sortedAggregatedData) : JSON.stringify(sortedAggregatedData));
} else {
    console.log(JSON.stringify(sortedAggregatedData));
}


function getAggregatedIdentity(features, identity) {
    const buildings_count = features.filter(feature => feature.properties.building).length;
    const buildings_renovated_count = features.filter(feature => feature.properties.renovated).length;

    return  {
        wikidata: features[0].properties[`${identity}:wikidata`],
        abbr: features[0].properties[`${identity}:abbr`],
        name: features[0].properties[`${identity}`],
        short: features[0].properties[`${identity}:short`],
        website: features[0].properties[`${identity}:website`],
        start_date: features[0].properties[`${identity}:start_date`],
        swiss_business_uid: features[0].properties[`${identity}:swiss_business_uid`],
        buildings_count,
        building_flats: features.reduce((acc, curr) => {
            return acc + (parseInt(curr?.properties["building:flats"], 10) || 0);
        }, 0),
        building_start_date: features.filter(feature => feature.properties.start_date).map(feature => feature.properties.start_date),
        building_renovated_date: features.filter(feature => feature.properties.renovated).map(feature => feature.properties.renovated),
        building_renovated_count: buildings_renovated_count,
        buildings_subsidized_count: features.filter(feature => feature.properties.subsidized).length,
        buildings_rent_regulated_count: features.filter(feature => feature.properties["rent:regulation"]).length,
        buildings_dormitory_count: features.filter(feature => feature.properties.building === "dormitory").length,
        buildings_sheltered_housing_count: features.filter(feature => feature.properties.building === "sheltered_housing").length,
        buildings_locations: unique(features.map(feature => feature.properties["addr:city"])),
        buildings_postcode: unique(features.map(feature => feature.properties["addr:postcode"])),
        completion_buildings_start_date_percentage: getCompletionRate(features.filter(feature => feature.properties.start_date).length, buildings_count),
        completion_buildings_flats_percentage: getCompletionRate(features.filter(feature => feature.properties["building:flats"]).length, buildings_count),
        completion_buildings_heating_percentage: getCompletionRate(features.filter(feature => feature.properties.heating).length, buildings_count),
        completion_buildings_architect_percentage: getCompletionRate(features.filter(feature => feature.properties.architect).length, buildings_count),
        completion_buildings_renovated_architect_percentage: getCompletionRate(features.filter(feature => feature.properties["renovated:architect"]).length, buildings_renovated_count),
        completion_buildings_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["building:levels"]).length, buildings_count),
        completion_buildings_roof_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:levels"]).length, buildings_count),
        completion_buildings_roof_shape_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:shape"]).length, buildings_count)
    };
}