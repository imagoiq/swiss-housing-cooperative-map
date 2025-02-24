import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'child_process';

const inputGeojsonPath = process.argv[2];
const cacheFilePath = process.argv[3];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

console.log('Retrieved missing addresses');
const featureAssociatedAddresses = await retrieveMissingAddresses(featuresFile);

console.log('Merge addresses');
mergeAddresses(featuresFile, featureAssociatedAddresses);

function mergeAddresses(featuresFile, featureAssociatedAddresses){
    featureAssociatedAddresses.forEach(fAddr => {
        const i = featuresFile.features.findIndex(feature => feature.id === fAddr.id);
        featuresFile.features[i].properties["addr:city"] = fAddr?.address.city ?? '';
        featuresFile.features[i].properties["addr:postcode"] = fAddr?.address.postcode;
    })

    writeFileSync(inputGeojsonPath, JSON.stringify(featuresFile));
}

async function retrieveMissingAddresses(featuresFile) {
    const featuresCompleted = [];

    const featuresWithoutAddr = featuresFile.features.filter(feature => !feature.properties["addr:city"] || !feature.properties["addr:postcode"]);

    const featuresCacheFile = await readFileSync(cacheFilePath, { encoding: 'utf8' });
    const featuresCache = JSON.parse(featuresCacheFile);

    for (const feature of featuresWithoutAddr) {
        const featureHash = hash(feature.geometry);
        const cache = featuresCache.find(featureCache => feature.id === featureCache.id);

        if(cache?.hash === featureHash) {
            featuresCompleted.push(cache);

            continue;
        }

        const response =  await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${feature.geometry.coordinates[0][0][1]}&lon=${feature.geometry.coordinates[0][0][0]}&format=geocodejson`);
        const address = (await response.json()).features[0].properties.geocoding;

        featuresCompleted.push({
            id: feature.id,
            hash: hash(feature.geometry),
            address
        })

        console.log('feature', feature.id);
        execSync('sleep 1');
    }

    writeFileSync(cacheFilePath, JSON.stringify(featuresCompleted));

    return featuresCompleted;
}

function hash(data) {
 return JSON.stringify(data);
}