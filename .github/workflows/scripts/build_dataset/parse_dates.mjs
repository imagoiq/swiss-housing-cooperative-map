import { readFileSync, writeFileSync } from 'node:fs';
import { argv } from 'node:process';

const inputGeoJsonPath = argv[2];

/**
 * Read an OSM GeoJSON file
 * @type OsmGeoJSON
 */
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));


/**
 * Parse date and copy properties
 */
for (let feature of featuresFile.features) {
    if(feature.properties.start_date) {
        feature.properties.start_date_parsed = new Date(feature.properties.start_date);
    }

    if(feature.properties.last_renovation) {
        feature.properties.last_renovation_parsed = new Date(feature.properties.last_renovation);
    }
}

/**
 * Output to file
 */
writeFileSync(inputGeoJsonPath, JSON.stringify(featuresFile));
