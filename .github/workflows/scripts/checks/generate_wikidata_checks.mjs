import { readFileSync, writeFileSync } from 'node:fs';

const inputGeojsonPath = process.argv[2];
const outputPath = process.argv[3];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

check(featuresFile);

function check(featuresFile){
    const featuresWithErrors = [];

    featuresFile.features.forEach(feature => {
        const errors = [];

        // Missing operator:wikidata
        if(feature.properties["operator:type"] === "cooperative" && !("operator:wikidata" in feature.properties)){
            errors.push("Missing operator:wikidata");
        }
        // Missing owner:wikidata
        if(feature.properties["owner:type"] === "cooperative" && !("owner:wikidata" in feature.properties)){
            errors.push("Missing owner:wikidata");
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