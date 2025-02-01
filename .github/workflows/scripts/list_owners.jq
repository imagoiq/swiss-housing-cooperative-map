[.features[] | select(.properties."owner:type" == "cooperative")]
| group_by(.properties.owner)
| map({
    wikidata: .[0].properties."owner:wikidata",
    abbr: .[0].properties."owner:abbr",
    name: .[0].properties.owner,
    short: .[0].properties."owner:short",
    website: .[0].properties."owner:website",
    buildings_count: (select(.[0].properties.building != null) | length),
    buildings_subsidized_count: map(select(.properties.subsidized != null) | .properties.subsidized) | length,
    buildings_rent_regulated_count: map(select(.properties."rent:regulation" != null)) | length,
    buildings_dormitory_count: map(select(.properties.building == "dormitory")) | length,
    buildings_sheltered_housing_count: map(select(.properties.building == "sheltered_housing")) | length,
    buildings_locations: map(select(.properties."addr:city" != null) | .properties."addr:city") | unique,
    buildings_postcode: map(select(.properties."addr:postcode" != null) | .properties."addr:postcode") | unique
})