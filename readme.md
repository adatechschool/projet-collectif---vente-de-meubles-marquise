Installation de Express
Installation de MySQL

Importation des modules express et mysql.
Création d'une instance d'Express appelée app.
Configuration de la connexion à la base de données MySQL en utilisant les informations de l'hôte, de l'utilisateur et du mot de passe.
Établissement de la connexion à la base de données en utilisant connection.connect().
Utilisation du middleware express.json() pour analyser les données JSON envoyées dans le corps des requêtes.
Utilisation d'un middleware pour gérer les en-têtes CORS afin d'autoriser les requêtes provenant de différents domaines.
Définition d'une route GET /api/stuff qui renvoie une liste statique d'objets stuff au format JSON.
Export de l'instance d'Express (app) pour être utilisée dans d'autres fichiers.

Cela crée un serveur qui écoute sur le port par défaut (3000) et répond aux requêtes GET sur l'endpoint /api/stuff en renvoyant la liste d'objets stuff.

Veuillez noter que la connexion à la base de données est établie, mais aucune requête SQL n'est effectuée dans cet exemple. Vous devrez ajouter des routes supplémentaires et des requêtes SQL appropriées pour interagir avec votre base de données MySQL en fonction de vos besoins spécifiques.

En ce qui concerne le INSERT : 

fieldCount: Le nombre de champs (colonnes) dans le résultat.
affectedRows: Le nombre de lignes affectées par la requête INSERT INTO, qui devrait être 1 dans votre cas puisque vous insérez une seule ligne.
insertId: L'ID généré lors de l'insertion de la ligne dans la table. Dans votre cas, il est égal à 1.
serverStatus: Le statut du serveur MySQL.
warningCount: Le nombre d'avertissements générés par la requête.
message: Un message supplémentaire du serveur MySQL.
protocol41: Indique si le protocole utilisé est le protocole MySQL 4.1 ou supérieur.
changedRows: Le nombre de lignes modifiées par la dernière requête sur le serveur.

Dans le fichier password.env => mettez votre mdp pour vous connecter à la bdd

multer est un package de gestion de fichiers. Sa méthode diskStorage() configure le chemin et le nom de fichier pour les fichiers entrants. npm install express multer