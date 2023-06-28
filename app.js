require("dotenv").config({ path: "./passwordhide/password.env" });

const dbPassword = "";
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser"); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbPassword,
  database: "marquise",
});
//Connection a la base de donnée
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

app.get("/utilisateurs", (req, res, next) => {
  connection.query(
    "SELECT * FROM utilisateurs",
    function (error, results, fields) {
      if (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
        res
          .status(500)
          .json({ error: "Erreur lors de la récupération des utilisateurs" });
      } else {
        const jsonResults = JSON.parse(JSON.stringify(results));
        res.json(jsonResults);
      }
    }
  );
});

app.get("/produits", (req, res, next) => {
  connection.query("SELECT * FROM produits", function (error, results, fields) {
    if (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des produits" });
    } else {
      const jsonResults = JSON.parse(JSON.stringify(results));
      res.json(jsonResults);
    }
  });
});

// Ajouter un produit à la base de donnée
app.post("/produits", (req, res, next) => {
  connection.query(
    "INSERT INTO produits (nom, description, prix, stock, date) VALUES ('abc', 'descript', 123, 0, '12/12/2022')",
    function (error, results, fields) {
      if (error) {
        console.error("Erreur lors de l'insertion des produits :", error);
        res
          .status(500)
          .json({ error: "Erreur lors de l'insertion des produits" });
      } else {
        res.json(results);
      }
    }
  );
});
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.post("/api/stuff", (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: "objet créé",
//   });
// });

app.get("/produits", (req, res, next) => {
  connection.query("SELECT * FROM produits", function (error, results, fields) {
    if (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des produits" });
    } else {
      const jsonResults = JSON.parse(JSON.stringify(results));
      res.json(jsonResults);
    }
  });
});

//############################# LOGIN ################################

// Route vers la page statique login (page html du front)
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

// Route vers l'api login  requete post avec username et password depuis la page html
//afin de parser la requete => installer bodyparser  => npm install express body-parser
app.post("/login", (req, res) => {
  // recuperer le login et pass depuis la requeste post
  let username = req.body.username;
  let password = req.body.password;

  connection.query(
    `SELECT * FROM utilisateurs WHERE email='${username}' AND mdp='${password}'`,
    function (error, results, fields) {
      //si erreur retourner code 500 avec message
      if (error) {
        res
          .status(500)
          .json({
            error: "Erreur d'authentification, veuillez vérifier vos données !",
          });
      //sinon si requete sql ok mais resultat vide => utilisateur invalide ; json code KO
      } else if (!results || Object.keys(results).length === 0) {
        const jsonResults = JSON.parse('{"auth_status": "KO"}');
        res.json(jsonResults);
      //sinon requete ok et resultat non vide => utilisateur valide ; JSON OK //TODO amelieorer la securité avec du cryptage
      } else {
        const jsonResults = JSON.parse('{"auth_status": "OK"}');
        res.json(jsonResults);
      }
    }
  );
});

//####################################################################

module.exports = app;
