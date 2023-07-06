import React from "react";

const CarteMeuble = ({ images, nom, description, prix }) => {
  return (
    <div className="flex flex-col justify-center">
      <li className="text-center pb-5 list-none">
        <img className="max-w-xs max-h-72 mx-auto pb-5" src={images} alt={nom} />
        <div className="infos">
          <h2 className="font-bold">{nom}</h2>
          <p className="italic text-sm text-justify max-w-xs leading-5">
            {description}
          </p>
          <p className="pt-5 font-medium">Prix: {prix}€</p>
        </div>
      </li>
    </div>
  );
};

export default CarteMeuble;