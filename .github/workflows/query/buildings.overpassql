[out:json][timeout:25000];
area["name:en"="Switzerland"]->.ch;
(
way(area.ch)[~"owner:type|operator:type"~"cooperative"][~"building|building:part|building:use"~"^(residental|apartments|dormitory|sheltered_housing)$"]  -> .building;

foreach .building {
  map_to_area -> .building_area;
  // Filter addresses node by excluding node with name (so amenity, tourism, leisure, etc.)
  node(area.building_area)["addr:housenumber"][!"name"] ->.addresses;
  
  foreach .addresses {
    convert associated_addresses 
        "__associated_id"=building_area.u(id()),
        ::=::;
    out geom;
  }
}
);
.building out geom;
