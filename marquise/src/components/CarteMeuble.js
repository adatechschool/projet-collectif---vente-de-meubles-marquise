import React from "react";


const CarteMeuble = ({ photo, nom, description, prix }) => {
  return (
    <div>
      <li className="text-center pb-5">
        <img
          className="w-48 mx-auto pb-5"
          src={photo}
          alt={nom}
        />
        <div className="infos">
          <h2 className="font-bold">{nom}</h2>
          <h4 className="italic text-xs px-6">{description}</h4>
          <p>Prix: {prix}</p>
        </div>
      </li>
    </div>
  );
};

export default CarteMeuble;
