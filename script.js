const div = document.getElementById("productList");

document
  .getElementById("fetchProductsBtn")
  .addEventListener("click", function () {
    fetch("http://localhost:3000/produits")
      .then((response) => response.json())
      .then((data) => {
        // Traitez les données des produits ici
        div.innerHTML = data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
    fetch("http://localhost:3000/utilisateurs")
      .then((response) => response.json())
      .then((data) => {
        // Traitez les données des produits ici

        console.log(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  });
