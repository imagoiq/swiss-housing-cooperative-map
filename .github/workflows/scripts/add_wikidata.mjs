import { readFileSync, writeFileSync } from 'node:fs';

const inputGeojsonPath = process.argv[2];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

const wikidataQueryUrl = "https://query.wikidata.org/sparql?query=SELECT%20%3Fcoop_housing%20%3Fwebsite%20%3Fdate_foundation%20%3Fswiss_business_uid%20WHERE%20%7B%0A%20%20%3Fcoop_housing%20wdt%3AP31%20wd%3AQ562166%3B%0A%20%20%20%20wdt%3AP17%20wd%3AQ39.%0A%20%20OPTIONAL%20%7B%20%3Fcoop_housing%20wdt%3AP856%20%3Fwebsite.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fcoop_housing%20wdt%3AP571%20%3Fdate_foundation.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fcoop_housing%20wdt%3AP4829%20%3Fswiss_business_uid.%20%7D%0A%7D&format=json";

const response =  await fetch(wikidataQueryUrl, {
    method: 'GET',
    headers: new Headers( {
        'User-Agent': 'Swiss Housing Cooperative Map/1.0 (https://github.com/imagoiq/swiss-housing-cooperative-map)'
    } )
});
const wikidataList = (await response.json()).results.bindings;

for (let feature of featuresFile.features) {
    setPropertiesFromWikidata("owner", feature);
    setPropertiesFromWikidata("operator", feature);
}

writeFileSync(inputGeojsonPath, JSON.stringify(featuresFile));

function setPropertiesFromWikidata(identity, feature) {
    const wikidataId = feature.properties[`${identity}:wikidata`];
    const {website, date_foundation, swiss_business_uid} = getCorrespondingData(wikidataList, wikidataId);

    if(wikidataId) {
        feature.properties[`${identity}:website`] = website;
        feature.properties[`${identity}:start_date`] = date_foundation;
        feature.properties[`${identity}:swiss_business_uid`] = swiss_business_uid;
    }
}

function getCorrespondingData(wikidataList, wikidataId) {
    const correspondingData = wikidataList.find((element) => element.coop_housing.value.split('/').at(-1) === wikidataId);

    return {
        website: correspondingData?.website?.value,
        date_foundation: correspondingData?.date_foundation?.value,
        swiss_business_uid: correspondingData?.swiss_business_uid?.value,
    }
}
