import React from "react";


const CarteProduit = ({ photo, nom, description, prix }) => {
  return (
        <div className="">

            <div className="flex m-5">

                <div className="basis-1/2">
                <img
                    className="rounded-lg"
                    src={photo}
                    alt={nom}
                    />
                

                <div className="flex justify-start">
                        <img
                            className="rounded-lg w-1/5 m-2"
                            src={photo}
                            alt={nom}
                            />
                        <img
                            className="rounded-lg w-1/5 m-2"
                            src={photo}
                            alt={nom}
                            />
                        <img
                            className="rounded-lg w-1/5 m-2"
                            src={photo}
                            alt={nom}
                            />
                </div>

            </div>

            <div className="flex-col ml-4">
                <div className="text-3xl font-bold m-8">
                {nom}
                </div>

                <div className="m-8">
                <p className="font-bold">Prix :</p>{prix}€
                </div>

                <div className="m-8">
                <p className="font-bold">Description produit :</p>
                {description}
                </div>
                
                <div className="border-4 border-black rounded-md text-center m-8">
                <button class="">Ajouter au panier</button>
                </div>
                
            </div>
        </div>            
    </div> 
    
  );
};

export default CarteProduit;
