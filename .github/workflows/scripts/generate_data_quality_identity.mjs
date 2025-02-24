import { readFileSync,writeFileSync } from 'node:fs';
import { tsvFormat} from "d3-dsv";
import {getCompletionRate, operatorFilter, ownerFilter } from "./utils.mjs";

const identity = process.argv[2];
const inputGeojsonPath = process.argv[3];
const outputPath = process.argv[4];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

const filteredFeatures = featuresFile.features.filter(feature => (feature.properties.building || feature.properties["building:part"]) && identity === "operator" ? operatorFilter(feature) : ownerFilter(feature));

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
    const buildings_and_parts_count = features.length;
    const buildings_renovated_count = features.filter(feature => feature.properties.renovated).length

    return  {
        wikidata: features[0].properties[`${identity}:wikidata`],
        abbr: features[0].properties[`${identity}:abbr`],
        name: features[0].properties[`${identity}`],
        website: features[0].properties[`${identity}:website`],
        completion_buildings_start_date_percentage: getCompletionRate(features.filter(feature => feature.properties.start_date).length, buildings_and_parts_count),
        completion_buildings_flats_percentage: getCompletionRate(features.filter(feature => feature.properties["building:flats"]).length, buildings_and_parts_count),
        completion_buildings_heating_percentage: getCompletionRate(features.filter(feature => feature.properties.heating).length, buildings_and_parts_count),
        completion_buildings_architect_percentage: getCompletionRate(features.filter(feature => feature.properties.architect).length, buildings_and_parts_count),
        completion_buildings_renovated_architect_percentage: buildings_renovated_count > 0 ? getCompletionRate(features.filter(feature => feature.properties["renovated:architect"]).length, buildings_renovated_count) : null,
        completion_buildings_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["building:levels"]).length, buildings_and_parts_count),
        completion_buildings_roof_levels_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:levels"]).length, buildings_and_parts_count),
        completion_buildings_roof_shape_percentage: getCompletionRate(features.filter(feature => feature.properties["roof:shape"]).length, buildings_and_parts_count)
    };
}