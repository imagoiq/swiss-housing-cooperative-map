[.features[] | select(.properties."owner:type" != "cooperative" and .properties."operator:type" == "cooperative")]
| group_by(.properties.operator)
| map({
    wikidata: .[0].properties."operator:wikidata",
    abbr: .[0].properties."operator:abbr",
    name: .[0].properties.operator,
    short: .[0].properties."operator:short",
    website: .[0].properties."operator:website",
    buildings_count: (select(.[0].properties.building != null) | length),
    buildings_subsidized_count: map(select(.properties.subsidized != null) | .properties.subsidized) | length,
    buildings_rent_regulated_count: map(select(.properties."rent:regulation" != null)) | length,
    buildings_dormitory_count: map(select(.properties.building == "dormitory")) | length,
    buildings_sheltered_housing_count: map(select(.properties.building == "sheltered_housing")) | length,
    buildings_locations: map(select(.properties."addr:city" != null) | .properties."addr:city") | unique,
    buildings_postcode: map(select(.properties."addr:postcode" != null) | .properties."addr:postcode") | unique,
    completion_buildings_start_date_percentage:  ((map(select(.properties.start_date != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_flats_percentage:  ((map(select(.properties."building:flats" != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_heating_percentage:  ((map(select(.properties.heating != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_architect_percentage:  ((map(select(.properties.architect != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_renovated_architect_percentage:  ((map(select(.properties."renovated:architect" != null)) | length) / (map(select(.properties.renovated != null)) | length) * 100),
    completion_buildings_levels_percentage:  ((map(select(.properties."building:levels" != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_roof_levels_percentage:  ((map(select(.properties."roof:levels" != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
    completion_buildings_roof_shape_percentage:  ((map(select(.properties."roof:shape" != null)) | length) / (map(select(.properties.building != null)) | length) * 100),
})