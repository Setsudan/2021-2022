# Projet de fin d'année

Créer une pwa mobile-first

## Commandes pré-faites:

Pour faciliter l'accès à chacun des taches on été pré-faites.
Ces taches peuvent êtres retrouvées dans `.vscode/tasks.json`
### Pour utliser les tâches

`CTRL+SHIFT+P` ou `CMD+SHIFT+P`

**"Run task"** :

- start : Installe/Mets à jour les dépences et lance le serveur
- dev : lance le serveur
- install : mets à jours les dépendances
- build : Créer un dossier avec les fichiers finaux (pas nécéssaire pour le déploiment dans notre cas)

Aucun logiciel tier n'est nécéssaire pour le bon fonctionnement de l'app
Supabase est un serveur cloud en ligne, il se peut que les serveurs soit HS mais ça serait un gros coup de mauvaise chance.
#### Que faire si supabase est capout

Heuresement on a pensé à cette éventualité, mais on a pas implémenté la solution à 100%
Si jamais supabase n'est plus en ligne (Si la db n'a pas été appelé depuis + de 2 semaine la db se mets automatiquement en cold sleep).
Prisma permettera de "remplacer" supabase temporairement
dans `prisma/schema.prisma` il y a un model de la base de donnée
Cela permet de dupliquer les tables (sans les données) d'une db à un autre ou de créer des dummy data avec `npx prisma studio`
On va essayer de finir la solution mais ce n'est pas garanti

## Dépendences : 

- ReactJs(Vite)
- React Router Dom
- Supabase
- vite-plugin-pwa

## Client

Jeune chambre économique de Paris 
#tech4good

>Mettre le numérique au service des petis commerçant et artisans

## Solutions proposé

Application de livraison pour les petits commercant

## Structure du dossier

```
|- .github
|     |-workflow (Deprecated)
|- .vscode
|     |-tasks.json -> Taches à utiliser pour le projet
|- prisma
|   |-> schema.prisma -> au cas ou supabase fonctionne pas
|- public
|     |-Fichiers nécéssaire pour le bon fonctionnement de la PWA
|-src
|    |-api
|    |    
|    |-components
|    |     |
|    |     |-> Client
|    |     |   |
|    |     |   |-> Nearby.jsx (Pour les magasins proches)
|    |     |   |
|    |     |   |-> Popular.jsx (Pour les magasins populaire)
|    |     |   |
|    |     |   |-> Recent.jsx (Pour les magasins déjà visité récemment)
|    |     |   
|    |     |-> NavBar.jsx (Navbar pour les différentes pages)
|    |     |
|    |     |-> CheckoutShop.jsx (Components pour la liste des commandes)
|    |     |
|    |     |-> shopCard.jsx (Components pour la liste des magasins)
|    |-func
|    |     |-> fonctions pouvant être utiliser pour la pwa
|    |-img -> icones/images pour le projet censé être remplacé plus tard
|    |-pages
|    |    |-> auth -> Pour l'authentification
|    |    |
|    |    |-> Client -> Pour les utilisateurs lambda
|    |    |
|    |    |-> DeliveryGuy -> Pour les livreurs
|    |    |
|    |    |-> Shop -> Pour les magasins
|    |
|    |-styles
|    |    |->index.scss -> Fichier global de la stylisation
|    |    |
|    |    |->index.css -> résultat du scss
|    |
|    |-main.jsx -> Fichier principale du projet
|    |
|    |-Routes.jsx -> Router du projet avec (pour l'instant fausse)détection de la connection
|
|-.gitattributes/gitignore -> Fichier pour le repo github
|
|- index.html -> Racine du projet
|
|- package.json/package-lock.json -> pour les nodes_modules
|
|- vercel.json -> Pour le deploiment sur vercel
|
|- vite.config.js -> config de vite
```

## Structure des fichiers

La plupart des fichiers on des commentaires sauf si leur nom et les fonctions dedans comporte un nom qui dit ce qu'elles font.
Dans certains fichiers, notemments des composants, la première partie est commentée, c'est le code et l'explication de ce qu'on devrait faire
pour que l'application soit à 100% fonctionnel.
Le code est présent au cas où supabase (notre db en ligne) ne fonctionne pas où que nous n'avons pas eu le temps de mettre la db à niveaux

**Pour résumé**
Chaque fichiers est commenté si le code est long ou que le nom n'est pas évidents pour comprendre ce que fait le contenu du fichiers
Certains fichiers on des composant entier commenté et ces derniers sont le résultat de ce que le groupe aurait du faire pour que l'application
soit à 100% fonctionnel et non pas que du graphique

## Variables environnementale

Vous pouvez vous savoir où mettre le .env dans 'Structure du dossier'

```.env
VITE_DB_URL=https://vrhpddolravjrcrtxbor.supabase.co/
VITE_DB_TOKEN=[Token dans le mail]
```
## Equipe 6

| Nom      | Prénom   |
| -------- | -------- |
| Videau   | Ethan    |
| ARUMAINATHAN | Rijenth  |
| Bakayoko | Gaossou  |
| Ha       | Adrien   |
| SOUCI      | Mehdi    |
| BENAMARA      | Farid    |
| Pivert   | Fabrice  |
| Lesoing  | Valentin |
| DOBROVOLSKYY       | Arsène   |
| VOJINOVIC       | Veljko   |
