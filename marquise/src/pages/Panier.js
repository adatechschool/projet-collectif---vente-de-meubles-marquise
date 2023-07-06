import React, { useState, useEffect } from "react";

const Panier = () => {
  const [panierItems, setPanierItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getPanier() {
      const request = await fetch("http://localhost:3001/panier/1");
      const data = await request.json();
      return data;
    }

    getPanier().then((panierData) => {
      console.log(panierData);
      setPanierItems(panierData);
      const calculatedTotal = panierData.reduce(
        (acc, item) => acc + item.prix,
        0
      );
      setTotal(calculatedTotal);
    });
  }, []);

  const supprimerArticle = (itemId) => {
    const updatedPanierItems = panierItems.filter((item) => item.id !== itemId);
    setPanierItems(updatedPanierItems);
  };

  return (
    <div>
      <h3 className="text-[45px] font-bold">Mon Panier</h3>
      <div className="text-[25px] flex justify-around font-bold gap-10 px-5 py-2">
        <p>Articles</p>
        <p>Prix</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2">
          {panierItems.length === 0 ? (
            <p className="flex justify-around italic">
              Aucun article dans le panier.
            </p>
          ) : (
            <ul className="text-4xl">
              {panierItems.map((item) => (
                <div key={item.id} className="flex">
                  <li className="mr-4 px-9">{item.nom}</li>
                  <li className="w-64 h-64">
                    <img
                      src="https://medias.maisonsdumonde.com/images/f_auto,q_auto/v1/mkp/M20016466_1/table-d-appoint-chat-roux-et-blanc-en-polyresine.jpg"
                      alt={item.nom}
                    />
                  </li>
                  <li className="px-9">
                    {item.prix} €
                    <button
                      className="ml-4"
                      onClick={() => supprimerArticle(item.id)}
                    >
                      Supprimer
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          )}
          <div>
            <div className="text-[24px] italic gap-10 px-5 py-2">
              <p>Total de la commande : {total} €</p>
              <p>TVA incluse</p>
            </div>
            <button className="text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Valider mon panier et passer au paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;