export function checkWikidata(feature) {
    /** @type string[] */
    const errors = [];

    // Missing operator:wikidata
    if(feature.properties["operator:type"] === "cooperative" && !("operator:wikidata" in feature.properties)){
        errors.push("Missing operator:wikidata");
    }
    // Missing owner:wikidata
    if(feature.properties["owner:type"] === "cooperative" && !("owner:wikidata" in feature.properties)){
        errors.push("Missing owner:wikidata");
    }

    return errors;
}