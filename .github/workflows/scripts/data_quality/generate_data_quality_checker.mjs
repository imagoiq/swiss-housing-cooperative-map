import { readFileSync, writeFileSync } from 'node:fs';

const inputGeojsonPath = process.argv[2];
const outputPath = process.argv[3];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

check(featuresFile);

function check(featuresFile){
    const featuresWithErrors = [];

    featuresFile.features.forEach(feature => {
        const errors = [];

        const hasAnAddrTag = Object.keys(feature.properties).find(props => /^addr:/.test(props));
        const hasFullAddrTags = (tags) => "addr:postcode" in tags && "addr:housenumber" in tags && "addr:street" in tags && "addr:city" in tags;

        // Address: duplication
        if(hasAnAddrTag && "addr" in feature.properties){
            errors.push("Address duplication");
        }
        // Address: missing postcode
        if(hasAnAddrTag && !hasFullAddrTags(feature.properties)){
            errors.push("Partial address");
        }
        // Address (multiple): missing postcode
        if("addr" in feature.properties && feature.properties.addr.find(address => !hasFullAddrTags(address))){
            errors.push("Partial address");
        }

        if(errors.length > 0) {
            featuresWithErrors.push({
                "id": feature.id,
                errors
            })
        }
    })

    writeFileSync(outputPath, JSON.stringify(featuresWithErrors));
}