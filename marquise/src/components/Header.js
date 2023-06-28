import React from "react";
import favoris from "../assets/favoris.png";
import panier from "../assets/panier.png";
import user from "../assets/user.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-black h-24 pt-3 items-center">
        <div className="text-white">
          <img src={logo} className="w-16" />
        </div>
        <div className="SearchBar w-2/5">
          <label>
            <input
              type="text"
              placeholder="recherche..."
              className="border border-black rounded-lg w-full"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <img src={favoris} alt="" className="w-8 h-8" />
          <img src={panier} alt="" className="w-8 h-7" />
          <img src={user} alt="" className="w-8 h-8" />
        </div>
      </div>
      <div>
        <ul>
            <li>Nouveauté</li>
            <li>Nouveauté</li>
            <li>Nouveauté</li>
            
        </ul>
      </div>
    </div>
  );
};

export default Header;
