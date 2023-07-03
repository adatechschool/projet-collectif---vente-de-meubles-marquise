
const div = document.getElementById("productList");
document
  .getElementById("fetchProductsBtn")
  .addEventListener("click", async function () {
    console.log("entrée");
    const data = await fetch("http://localhost:3000/produits"); // fetch bdd
    console.log(data);
    const result = await data.json(); // Conversion format JSON
    div.innerHTML = JSON.stringify(result);
  });



const deletediv = document.getElementById("delete");

document.getElementById("deleteproduit").addEventListener("click", function () {
  const element = document.getElementById('deleteproduit');
  fetch('http://localhost:3000/produits/:123', { method: 'DELETE' })
      .then(() => element.innerHTML = 'Delete successful');// Simple DELETE request with fetch
  

});


