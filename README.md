-- [Version francophone de cette page](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/README.fr.md) --

# Swiss housing cooperative

Project aimed at mapping and listing the buildings of housing cooperatives in Switzerland.

## Output

At the moment, data can be viewed on [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
  - [Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
  - [Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
  - [List of cooperative owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [List of cooperative operators](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Contribute

All data comes directly from [OpenStreetMap](https://www.openstreetmap.org). If you're a beginner, you can learn to edit by reading [learnosm.org](https://learnosm.org/fr/) or ask for help.

### Schema

TLDR:
```
Basic tags
- `owner:type=cooperative` or/and `operator:type=cooperative`

Buildings:
- `building=residential` or `building=apartments`

Areas-neighborhood
- `landuse=residential`
```

There is no pre-made or validated model specifically for housing cooperatives, but most of the proposed tags here are defined in the wiki of openstreetmap.

To target housing cooperatives, the query takes into account elements with the key `owner=*` and `operator=*` that are associated with `building=residential|apartments`. This avoids associating building-related arts and cultural cooperatives (such as [Space Alliance Cooperative](https://www.openstreetmap.org/way/38326020)). The filter will probably be refined in the future.
Note that sometimes the building is owned by a cooperative, sometimes it's not, and a cooperative manages the building, but the building belongs to a private company. The use of the two tags `operator` and `owner` makes it possible to identify these cases.

Neighborhoods founded entirely by a cooperative are also included in the data using the key `landuse=residential`. It's also a good idea to add tags to each building inside a neighborhood so that they can be counted, for example.

#### Enhance with metadata

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

## Queries

- [Overpass query - Buildings](https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Overpass query - Areas](https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_areas#L4-L7)

## Updates

[![](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml)

Every Sunday, the output files are automatically updated via a [Github Workflow](https://github.com/imagoiq/cooperative-habitation-suisse/blob/main/.github/workflows/main.yml).

## List of cooperatives

At the moment, all of those cooperatives have been retrieved:

<!--- @@inject: list_cooperative.md --->

- [Coopérative Cité Derrière](https://citederriere.ch/)
- Coopérative I6
- Coopérative d'habitation des employés du rail
- [Coopérative de l’habitat associatif](https://www.codha.ch)
- [Coopérative des Arts et des Ouches](https://c-arts-ouches.ch/)
- [Coopérative des cheminots de la Riviera](https://www.cheri-riviera.ch/)
- [Coopérative du logement Lutry](https://cll-lutry.ch)
- [Ecopolis](https://ecopolis.ch/)
- [La Meute](http://www.meute.ch/)
- [Le Bled](http://lebled.ch/)
- [Les Jardins de la Paix](https://jardinsdelapaix.ch)
- [Logement Idéal](https://www.logement-ideal.ch)
- [Société coopérative d'habitation Lausanne](https://schl.ch)
- [Société coopérative d'habitation Pully](https://schpully.ch)
- [Société coopérative d'habitations Le Chêne](https://www.schlechene.ch)

<!--- @@inject-end: list_cooperative.md --->