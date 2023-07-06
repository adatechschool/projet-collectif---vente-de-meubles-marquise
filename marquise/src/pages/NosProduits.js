import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarteMeuble from "../components/CarteMeuble";


const NosProduits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3300/produits")
      .then((response) => response.json())
      .then((data) => setData(data));
    fetch('http://localhost:3000/produits')
      .then(response => response.json())
      .then(data => setData(data)) // Fix: Use setData instead of setProducts
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  console.log('Data state:', data); // Debugging console.log

  return (
    <div>
      <div className="listeDesMeubles py-14 px-5">
        <div className="grid grid-cols-4 gap-4">
        {data.map((meuble) => (
            <Link to={`/produit/${meuble.id}`} key={meuble.id}>
            <CarteMeuble
              nom={meuble.nom}
              description={meuble.description}
              prix={meuble.prix}
              images={meuble.images}
            />
           </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default NosProduits;