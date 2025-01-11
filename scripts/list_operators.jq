[.features[] | select(.properties."owner:type" != "cooperative" and .properties."operator:type" == "cooperative")]
| group_by(.properties.operator)
| map({
    operator_id_wikidata: .[0].properties."operator:wikidata",
    operator_name: .[0].properties.operator,
    operator_name_abbr: .[0].properties."operator:abbr",
    operator_name_short: .[0].properties."operator:short",
    operator_website: .[0].properties."operator:website",
    operator_z_buildings_count: (select(.[0].properties.building != null) | length),
    operator_z_buildings_locations: map(select(.properties."addr:city" != null) | .properties."addr:city") | unique,
    operator_z_buildings_zipcode: map(select(.properties."addr:postcode" != null) | .properties."addr:postcode") | unique
})