# redecolle

# Plugin
After each modifications in it, you have to call `npm run build` in the terminal to build the folder with all in it starting in chacha-gutenberg plugin

# Theme
It is using Gulp to compile SASS and JS. Use `gulp all:watch` or `gulp default` or just `gulp` starting in chacha theme

# Complete projet
It is using Gulp that will handle the plugin and the theme to compile, minify, combine and send some files by ftp. Use gulp all:watch or gulp default starting from the project main folder

# Create new block
If you want to create a new block, use the gulp like this: `gulp create:block --name test`

# Create new customposttype
If you want to create a new customposttype, use the gulp like this: `gulp create:customposttype --name test`

# Compatibility
If you're running on OSX, the project will build without issue with `node version v16.15.0` and `npm v8.5.5`. You need to use `gulp CLI version 2.3.0 and Local version 4.0.2`

# i18n
Pour la traduction, on doit aller dans le dossier languages depuis le terminal en bas et utiliser la fonction suivante: npx po2json chacha-gutenberg-xx_XX.po chacha-gutenberg-xx_XX-chacha-gutenberg-bases-block-editor.json -f jed1.x où xx_XX est la langue désirée. Cependant, nous devons avoir traduits le contenu depuis le fichier .pot vers un fichier de langue .po/.mo. La partie après la langue est importante afin de bien lier le fichier json de langue vers son fichier JS respectif.

# Points travaillés

### Fichier GULP
Afin de compiler et envoyer les fichiers automatiquement, j'ai dû apprendre à programmer un fichier GULP. J'ai fait plusieurs heures de recherche et d'apporter les fonctionnalités nécessaires afin que le fichier fonctionne de manière automatique. Aussi, j'y ai ajouté la création d'un bloc depuis un template de base qui sert juste à ça et n'est jamais compilé.

### Éditeur Gutenberg
En CSS, pour les formats d'écran, on va souvent utiliser @media afin de cibler des formats d'écrans pour changer la réaction du visuel. Cependant, dans l'éditeur, étant donné que le view switcher ne fait que diminuer la largeur d'un bloc, @media devient obsolète. J'ai donc du passer quelques heures à développer une solution afin de permettre de voir la réaction du site tout dépend du format et tout ça, en temps réel.

### Traductions
J'ai passé quelques heures aussi à comprendre la traduction des blocs. Malheureusement, ça ne fonctionne pas encore mais j'ai mis ça de côté. Étant donné qu'on parle d'un aspect non pertinent à court terme, on peut régler ce trouble plus tard.

### Structure
Au début, j'avais commencé avec une structure X qui ne fonctionnait pas bien. J'ai finalement tombé sur un template que j'ai repris un peu afin d'arriver au résultat actuel. J'ai passé quelques heures ici aussi.

### CSS depuis configuration
Dans les exemples, les valeurs CSS étaient configurées directement dans les éléments. Cependant, cette méthode n'est pas bien vue par Google et les tests d'optimisation. Afin d'avoir une belle structure, j'ai développé un fonctionnement permettant de passer les valeurs de variable dans des variables CSS qui seront utilisés dans le fichier CSS et, comme ça, nous avons le meilleur fonctionnement possible.

### Plugin Gutenberg
Tout ce qui touche Custom Post Type et les blocs se trouvent dans un plugin appartenant au client. De cette manière, peu importe le thème utilisé, ils ne perdent pas le noyau du site Web.

# Troubles

### Traductions
Toujours pas réglé mais j'ai mis du temps sur ce dossier. On va devoir le faire afin d'avoir les textes en français. J'ai du support possible pour cette partie.
J'ai finalement trouvé. Dans le fichier JSON généré, on doit ajouter le nom du script JS après la langue. Ex. chacha-gutenberg-fr_FR-chacha-gutenberg-bases-block-editor.json

### Image
J'avais des problèmes avec la récupération de l'image. Pourtant, je suivais bien les guides trouvés mais, au final, le trouble était que la propriété à lire depuis l'objet était complètement différent. J'ai passé un peu d'heures sur ce dossier.

### Refresh Editor crash the block
Je n'ai pas trouvé encore pourquoi. J'ai passé quelques heures, lu des forums, regardé avec du support sur Slack mais, au final, je dois trouver le meilleur support possible pour m'aider. En gros, l'erreur est que la comparaison du body versus le résultat de save retourne toujours une différence et qui le fait planter.
Finalement, le problème provenait de la déclaration de la variable. Dans le selector, on doit assigner une classe afin d'assurer une différence entre chaque élément P.

### GULP
J'ai eu quelques problèmes avec la compilation. Cette partie a pris quand même du temps à concevoir mais au final, ceci sera bon pour les projets futurs.

# Apprentissage
Dans ce projet, il est important de bien comprendre SASS, ReactJS ainsi que Gutenberg. Le fichier GULP est monté avec NodeJS donc, si vous avez besoin de modifier ce fichier, vous devez connaitre ce language basé sur Javascript.

# Code Standards
Dans le code Javascript, le nom des variables seront sous forme de camelCase. Pour le SASS, les classes et ID, nous devons utiliser le tiret entre les éléments de la variable.