# 🏘️ Carte des coopératives d’habitation en Suisse

Projet expérimental ayant pour but de cartographier et de liste les
immeubles des coopératives d’habitation de Suisse. Ce projet n’a pas
pour but de jouer les intermédiaires ou de construire un nouvel outil,
mais de documenter et de montrer ce qui est possible, et quelles sont
les limites.

D’après mes recherches, aucune carte de ce type n’existe pour l’ensemble
des cantons. À Genève, la Fondation pour la promotion du logement bon
marché et de l’habitat coopératif (FPLC) fournit une \[carte pour le
canton de Genève\] (<https://fplc.ch/cartes/cooperatives.htm>).

Plus d’infos sur le sujet des coopératives d’habitation :

- [Pattaroni Luca, Marmy, Vanessa, Les coopératives de logement dans le
  Canton de Vaud, EPFL/SCL, Octobre
  2016](https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/161013_etude-cooperatives-bd.pdf)

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
<th rowspan="2" scope="col">Nom (abbréviation)</th>
<th colspan="8" scope="colgroup">Pourcentage de complétion</th>
</tr>
<tr>
<th scope="col">`start_date`</th>
<th scope="col">`building:flats`</th>
<th scope="col">`heating`</th>
<th scope="col">`architect`</th>
<th scope="col">`renovated:architect`</th>
<th scope="col">`building:levels`</th>
<th scope="col">`roof:levels`</th>
<th scope="col">`roof:shape`</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a href="https://citederriere.ch">Coopérative Cité Derrière</a>
</td>
<td>68%
</td>
<td>51%
</td>
<td>46%
</td>
<td>69%
</td>
<td>0%
</td>
<td>82%
</td>
<td>53%
</td>
<td>49%
</td>
</tr>
<tr>
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
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
Coopérative d&#39;habitation des employés du rail (CHER)
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>✅
</td>
<td>25%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://jardinsdelapaix.ch/">Coopérative d&#39;habitation Les Jardins de la Paix</a>
</td>
<td>71%
</td>
<td>43%
</td>
<td>43%
</td>
<td>14%
</td>
<td>N/A
</td>
<td>✅
</td>
<td>14%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
Coopérative d&#39;habitation Rhône-Arve Pommier
</td>
<td>0%
</td>
<td>0%
</td>
<td>✅
</td>
<td>✅
</td>
<td>N/A
</td>
<td>✅
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
Coopérative d&#39;habitations groupées des Liaudes
</td>
<td>✅
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://www.codha.ch/">Coopérative de l’habitat associatif (CODHA)</a>
</td>
<td>74%
</td>
<td>40%
</td>
<td>80%
</td>
<td>✅
</td>
<td>N/A
</td>
<td>64%
</td>
<td>14%
</td>
<td>14%
</td>
</tr>
<tr>
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
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://www.cheri-riviera.ch/">Coopérative des cheminots de la Riviera</a>
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://cll-lutry.ch">Coopérative du logement Lutry (CLL)</a>
</td>
<td>✅
</td>
<td>0%
</td>
<td>✅
</td>
<td>0%
</td>
<td>N/A
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
Coopérative I6 (I6)
</td>
<td>✅
</td>
<td>✅
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>✅
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://www.cooperative-voisinage.ch/">Coopérative Voisinage</a>
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://ecopolis.ch/">Ecopolis</a>
</td>
<td>✅
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
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
<a href="https://www.logement-ideal.ch">Logement Idéal</a>
</td>
<td>2%
</td>
<td>47%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>38%
</td>
<td>28%
</td>
<td>24%
</td>
</tr>
<tr>
<td>
<a href="https://www.charmontey.ch/">Société Coopérative d’Habitation Charmontey</a>
</td>
<td>0%
</td>
<td>69%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>8%
</td>
<td>8%
</td>
<td>8%
</td>
</tr>
<tr>
<td>
Société coopérative d’habitation Cité des Philosophes
</td>
<td>14%
</td>
<td>14%
</td>
<td>14%
</td>
<td>14%
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
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://la-maison-ouvriere.ch/">Société coopérative d’habitation La Maison Ouvrière</a>
</td>
<td>93%
</td>
<td>93%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>78%
</td>
<td>74%
</td>
<td>89%
</td>
</tr>
<tr>
<td>
<a href="http://lapaix.ch/">Société coopérative d&#39;habitation La Paix</a>
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
<td>
<a href="https://schl.ch/">Société coopérative d&#39;habitation Lausanne (SCHL)</a>
</td>
<td>96%
</td>
<td>73%
</td>
<td>95%
</td>
<td>0%
</td>
<td>0%
</td>
<td>69%
</td>
<td>61%
</td>
<td>68%
</td>
</tr>
<tr>
<td>
Société Coopérative d&#39;habitation Morges
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>63%
</td>
<td>63%
</td>
<td>88%
</td>
</tr>
<tr>
<td>
<a href="https://schpully.ch">Société coopérative d&#39;habitation Pully (SCHP)</a>
</td>
<td>✅
</td>
<td>✅
</td>
<td>50%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>50%
</td>
<td>0%
</td>
<td>50%
</td>
</tr>
<tr>
<td>
<a href="https://schlechene.ch">Société coopérative d&#39;habitations Le Chêne</a>
</td>
<td>✅
</td>
<td>93%
</td>
<td>0%
</td>
<td>0%
</td>
<td>N/A
</td>
<td>43%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
<tr>
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
<td>0%
</td>
<td>0%
</td>
<td>0%
</td>
</tr>
</tbody>
</table>

### Gestionnaires

<table>
<thead>
<tr>
<th rowspan="2" scope="col">Nom (abbréviation)</th>
<th colspan="8" scope="colgroup">Pourcentage de complétion</th>
</tr>
<tr>
<th scope="col">`start_date`</th>
<th scope="col">`building:flats`</th>
<th scope="col">`heating`</th>
<th scope="col">`architect`</th>
<th scope="col">`renovated:architect`</th>
<th scope="col">`building:levels`</th>
<th scope="col">`roof:levels`</th>
<th scope="col">`roof:shape`</th>
</tr>
</thead>
<tbody>
<tr>
<td>
Logement Social Romand (LSR)
</td>
<td>6%
</td>
<td>4%
</td>
<td>6%
</td>
<td>0%
</td>
<td>0%
</td>
<td>39%
</td>
<td>22%
</td>
<td>16%
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
- [`renovated=`](https://taginfo.openstreetmap.org/keys/renovated) -
  \[balise de facto\] date d’achèvement de la rénovation
- [`renovated:architect=`](https://taginfo.openstreetmap.org/keys/renovated%3Aarchitect)
  \[tag de facto\] - nom de l’architecte qui a dirigé la rénovation

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
