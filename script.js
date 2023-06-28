const div = document.getElementById("productList");
document
  .getElementById("fetchProductsBtn")
  .addEventListener("click", async function () {
    console.log("entrée");
    const data = await fetch("http://localhost:3000/produits"); // fetch bdd
    console.log(data);
    const result = await data.json(); // Conversion format JSON
    div.innerHTML = JSON.stringify(result[0]);
  });
// document
//   .getElementById("fetchProductsBtn")
//   .addEventListener("click", function () {
//     fetch("http://localhost:3000/produits")
//       .then((response) => response.json())
//       .then((data) => {
//         // Traitez les données des produits ici
//         div.innerHTML = data;
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des produits :", error);
//       });
//     fetch("http://localhost:3000/utilisateurs")
//       .then((response) => response.json())
//       .then((data) => {
//         // Traitez les données des produits ici

//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des produits :", error);
//       });
//   });
