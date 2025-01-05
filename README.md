# Coopératives d'habitation de Suisse

Petit projet ayant pour but de cartographier et de liste les immeubles des coopératives d'habitation de Suisse (en particulier romande).

Pour l'instant les données sont visibles via https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470

## Données

Les logements visibles sur la carte se basent sur la requête suivante dans openstreetmap:

https://github.com/imagoiq/cooperative-habitation-suisse/blob/4594245e13e979132ae84a42135ac936a7d568b8/scripts/overpass_query#L4-L7

[Voir dans Overpass-turbo](https://osm.li/5da)

# Mise à jour des données

Chaque dimanche, le fichier geojson est mis à jour via l'api overpass et un Github Action.
