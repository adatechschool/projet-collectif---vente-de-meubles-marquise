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
