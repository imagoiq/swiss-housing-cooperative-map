# Coopératives d'habitation en Suisse

Projet expérimental ayant pour but de cartographier et de liste les immeubles des coopératives d'habitation de Suisse.
Ce projet n'a pas pour but de jouer les intermédiaires ou de construire un nouvel outil, mais de documenter et de montrer ce qui est possible, et quelles sont les limites.

D'après mes recherches, aucune carte de ce type n'existe pour l'ensemble des cantons. À Genève, la Fondation pour la promotion du logement bon marché et de l'habitat coopératif (FPLC) fournit une \[carte pour le canton de Genève] (<https://fplc.ch/cartes/cooperatives.htm>).

## Utiliser les données

Pour l'instant les données sont visibles sur [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
  - [Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
  - [Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
  - [Liste des propriétaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [Liste des gestionnaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Contribuer

Toutes les données proviennent directement d'[OpenStreetMap](https://www.openstreetmap.org). Si vous êtes débutant, laissez-vous guider via [learnosm.org](https://learnosm.org/fr/) ou demandez de l'aide.

## Schéma

Il n'existe pas (encore) de modèle spécialement pour les coopératives de logement, mais la plupart des clés proposées ici sont définies dans le wiki d'OpenStreetMap. Celles issues de taginfo ou de ma propre imagination sont déclaré sur cette page avec \[balise de facto].

Pour cibler les coopératives de logement, la requête prend en compte les élèments avec la clé `owner=*` et `operator=*` qui sont associées avec `building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`. Cela permet d'éviter d'associer les coopératives culturelles et d'arts liés à un bâtiment (comme la [Space Alliance Coopérative](https://www.openstreetmap.org/way/38326020)). Probablement qu'à l'avenir, il faudra utiliser un filtre encore plus détaillé.
À noter que parfois, le bâtiment est à la propriété d'une coopérative, parfois ce n'est pas le cas et c'est une coopérative qui gère le bâtiment, mais le bâtiment appartient à une société privée. L'utilisation des deux balises `operator` et `owner` permet d'identifier ces cas de figure.

Les quartiers entièrement fondés par une coopérative sont également pris en compte dans les données à l'aide de la clé `landuse=residential`. Aussi, il est bien de rajouter les balises sur chaque bâtiment pour pouvoir les comptabiliser par exemple.

### Balises de base

- [`owner:type=cooperative`](https://taginfo.openstreetmap.org/tags/owner%3Atype=cooperative) \[balise de facto] et/ou [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

et soit…

pour les bâtiments :

- [`building=`](https://wiki.openstreetmap.org/wiki/Buildings) ou [`building:part=`](https://wiki.openstreetmap.org/wiki/Key:building:part) ou [`building:use=`](https://wiki.openstreetmap.org/wiki/Key:building:use) avec comme valeur :
  - [`residential`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dresidential) ou de préférence [`apartments`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dapartments) pour les immeubles
  - [`dormitory`](https://wiki.openstreetmap.org/wiki/Tag:building%3Ddormitory) pour les logements d'étudiants
  - [`sheltered_housing`](https://taginfo.openstreetmap.org/tags/building=sheltered_housing) \[balise de facto] pour les logements protégés ou destinés à des personnes vulnérables.

pour les quartiers :

- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - nom du quartier
- [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
- [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

### Améliorer les métadonnées

#### Propriétaires/gestionnaires

Pour les propriétaires des bâtiments :

- [`owner=*`](https://wiki.openstreetmap.org/wiki/FR:Key:owner) - Nom
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Nom court
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbréviation du nom
- [`owner:website=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Site web

Si le bâtiment est géré par une coopérative, un autre type d'entreprise ou une autre coopérative :

- [`operator=*`](https://wiki.openstreetmap.org/wiki/FR:Key:operator) - Nom
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbréviation du nom
- [`operator:website=*`](https://wiki.openstreetmap.org/wiki/FR:Key:operator) - Site web

#### Bâtiments

- [`architect=`](https://wiki.openstreetmap.org/wiki/FR:Key:architect) - nom de l'architecte qui a dirigé la construction
- [`start_date=`](https://wiki.openstreetmap.org/wiki/FR:Key:start_date) - date d'achèvement de la construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/FR:Key:building:flats) - nombre d'appartements dans un bâtiment au total (inclus les clusters)
- [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster) \[tag de facto] - nombre d'appartements de type cluster
- [`heating=gas|heat_pump|district_heating|oil|pellet`](https://wiki.openstreetmap.org/wiki/Key:heating) - Type de chauffage

Un peu plus expérimental :

- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) - indique que le bâtiment a été rénové
- [`renovated=`](https://taginfo.openstreetmap.org/keys/renovated) - \[balise de facto] date d'achèvement de la rénovation
- [`renovated:architect=`](https://taginfo.openstreetmap.org/keys/renovated%3Aarchitect) \[tag de facto] - nom de l'architecte qui a dirigé la rénovation

Voir également [la page Buildings sur le wiki](https://wiki.openstreetmap.org/wiki/FR:Key:building#Attributs_additionnels) pour encore plus de tags.

#### Type de loyers (expérimental)

Les coopératives d'habitation sont souvent créées pour ajouter des logements abordables sur le marché, mais pas toujours.
Pour distinguer les bâtiments, il n'existe actuellement aucune méthode standard dans OpenStreetMap. D'après mes recherches, les balises [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) \[balise de facto] ont été utilisées 12 fois (janvier 2025), ce qui n'est pas suffisant pour faire une généralisation.

Je propose quelques balises expérimentales à ajouter ci-dessous qui sont basées sur le concept de logement abordable en Suisse et particulièrement dans le Canton de Vaud. Je n'ai pas fait assez de recherches pour savoir si cela peut être généralisé et utilisé dans d'autres pays.

En Suisse, il existe deux types de logements abordables :

- Logement subventionné ou à loyer modéré : l'État donne de l'argent pour construire un nouveau logement ou le rénover. Cela a pour effet de faire baisser les loyers. Pour ce cas d'utilisation, j'ai utilisé [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) \[balise de facto].
- Logement à loyer abordable : l'État limite le montant d'un loyer (avec divers outils). Ce cas d'utilisation est un peu différent du premier, car il peut s'appliquer à certains appartements au sein d'un immeuble. Je ne pense pas qu'il soit nécessaire de compter les appartements pour le moment. Je propose d'utiliser [`rent:regulation=`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation) \[balise de facto] avec `yes` ou `only` pour différencier un immeuble ou tous les appartements ont un loyer régulé ou quelques un.

#### Divers

Très souvent les coopératives d'habitation possèdent des équipements supplémentaires :

- Une salle commune. Si celle-ci est public, il est possible de la cartographier via un nœud séparé et
  - [`amenity=community_centre`](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre)
  - [`community_centre=community_hall`](https://wiki.openstreetmap.org/wiki/Tag:community_centre%3Dcommunity_hall)
  - [`community_centre:for=cooperative`](https://wiki.openstreetmap.org/wiki/Key:community_centre:for)
- Un jardin potager en commun.
  - [`leisure=garden`](https://wiki.openstreetmap.org/wiki/FR:Tag:leisure=garden)
  - [`garden:style=kitchen`](https://wiki.openstreetmap.org/wiki/FR:Key:garden:style)
  - [`garden:type=community`](https://wiki.openstreetmap.org/wiki/FR:Key:garden:type)

## Processus technique

### Workflow

Voici les étapes pour récupérer les données GeoJson:

1. Requêtes sur l'API Overpass
1. Convertir les données en GeoJson avec `osmtogeojson`
1. Ajouter les addresses manquantes avec l'API Nominatim pour les chemins dans OpenStreetMap qui ne sont pas taggés avec une adresse (ex. quand l'adresse se trouve dans un noeud séparé)

### Mises à jour

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Chaque dimanche, les fichiers sont mis à jour automatiquement via un [workflow Github](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Requêtes

- [Requête Overpass - Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Requête Overpass - Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)

### Dépendances

- [Node.js](https://nodejs.org)
- [jq](https://jqlang.github.io/jq/)
- [osm2geojson](https://github.com/tyrasd/osmtogeojson)

Optionnelles

- [inject-markdown](https://github.com/target/markdown-inject) - seulement pour améliorer dynamiquement les fichiers README

## Liste des coopératives

Actuellement, toutes les coopératives suivantes ont été cartographiées :

<!--- @@inject: list_cooperative.md --->

- [Coopérative Cité Derrière](https://citederriere.ch/)
- Coopérative I6
- Coopérative Rhône-Arve
- Coopérative d'habitation des employés du rail
- Coopérative d'habitations groupées des Liaudes
- [Coopérative de l’habitat associatif](https://www.codha.ch)
- [Coopérative des Arts et des Ouches](https://c-arts-ouches.ch/)
- [Coopérative des cheminots de la Riviera](https://www.cheri-riviera.ch/)
- [Coopérative du logement Lutry](https://cll-lutry.ch)
- [Coopérative d’habitants La Meute](http://www.meute.ch/)
- [Ecopolis](https://ecopolis.ch/)
- [Le Bled](http://lebled.ch/)
- [Les Jardins de la Paix](https://jardinsdelapaix.ch)
- [Logement Idéal](https://www.logement-ideal.ch)
- Société Coopérative d’Habitation Genève
- [Société Coopérative d’Habitation «Charmontey»](https://www.charmontey.ch)
- [Société coopérative d'habitation La Paix](http://lapaix.ch)
- [Société coopérative d'habitation Lausanne](https://schl.ch)
- [Société coopérative d'habitation Pully](https://schpully.ch)
- [Société coopérative d'habitations Le Chêne](https://www.schlechene.ch)

<!--- @@inject-end: list_cooperative.md --->
