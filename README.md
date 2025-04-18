– [Version francophone de cette
page](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/README.fr.md)–

# 🏘️ Map of swiss housing cooperatives

Did you know that cooperative housing has been a specialty in
Switzerland for over 100 years? [^1] In fact, it’s even a living
tradition [^2]!

This experimental project aimed at mapping and listing the housing
cooperatives in Switzerland with a maximum of details. This project does
not aim at playing an intermediate or building new tool, but document
and show what is possible, and what are the limitations using
OpenStreetMap and Wikidata.

No such map seems to exist across cantons. In Geneva, the Fondation pour
la promotion du logement bon marché et de l’habitat coopératif (FPLC)
provide a [map for the canton of
Geneva](https://fplc.ch/cartes/cooperatives.htm).

## Use the data

At the moment, data can be viewed on
[umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

- GeoJson
  - [Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
  - [Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- TSV
  - [List of cooperative
    owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [List of cooperative
    operators](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Data quality

At the moment, all the following cooperatives have been mapped and
retrieved. See [Status of the mapped
data](https://github.com/imagoiq/swiss-housing-cooperative-map/issues/6)
issue and [List of cooperative
owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
(completion percentage columns) for more information about data quality.

### Owners

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Wikidata</th>
<th rowspan="2" scope="col">Name (abbreviation)</th>
<th colspan="8" scope="colgroup">Completion rate</th>
</tr>
<tr>
<th scope="col"><code>start_date</code></th>
<th scope="col"><code>building:flats</code></th>
<th scope="col"><code>heating</code></th>
<th scope="col"><code>architect</code></th>
<th scope="col"><code>architect:renovation</code></th>
<th scope="col"><code>building:levels</code></th>
<th scope="col"><code>roof:levels</code></th>
<th scope="col"><code>roof:shape</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282712">Q133282712</a>
</td>
<td>
Coopelia
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
56%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
88%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
19%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
13%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282712%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
19%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459586">Q133459586</a>
</td>
<td>
<a href="https://coop-arcenciel.ch/">Coopérative Arc-en-ciel</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459586%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459586%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133282337">Q133282337</a>
</td>
<td>
<a href="https://ecopol.net/batir-groupe/">Coopérative Bâtir Groupé</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282337%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282337%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282337%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282337%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282337%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131743050">Q131743050</a>
</td>
<td>
<a href="https://citederriere.ch">Coopérative Cité Derrière</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
53%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
46%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
58%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282764%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176222%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176222%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285984%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461288">Q133461288</a>
</td>
<td>
<a href="https://tourbiere.ch/">Coopérative d’Habitation de la Tourbière</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461288%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
75%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
25%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176055%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133284252">Q133284252</a>
</td>
<td>
<a href="https://cooperative-auge.ch/">Coopérative d’habitation du quartier de l’Auge</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
29%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
57%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284252%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459721">Q133459721</a>
</td>
<td>
<a href="https://www.cooperative-equilibre.ch/">Coopérative d&#39;habitation Equilibre</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
40%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459721%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459779">Q133459779</a>
</td>
<td>
Coopérative d&#39;habitation Gilamont-Village
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459779%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459793">Q133459793</a>
</td>
<td>
<a href="https://gchg.ch/membre/huit-et-demi/">Coopérative d&#39;habitation Huit et demi</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459793%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459822">Q133459822</a>
</td>
<td>
<a href="https://lhabrik.ch/">Coopérative d&#39;habitation L&#39;habrik</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459822%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459822%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459822%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459822%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459822%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459856">Q133459856</a>
</td>
<td>
Coopérative d&#39;habitation La Renouvelle
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459856%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459856%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459856%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459856%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459856%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
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
<a href="https://www.wikidata.org/wiki/Q133459866">Q133459866</a>
</td>
<td>
<a href="https://gchg.ch/membre/le-jet-deau/">Coopérative d&#39;habitation Le Jet d&#39;Eau</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459866%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459875">Q133459875</a>
</td>
<td>
<a href="https://gchg.ch/membre/le-verger-de-champlong-marbriers/">Coopérative d&#39;habitation Le Verger de Champlong-Marbriers</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459875%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284155%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
71%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179508%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282425%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133285912">Q133285912</a>
</td>
<td>
Coopérative d’habitation Les Voisins
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285912%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285912%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285912%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285912%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
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
<a href="https://www.wikidata.org/wiki/Q133282689">Q133282689</a>
</td>
<td>
<a href="https://www.maison-neuve.ch/">Coopérative d&#39;habitation Maison Neuve</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282689%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459668">Q133459668</a>
</td>
<td>
Coopérative d&#39;habitation Pan d&#39;Ozi
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459668%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179684%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282694%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133286063">Q133286063</a>
</td>
<td>
<a href="https://chateaudecorcelles.ch/">Coopérative d’Habitation Vie Alternative (CODHAVA)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133286063%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460114">Q133460114</a>
</td>
<td>
Coopérative d&#39;Habitations Collectives de Lully 2
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460114%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131885512%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282702%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283856%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
73%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
39%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
14%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179159%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179159%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179211%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133459653">Q133459653</a>
</td>
<td>
<a href="http://domahabitare.ch/">Coopérative DomaHabitare</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459653%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
29%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
29%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282735%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
33%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
33%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179235%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176017%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132176017%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133459708">Q133459708</a>
</td>
<td>
<a href="https://www.cipef.ch/">Coopérative Immobilière du Personnel Fédéral (CIPEF)</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459708%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459708%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459708%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459708%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
78%
</a>
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282403%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282414%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282419%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460086">Q133460086</a>
</td>
<td>
<a href="https://lessavoies.ch/">Coopérative Les Savoies</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460086%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461608">Q133461608</a>
</td>
<td>
<a href="https://www.polygones.ch/">Coopérative Polygones</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461608%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
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
<a href="https://www.wikidata.org/wiki/Q133284332">Q133284332</a>
</td>
<td>
Coopérative pour l&#39;Habitation La Voie-Creuse
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284332%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284332%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284332%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284332%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460434">Q133460434</a>
</td>
<td>
<a href="https://gchg.ch/membre/cooperative-rue-des-rois/">Coopérative Rue des Rois</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460434%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132672906%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461688">Q133461688</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-bernex">Coprolo Bernex</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461688%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461688%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461688%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461688%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461688%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461836">Q133461836</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-cressy">Coprolo Cressy</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461836%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461836%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461836%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461836%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461743">Q133461743</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-croix-de-rozon">Coprolo Croix-de-Rozon</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461743%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461743%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461743%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461743%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461712">Q133461712</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-grand-pre">Coprolo Le Grand-Pré</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461712%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461712%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461712%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461702">Q133461702</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-luserna">Coprolo Luserna</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461702%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461702%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461702%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461702%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461799">Q133461799</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-poterie">Coprolo Poterie</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461799%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461799%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461799%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461799%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461761">Q133461761</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-poussy">Coprolo Poussy</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461761%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461864">Q133461864</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-soubeyran">Coprolo Soubeyran</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461864%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461864%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461877">Q133461877</a>
</td>
<td>
<a href="https://coprolo.ch/cooperatives/coprolo-troenes">Coprolo Troènes</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461877%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461877%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461877%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461877%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179383%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133282940">Q133282940</a>
</td>
<td>
<a href="https://www.graphis.ch">Graphis</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282940%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282952">Q133282952</a>
</td>
<td>
<a href="https://www.cdef.ch/">La coopérative d&#39;en face (CDEF)</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282952%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133282952%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
2%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
47%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
38%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
28%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131748305%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179778%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
17%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132678496%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133459619">Q133459619</a>
</td>
<td>
<a href="https://www.schrolle.ch">Société Coopérative d’Habitation de Rolle</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
91%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
64%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
45%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
64%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
55%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459619%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
45%
</a>
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284185%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
78%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
74%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132679940%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179751%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
96%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
72%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
95%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
1%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
60%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
69%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133283915">Q133283915</a>
</td>
<td>
Société coopérative d&#39;habitation Le Trèfle à Quatre
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283915%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283915%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133283915%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133459984">Q133459984</a>
</td>
<td>
<a href="https://heliotropes.ch/">Société coopérative d&#39;habitation Les Héliotropes</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459984%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459984%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459984%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459984%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459984%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133456739">Q133456739</a>
</td>
<td>
<a href="https://www.schamontreux.ch/">Société Coopérative d&#39;Habitation Montreux</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133456739%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q132677586">Q132677586</a>
</td>
<td>
Société Coopérative d&#39;habitation Morges
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
63%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132677586%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
88%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460349">Q133460349</a>
</td>
<td>
<a href="https://chnc.ch/">Société coopérative d&#39;habitation Nouveau Comté</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460349%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460349%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q132179712">Q132179712</a>
</td>
<td>
<a href="https://schpully.ch">Société coopérative d&#39;habitation Pully (SCHP)</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179712%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
50%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133285952">Q133285952</a>
</td>
<td>
<a href="https://terrajoie.ch/">Société coopérative d&#39;habitation TerrAjoie</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133285952%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460488">Q133460488</a>
</td>
<td>
<a href="https://gchg.ch/membre/unilogis/">Société coopérative d&#39;habitation Unilogis</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460488%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460488%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460488%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460488%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460488%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133308087">Q133308087</a>
</td>
<td>
Société Coopérative d&#39;Habitations de l&#39;Ouest MIXage
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133308087%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
93%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
43%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131310187%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179442%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133461672">Q133461672</a>
</td>
<td>
<a href="https://gchg.ch/membre/uv/">Société coopérative de construction et d&#39;habitation UV</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461672%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461672%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461672%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461672%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461672%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132781287%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<a href="https://www.wikidata.org/wiki/Q133461585">Q133461585</a>
</td>
<td>
Société coopérative Le Noirmont
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461585%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461585%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461585%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
</tbody>
</table>

### Operators

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Wikidata</th>
<th rowspan="2" scope="col">Name (abbreviation)</th>
<th colspan="8" scope="colgroup">Completion rate</th>
</tr>
<tr>
<th scope="col"><code>start_date</code></th>
<th scope="col"><code>building:flats</code></th>
<th scope="col"><code>heating</code></th>
<th scope="col"><code>architect</code></th>
<th scope="col"><code>architect:renovation</code></th>
<th scope="col"><code>building:levels</code></th>
<th scope="col"><code>roof:levels</code></th>
<th scope="col"><code>roof:shape</code></th>
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
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
91%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
61%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
97%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
88%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22operator%3Awikidata%22%3D%22Q126741196%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
75%
</a>
</td>
</tr>
</tbody>
</table>

## Contribute

All data comes directly from
[OpenStreetMap](https://www.openstreetmap.org). If you’re a beginner,
you can learn to edit by reading
[learnosm.org](https://learnosm.org/fr/) or ask for help.

## Schema

There is no pre-made or validated model specifically for housing
cooperatives, but most of the proposed tags here are defined in the wiki
of openstreetmap. Those from taginfo or my own imagination are declared
on this page with \[tag de facto\].

To target housing cooperatives, the query takes into account elements
with the key `owner=*` and `operator=*` that are associated with
`building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`.
This avoids associating building-related arts and cultural cooperatives
(such as [Space Alliance
Cooperative](https://www.openstreetmap.org/way/38326020)). The filter
will probably be refined in the future. Note that sometimes the building
is owned by a cooperative, sometimes it’s not, and a cooperative manages
the building, but the building belongs to a private company. The use of
the two tags `operator` and `owner` makes it possible to identify these
cases.

Neighborhoods founded entirely by a cooperative are also included in the
data using the key `landuse=residential`. It’s also a good idea to add
tags to each building inside a neighborhood so that they can be counted,
for example.

### Basic tags

- [`owner:type=cooperative`](https://taginfo.openstreetmap.org/tags/owner%3Atype=cooperative)
  \[tag de facto\] or/and
  [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

and either…

for Buildings:

- [`building=`](https://wiki.openstreetmap.org/wiki/Buildings) or
  [`building:part=`](https://wiki.openstreetmap.org/wiki/Key:building:part)
  or
  [`building:use=`](https://wiki.openstreetmap.org/wiki/Key:building:use)
  with as value  :
  - [`residential`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dresidential)
    or prefer
    [`apartments`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dapartments)
    for regular accommodation
  - [`dormitory`](https://wiki.openstreetmap.org/wiki/Tag:building%3Ddormitory)
    for student dormitory
  - [`sheltered_housing`](https://taginfo.openstreetmap.org/tags/building=sheltered_housing)
    \[tag de facto\] for accommodation designated for older and/or
    disabled or other vulnerable people

for Neighborhood:

- [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - name of the
  neighborhood
- [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
- [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

### Enhance the metadata

#### Owner and/or operator

For the owner of the buildings:

- [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Name
- [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Wikidata ID
- [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Short name
- [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Abbreviation of the name

If the building is managed by a cooperative, another type of company or
another cooperative:

- [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator) -
  Name
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) -
  Abbreviation of the name

#### Buildings

- [`architect=`](https://wiki.openstreetmap.org/wiki/Key:architect) -
  name of the architect who made the building
- [`start_date=`](https://wiki.openstreetmap.org/wiki/Key:start_date) -
  date which indicate the end of the construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/Key:building:flats) -
  number of flats in total (including cluster)
- [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster)
  \[tag de facto\] - number of cluster flats
- [`heating=gas|district_heating`](https://wiki.openstreetmap.org/wiki/Key:heating)
  r other \[de facto\] values
  [`heat_pump|oil|pellet|woodchip|biogas`](https://taginfo.openstreetmap.org/keys/heating#values) -
  Type of heating system

A bit more experimental:

- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) -
  indicate that the building has been renovated
- [`last_renovation=`](https://taginfo.openstreetmap.org/keys/last_renovation)
  \[tag de facto\] - date which indicate the end of the renovation
- [`architect:renovation=`](https://taginfo.openstreetmap.org/keys/architect%3Arenovation)
  \[tag de facto\] - name of the architect who conducted the renovation

See also [the page Buildings on the
wiki](https://wiki.openstreetmap.org/wiki/Key:building#Additional_attributes)
to get even more tags.

#### Type of rents (experimental)

Housing cooperative are often made to create to add affordable housing
on the market, but not always. To distinguish buildings, there are
currently no standard way in OpenStreetMap. From my research,
[`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
\[tag de facto\] have been used 12 times (January 2025) which is not
enough to make any generalization.

I propose some experimental tags to add below which are based on the
concept of affordable housing in Switzerland and particularly in the
Vaud region. I’ve not made enough research to know if this can be
generalised and used in others countries.

In Switzerland, there are two kinds of affordable housing:

- Subsidized housing: the state give money for to build a new unit or
  renovate it. This has then impact to lower the rents. For this use
  case, I’ve used
  [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
  \[tag de facto\].
- Rent control/regulation: the state limits the amount of a rent (with
  various tools). This use case is a bit different as the first one,
  because it can apply on some flats within a building. I don’t think we
  need to go at the level of counting flats at the moment. I propose to
  use
  [`rent:regulation=`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation)
  with `yes` or `only` to differentiate a building where all the flat
  have it or only some.

#### Miscellaneous

Very often, housing cooperatives have additional facilities:

- A common room. If this is public, it can be mapped via a separate node
  and
  - [`amenity=community_centre`](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre)
  - [`community_centre=community_hall`](https://wiki.openstreetmap.org/wiki/Tag:community_centre%3Dcommunity_hall)
  - [`community_centre:for=cooperative`](https://wiki.openstreetmap.org/wiki/Key:community_centre:for)
- A shared vegetable garden.
  - [`leisure=garden`](https://wiki.openstreetmap.org/wiki/Tag:leisure=garden)
  - [`garden:style=kitchen`](https://wiki.openstreetmap.org/wiki/Key:garden:style)
  - [`garden:type=community`](https://wiki.openstreetmap.org/wiki/Key:garden:type)

## Technical Process

### Workflow

Here are the steps to build the GeoJson data:

1.  Query Overpass API
2.  Convert data to GeoJSON with `osmtogeojson`
3.  Add missing addresses with Nominatim API to ways in OpenStreetMap
    that aren’t tagged with an address (e.g. when address is a separated
    node)
4.  Add more data about owners/operators from Wikidata

### Updates

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Every Sunday, the output files are automatically updated via a [Github
Workflow](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Queries

- [Overpass query -
  Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Overpass query -
  Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_areas#L4-L7)

### Dependencies

- [Node.js](https://nodejs.org)
- [osm2geojson](https://github.com/tyrasd/osmtogeojson)

#### Optional

##### For the data quality table section of this file

- [pandoc](https://pandoc.org/installing.html)
- [pandoc-include](https://github.com/DCsunset/pandoc-include)
- [ejs](https://ejs.co/)

## More info on the subject of housing cooperatives

- \[French\] [Pattaroni Luca, Marmy, Vanessa, Les coopératives de
  logement dans le Canton de Vaud, EPFL/SCL, october
  2016](https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/161013_etude-cooperatives-bd.pdf)
- \[French\] [Temps Présent, Coopératives d’habitants, plus belle la
  vie?, RTS, 26 april
  2018](https://www.rts.ch/play/tv/temps-present/video/cooperatives-dhabitants-plus-belle-la-vie?urn=urn:rts:video:9536679&showUrn=urn%3Arts%3Ashow%3Atv%3A9536679)
- \[French\]\[Mattia Lento, L’habitat participatif en Suisse: épargne et
  nouvelles formes de sociabilité urbaine, Swissinfo, 5 october
  2018\](https://www.swissinfo.ch/fre/economie/a-moiti%C3%A9-locataires-%C3%A0-moiti%C3%A9-propri%C3%A9taires_l-habitat-participatif-en-suisse-%C3%A9pargne-et-nouvelles-formes-de-sociabilit%C3%A9-urbaine/44431666)
- \[French/German/Italian\] [Office fédéral du logement OFL,
  Coopératives d’habitation du personnel de la Confédération,
  admin.ch](https://www.bwo.admin.ch/bwo/fr/home/wohnraumfoerderung/wbg-bundespersonal.html)

[^1]: \[French\] [Isabelle Rey-Lefebvre, Les coopératives d’habitants en
    Suisse, un modèle contre la spéculation immobilière, Le Monde, 20
    septemner
    2022](https://www.lemonde.fr/economie/article/2022/09/20/habitat-ecologique-convivial-et-antispeculatif-le-modele-suisse-des-cooperatives-d-habitants_6142336_3234.html)

[^2]: [Living Traditions in Switzerland, Housing
    cooperatives](https://www.lebendige-traditionen.ch/tradition/en/home/traditions/housing-cooperatives.html)
