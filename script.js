
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



