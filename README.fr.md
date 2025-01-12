# Coopératives d'habitation en Suisse

Projet ayant pour but de cartographier et de liste les immeubles des coopératives d'habitation de Suisse.

## Données

Pour l'instant les données sont visibles sur [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
    - [Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
    - [Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
    - [Liste des propriétaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
    - [Liste des gestionnaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Contribuer

Toutes les données proviennent directement d'[OpenStreetMap](https://www.openstreetmap.org). Si vous êtes débutant, laissez-vous guider via [learnosm.org](https://learnosm.org/fr/) ou demandez de l'aide.

### Schéma

En résumé :
```
Clés de base
- `owner:type=cooperative` et/ou `operator:type=cooperative`

Bâtiments:
- `building=residential` ou `building=apartments`

Quartiers
- `landuse=residential`
```

Il n'existe pas (encore) de modèle pré-fait ou validé spécialement pour les coopératives de logement, mais la plupart des clés proposées ici sont définies dans le wiki d'openstreetmap.

Pour cibler les coopératives de logement, la requête prend en compte les élèments avec la clé `owner=*` et `operator=*` qui sont associées avec `building=residential|apartments`. Cela permet d'éviter d'associer les coopératives culturelles et d'arts liés à un bâtiment (comme la [Space Alliance Coopérative](https://www.openstreetmap.org/way/38326020)). Probablement qu'à l'avenir, il faudra utiliser un filtre encore plus détaillé.
À noter que parfois, le bâtiment est à la propriété d'une coopérative, parfois ce n'est pas le cas et c'est une coopérative qui gère le bâtiment, mais le bâtiment appartient à une société privée. L'utilisation des deux tags `operator` et `owner` permet d'identifier ces cas de figure.

Les quartiers entièrement fondés par une coopérative sont également pris en compte dans les données à l'aide de la clé `landuse=residential`. Il est également bien de rajouter les tags sur chaque bâtiment pour pouvoir les comptabiliser par exemple.

#### Améliorer les métadonnées

Pour les propriétaires des bâtiments :

- [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Nom
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Nom court
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbréviation du nom
- [`owner:website=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Site web

Si le bâtiment est géré par une coopérative, un autre type d'entreprise ou une autre coopérative :

- [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Nom
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbréviation du nom
- [`operator:website=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Site web

## Requêtes

- [Overpass query - Bâtiments](https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Overpass query - Quartiers](https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)

## Mises à jour

[![](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml)

Chaque dimanche, les fichiers sont mis à jour automatiquement via un [workflow Github](https://github.com/imagoiq/cooperative-habitation-suisse/blob/main/.github/workflows/main.yml).

## Liste des coopératives

Actuellement, toutes les coopératives suivantes ont été cartographiées :

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
