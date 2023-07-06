import React, { useEffect, useState } from "react";
import CarteProduit from '../components/CarteProduit';
import { useParams } from "react-router-dom";

const DetailProduit = () => {
  const { id } = useParams();
  const [meuble, setMeuble] = useState(null);

  useEffect(() => {
    const fetchMeuble = async () => {
      try {
        const response = await fetch(`https://649a96bebf7c145d0239136d.mockapi.io/produits/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMeuble(data);
          console.log(data);
        } else {
          console.error("Erreur lors de la récupération du produit");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du produit", error);
      }
      
    };

    fetchMeuble();
  }, [id]);

  if (!meuble) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CarteProduit
        nom={meuble.nom}
        description={meuble.description}
        prix={meuble.prix}
        photo={meuble.photo}
      />
    </div>
  );
};

export default DetailProduit;