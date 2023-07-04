import React from "react";
import { useState, useEffect, useRef } from "react"; // useRef sert à pouvoir utiliser des références vers des éléments du DOM
import { useNavigate } from "react-router-dom";


const Inscription = () => {
  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const adresseRef = useRef(null);
  const cpRef = useRef(null);
  const cpErrorRef = useRef(null);
  const villeRef = useRef(null);
  const paysRef = useRef(null);
  const errorRef = useRef(null);
  const navigate = useNavigate();
  const [selectedPays, setSelectedPays] = useState(""); // Variable d'état pour la sélection du pays
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handlePaysChange = (event) => {
    setSelectedPays(event.target.value); // Mettre à jour la variable d'état avec la valeur sélectionnée
  };

  const register = async (e) => {
    e.preventDefault();

    const nom = nomRef.current.value;
    const prenom = prenomRef.current.value;
    const email = emailRef.current.value;
    const mdp = passwordRef.current.value;
    const confirmMdp = confirmPasswordRef.current.value;
    const adresse = adresseRef.current.value;
    const cp = cpRef.current.value;
    const cpErrorElement = cpErrorRef.current;
    const ville = villeRef.current.value;
    const pays = selectedPays; // Utiliser la valeur sélectionnée de l'état pour le pays
    const terms = acceptTerms;
    const errorElement = errorRef.current;

    if (!acceptTerms) {
      errorElement.textContent =
        "Vous devez accepter les termes et la politique de confidentialité !";
      return;
    }

    if (mdp !== confirmMdp) {
      errorElement.textContent = "Les mots de passe ne correspondent pas!";
      return; // Arrêter l'exécution de la fonction si les mots de passe ne correspondent pas
    }

    if (isNaN(cp)) {
      cpErrorElement.textContent = "Le code postal doit être un nombre !";
      cpErrorElement.style.display = "block";
      return; // Arrêter l'exécution de la fonction si le code postal n'est pas un nombre
    }
    // else {
    //   cpErrorElement.style.display = "none";
    // }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          mdp,
          adresse,
          cp,
          ville,
          pays,
          terms,
        }),
      });

      if (response.ok) {
        console.log("inscription réussie !");
        alert("Inscription réussie");
        // window.location.href = "./pages/PageAccueil";
        navigate("/connexion"); // Déclenche la redirection
      } else {
        const errorMessage = await response.text();
        errorElement.textContent = errorMessage;
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };


  return (
    <div className="w-full mx-auto bg-white flex items-center justify-center my-12">
      <div className="w-3/4 max-w-xl h-fit border-2 rounded-lg shadow dark:border border-sky-700">
        <h2 className="text-center text-xl font-bold py-6">Créer un compte</h2>
        <form
          id="registerForm"
          className="mx-5 text-sm space-y-5"
          onSubmit={register}
        >
          <div className="flex flex-col my-4">
            <label
              htmlFor="prenom"
              className="text-base font-medium text-gray-900"
            >
              Prénom
            </label>
            <input
              ref={prenomRef}
              type="text"
              name="prenom"
              id="prenom"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="Votre prénom"
            />
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="nom"
              className="text-base font-medium text-gray-900"
            >
              Nom
            </label>
            <input
              ref={nomRef}
              type="text"
              name="nom"
              id="nom"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="Votre nom"
              required=""
            />
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900"
            >
              E-mail
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="nom@email.fr"
            />
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Pays
            </label>
            <select
              ref={paysRef}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-600 dark:focus:border-blue-700"
              onChange={handlePaysChange}
            >
              <option selected>Veuillez sélectionner votre pays</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="BE">Belgique</option>
              <option value="IT">Italie</option>
              <option value="ES">Espagne</option>
              <option value="LU">Luxembourg</option>
              <option value="NL">Pays-Bas</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="street-address"
              className="text-base font-medium text-gray-900"
            >
              Adresse n° et nom de rue
            </label>
            <input
              ref={adresseRef}
              type="street-address"
              name="street-address"
              id="street-address"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="116 Rue du Faubourg Saint-Martin"
            />
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="postal-code"
              className="text-base font-medium text-gray-900"
            >
              Code postal
            </label>
            <input
              ref={cpRef}
              type="postal-code"
              name="postal-code"
              id="postal-code"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="75010"
            />
            <p
              id="error-cp"
              ref={cpErrorRef}
              className="text-center text-red-500"
              style={{ fontSize: "18px" }}
            ></p>
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="city"
              className="text-base font-medium text-gray-900"
            >
              Ville
            </label>
            <input
              ref={villeRef}
              type="city"
              name="city"
              id="city"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="Paris"
            />
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900"
            >
              Mot de passe
            </label>
            <div className="relative flex items-center mt-2">
              <input
                ref={passwordRef}
                type="text"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
                placeholder="Saisissez votre mot de passe"
              />
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label
              htmlFor="password_confirmation"
              className="text-base font-medium text-gray-900"
            >
              Confirmation du mot de passe
            </label>
            <input
              ref={confirmPasswordRef}
              type="text"
              name="password_confirmation"
              id="password_confirmation"
              className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="Confirmer votre mot de passe"
            />
            <p
              id="error-message"
              ref={errorRef}
              className="text-center text-red-500"
              style={{ fontSize: "18px" }}
            ></p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember_me"
              id="remember_me"
              className="mr-2 focus:ring-0 rounded"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label htmlFor="remember_me" className="text-gray-700">
              J'accepte les{" "}
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                termes
              </a>{" "}
              et la{" "}
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                politique de confidentialité
              </a>
            </label>
          </div>
        
          <div className="my-4 flex items-center justify-center space-x-4 pb-8">
            <button
              type="submit"
              className="text-black bg-white border-2 border-black font-medium hover:text-white hover:bg-black rounded-lg px-8 py-2 hover:shadow-xl transition duration-150 uppercase"
            >
              Créer mon compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
