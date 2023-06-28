require('dotenv').config({ path: 'password.env' });

const dbPassword = process.env.DB_PASSWORD;
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

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

module.exports = app;
