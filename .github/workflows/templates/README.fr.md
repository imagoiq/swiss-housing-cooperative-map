# 🏘️ Carte des coopératives d'habitation en Suisse

Saviez-vous que les coopératives d'habitation sont une spécialité en Suisse depuis plus de 100 ans ? [^1] Il s'agit même d'une tradition vivante [^2] !

D'après mes recherches, aucune carte des coopératives d'habitation n'existe pour l'ensemble des cantons [^3]. Ceci est un projet expérimental ayant pour but de cartographier et de lister les immeubles des coopératives d'habitation de Suisse avec un maximum de détails.

Ce projet n'a pas pour but de jouer les intermédiaires ou de construire un nouvel outil, mais de documenter et de montrer ce qui est possible, quelles sont les limites en utilisant OpenStreetMap et Wikidata ainsi que d'utiliser un minimum d'outils et avec le minimum de maintenance possible.

Pour l'instant, le nom de ce projet peut être trompeur ou en tout cas un peu décevant, car la plupart des données concernent la Suisse romande. N'hésitez donc pas à ajouter d'autres données ailleurs en Suisse !

## Les données

Pour l'instant, les données peuvent être vérifiées et affichées sur [umap](https://umap.openstreetmap.fr/fr/map/cooperative-dhabitations-en-suisse_1140470).

### Qualité des données

!include`raw="html"` /tmp/summary_table.fr.html

Pour en savoir plus sur chaque colonne, consultez [l'aide-mémoire sur les contributions] (https://github.com/imagoiq/swiss-housing-cooperative/blob/main/CONTRIBUTE.md).

[Voir la liste complète des propriétaires/opérateurs](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/Data_quality.md)

#### Validation

Pour garantir la qualité des données, certaines validations sont générées :

- [Liste des adresses dupliquées et incomplètes en JSON](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/checks/buildings_errors.json) ([RSS](https://github.com/imagoiq/swiss-housing-cooperative-map/commits/main/checks/buildings_errors.json.atom))
- [iste des propriétaires/opérateurs sans identifiant wikidata en JSON](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/checks/buildings_errors.json) ([RSS](https://github.com/imagoiq/swiss-housing-cooperative-map/commits/main/checks/buildings_errors.json.atom))

### Utiliser les données

- TSV (utilisable dans votre tableur)
  - [Liste des propriétaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.tsv)
  - [Liste des gestionnaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.tsv)
  - [Pour un propriétaire/gestionnaire en particulier](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity)
- GeoJSON (pour les applications web ou l'analyse de données)
  - [Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_buildings.geojson)
    -  [Pour un propriétaire/gestionnaire en particulier](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/identity)
  - [Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_areas.geojson)
- JSON (pour l'analyse de données)
  - [Liste des propriétaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_owners.json)
  - [Liste des gestionnaires de type coopérative](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/output/swiss_housing_cooperative_list_operators.json)

## Observer les changements

Utilisez les liens [RSS](https://www.journaldunet.fr/web-tech/guide-de-l-entreprise-digitale/1125572-rss-qu-est-ce-que-c-est/) pour suivre les changements pour la validation des données (voir ci-dessus), pour chaque opérateur/propriétaire ([voir le tableau de qualité des données des propriétaires/opérateurs](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/Data_quality.md)) ou pour n'importe quel fichier de ce dépôt en ajoutant `.atom` à la fin du fichier.

## Contribuer

Toutes les données proviennent directement d'[OpenStreetMap](https://www.openstreetmap.org). Si vous êtes débutant, laissez-vous guider via [learnosm.org](https://learnosm.org/fr/) ou demandez de l'aide.

## Schéma

Il n'existe pas (encore) de modèle spécialement pour les coopératives de logement, mais la plupart des clés proposées ici sont définies dans le wiki d'OpenStreetMap. Celles issues de taginfo ou de ma propre imagination sont déclarées sur cette page avec \[balise de facto].

Pour cibler les coopératives de logement, la requête prend en compte les éléments avec la clé `owner=*` et `operator=*` qui sont associées avec `building|building:part|building:use=residential|apartments|dormitory|sheltered_housing`. Cela permet d'éviter d'associer les coopératives culturelles et d'arts liées à un bâtiment (comme la [Space Alliance Coopérative](https://www.openstreetmap.org/way/38326020)). Probablement qu'à l'avenir, il faudra utiliser un filtre encore plus détaillé.
À noter que parfois, le bâtiment est à la propriété d'une coopérative, parfois ce n'est pas le cas et c'est une coopérative qui gère le bâtiment, mais le bâtiment appartient à une société privée. L'utilisation des deux balises `operator` et `owner` permet d'identifier ces cas de figure.

Les quartiers entièrement fondés par une coopérative sont également pris en compte dans les données à l'aide de la clé `landuse=residential`. Aussi, il est bon de rajouter les balises sur chaque bâtiment pour pouvoir les comptabiliser par exemple.

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

Si le bâtiment est géré par une coopérative, un autre type d'entreprise ou une autre coopérative :

- [`operator=*`](https://wiki.openstreetmap.org/wiki/FR:Key:operator) - Nom
- [`operator:wikidata=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Wikidata ID
- [`operator:short=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Short name
- [`operator:abbr=*`](https://wiki.openstreetmap.org/wiki/Key:operator#Further_details) - Abbréviation du nom

#### Bâtiments

- [`architect=`](https://wiki.openstreetmap.org/wiki/FR:Key:architect) - nom de l'architecte qui a dirigé la construction
- [`start_date=`](https://wiki.openstreetmap.org/wiki/FR:Key:start_date) - date d'achèvement de la construction
- [`building:flats=`](https://wiki.openstreetmap.org/wiki/FR:Key:building:flats) - nombre d'appartements dans un bâtiment au total (inclus les clusters)
- [`building:flats:cluster`](https://taginfo.openstreetmap.org/keys/building%3Aflats%3Acluster) \[tag de facto] - nombre d'appartements de type cluster
- [`heating=gas|district_heating`](https://wiki.openstreetmap.org/wiki/Key:heating) ou autres valeurs \[de facto] [`heat_pump|oil|pellet|woodchip|biogas`](https://taginfo.openstreetmap.org/keys/heating#values) - Type de chauffage

Un peu plus expérimental :

- [`building:condition=renovated`](https://wiki.openstreetmap.org/wiki/Key:building:condition) - indique que le bâtiment a été rénové
- [`last_renovation=`](https://taginfo.openstreetmap.org/keys/last_renovation) - \[balise de facto] date d'achèvement de la dernière rénovation
- [`architect:renovation=`](https://taginfo.openstreetmap.org/keys/architect%3renovation) \[tag de facto] - nom de l'architecte qui a dirigé la dernière rénovation

Voir également [la page Buildings sur le wiki](https://wiki.openstreetmap.org/wiki/FR:Key:building#Attributs_additionnels) pour encore plus de tags.

#### Type de loyers (expérimental)

Les coopératives d'habitation sont souvent créées pour ajouter des logements abordables sur le marché, mais pas toujours.
Pour distinguer les bâtiments, il n'existe actuellement aucune méthode standard dans OpenStreetMap. D'après mes recherches, les balises [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) \[balise de facto] ont été utilisées 12 fois (janvier 2025), ce qui n'est pas suffisant pour faire une généralisation.

Je propose quelques balises expérimentales à ajouter ci-dessous qui sont basées sur le concept de logement abordable en Suisse et particulièrement dans le Canton de Vaud. Je n'ai pas fait assez de recherches pour savoir si cela peut être généralisé et utilisé dans d'autres pays.

En Suisse, il existe deux types de logements abordables :

- Logement subventionné ou à loyer modéré : l'État donne de l'argent pour construire un nouveau logement ou le rénover. Cela a pour effet de faire baisser les loyers. Pour ce cas d'utilisation, j'ai utilisé [`subsidized=yes`](https://taginfo.openstreetmap.org/keys/subsidized) \[balise de facto].
- Logement à loyer abordable : l'État limite le montant d'un loyer (avec divers outils). Ce cas d'utilisation est un peu différent du premier, car il peut s'appliquer à certains appartements au sein d'un immeuble. Je ne pense pas qu'il soit nécessaire de compter les appartements pour le moment. Je propose d'utiliser [`rent:regulation=`](https://taginfo.openstreetmap.org/keys/rent%3Aregulation) \[balise de facto] avec `yes` ou `only` pour différencier un immeuble ou tous les appartements ont un loyer régulé ou quelques un.

#### Divers

Très souvent, les coopératives d'habitation possèdent des équipements supplémentaires :

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

Voici les étapes pour récupérer les données GeoJSON :

1. Requêtes sur l'API Overpass
1. Conversion des données en GeoJSON avec `osmtogeojson`
1. Ajout des addresses manquantes avec l'API Nominatim pour les chemins dans OpenStreetMap qui ne sont pas taggés avec une adresse (ex. quand l'adresse se trouve dans un nœud séparé)
1. Ajout de plus de données sur les propriétaires/gestionnaires depuis Wikidata

### Mises à jour

[![](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml/badge.svg)](https://github.com/imagoiq/swiss-housing-cooperative/actions/workflows/main.yml)

Chaque dimanche, les fichiers sont mis à jour automatiquement via un [workflow Github](https://github.com/imagoiq/swiss-housing-cooperative/blob/main/.github/workflows/main.yml).

### Requêtes

- [Requête Overpass - Bâtiments](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)
- [Requête Overpass - Quartiers](https://github.com/imagoiq/swiss-housing-cooperative/blob/4594245e13e979132ae84a42135ac936a7d568b8/.github/workflows/query/overpass_query_buildings#L4-L7)

### Dépendances

- [Node.js](https://nodejs.org)
- [osm2geojson](https://github.com/tyrasd/osmtogeojson)

#### Optionnelles

##### Inclusion des tableaux sur la qualité des données dans ce fichier

- [pandoc](https://pandoc.org/installing.html)
- [pandoc-include](https://github.com/DCsunset/pandoc-include)
- [ejs](https://ejs.co/)

## Plus d'infos sur le sujet des coopératives d'habitation

[^1]: [Isabelle Rey-Lefebvre, Les coopératives d’habitants en Suisse, un modèle contre la spéculation immobilière, Le Monde, 20 septembre 2022](https://www.lemonde.fr/economie/article/2022/09/20/habitat-ecologique-convivial-et-antispeculatif-le-modele-suisse-des-cooperatives-d-habitants_6142336_3234.html)
[^2]: [Les traditions vivantes en Suisse, Coopératives d'habitation](https://www.lebendige-traditionen.ch/tradition/fr/home/traditions/cooperatives-d_habitation.html)
[^3]: À Genève, la Fondation pour la promotion du logement bon marché et de l'habitat coopératif (FPLC) fournit une [carte pour le canton de Genève](https://fplc.ch/cartes/cooperatives.htm).

- [Pattaroni Luca, Marmy, Vanessa, Les coopératives de logement dans le Canton de Vaud, EPFL/SCL, octobre 2016](https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/161013_etude-cooperatives-bd.pdf)
- [Temps Présent, Coopératives d'habitants, plus belle la vie?, RTS, 26 avril 2018](https://www.rts.ch/play/tv/temps-present/video/cooperatives-dhabitants-plus-belle-la-vie?urn=urn:rts:video:9536679&showUrn=urn%3Arts%3Ashow%3Atv%3A9536679)
- [Mattia Lento, L’habitat participatif en Suisse: épargne et nouvelles formes de sociabilité urbaine, Swissinfo, 5 octobre 2018](https://www.swissinfo.ch/fre/economie/a-moiti%C3%A9-locataires-%C3%A0-moiti%C3%A9-propri%C3%A9taires_l-habitat-participatif-en-suisse-%C3%A9pargne-et-nouvelles-formes-de-sociabilit%C3%A9-urbaine/44431666)
- [Office fédéral du logement OFL,  Coopératives d’habitation du personnel de la Confédération, admin.ch](https://www.bwo.admin.ch/bwo/fr/home/wohnraumfoerderung/wbg-bundespersonal.html)