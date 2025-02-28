import { readFileSync,writeFileSync } from 'node:fs';
import { tsvFormat} from "d3-dsv";
import { operatorFilter, ownerFilter, unique} from "./utils.mjs";

const identity = process.argv[2];
const inputGeojsonPath = process.argv[3];
const outputPath = process.argv[4];

const featuresFile = JSON.parse(await readFileSync(inputGeojsonPath, { encoding: 'utf8' }));

const filteredFeatures = featuresFile.features.filter(feature => (feature.properties.building || feature.properties["building:part"]) && identity === "operator" ? operatorFilter(feature) : ownerFilter(feature));

const owners = Object.groupBy(filteredFeatures, feature => feature.properties[identity]);

// Output
const aggregatedData = Object.values(owners).map(features => getAggregatedIdentity(features, 'owner'));
const sortedAggregatedData = aggregatedData.sort((a,b) => a.name.localeCompare(b.name));

if(outputPath) {
    writeFileSync(outputPath, outputPath.endsWith('.tsv') ? tsvFormat(sortedAggregatedData) : JSON.stringify(sortedAggregatedData));
} else {
    console.log(JSON.stringify(sortedAggregatedData));
}


function getAggregatedIdentity(features, identity) {
    const buildings_and_parts_count = features.length;
    const buildings_last_renovation_count = features.filter(feature => feature.properties.last_renovation).length;

    return  {
        wikidata: features[0].properties[`${identity}:wikidata`],
        abbr: features[0].properties[`${identity}:abbr`],
        name: features[0].properties[`${identity}`],
        short: features[0].properties[`${identity}:short`],
        website: features[0].properties[`${identity}:website`],
        start_date: features[0].properties[`${identity}:start_date`],
        swiss_business_uid: features[0].properties[`${identity}:swiss_business_uid`],
        buildings_count: buildings_and_parts_count,
        building_flats: features.reduce((acc, curr) => {
            return acc + (parseInt(curr?.properties["building:flats"], 10) || 0);
        }, 0),
        building_start_date: features.filter(feature => feature.properties.start_date).map(feature => feature.properties.start_date),
        building_last_renovation_date: features.filter(feature => feature.properties.last_renovation).map(feature => feature.properties.last_renovation),
        building_last_renovation_count: buildings_last_renovation_count,
        buildings_subsidized_count: features.filter(feature => feature.properties.subsidized).length,
        buildings_rent_regulated_count: features.filter(feature => feature.properties["rent:regulation"]).length,
        buildings_dormitory_count: features.filter(feature => feature.properties.building === "dormitory").length,
        buildings_sheltered_housing_count: features.filter(feature => feature.properties.building === "sheltered_housing").length,
        buildings_locations: unique(features.map(feature => feature.properties["addr:city"])),
        buildings_postcode: unique(features.map(feature => feature.properties["addr:postcode"]))
    };
}