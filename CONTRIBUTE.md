# Contribute

## Cheatsheet for mapping

### Basic tags

- [`owner:type=cooperative`](https://taginfo.openstreetmap.org/tags/owner%3Atype=cooperative) [tag de facto] or/and [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

and either…

for Buildings:

- [`building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`](https://wiki.openstreetmap.org/wiki/Buildings)

for Neighborhood:

- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - name of the neighborhood
- [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
- [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

### Owner and operators

For the owner of the buildings:

- [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Name
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name

If the building is managed by a cooperative, another type of company or another cooperative:

- [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Name
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name

### Buildings

- [`architect=`](https://wiki.openstreetmap.org/wiki/Key:architect) - name of the architect who made the building
- [`start_date=`](https://wiki.openstreetmap.org/wiki/Key:start_date) - date which indicate the end of the construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/Key:building:flats) - number of flats in total (including cluster)
- [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster) [tag de facto] - number of cluster flats
- [`heating=gas|district_heating`](https://wiki.openstreetmap.org/wiki/Key:heating) or other [de facto] values [`heat_pumpoil|pellet|woodchip`](https://taginfo.openstreetmap.org/keys/heating#values)

If renovated:
- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition)
- [`renovated=`](https://taginfo.openstreetmap.org/keys/renovated) [tag de facto] - date which indicate the end of the renovation
- [`renovated:architect=`](https://taginfo.openstreetmap.org/keys/renovated%3Aarchitect) [tag de facto] - name of the architect who conducted the renovation

If subsidized:
- [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) [tag de facto]
- [`rent:regulation=yes|only`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation) [tag de facto]

### Miscellaneous facilities

#### Public community room

A separated node with :
- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - name of the neighborhood
- [`amenity=community_centre`](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre)
- [`community_centre=community_hall`](https://wiki.openstreetmap.org/wiki/Tag:community_centre%3Dcommunity_hall)
- [`community_centre:for=cooperative`](https://wiki.openstreetmap.org/wiki/Key:community_centre:for)

#### Kitchen garden

- [`leisure=garden`](https://wiki.openstreetmap.org/wiki/Tag:leisure=garden)
- [`garden:style=kitchen`](https://wiki.openstreetmap.org/wiki/Key:garden:style)
- [`garden:type=community`](https://wiki.openstreetmap.org/wiki/Key:garden:type)
