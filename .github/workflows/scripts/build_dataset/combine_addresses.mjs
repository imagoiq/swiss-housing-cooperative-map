import { readFileSync, writeFileSync } from 'node:fs';

const inputGeojsonPath = process.argv[2];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

console.log('Merge addresses');
mergeAddresses(featuresFile);

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
            "addr:street": element.tags["addr:street"],
            "addr:housenumber": element.tags["addr:housenumber"],
        });

        delete element.tags[associatedAddressId];
    })

    writeFileSync(inputGeojsonPath, JSON.stringify(featuresFile));
}