const express = require("express");
const mysql = require("mysql");
const app = express();

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alankalkan",
  database: "marquise",
});
//Connection a la base de donnée
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

connection.query(
  "SELECT utilisateurs.id as 'utilisateurs_id', utilisateurs.nom as 'utilisateurs_nom', utilisateurs.prenom as 'utilisteur_prenom' FROM utilisateurs",
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    // Vous pouvez faire quelque chose avec les résultats ici
  }
);

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

app.get("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      nom: "Ernser",
      email: "Jennie.Koss50@yahoo.com",
      mdp: "Vj7khbwcV3wClRB",
      identifiant: "1",
    },
    {
      nom: "Hansen",
      email: "Viva_Hackett@hotmail.com",
      mdp: "eHYhpZSNYZvYhXC",
      identifiant: "2",
    },
    {
      nom: "Brown",
      email: "Darrion92@yahoo.com",
      mdp: "GCZRZ63zAQBbRVk",
      identifiant: "3",
    },
  ];

  res.status(200).json(stuff);
});

module.exports = app;
