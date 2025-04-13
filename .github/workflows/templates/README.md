-- [Version francophone de cette page](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/README.fr.md)--

# 🏘️ Map of swiss housing cooperatives

Did you know that cooperative housing has been a specialty in Switzerland for over 100 years? [^1] In fact, it's even a living tradition [^2]!

This experimental project aimed at mapping and listing the housing
cooperatives in Switzerland with a maximum of details. This project does
not aim at playing an intermediate or building new tool, but document
and show what is possible, and what are the limitations using OpenStreetMap and Wikidata.

No such map seems to exist across cantons. In Geneva, the
Fondation pour la promotion du logement bon marché et de l'habitat
coopératif (FPLC) provide a [map for the canton of Geneva](https://fplc.ch/cartes/cooperatives.htm).

## Use the data

At the moment, data can be viewed on [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

-   GeoJson
    -   [Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
    -   [Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
-   TSV
    -   [List of cooperative owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
    -   [List of cooperative operators](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)

## Data quality

At the moment, all the following cooperatives have been mapped and retrieved.
See [Status of the mapped data](https://github.com/imagoiq/swiss-housing-cooperative-map/issues/6) issue and [List of cooperative
owners](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv) (completion percentage columns) for more information about data quality.

### Owners

!include`raw="html"` /tmp/owners_data_quality_table.html

### Operators

!include`raw="html"` /tmp/operators_data_quality_table.html

## Contribute

All data comes directly from [OpenStreetMap](https://www.openstreetmap.org). If you're a beginner, you can learn to edit by reading [learnosm.org](https://learnosm.org/fr/) or ask for help.

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
is owned by a cooperative, sometimes it's not, and a cooperative manages
the building, but the building belongs to a private company. The use of
the two tags `operator` and `owner` makes it possible to identify these
cases.

Neighborhoods founded entirely by a cooperative are also included in the
data using the key `landuse=residential`. It's also a good idea to add
tags to each building inside a neighborhood so that they can be counted,
for example.

### Basic tags

-   [`owner:type=cooperative`](https://taginfo.openstreetmap.org/tags/owner%3Atype=cooperative) \[tag de facto\] or/and [`operator:type=cooperative`](https://wiki.openstreetmap.org/wiki/Key:operator:type)

and either...

for Buildings:

-   [`building=`](https://wiki.openstreetmap.org/wiki/Buildings) or [`building:part=`](https://wiki.openstreetmap.org/wiki/Key:building:part) or [`building:use=`](https://wiki.openstreetmap.org/wiki/Key:building:use) with as value  :
    -   [`residential`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dresidential) or prefer
        [`apartments`](https://wiki.openstreetmap.org/wiki/Tag:building%3Dapartments) for regular accommodation
    -   [`dormitory`](https://wiki.openstreetmap.org/wiki/Tag:building%3Ddormitory) for student dormitory
    -   [`sheltered_housing`](https://taginfo.openstreetmap.org/tags/building=sheltered_housing) \[tag de facto\] for accommodation designated for older and/or disabled or other vulnerable people

for Neighborhood:

-   [`name=`](https://wiki.openstreetmap.org/wiki/Key:name) - name of the neighborhood
-   [`landuse=residential`](https://wiki.openstreetmap.org/wiki/Tag:landuse%3Dresidential)
-   [`residential=apartments`](https://wiki.openstreetmap.org/wiki/Tag:residential%3Dapartments)

### Enhance the metadata

#### Owner and/or operator

For the owner of the buildings:

-   [`owner=*`](https://wiki.openstreetmap.org/wiki/Key:owner) - Name
-   [`owner:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
-   [`owner:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
-   [`owner:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name

If the building is managed by a cooperative, another type of company or
another cooperative:

-   [`operator=*`](https://wiki.openstreetmap.org/wiki/Key:operator) - Name
-   [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
-   [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
-   [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbreviation of the name

#### Buildings

-   [`architect=`](https://wiki.openstreetmap.org/wiki/Key:architect) - name of the architect who made the building
-   [`start_date=`](https://wiki.openstreetmap.org/wiki/Key:start_date) - date which indicate the end of the construction
-   [`building:flats=`](https://wiki.openstreetmap.org/wiki/Key:building:flats) - number of flats in total (including cluster)
-   [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster) \[tag de facto\] - number of cluster flats
-   [`heating=gas|district_heating`](https://wiki.openstreetmap.org/wiki/Key:heating) r other \[de facto\] values [`heat_pump|oil|pellet|woodchip`](https://taginfo.openstreetmap.org/keys/heating#values) - Type of heating system

A bit more experimental:

-   [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) - indicate that the building has been renovated
-   [`last_renovation=`](https://taginfo.openstreetmap.org/keys/last_renovation) \[tag de facto\] - date which indicate the end of the renovation
-   [`architect:renovation=`](https://taginfo.openstreetmap.org/keys/architect%3Arenovation) \[tag de facto\] - name of the architect who conducted the renovation

See also [the page Buildings on the wiki](https://wiki.openstreetmap.org/wiki/Key:building#Additional_attributes) to get even more tags.

#### Type of rents (experimental)

Housing cooperative are often made to create to add affordable housing
on the market, but not always. To distinguish buildings, there are
currently no standard way in OpenStreetMap. From my research,
[`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized)
\[tag de facto\] have been used 12 times (January 2025) which is not
enough to make any generalization.

I propose some experimental tags to add below which are based on the
concept of affordable housing in Switzerland and particularly in the
Vaud region. I've not made enough research to know if this can be
generalised and used in others countries.

In Switzerland, there are two kinds of affordable housing:

-   Subsidized housing: the state give money for to build a new unit or
    renovate it. This has then impact to lower the rents. For this use
    case, I've used [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) \[tag de facto\].
-   Rent control/regulation: the state limits the amount of a rent (with
    various tools). This use case is a bit different as the first one,
    because it can apply on some flats within a building. I don't think
    we need to go at the level of counting flats at the moment. I
    propose to use [`rent:regulation=`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation) with `yes` or `only` to differentiate a building where all the flat
    have it or only some.

#### Miscellaneous

Very often, housing cooperatives have additional facilities:

-   A common room. If this is public, it can be mapped via a separate node and
    -   [`amenity=community_centre`](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre)
    -   [`community_centre=community_hall`](https://wiki.openstreetmap.org/wiki/Tag:community_centre%3Dcommunity_hall)
    -   [`community_centre:for=cooperative`](https://wiki.openstreetmap.org/wiki/Key:community_centre:for)
-   A shared vegetable garden.
    -   [`leisure=garden`](https://wiki.openstreetmap.org/wiki/Tag:leisure=garden)
    -   [`garden:style=kitchen`](https://wiki.openstreetmap.org/wiki/Key:garden:style)
    -   [`garden:type=community`](https://wiki.openstreetmap.org/wiki/Key:garden:type)

## Technical Process

### Workflow

Here are the steps to build the GeoJson data:

1.  Query Overpass API
2.  Convert data to GeoJSON with `osmtogeojson`
3.  Add missing addresses with Nominatim API to ways in OpenStreetMap
    that aren't tagged with an address (e.g. when address is a separated
    node)
4. Add more data about owners/operators from Wikidata

### Updates

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Every Sunday, the output files are automatically updated via a [Github Workflow](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Queries

-   [Overpass query - Buildings](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
-   [Overpass query - Areas](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_areas#L4-L7)

### Dependencies

-   [Node.js](https://nodejs.org)
-   [osm2geojson](https://github.com/tyrasd/osmtogeojson)

#### Optional

##### For the data quality table section of this file

- [pandoc](https://pandoc.org/installing.html)
- [pandoc-include](https://github.com/DCsunset/pandoc-include)
- [ejs](https://ejs.co/)

## More info on the subject of housing cooperatives

[^1]: [French] [Isabelle Rey-Lefebvre, Les coopératives d’habitants en Suisse, un modèle contre la spéculation immobilière, Le Monde, 20 septemner 2022](https://www.lemonde.fr/economie/article/2022/09/20/habitat-ecologique-convivial-et-antispeculatif-le-modele-suisse-des-cooperatives-d-habitants_6142336_3234.html)
[^2]: [Living Traditions in Switzerland, Housing cooperatives](https://www.lebendige-traditionen.ch/tradition/en/home/traditions/housing-cooperatives.html)

- [French] [Pattaroni Luca, Marmy, Vanessa, Les coopératives de logement dans le Canton de Vaud, EPFL/SCL, october 2016](https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/161013_etude-cooperatives-bd.pdf)
- [French] [Temps Présent, Coopératives d'habitants, plus belle la vie?, RTS, 26 april 2018](https://www.rts.ch/play/tv/temps-present/video/cooperatives-dhabitants-plus-belle-la-vie?urn=urn:rts:video:9536679&showUrn=urn%3Arts%3Ashow%3Atv%3A9536679)
- [French][Mattia Lento, L’habitat participatif en Suisse: épargne et nouvelles formes de sociabilité urbaine, Swissinfo, 5 october 2018](https://www.swissinfo.ch/fre/economie/a-moiti%C3%A9-locataires-%C3%A0-moiti%C3%A9-propri%C3%A9taires_l-habitat-participatif-en-suisse-%C3%A9pargne-et-nouvelles-formes-de-sociabilit%C3%A9-urbaine/44431666)
- [French/German/Italian] [Office fédéral du logement OFL,  Coopératives d’habitation du personnel de la Confédération, admin.ch](https://www.bwo.admin.ch/bwo/fr/home/wohnraumfoerderung/wbg-bundespersonal.html)