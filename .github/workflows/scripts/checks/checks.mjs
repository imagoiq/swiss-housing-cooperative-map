import { readFileSync, writeFileSync } from 'node:fs';
import { argv } from 'node:process';
import {checkAddresses} from "./check_addresses.mjs";
import {checkWikidata} from "./check_wikidata.mjs";

const inputGeoJsonPath = argv[2];
const outputPath = argv[3];

/**
 * Read GeoJSON file
 */
/** @type OsmGeoJSON */
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));

/**
 * Run the checks and output a set of feature with error messages
 */
const featuresWithErrors = featuresFile.features.reduce((features, feature) => {
    const errors = [
        ...checkAddresses(feature),
        ...checkWikidata(feature)
    ];

    const featureToReport = (errors.length > 0) ? [{
        "id": feature.id,
        errors
    }] : []

    return [...features, ...featureToReport]
}, []);

/**
 * Output to file
 */
writeFileSync(outputPath, JSON.stringify(featuresWithErrors, null, 2));
