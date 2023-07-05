import React from "react";
import { useEffect, useRef } from "react"; // useRef sert à pouvoir utiliser des références vers des éléments du DOM
import { useNavigate } from "react-router-dom"; // sert à faire les redirection
//UseEffect permet d'exécuter du code en réponse à des changements dans le composant, tels que des mises à jour d'état, des changements de props ou des événements du cycle de vie.
import { useContext } from "react";
import { UserContext } from "./UserContext";


const Connexion = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errorRef = useRef(null);
  // const [loginState, setLoginState] = useState({ data: undefined ,userData: undefined});
  const navigate = useNavigate(); // État pour la redirection
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    const login = async () => {
      const email = emailRef.current.value;
      const mdp = passwordRef.current.value;
      const errorElement = errorRef.current;

      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, mdp }),
        });

        if (response.ok) {
          const userData = await response.json();
          // setLoginState({ data: userData ,userData: userData});
          updateUser(userData);
          console.log(userData);
          console.log("Vous êtes connecté !");
          // window.location.href = "./pages/PageAccueil";
          navigate("/"); // Déclenche la redirection
        } else {
          const errorMessage = await response.text();
          errorElement.textContent = errorMessage;
          //   errorElement.style.color = "red";
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      login();
    });

    return () => {
      loginForm.removeEventListener("submit", (e) => {
        e.preventDefault();
        login();
      });
    };
  }, [navigate, updateUser]);

  return (
    <div className="w-full mx-auto flex justify-center items-center px-6 py-8 flex-grow">
      <section className="w-6/12 bg-white rounded-lg shadow dark:border border-sky-700">
        <h1 className="text-center text-lg font-bold pt-8">
          Connectez-vous à votre compte
        </h1>
        <form id="loginForm" className="p-6 space-y-8" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email*
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5"
              placeholder="name@email.fr"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mot de passe*
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:border-blue-500"
              required=""
            />
            <p
              id="error-message"
              ref={errorRef}
              className="text-sm text-red-500"
            ></p>
          </div>
          <div className="flex items-center justify-between px-3.5">
            <p className="text-xs text-slate-600">
              * Informations obligatoires
            </p>
            <a
              href="/"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Mot de passe oublié ?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs text-black bg-white border-2 border-black font-medium rounded-lg text-sm hover:text-white hover:bg-black px-5 py-2.5 text-center"
            >
              Se connecter
            </button>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Nouvel utilisateur ?{" "}
            <a
              href="./Inscription"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Je créer mon compte
            </a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Connexion;
