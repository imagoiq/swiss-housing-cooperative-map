[.features[] | select(.properties."owner:type" != "cooperative" and .properties."operator:type" == "cooperative")]
| group_by(.properties.operator)
| map({
    wikidata: .[0].properties."operator:wikidata",
    name: .[0].properties.operator,
    short: .[0].properties."operator:short",
    abbr: .[0].properties."operator:abbr",
    website: .[0].properties."operator:website",
    buildings_count: (select(.[0].properties.building != null) | length),
    buildings_locations: map(select(.properties."addr:city" != null) | .properties."addr:city") | unique,
    buildings_zipcode: map(select(.properties."addr:postcode" != null) | .properties."addr:postcode") | unique
})