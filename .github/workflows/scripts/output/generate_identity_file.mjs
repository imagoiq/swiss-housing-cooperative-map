import { readFileSync,writeFileSync } from 'node:fs';
import { argv } from 'node:process';

const inputGeoJsonPath = argv[2];
const outputPath = argv[3];

/**
 * Read GeoJSON file
 */

/** @type OsmGeoJSON **/
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));

/**
 * Group by Wikidata id
 */

const groupedByWikidataId = Object.groupBy(featuresFile.features, feature => feature.properties["owner:wikidata"] || feature.properties["operator:wikidata"]);
delete groupedByWikidataId[undefined]

/**
 * Output each Wikidata id to a file
 */
for(const id in groupedByWikidataId) {
    const outputGeoJson = JSON.stringify({type:"FeatureCollection",features: groupedByWikidataId[id]}, null, 2);
    writeFileSync(`${outputPath}swiss_housing_cooperative_${id}.geojson`, outputGeoJson);
}

