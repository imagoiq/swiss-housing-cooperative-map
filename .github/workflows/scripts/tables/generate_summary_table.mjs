import { readFileSync,writeFileSync } from 'node:fs';
import {getCompletionRate } from "../utils.mjs";

const inputGeojsonPath = process.argv[2];
const outputPath = process.argv[3];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

// Output
const aggregatedData = getAggregatedData(featuresFile.features);

if(outputPath) {
    writeFileSync(outputPath, JSON.stringify(aggregatedData));
} else {
    console.log(JSON.stringify(aggregatedData));
}

function getAggregatedData(features) {
    const buildings_and_parts_count = features.length;

    return  {
        number_cooperative: getWikidataId(features).size,
        number_buildings: buildings_and_parts_count,
        completion_buildings_start_date_percentage: getCompletionRate(features.filter(feature => feature.properties.start_date).length, buildings_and_parts_count),
        completion_buildings_flats_percentage: getCompletionRate(features.filter(feature => feature.properties["building:flats"]).length, buildings_and_parts_count),
        completion_buildings_heating_percentage: getCompletionRate(features.filter(feature => feature.properties.heating).length, buildings_and_parts_count),
        completion_buildings_architect_percentage: getCompletionRate(features.filter(feature => feature.properties.architect).length, buildings_and_parts_count),
        completion_buildings_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["building:levels"]).length, buildings_and_parts_count),
        completion_buildings_roof_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:levels"]).length, buildings_and_parts_count),
        completion_buildings_roof_shape_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:shape"]).length, buildings_and_parts_count)
    };
}

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
