# Contribute

## Cheatsheet for mapping

1. Basic tags

- `owner:type=cooperative` or/and [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

and either…

for Buildings:

- [`building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`](https://wiki.openstreetmap.org/wiki/Buildings)

for Neighborhood:

- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - name of the neighborhood
- [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
- [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

2. Owner and operators

For the owner of the buildings:

- [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Name
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name
- [`owner:website=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Website

If the building is managed by a cooperative, another type of company or another cooperative:

- [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Name
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name
- [`operator:website=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Website

3. Buildings

- [`architect=`](https://wiki.openstreetmap.org/wiki/Key:architect) - name of the architect who made the building
- [`start_date=`](https://wiki.openstreetmap.org/wiki/Key:start_date) - date which indicate the end of the construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/Key:building:flats) - number of flats
- [`heating=gas|heat_pump|district_heating|oil`](https://wiki.openstreetmap.org/wiki/Key:heating)

If renovated:
- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition)
- `renovated=` - date which indicate the end of the renovation
- `renovated:architect=` - name of the architect who conducted the renovation

If subsidized:
- [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
- `rent:regulation=yes|only`