document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    const adresse = document.getElementById("adresse").value;

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, prenom, email, mdp, adresse }),
    });
    
    if (response.ok) {
          alert("Inscription réussie");
          // Rediriger vers la page de connexion ou effectuer toute autre action souhaitée
          window.location.href = "/Authentification/connexion.html";
        } else {
          alert("Erreur lors de l'inscription");
        }
      }catch(error) {
        console.error("Erreur:", error);
      }
  });
