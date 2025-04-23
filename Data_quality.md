# Data quality

Find more about each column in the [contribution
cheatsheet](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/CONTRIBUTE.md).

### Owners

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Wikidata</th>
<th rowspan="2" scope="col">Name (abbreviation)</th>
<th rowspan="2" scope="col">GeoJSON</th>
<th colspan="8" scope="colgroup">Completion rate with link to incomplete items</th>
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
<a href="https://www.wikidata.org/wiki/Q133461365">Q133461365</a>
</td>
<td>
<a href="http://www.cite-joie.ch/">Cité Joie</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461365.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461365.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
44%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
44%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133461365%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
44%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282712">Q133282712</a>
</td>
<td>
<a href="https://coopelia.ch/">Coopelia</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282712.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282712.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459586.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459586.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282337.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282337.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q131743050.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q131743050.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
71%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
56%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
48%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
73%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
87%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
61%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q131743050%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
53%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282764.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282764.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132176222.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132176222.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133285984.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133285984.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461288.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461288.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132176055.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132176055.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133284252.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133284252.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459721.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459721.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459779.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459779.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459793.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459793.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459822.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459822.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459856.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459856.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459866.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459866.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459875.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459875.geojson.atom">RSS</a>)
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
<a href="https://www.wikidata.org/wiki/Q133459877">Q133459877</a>
</td>
<td>
<a href="https://www.lesailes.ch/">Coopérative d&#39;habitation Les Ailes</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459877.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459877.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
87%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
60%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
67%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
80%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
13%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459877%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133284155.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133284155.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179508.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179508.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282425.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282425.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133285912.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133285912.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282689.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282689.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459668.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459668.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179684.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179684.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282694.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282694.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133286063.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133286063.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460114.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460114.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q131885512.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q131885512.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282702.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282702.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133283856.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133283856.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q86666680.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q86666680.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
65%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
38%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
73%
</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
70%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
19%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q86666680%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
19%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179159.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179159.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179211.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179211.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459653.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459653.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282735.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282735.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179235.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179235.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132176017.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132176017.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459708.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459708.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282403.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282403.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282414.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282414.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282419.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282419.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460086.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460086.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461608.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461608.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133284332.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133284332.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460434.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460434.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132672906.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132672906.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461688.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461688.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461836.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461836.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461743.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461743.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461712.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461712.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461702.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461702.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461799.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461799.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461761.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461761.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461864.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461864.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461877.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461877.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179383.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179383.geojson.atom">RSS</a>)
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
<a href="https://www.wikidata.org/wiki/Q133459738">Q133459738</a>
</td>
<td>
<a href="https://gchg.ch/membre/fomhab/">Fomhab</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459738.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459738.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
35%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
23%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133459738%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133282940">Q133282940</a>
</td>
<td>
<a href="https://www.graphis.ch">Graphis</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282940.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282940.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133282952.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133282952.geojson.atom">RSS</a>)
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
<a href="https://www.wikidata.org/wiki/Q133460016">Q133460016</a>
</td>
<td>
<a href="https://gchg.ch/membre/les-joyeux-logis/">Les Joyeux Logis</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460016.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460016.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
18%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
18%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460016%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q133460033">Q133460033</a>
</td>
<td>
<a href="https://lesrocailles.ch/">Les Rocailles</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460033.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460033.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460033%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
</tr>
<tr>
<td>
<a href="https://www.wikidata.org/wiki/Q131748305">Q131748305</a>
</td>
<td>
<a href="https://www.logement-ideal.ch">Logement Idéal</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q131748305.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q131748305.geojson.atom">RSS</a>)
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
<a href="https://www.wikidata.org/wiki/Q133460337">Q133460337</a>
</td>
<td>
<a href="https://www.monlogis.ch/">Mon Logis</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460337.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460337.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
19%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133460337%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
8%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179778.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179778.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132678496.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132678496.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459619.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459619.geojson.atom">RSS</a>)
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
25%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133284185.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133284185.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179629.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179629.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
3%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
3%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
3%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
3%
</a>
</td>
<td>N/A
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
10%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
5%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q132179629%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
23%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132679940.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132679940.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179751.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179751.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q126741196.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q126741196.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133283915.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133283915.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133459984.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133459984.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133456739.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133456739.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132677586.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132677586.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460349.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460349.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179712.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179712.geojson.atom">RSS</a>)
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
<a href="https://www.wikidata.org/wiki/Q133284313">Q133284313</a>
</td>
<td>
<a href="https://schrenens.ch/">Société coopérative d&#39;habitation Renens et agglomération (SCHR)</a>
</td>
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133284313.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133284313.geojson.atom">RSS</a>)
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22start_date%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
86%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22building%3Aflats%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
79%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22heating%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22architect%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22architect%3Arenovation%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
0%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22building%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
45%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22roof%3Alevels%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
45%
</a>
</td>
<td><a href="https://overpass-turbo.osm.ch/?Q=%5Bout%3Ajson%5D%5Btimeout%3A25000%5D%3B%0Aarea%5B%22name%3Aen%22%3D%22Switzerland%22%5D-%3E.ch%3B%0A(%0Away(area.ch)%5B~%22owner%3Atype%7Coperator%3Atype%22~%22cooperative%22%5D%5B~%22building%7Cbuilding%3Apart%7Cbuilding%3Ause%22~%22%5E(residental%7Capartments%7Cdormitory%7Csheltered_housing)%24%22%5D%20%20-%3E%20.building%3B%0A%0Aforeach%20.building%20%7B%0A%20%20map_to_area%20-%3E%20.building_area%3B%0A%20%20%2F%2F%20Filter%20addresses%20node%20by%20excluding%20node%20with%20name%20(so%20amenity%2C%20tourism%2C%20leisure%2C%20etc.)%0A%20%20node(area.building_area)%5B%22addr%3Ahousenumber%22%5D%5B!%22name%22%5D%5B%22owner%3Awikidata%22%3D%22Q133284313%22%5D%5B!%22roof%3Ashape%22%5D%20-%3E.addresses%3B%0A%20%20%0A%20%20foreach%20.addresses%20%7B%0A%20%20%20%20convert%20associated_addresses%20%0A%20%20%20%20%20%20%20%20%22__associated_id%22%3Dbuilding_area.u(id())%2C%0A%20%20%20%20%20%20%20%20%3A%3A%3D%3A%3A%3B%0A%20%20%20%20out%20geom%3B%0A%20%20%7D%0A%7D%0A)%3B%0A.building%20out%20geom%3B%0A&R">
41%
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133285952.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133285952.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133460488.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133460488.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133308087.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133308087.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q131310187.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q131310187.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132179442.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132179442.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461672.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461672.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q132781287.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q132781287.geojson.atom">RSS</a>)
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q133461585.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q133461585.geojson.atom">RSS</a>)
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
<th rowspan="2" scope="col">GeoJSON</th>
<th colspan="8" scope="colgroup">Completion rate with link to incomplete items</th>
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
<td>
<a href="https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity/swiss_housing_cooperative_Q126741196.geojson">GeoJSON</a> (<a href="https://github.com/imagoiq/swiss-housing-cooperative/commits/main/output/identity/swiss_housing_cooperative_Q126741196.geojson.atom">RSS</a>)
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
74%
</a>
</td>
</tr>
</tbody>
</table>
