import React, { useState, useEffect } from 'react';
import canape_0 from "../assets/canape_0.jpg";
import canape_1 from "../assets/canape_1.jpg";
import canape_2 from "../assets/canape_2.jpg";
import canape_3 from "../assets/canape_3.jpg";
import canape_4 from "../assets/canape_4.jpg";
import canape_5 from "../assets/canape_5.jpg";
import canape from "../assets/livingRoom.jpg";
import chaise from "../assets/categorieChaise.jpg";
import fauteuil from "../assets/categorieFauteuil.jpg";
import armoire from "../assets/categorieArmoire.jpg";
import { Link } from 'react-router-dom';

const PageAccueil = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [canape_0, canape_1, canape_2, canape_3, canape_4, canape_5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="w-full h-96 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            {index === currentSlide && (
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-black h-full text-3xl italic pt-16">Laissez-vous séduire par l'art de vivre en beauté !</h1>
                <a href="/nosproduits" className="mt-4 text-white bg-black bg-opacity-50 rounded-lg px-5 py-3 mb-16 z-40">
                    J'en profite!
                </a>

              </div>
            )}
          </div>
        ))}
      </div>
      <div>
            <h1 className='font-bold ml-1.5 mt-6'>COLLECTIONS</h1>
            <div className='flex justify-around gap-2 p-2 text-center w-full h-full mb-14'>
                <div className='w-1/4 h-48 rounded-lg'>
                    <Link to="/nosproduits">
                        <img src={canape} className="w-full h-full rounded-lg" alt="categorie Canapé" />
                        <h2 className='relative bottom-8 left-18 text-white'>
                            Canapé
                        </h2>
                    </Link>
                </div>
                <div className='w-1/4 h-48 rounded-lg'>
                    <Link to="/nosproduits">
                        <img src={chaise} className="w-full h-full rounded-lg" alt="categorie Chaise" />
                        <h2 className='relative left-26 bottom-8 text-white'>
                            Chaise
                        </h2>
                    </Link>
                </div>
                <div className='w-1/4 h-48 rounded-lg'>
                    <Link to="/nosproduits">
                        <img src={fauteuil} className="w-full h-full rounded-lg" alt="categorie Fauteuil" />
                        <h2 className='relative bottom-8 left-34 text-white'>
                            Fauteuil
                        </h2>
                    </Link>
                </div>
                <div className='w-1/4 h-48 rounded-lg'>
                    <Link to="/nosproduits">
                        <img src={armoire} className="w-full h-full rounded-lg" alt="categorie Armoire" />
                        <h2 className='relative bottom-8 left-42 text-white'>
                            Armoire
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};
 

export default PageAccueil;
