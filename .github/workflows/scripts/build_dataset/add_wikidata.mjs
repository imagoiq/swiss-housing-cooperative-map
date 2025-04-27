import { readFileSync, writeFileSync } from 'node:fs';
import { argv } from 'node:process';

const inputWikidataQueryPath = argv[2];
const inputGeoJsonPath = argv[3];

/**
 * Read an OSM GeoJSON file
 * @type OsmGeoJSON
 */
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));

/**
 * Fetch Wikidata API
 */
const wikidataQuery = await readFileSync(inputWikidataQueryPath, { encoding: 'utf8' });
const wikidataQueryUrl = `https://query.wikidata.org/sparql?query=${encodeURIComponent(wikidataQuery)}&format=json`;
const response =  await fetch(wikidataQueryUrl, {
    method: 'GET',
    headers: new Headers( {
        'User-Agent': 'Swiss Housing Cooperative Map/1.0 (https://github.com/imagoiq/swiss-housing-cooperative-map)'
    } )
});
const wikidataList = (await response.json()).results.bindings;

/**
 * Add properties from Wikidata
 */
for (let feature of featuresFile.features) {
    aaPropertiesFromWikidata("owner", feature);
    aaPropertiesFromWikidata("operator", feature);
}

/**
 * Output to file
 */
writeFileSync(inputGeoJsonPath, JSON.stringify(featuresFile));

/**
 * @param {Identity} identity
 * @param {Feature} feature
 */
function aaPropertiesFromWikidata(identity, feature) {
    const wikidataId = feature.properties[`${identity}:wikidata`];
    const {website, date_foundation, swiss_business_uid, dedicated_to} = getCorrespondingData(wikidataList, wikidataId);

    if(wikidataId) {
        feature.properties[`${identity}:dedicated_to`] = dedicated_to;
        feature.properties[`${identity}:website`] = website;
        feature.properties[`${identity}:start_date`] = date_foundation;
        feature.properties[`${identity}:swiss_business_uid`] = swiss_business_uid;
    }
}

/**
 * @param {array} wikidataList
 * @param {string} wikidataId
 * @returns {{website:string, date_foundation: string, swiss_business_uid: string, dedicated_to: string}}
 */
function getCorrespondingData(wikidataList, wikidataId) {
    const correspondingData = wikidataList.find((element) => element.coop_housing.value.split('/').at(-1) === wikidataId);

    return {
        website: correspondingData?.website?.value,
        date_foundation: correspondingData?.date_foundation?.value,
        swiss_business_uid: correspondingData?.swiss_business_uid?.value,
        dedicated_to: correspondingData?.dedicated_to?.value,
    }
}
