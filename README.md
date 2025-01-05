# Coopératives d'habitation en Suisse

Projet ayant pour but de cartographier et de liste les immeubles des coopératives d'habitation de Suisse (en particulier romande).

Pour l'instant les données sont visibles via https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470

## Comment ajouter un bâtiment ou une coopérative dans les données ?

Tout les données proviennent directement d'[Openstreetmap](https://www.openstreetmap.org). Si vous êtes débutant, laissez-vous guider via [learnosm.org](https://learnosm.org/fr/).

Il n'existe pas (encore) de modèle pré-fait ou validé spécialement pour les coopératives de logement. 

Pour ajouter les données, j'ai utilisés des tags très standards:
* `owner:type=cooperative` ou `operator:type=cooperative` sur un élèment avec `building=residential`, `building=apartments` ou `landuse=residential`(pour un quartier où l'ensemble est attribué à une coopérative. Si tel est le cas, il est également bien de rajouter ces tags sur chaque bâtiment pour pouvoir les comptabiliser par exemple). À noter que parfois, le bâtiment est à la propriété d'une coopérative, parfois ce n'est pas le cas et c'est une coopérative qui gère le bâtiment, mais le bâtiment appartient à une société privée. L'utilisation des deux tags `operator` et `owner` permet d'identifier ces cas de figure.

Bien sûr les données sont plus intéressantes si vous rajouter
* [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner)
* [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)
* [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)
* [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)
* [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator)
* [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)
* [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)
* [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details)

## Données

Les logements visibles sur la carte se basent sur la requête suivante dans openstreetmap:

https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/scripts/overpass_query#L4-L7

Pour cibler les coopératives de logement, la requête prend en compte les élèments avec la clé `owner=*` et `operator=*` qui sont associées avec `building=residential|apartments`. Cela permet d'éviter d'associer les coopératives culturelles et d'arts liés à un bâtiment comme la [Space Alliance Coopérative](https://www.openstreetmap.org/way/38326020). Probablement qu'à l'avenir, il faudra utiliser un filtre encore plus détaillé.

Les quartiers entièrement fondé par une coopérative sont également pris en compte dans les données à l'aide de la clé `landuse=residential`.

## Mise à jour des données
[![](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml/badge.svg)]([https://google.ch](https://github.com/imagoiq/cooperative-habitation-suisse/actions/workflows/main.yml))

Chaque dimanche, le fichier geojson est mis à jour via l'api overpass et un [worflow Github](https://github.com/imagoiq/cooperative-habitation-suisse/blob/main/.github/workflows/main.yml).
