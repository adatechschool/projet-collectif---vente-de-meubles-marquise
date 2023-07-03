import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarteMeuble from "../components/CarteMeuble";

const NosProduits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://649a96bebf7c145d0239136d.mockapi.io/produits")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="Navbar flex gap-9 px-5 py-2 italic bg-gray-500">
        <Link to={"/"}>
          <h2>Canapé</h2>
        </Link>
        <Link to={"/"}>
          <h2>Chaise</h2>
        </Link>
        <Link to={"/"}>
          <h2>Armoire</h2>
        </Link>
        <Link to={"/"}>
          <h2>Fauteuil</h2>
        </Link>
      </div>
      <div className="description flex justify-center py-5">
        <div className="w-1/2 text-center bg-gray-200 py-5">
          <h1 className="font-bold text-xl py-2">CANAPÉ</h1>
          <p className="italic">
            Le canapé idéal pour sublimer votre salon : choix entre canapé droit
            ou d'angle, personnalisation illimitée, matières luxueuses.
            Découvrez l'harmonie parfaite entre savoir-faire exceptionnel,
            confort absolu et design haut de gamme. Les collections de canapés
            exclusives épousent votre style et révèlent l'excellence des
            finitions
          </p>
        </div>
      </div>
      <div className="filter  bg-gray-200 py-2">
        <p>Filter "Bonus"</p>
      </div>
      <div className="listeDesMeubles py-10 px-5">
        <div className="grid grid-cols-4 gap-4 list-none">
        {data.map((meuble) => (
            <Link to={`/produit/${meuble.id}`} key={meuble.id}>
            <CarteMeuble
              nom={meuble.nom}
              description={meuble.description}
              prix={meuble.prix}
              photo={meuble.photo}
            />
           </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default NosProduits;