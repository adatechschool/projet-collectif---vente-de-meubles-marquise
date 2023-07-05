import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../pages/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userData, logoutUser } = useContext(UserContext);
  const navigate = useNavigate(); // État pour la redirection
  const handleLogout = () => {
    // Réinitialiser les données utilisateur
    // updateUser(null); // ou toute autre valeur vide que vous souhaitez utiliser
    logoutUser();
    // Rediriger vers la page de connexion
    navigate("/connexion"); // Assurez-vous d'importer `navigate` depuis `react-router-dom`
  };

  const handleLogin = () => {

    navigate("/connexion");
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-black h-24 pt-3 items-center px-5">
        <div className="text-white">
          <Link to={"/"}>
            <img src={logo} className="w-16" alt="Logo page d'accueil" />
          </Link>
        </div>
        <div className="SearchBar w-2/5 flex">
          <span>
            <AiOutlineSearch className="w-8 h-8 absolute right" />
          </span>
          <input
            type="text"
            placeholder="recherche..."
            className="border border-black rounded-lg w-full h-8"
            style={{ textIndent: "2rem" }}
          />
        </div>
        {userData && userData.prenom ? (
          <div
            id="Statut_connexion"
            // className="bg-white text-black font-medium py-2 px-4 rounded-lg"
            className=" text-white font-medium py-2 px-4 rounded-lg"
            style={{ zIndex: 10,fontSize: '1.2rem' }}
          >
            Bonjour, {userData.prenom && userData.prenom.charAt(0).toUpperCase() + userData.prenom.slice(1)} !
          </div>
        ) : null}
        <div className="flex gap-4">
          <Link to={"/favoris"}>
            <MdOutlineFavoriteBorder className="text-white w-8 h-8" />
          </Link>
          <Link to={"/panier"}>
            <FiShoppingCart className="text-white w-8 h-8" />
          </Link>
          <Link to={"/connexion"}>
            <AiOutlineUser className="text-white w-8 h-8" />
          </Link>
        </div>
        {userData && userData.prenom ? (
          <button
            className="bg-white text-black font-medium py-2 px-4 rounded-lg"
            onClick={handleLogout}
          >
            <div className="flex flex-col items-center">
              <FaSignOutAlt style={{ marginBottom: "0.5rem" }} />
              <span>Déconnexion</span>
            </div>
          </button>
        ) : (
          <button
            className="bg-white text-black font-medium py-2 px-4 rounded-lg"
            onClick={handleLogin}
          >
            <div className="flex flex-col items-center">
              <FaSignInAlt style={{ marginBottom: "0.5rem" }} />
              <span>Connexion</span>
            </div>
          </button>
        )}
      </div>
      <div className="text-white bg-black flex gap-9 px-5 py-4">
        <Link to={"/"}>Accueil</Link>
        <Link to={"/nosproduits"}>Nos Produits</Link>
        <Link to={"/nouveaute"}>Nouveautés</Link>
        <Link to={"/promotions"}>Promotions</Link>
      </div>
    </div>
  );
};

export default Header;
