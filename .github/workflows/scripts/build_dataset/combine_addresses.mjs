import { readFileSync, writeFileSync } from 'node:fs';
import { argv } from 'node:process';

const inputOsmXmlPath = argv[2];

/**
 * Read an OSM XML file
 * @type OsmXml
 */
const featuresFile = JSON.parse(await readFileSync(inputOsmXmlPath, { encoding: 'utf8' }));

/**
 * Combine addresses with their associated id
 */
const output = mergeAddresses(featuresFile);

/**
 * Output to file
 */
writeFileSync(inputOsmXmlPath, JSON.stringify(output));

/**
 * Combine addresses with their associated id
 * @param {OsmXml} featuresFile
 */
function mergeAddresses(featuresFile){

    const featuresIdsWithoutAddresses = featuresFile.elements.filter(feature => feature.type === "associated_addresses");

    featuresIdsWithoutAddresses.forEach(element => {

        const i = featuresFile.elements.findIndex(feature => feature.id.toString() === element.tags["__associated_id"]);
        const associatedAddressId = featuresFile.elements.findIndex(feature => feature.id === element.id);

        // Init array
        if(!("addr" in featuresFile.elements[i].tags)){
            featuresFile.elements[i].tags["addr"] = [];
        }
        featuresFile.elements[i].tags["addr"].push({
            "addr:city": element.tags["addr:city"],
            "addr:postcode": element.tags["addr:postcode"],
            ...("addr:street" in element.tags && {"addr:street": element.tags["addr:street"]}),
            ...("addr:place" in element.tags && {"addr:place": element.tags["addr:place"]}),
            "addr:housenumber": element.tags["addr:housenumber"],
        });

        delete element.tags[associatedAddressId];
    })

    return featuresFile;
}