[.features[] | select(.properties."owner:type" == "cooperative")]
| group_by(.properties.owner)
| map({ 
    wikidata: .[0].properties."owner:wikidata",
    name: .[0].properties.owner,
    short: .[0].properties."owner:short",
    abbr: .[0].properties."owner:abbr",
    website: .[0].properties."owner:website",
    buildings_count: (select(.[0].properties.building != null) | length)
})
