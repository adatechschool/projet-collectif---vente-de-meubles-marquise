import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="flex justify-between bg-black h-24 pt-3 items-center px-5">
        <div className="text-white">
          <Link 
          to={"/PageAccueil"}
          >
            <img src={logo} className="w-16" alt="Logo page d'accueil" />
          </Link>
        </div>
        <div className="SearchBar w-2/5 flex">
            <span><AiOutlineSearch className="w-8 h-8 absolute right"/></span>
            <input
              type="text"
              placeholder="recherche..."
              className="border border-black rounded-lg w-full h-8"
              style={{ textIndent: '2rem' }}
            />
        </div>
        <div className="flex gap-4">
          <Link to={"/favoris"}>< MdOutlineFavoriteBorder className="text-white w-8 h-8" /></Link>
          <Link to={"/panier"}><FiShoppingCart className="text-white w-8 h-8" /></Link>
          <Link to={"/connexion"}><AiOutlineUser className="text-white w-8 h-8" /></Link>
        </div>
      </div>
      <div className="text-white bg-black flex gap-9 px-5 py-4">
        <Link to={"/nosproduits"} > Nos Produits </Link>
        <Link to={"/nouveaute"} > Nouveautés </Link>
        <Link to={"/promotions"} > Promotions </Link>
      </div>
    </div>
  );
};

export default Header;