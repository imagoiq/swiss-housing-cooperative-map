\-- [Version francophone de cette page](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/README.fr.md) --

# 🏘️ Swiss housing cooperative

Experimental project aimed at mapping and listing the housing cooperatives in Switzerland with a maximum of details. 
This project does not aim at playing an intermediate or building new tool, but document and show what is possible, and what are the limitations.

## Use the data

At the moment, data can be viewed on [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
  - [Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
  - [Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
  - [List of cooperative owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [List of cooperative operators](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Contribute

All data comes directly from [OpenStreetMap](https://www.openstreetmap.org). If you're a beginner, you can learn to edit by reading [learnosm.org](https://learnosm.org/fr/) or ask for help.

## Schema

There is no pre-made or validated model specifically for housing cooperatives, but most of the proposed tags here are defined in the wiki of openstreetmap.

To target housing cooperatives, the query takes into account elements with the key `owner=*` and `operator=*` that are associated with `building=residential|apartments|dormitory|sheltered_housing` or `building:part=yes`. This avoids associating building-related arts and cultural cooperatives (such as [Space Alliance Cooperative](https://www.openstreetmap.org/way/38326020)). The filter will probably be refined in the future.
Note that sometimes the building is owned by a cooperative, sometimes it's not, and a cooperative manages the building, but the building belongs to a private company. The use of the two tags `operator` and `owner` makes it possible to identify these cases.

Neighborhoods founded entirely by a cooperative are also included in the data using the key `landuse=residential`. It's also a good idea to add tags to each building inside a neighborhood so that they can be counted, for example.

### Basic tags

- `owner:type=cooperative` or/and `operator:type=cooperative`

and either…

for Buildings:

- `building=`, `building:part=` or `building:use=` with value `residential`, `apartments`, `dormitory` or `sheltered_housing`

for Neighborhood:

- `landuse=residential`

### Enhance the metadata

#### Owner and/or operator

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

#### Type of buildings

The tag [`building=`](https://wiki.openstreetmap.org/wiki/Buildings) can take:

- `residential` or `apartments` for regular accommodation
- `dormitory` for student dormitory
- `sheltered_housing` for accommodation designated for older and/or disabled or other vulnerable people

#### Buildings

- [`architect=`](https://wiki.openstreetmap.org/wiki/Key:architect) - name of the architect who made the building
- [`start_date=`](https://wiki.openstreetmap.org/wiki/Key:start_date) - date which indicate the end of the construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/Key:building:flats) - number of flats

A bit more experimental:

- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) - indicate that the building has been renovated
- `renovated=` - date which indicate the end of the renovation
- `renovated:architect=` - name of the architect who conducted the renovation

See also [the page Buildings on the wiki](https://wiki.openstreetmap.org/wiki/Key:building#Additional_attributes) to get even more tags.

#### Type of rents (experimental)

Housing cooperative are often made to create to add affordable housing on the market, but not always.
To distinguish buildings, there are currently no standard way in OpenStreetMap. From my research, [`subsidized=yes` tags](https://taginfo.openstreetmap.org/keys/subsidized) have been used 12 times (January 2025) which is not enough to make any generalization.

I propose some experimental tags to add below which are based on the concept of affordable housing in Switzerland and particularly in the Vaud region. I've not made enough research to know if this can be generalised and used in others countries.

In Switzerland, there are two kinds of affordable housing:

- Subsidized housing: the state give money for to build a new unit or renovate it. This has then impact to lower the rents. For this use case, I've used `subsidized=yes`.
- Rent control/regulation: the state limits the amount of a rent (with various tools). This use case is a bit different as the first one, because it can apply on some flats within a building. I don't think we need to go at the level of counting flats at the moment. I propose to use `rent:regulation=` with `yes` or `only` to differentiate a building where all the flat have it or only some.

## Technical Process

### Workflow

Here are the steps to build the GeoJson data:

1. Query Overpass API
1. Convert data to GeoJSOn with `osmtogeojson`
1. Add missing addresses with Nominatim API to ways in OpenStreetMap that aren't tagged with an address (e.g. when address is a separated node)

### Updates

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Every Sunday, the output files are automatically updated via a [Github Workflow](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Queries

- [Overpass query - Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Overpass query - Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_areas#L4-L7)

### Dependencies

- [Node.js](https://nodejs.org)
- [jq](https://jqlang.github.io/jq/)
- [osm2geojson](https://github.com/tyrasd/osmtogeojson)

Optional

- [inject-markdown](https://github.com/target/markdown-inject) - only to enhance dynamically this README file

## List of cooperatives

At the moment, all of those cooperatives have been retrieved:

<!--- @@inject: list_cooperative.md --->

- [Coopérative Cité Derrière](https://citederriere.ch/)
- Coopérative I6
- Coopérative d'habitation des employés du rail
- Coopérative d'habitations groupées des Liaudes
- [Coopérative de l’habitat associatif](https://www.codha.ch)
- [Coopérative des Arts et des Ouches](https://c-arts-ouches.ch/)
- [Coopérative des cheminots de la Riviera](https://www.cheri-riviera.ch/)
- [Coopérative du logement Lutry](https://cll-lutry.ch)
- [Ecopolis](https://ecopolis.ch/)
- [La Meute](http://www.meute.ch/)
- [Le Bled](http://lebled.ch/)
- [Les Jardins de la Paix](https://jardinsdelapaix.ch)
- [Logement Idéal](https://www.logement-ideal.ch)
- [Société Coopérative d’Habitation «Charmontey»](https://www.charmontey.ch)
- [Société coopérative d'habitation La Paix](http://lapaix.ch)
- [Société coopérative d'habitation Lausanne](https://schl.ch)
- [Société coopérative d'habitation Pully](https://schpully.ch)
- [Société coopérative d'habitations Le Chêne](https://www.schlechene.ch)

<!--- @@inject-end: list_cooperative.md --->
