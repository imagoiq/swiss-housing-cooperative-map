import { readFileSync,writeFileSync } from 'node:fs';
import { tsvFormat } from "d3-dsv";
import { operatorFilter, ownerFilter, pickBy, unique } from "../utils.mjs";
import { argv } from 'node:process';

const identity = argv[2];
const inputGeoJsonPath = argv[3];
const outputPath = argv[4];

/**
 * Read an OSM GeoJSON file
 * @type OsmGeoJSON
 */
const featuresFile = JSON.parse(await readFileSync(inputGeoJsonPath, { encoding: 'utf8' }));

/**
 * Process
 */
const filteredFeatures = featuresFile.features.filter(feature => (feature.properties.building || feature.properties["building:part"]) && identity === "operator" ? operatorFilter(feature) : ownerFilter(feature));

const groupedByIdentity = Object.groupBy(filteredFeatures, feature => feature.properties[identity]);

const aggregatedData = Object.values(groupedByIdentity).map(features => getAggregatedIdentity(features, identity));
const sortedAggregatedData = aggregatedData.sort((a,b) => a.name?.localeCompare(b.name));


/**
 * Output to file or to console
 */
if(outputPath) {
    writeFileSync(outputPath, outputPath.endsWith('.tsv') ? tsvFormat(sortedAggregatedData) : JSON.stringify(sortedAggregatedData));
} else {
    console.log(JSON.stringify(sortedAggregatedData));
}

/**
 * @param {Feature[]} features
 * @param {Identity} identity
 */
function getAggregatedIdentity(features, identity) {
    const buildings_and_parts_count = features.length;
    const buildings_last_renovation_count = features.filter(feature => feature.properties.last_renovation).length;

    const addresses = getAddresses(features);

    return  {
        wikidata: features[0].properties[`${identity}:wikidata`],
        abbr: features[0].properties[`${identity}:abbr`],
        name: features[0].properties[`${identity}`],
        short: features[0].properties[`${identity}:short`],
        dedicated_to: features[0].properties[`${identity}:dedicated_to_label`],
        website: features[0].properties[`${identity}:website`],
        start_date: features[0].properties[`${identity}:start_date`],
        swiss_business_uid: features[0].properties[`${identity}:swiss_business_uid`],
        buildings_count: buildings_and_parts_count,
        building_flats: features.reduce((acc, curr) => {
            return acc + (parseInt(curr?.properties["building:flats"], 10) || 0);
        }, 0),
        building_start_date_first: features.sort((featureA, featureB) => new Date(featureA.properties.start_date_parsed) - new Date(featureB.properties.start_date_parsed)).at(0).properties.start_date_parsed,
        building_start_date_last: features.sort((featureA, featureB) => new Date(featureA.properties.start_date_parsed) - new Date(featureB.properties.start_date_parsed)).at(-1).properties.start_date_parsed,
        building_last_renovation_first: features.sort((featureA, featureB) => new Date(featureA.properties.last_renovation_parsed) - new Date(featureB.properties.last_renovation_parsed)).at(0).properties.last_renovation_parsed,
        building_last_renovation_last: features.sort((featureA, featureB) => new Date(featureA.properties.last_renovation_parsed) - new Date(featureB.properties.last_renovation_parsed)).at(-1).properties.last_renovation_parsed,
        building_last_renovation_count: buildings_last_renovation_count,
        buildings_subsidized_count: features.filter(feature => feature.properties.subsidized).length,
        buildings_rent_regulated_count: features.filter(feature => feature.properties["rent:regulation"]).length,
        buildings_dormitory_count: features.filter(feature => feature.properties.building === "dormitory").length,
        buildings_sheltered_housing_count: features.filter(feature => feature.properties.building === "sheltered_housing").length,
        buildings_locations: unique(addresses.map(addr => addr['addr:city'])),
        buildings_postcode: unique(addresses.map(addr => addr['addr:postcode'])),
    };
}

/**
 * @param {Feature[]} features
 */
function getAddresses(features) {
    const addresses = [];

    for (const feature of features) {
        if("addr:city" in feature.properties) {
            addresses.push(pickBy(feature.properties, (_, key) => key.startsWith("addr:")));
        }

        if("addr" in feature.properties){
            for (const addr of feature.properties.addr) {
                addresses.push(addr);
            }
        }
    }

    return addresses
}


