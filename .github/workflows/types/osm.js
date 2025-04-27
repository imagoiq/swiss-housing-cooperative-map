/**
 * @typedef ElementTags OpenStreetMap properties used in this project
 * @property {string} [name] Name {@link https://wiki.openstreetmap.org/wiki/Key:name|Wiki OpenStreetMap Key:name}
 * @property {string} [building] Building type {@link https://wiki.openstreetmap.org/wiki/Key:building|Wiki OpenStreetMap Key:building}
 * @property {string} [building:part] Building part {@link https://wiki.openstreetmap.org/wiki/Key:building:part|Wiki OpenStreetMap Key:building:part}
 * @property {string} [owner] Owner's name {@link https://wiki.openstreetmap.org/wiki/Key:owner|Wiki OpenStreetMap Key:owner}
 * @property {string} [owner:wikidata] Owner's wikidata {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [owner:short] Owner's short name {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [owner:abbr] Owner's abbreviation {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [operator] Operator's name {@link https://wiki.openstreetmap.org/wiki/Key:operator|Wiki OpenStreetMap Key:operator}
 * @property {string} [operator:wikidata] Operator's wikidata {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [operator:short] Operator's short name {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [operator:abbr] Operator's abbreviation {@link https://wiki.openstreetmap.org/wiki/Key:operator#Further_details|Wiki OpenStreetMap Key:operator}
 * @property {string} [architect] Name ame of the architect who made the building {@link https://wiki.openstreetmap.org/wiki/Key:architect|Wiki OpenStreetMap Key:architect}
 * @property {string} [start_date] Date that indicates the end of the construction {@link https://wiki.openstreetmap.org/wiki/Key:start_date|Wiki OpenStreetMap Key:start_date}
 * @property {string} [building:flats] Number of flats in total (including cluster) {@link https://wiki.openstreetmap.org/wiki/Key:building:flats|Wiki OpenStreetMap Key:building:flats}
 * @property {string} [building:flats:cluster] Number of cluster flats {@link https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster|Taginfo Key:building:flats:cluster}
 * @property {string} [heating] Type of heating system {@link https://wiki.openstreetmap.org/wiki/Key:heating|Wiki OpenStreetMap Key:heating}
 * @property {string} [building:condition] Indicate how good the building is {@link https://wiki.openstreetmap.org/wiki/Key:building:condition}
 * @property {string} [last_renovation] Date that indicates the end of the renovation {@link https://taginfo.openstreetmap.org/keys/last_renovation|Taginfo Key:last_renovation}
 * @property {string} [architect:renovation] Name of the architect who conducted the renovation {@link https://taginfo.openstreetmap.org/keys/architect%renovation|Taginfo Key:architect:renovation}
 * @property {string} [subsidized] {@link https://taginfo.openstreetmap.org/keys/subsidized|Taginfo Key:subsidized}
 * @property {string} [rent:regulation] {@link https://taginfo.openstreetmap.org/keys/rent%3Aregulation|Taginfo Key:rent:regulation}
 * @property {string} [__associated_id] Custom tag added in overpass to retrieved addresses nodes separated from the building way
 */

/**
 * @typedef Element OSM element
 * @property {ElementTags[]} tags Element
 */

/**
 * @typedef OsmXml OpenStreetMap data
 * @property {Element[]} elements OSM elements collection
 */