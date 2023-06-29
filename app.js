require("dotenv").config({ path: "./passwordhide/password.env" });

const dbPassword = process.env.DB_PASSWORD;
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json()); // permet de convertir tout auto en format json
app.use(cors());


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

// Mise à jour d'un produit dans la base de données
app.put('/produits', (req, res) => {
  const { nom, prix ,description,stock,date} = req.body;
  const { id } = req.params;
  const query = 'UPDATE produits SET nom = "a", prix = 14, description = "azea", stock= 1, date= 12/11/2211 WHERE id = 1'; // remplacer par des variables
  connection.query(query, [id,nom,description, prix,stock, date], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du produit :', err);
      res.status(500).send('Erreur lors de la mise à jour du produit');
      return;
    }
    res.send('Produit mis à jour avec succès');
  });
});

// Suppression d'un produit de la base de données
app.delete('/produits', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE produits FROM produits WHERE id = 2';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression du produit :', err);
      res.status(500).send('Erreur lors de la suppression du produit');
      return;
    }
    res.send('Produit supprimé avec succès');
  });
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

app.post("/utilisateurs", (req, res) => {
  const email = req.body.email;
  const mdp = req.body.mdp;
  connection.query("INSERT INTO utilisateurs (email, mdp)VALUES (?,?)"),
    [email, mdp],
    (err, result) => {
      console.log(err);
    };
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

module.exports = app;
