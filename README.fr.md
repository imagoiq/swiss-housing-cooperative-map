# 🏘️ Carte des coopératives d’habitation en Suisse

Saviez-vous que les coopératives d’habitation sont une spécialité en
Suisse depuis plus de 100 ans ? [^1] Il s’agit même d’une tradition
vivante [^2] !

Ceci est un projet expérimental ayant pour but de cartographier et de
liste les immeubles des coopératives d’habitation de Suisse. Ce projet
n’a pas pour but de jouer les intermédiaires ou de construire un nouvel
outil, mais de documenter et de montrer ce qui est possible, et quelles
sont les limites.

D’après mes recherches, aucune carte de ce type n’existe pour l’ensemble
des cantons. À Genève, la Fondation pour la promotion du logement bon
marché et de l’habitat coopératif (FPLC) fournit une \[carte pour le
canton de Genève\] (<https://fplc.ch/cartes/cooperatives.htm>).

## Utiliser les données

Pour l’instant les données sont visibles sur
[umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
  - [Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
  - [Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
  - [Liste des propriétaires de type
    coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [Liste des gestionnaires de type
    coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Qualité des données

### Propriétaires

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Wikidata</th>
<th rowspan="2" scope="col">Nom (abbréviation)</th>
<th colspan="8" scope="colgroup">Pourcentage de complétion</th>
</tr>
<tr>
<th scope="col">`start_date`</th>
<th scope="col">`building:flats`</th>
<th scope="col">`heating`</th>
<th scope="col">`architect`</th>
<th scope="col">`architect:renovation`</th>
<th scope="col">`building:levels`</th>
<th scope="col">`roof:levels`</th>
<th scope="col">`roof:shape`</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131743050">Q131743050</a>
</td>
<td>
<a href="https://citederriere.ch">Coopérative Cité Derrière</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
53%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
46%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
58%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282764">Q133282764</a>
</td>
<td>
Coopérative CO2P L71
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132176222">Q132176222</a>
</td>
<td>
<a href="http://www.meute.ch/">Coopérative d’habitants La Meute</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176222%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176222%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133285984">Q133285984</a>
</td>
<td>
Coopérative d&#39;habitation B612
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132176055">Q132176055</a>
</td>
<td>
Coopérative d&#39;habitation des employés du rail (CHER)
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
75%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
25%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133284155">Q133284155</a>
</td>
<td>
<a href="https://www.cooplescolories.ch">Coopérative d&#39;habitation Les Coloriés</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179508">Q132179508</a>
</td>
<td>
<a href="https://jardinsdelapaix.ch/">Coopérative d&#39;habitation Les Jardins de la Paix</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
71%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282425">Q133282425</a>
</td>
<td>
<a href="https://voirets.ch/">Coopérative d&#39;habitation Les Voirets</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282689">Q133282689</a>
</td>
<td>
<a href="https://www.maison-neuve.ch/">Coopérative d&#39;habitation Maison Neuve</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179684">Q132179684</a>
</td>
<td>
Coopérative d&#39;habitation Rhône-Arve Pommier
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282694">Q133282694</a>
</td>
<td>
Coopérative d&#39;habitation Rocher 12
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131885512">Q131885512</a>
</td>
<td>
Coopérative d&#39;habitations groupées des Liaudes
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282702">Q133282702</a>
</td>
<td>
Coopérative d&#39;Immeuble Malpierres 11
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133283856">Q133283856</a>
</td>
<td>
<a href="https://coopmoul2.wixsite.com/moulin">Coopérative de construction et d&#39;habitation MOUL2</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q86666680">Q86666680</a>
</td>
<td>
<a href="https://www.codha.ch/">Coopérative de l’habitat associatif (CODHA)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
73%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
39%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179159">Q132179159</a>
</td>
<td>
<a href="https://c-arts-ouches.ch/">Coopérative des Arts et des Ouches</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179159%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179159%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179211">Q132179211</a>
</td>
<td>
<a href="https://www.cheri-riviera.ch/">Coopérative des cheminots de la Riviera</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282735">Q133282735</a>
</td>
<td>
<a href="https://cle-epalinges.ch/">Coopérative du Logement Epalinges (CLE)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
29%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
29%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179235">Q132179235</a>
</td>
<td>
<a href="https://cll-lutry.ch">Coopérative du logement Lutry (CLL)</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
33%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
33%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
33%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132176017">Q132176017</a>
</td>
<td>
Coopérative I6 (I6)
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176017%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176017%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282403">Q133282403</a>
</td>
<td>
<a href="https://www.cooperative-inti.ch">Coopérative INTI</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282403%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282414">Q133282414</a>
</td>
<td>
<a href="https://gchg.ch/membre/la-ruche/">Coopérative La Ruche</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282419">Q133282419</a>
</td>
<td>
<a href="https://www.cooperativevalsainte.ch/">Coopérative la Valsainte</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132672906">Q132672906</a>
</td>
<td>
<a href="https://www.cooperative-voisinage.ch/">Coopérative Voisinage</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179383">Q132179383</a>
</td>
<td>
<a href="https://ecopolis.ch/">Ecopolis</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282952">Q133282952</a>
</td>
<td>
<a href="https://www.cdef.ch/">La coopérative d&#39;en face (CDEF)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282952%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282952%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131748305">Q131748305</a>
</td>
<td>
<a href="https://www.logement-ideal.ch">Logement Idéal</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
2%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
47%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
38%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
28%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
26%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179778">Q132179778</a>
</td>
<td>
<a href="https://www.charmontey.ch/">Société Coopérative d’Habitation Charmontey</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132678496">Q132678496</a>
</td>
<td>
Société coopérative d’habitation Cité des Philosophes
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133284185">Q133284185</a>
</td>
<td>
<a href="https://chcg-ge.ch/">Société Coopérative d’Habitation des Cheminots de Genève (CHCG)</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179629">Q132179629</a>
</td>
<td>
<a href="https://schg.ch/">Société Coopérative d’Habitation Genève (SCHG)</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132679940">Q132679940</a>
</td>
<td>
<a href="https://la-maison-ouvriere.ch/">Société coopérative d’habitation La Maison Ouvrière</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
78%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
74%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
89%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179751">Q132179751</a>
</td>
<td>
<a href="http://lapaix.ch/">Société coopérative d&#39;habitation La Paix</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q126741196">Q126741196</a>
</td>
<td>
<a href="https://schl.ch/">Société coopérative d&#39;habitation Lausanne (SCHL)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
96%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
72%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
95%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
1%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
61%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/https://www.wikidata.org/wiki/Q133283915">https://www.wikidata.org/wiki/Q133283915</a>
</td>
<td>
Société coopérative d&#39;habitation Le Trèfle à Quatre
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22https%3A%2F%2Fwww.wikidata.org%2Fwiki%2FQ133283915%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22https%3A%2F%2Fwww.wikidata.org%2Fwiki%2FQ133283915%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22https%3A%2F%2Fwww.wikidata.org%2Fwiki%2FQ133283915%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132677586">Q132677586</a>
</td>
<td>
Société Coopérative d&#39;habitation Morges
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
88%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179712">Q132179712</a>
</td>
<td>
<a href="https://schpully.ch">Société coopérative d&#39;habitation Pully (SCHP)</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131310187">Q131310187</a>
</td>
<td>
<a href="https://schlechene.ch">Société coopérative d&#39;habitations Le Chêne</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132179442">Q132179442</a>
</td>
<td>
<a href="https://lebled.ch">Société coopérative de construction et d’habitation Le Bled</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132781287">Q132781287</a>
</td>
<td>
Société coopérative Jordils-Moulins
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132781287%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
</tr>
</tbody>
</table>

### Gestionnaires

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Wikidata</th>
<th rowspan="2" scope="col">Nom (abbréviation)</th>
<th colspan="8" scope="colgroup">Pourcentage de complétion</th>
</tr>
<tr>
<th scope="col">`start_date`</th>
<th scope="col">`building:flats`</th>
<th scope="col">`heating`</th>
<th scope="col">`architect`</th>
<th scope="col">`architect:renovation`</th>
<th scope="col">`building:levels`</th>
<th scope="col">`roof:levels`</th>
<th scope="col">`roof:shape`</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q126741196">Q126741196</a>
</td>
<td>
<a href="https://schl.ch/">Société coopérative d&#39;habitation Lausanne (SCHL)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
91%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
61%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
97%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
88%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding.set(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
75%
</a>
</td>
</tr>
</tbody>
</table>

## Contribuer

Toutes les données proviennent directement
d’[OpenStreetMap](https://www.openstreetmap.org). Si vous êtes débutant,
laissez-vous guider via [learnosm.org](https://learnosm.org/fr/) ou
demandez de l’aide.

## Schéma

Il n’existe pas (encore) de modèle spécialement pour les coopératives de
logement, mais la plupart des clés proposées ici sont définies dans le
wiki d’OpenStreetMap. Celles issues de taginfo ou de ma propre
imagination sont déclaré sur cette page avec \[balise de facto\].

Pour cibler les coopératives de logement, la requête prend en compte les
élèments avec la clé `owner=*` et `operator=*` qui sont associées avec
`building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`.
Cela permet d’éviter d’associer les coopératives culturelles et d’arts
liés à un bâtiment (comme la [Space Alliance
Coopérative](https://www.openstreetmap.org/way/38326020)). Probablement
qu’à l’avenir, il faudra utiliser un filtre encore plus détaillé. À
noter que parfois, le bâtiment est à la propriété d’une coopérative,
parfois ce n’est pas le cas et c’est une coopérative qui gère le
bâtiment, mais le bâtiment appartient à une société privée.
L’utilisation des deux balises `operator` et `owner` permet d’identifier
ces cas de figure.

Les quartiers entièrement fondés par une coopérative sont également pris
en compte dans les données à l’aide de la clé `landuse=residential`.
Aussi, il est bien de rajouter les balises sur chaque bâtiment pour
pouvoir les comptabiliser par exemple.

### Balises de base

- [`owner:type=cooperative`](https://taginfo.openstreetmap.org/tags/owner%3Atype=cooperative)
  \[balise de facto\] et/ou
  [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

et soit…

pour les bâtiments :

- [`building=`](https://wiki.openstreetmap.org/wiki/Buildings) ou
  [`building:part=`](https://wiki.openstreetmap.org/wiki/Key:building:part)
  ou
  [`building:use=`](https://wiki.openstreetmap.org/wiki/Key:building:use)
  avec comme valeur :
  - [`residential`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dresidential)
    ou de préférence
    [`apartments`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dapartments)
    pour les immeubles
  - [`dormitory`](https://wiki.openstreetmap.org/wiki/Tag:building%3Ddormitory)
    pour les logements d’étudiants
  - [`sheltered_housing`](https://taginfo.openstreetmap.org/tags/building=sheltered_housing)
    \[balise de facto\] pour les logements protégés ou destinés à des
    personnes vulnérables.

pour les quartiers :

- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - nom du
  quartier
- [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
- [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

### Améliorer les métadonnées

#### Propriétaires/gestionnaires

Pour les propriétaires des bâtiments :

- [`owner=*`](https://wiki.openstreetmap.org/wiki/FR:Key:owner) - Nom
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Nom court
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Abbréviation du nom

Si le bâtiment est géré par une coopérative, un autre type d’entreprise
ou une autre coopérative :

- [`operator=*`](https://wiki.openstreetmap.org/wiki/FR:Key:operator) -
  Nom
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Abbréviation du nom

#### Bâtiments

- [`architect=`](https://wiki.openstreetmap.org/wiki/FR:Key:architect) -
  nom de l’architecte qui a dirigé la construction
- [`start_date=`](https://wiki.openstreetmap.org/wiki/FR:Key:start_date) -
  date d’achèvement de la construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/FR:Key:building:flats) -
  nombre d’appartements dans un bâtiment au total (inclus les clusters)
- [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster)
  \[tag de facto\] - nombre d’appartements de type cluster
- [`heating=gas|district_heating`](https://wiki.openstreetmap.org/wiki/Key:heating)
  ou autres valeurs \[de facto\]
  [`heat_pump|oil|pellet|woodchip`](https://taginfo.openstreetmap.org/keys/heating#values) -
  Type de chauffage

Un peu plus expérimental :

- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) -
  indique que le bâtiment a été rénové
- [`last_renovation=`](https://taginfo.openstreetmap.org/keys/last_renovation) -
  \[balise de facto\] date d’achèvement de la dernière rénovation
- [`architect:renovation=`](https://taginfo.openstreetmap.org/keys/architect%3renovation)
  \[tag de facto\] - nom de l’architecte qui a dirigé la dernière
  rénovation

Voir également [la page Buildings sur le
wiki](https://wiki.openstreetmap.org/wiki/FR:Key:building#Attributs_additionnels)
pour encore plus de tags.

#### Type de loyers (expérimental)

Les coopératives d’habitation sont souvent créées pour ajouter des
logements abordables sur le marché, mais pas toujours. Pour distinguer
les bâtiments, il n’existe actuellement aucune méthode standard dans
OpenStreetMap. D’après mes recherches, les balises
[`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
\[balise de facto\] ont été utilisées 12 fois (janvier 2025), ce qui
n’est pas suffisant pour faire une généralisation.

Je propose quelques balises expérimentales à ajouter ci-dessous qui sont
basées sur le concept de logement abordable en Suisse et
particulièrement dans le Canton de Vaud. Je n’ai pas fait assez de
recherches pour savoir si cela peut être généralisé et utilisé dans
d’autres pays.

En Suisse, il existe deux types de logements abordables :

- Logement subventionné ou à loyer modéré : l’État donne de l’argent
  pour construire un nouveau logement ou le rénover. Cela a pour effet
  de faire baisser les loyers. Pour ce cas d’utilisation, j’ai utilisé
  [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
  \[balise de facto\].
- Logement à loyer abordable : l’État limite le montant d’un loyer (avec
  divers outils). Ce cas d’utilisation est un peu différent du premier,
  car il peut s’appliquer à certains appartements au sein d’un immeuble.
  Je ne pense pas qu’il soit nécessaire de compter les appartements pour
  le moment. Je propose d’utiliser
  [`rent:regulation=`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation)
  \[balise de facto\] avec `yes` ou `only` pour différencier un immeuble
  ou tous les appartements ont un loyer régulé ou quelques un.

#### Divers

Très souvent les coopératives d’habitation possèdent des équipements
supplémentaires :

- Une salle commune. Si celle-ci est public, il est possible de la
  cartographier via un nœud séparé et
  - [`amenity=community_centre`](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre)
  - [`community_centre=community_hall`](https://wiki.openstreetmap.org/wiki/Tag:community_centre%3Dcommunity_hall)
  - [`community_centre:for=cooperative`](https://wiki.openstreetmap.org/wiki/Key:community_centre:for)
- Un jardin potager en commun.
  - [`leisure=garden`](https://wiki.openstreetmap.org/wiki/FR:Tag:leisure=garden)
  - [`garden:style=kitchen`](https://wiki.openstreetmap.org/wiki/FR:Key:garden:style)
  - [`garden:type=community`](https://wiki.openstreetmap.org/wiki/FR:Key:garden:type)

## Processus technique

### Workflow

Voici les étapes pour récupérer les données GeoJSON :

1.  Requêtes sur l’API Overpass
2.  Conversion des données en GeoJSON avec `osmtogeojson`
3.  Ajout des addresses manquantes avec l’API Nominatim pour les chemins
    dans OpenStreetMap qui ne sont pas taggés avec une adresse (ex.
    quand l’adresse se trouve dans un nœud séparé)
4.  Ajout de plus de données sur les propriétaires/gestionnaires depuis
    Wikidata

### Mises à jour

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Chaque dimanche, les fichiers sont mis à jour automatiquement via un
[workflow
Github](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Requêtes

- [Requête Overpass -
  Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Requête Overpass -
  Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)

### Dépendances

- [Node.js](https://nodejs.org)
- [osm2geojson](https://github.com/tyrasd/osmtogeojson)

#### Optionnelles

##### Inclusion des tableaux sur la qualité des données dans ce fichier

- [pandoc](https://pandoc.org/installing.html)
- [pandoc-include](https://github.com/DCsunset/pandoc-include)
- [ejs](https://ejs.co/)

## Plus d’infos sur le sujet des coopératives d’habitation

- [Pattaroni Luca, Marmy, Vanessa, Les coopératives de logement dans le
  Canton de Vaud, EPFL/SCL, octobre
  2016](https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/161013_etude-cooperatives-bd.pdf)
- [Temps Présent, Coopératives d’habitants, plus belle la vie?, RTS, 26
  avril
  2018](https://www.rts.ch/play/tv/temps-present/video/cooperatives-dhabitants-plus-belle-la-vie?urn=urn:rts:video:9536679&showUrn=urn%3Arts%3Ashow%3Atv%3A9536679)
- [Mattia Lento, L’habitat participatif en Suisse: épargne et nouvelles
  formes de sociabilité urbaine, Swissinfo, 5 octobre
  2018](https://www.swissinfo.ch/fre/economie/a-moiti%C3%A9-locataires-%C3%A0-moiti%C3%A9-propri%C3%A9taires_l-habitat-participatif-en-suisse-%C3%A9pargne-et-nouvelles-formes-de-sociabilit%C3%A9-urbaine/44431666)
- [Office fédéral du logement OFL, Coopératives d’habitation du
  personnel de la Confédération,
  admin.ch](https://www.bwo.admin.ch/bwo/fr/home/wohnraumfoerderung/wbg-bundespersonal.html)

[^1]: [Isabelle Rey-Lefebvre, Les coopératives d’habitants en Suisse, un
    modèle contre la spéculation immobilière, Le Monde, 20 septembre
    2022](https://www.lemonde.fr/economie/article/2022/09/20/habitat-ecologique-convivial-et-antispeculatif-le-modele-suisse-des-cooperatives-d-habitants_6142336_3234.html)

[^2]: [Les traditions vivantes en Suisse, Coopératives
    d’habitation](https://www.lebendige-traditionen.ch/tradition/fr/home/traditions/cooperatives-d_habitation.html)
