export function checkAddresses(feature) {
    /** @type string[] */
    const errors = [];

    const hasAnAddrTag = Object.keys(feature.properties).find(props => /^addr:/.test(props));
    const hasFullAddrTags = (tags) => "addr:postcode" in tags && "addr:housenumber" in tags && ("addr:street" in tags || "addr:place" in tags) && "addr:city" in tags;

    // Mising address
    if(!hasAnAddrTag && !("addr" in feature.properties)){
        errors.push("Missing address");
    }

    // Address: duplication
    if(hasAnAddrTag && "addr" in feature.properties){
        errors.push("Address duplication");
    }
    // Address: missing postcode
    if(hasAnAddrTag && !hasFullAddrTags(feature.properties)){
        errors.push("Partial address");
    }
    // Address (multiple): missing postcode
    if("addr" in feature.properties && feature.properties.addr.find(address => !hasFullAddrTags(address))){
        errors.push("Partial address");
    }

    return errors;
}