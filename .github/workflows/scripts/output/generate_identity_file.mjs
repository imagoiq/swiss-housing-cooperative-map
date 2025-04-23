import { readFileSync,writeFileSync } from 'node:fs';
import {getCompletionRate, operatorFilter, ownerFilter } from "../utils.mjs";

const inputGeojsonPath = process.argv[2];
const outputPath = process.argv[3];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

const groupedByIdentity = Object.groupBy(featuresFile.features, feature => feature.properties["owner:wikidata"] || feature.properties["operator:wikidata"]);
delete groupedByIdentity[undefined]

// Output
for(const identity in groupedByIdentity) {
    writeFileSync(`${outputPath}swiss_housing_cooperative_${identity}.geojson`, `{"type":"FeatureCollection","features": ${JSON.stringify(groupedByIdentity[identity], null, 2)}}`);
}

