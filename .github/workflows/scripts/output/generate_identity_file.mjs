import { readFileSync,writeFileSync } from 'node:fs';

/** @type string */
const inputGeojsonPath = process.argv[2];
/** @type string */
const outputPath = process.argv[3];

/**
 * Read GeoJSON file
 */

/** @type GeoJSON **/
const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

/**
 * Group by identity
 */

const groupedByIdentity = Object.groupBy(featuresFile.features, feature => feature.properties["owner:wikidata"] || feature.properties["operator:wikidata"]);
delete groupedByIdentity[undefined]

/**
 * Output to files
 */
for(const identity in groupedByIdentity) {
    const outputGeoJson = JSON.stringify({type:"FeatureCollection",features: groupedByIdentity[identity]}, null, 2);
    writeFileSync(`${outputPath}swiss_housing_cooperative_${identity}.geojson`, outputGeoJson);
}

