import { readFileSync, writeFileSync } from 'node:fs';

const inputGeojsonPath = process.argv[2];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

for (let feature of featuresFile.features) {
    if(feature.properties.start_date) {
        feature.properties.start_date = new Date(feature.properties.start_date);
    }

    if(feature.properties.renovated) {
        feature.properties.renovated = new Date(feature.properties.renovated);
    }
}

writeFileSync(inputGeojsonPath, JSON.stringify(featuresFile));
