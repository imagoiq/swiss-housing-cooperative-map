[.features[] | select(.properties."owner:type" == "cooperative")]
| group_by(.properties.owner)
| map({
    owner_id_wikidata: .[0].properties."owner:wikidata",
    owner_name: .[0].properties.owner,
    owner_name_abbr: .[0].properties."owner:abbr",
    owner_name_short: .[0].properties."owner:short",
    owner_website: .[0].properties."owner:website",
    owner_z_buildings_count: (select(.[0].properties.building != null) | length),
    owner_z_buildings_locations: map(select(.properties."addr:city" != null) | .properties."addr:city") | unique,
    owner_z_buildings_zipcode: map(select(.properties."addr:postcode" != null) | .properties."addr:postcode") | unique
})