document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire

    const email = document.getElementById("username").value;
    const mdp = document.getElementById("password").value;
    const errorElement = document.getElementById("error-message"); // Élément HTML pour afficher le message d'erreur

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mdp }),
      });

      if (response.ok) {
        console.log("vous êtes connecté!"); // non visible sur la console car redirection
        // Rediriger vers la page de tableau de bord ou effectuer toute autre action souhaitée
        window.location.href = "/index.html";
      } else {
        // Récupérer et afficher le message d'erreur de la réponse
        const errorMessage = await response.text();
        errorElement.textContent = errorMessage; // Afficher le message d'erreur sur la page web
        errorElement.style.color = 'red'; // Définir la couleur du texte en rouge
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  });
