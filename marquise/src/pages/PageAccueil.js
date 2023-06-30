import React from 'react';
import canape from "../assets/livingRoom.jpg";
import chaise from "../assets/categorieChaise.jpg";
import fauteuil from "../assets/categorieFauteuil.jpg";
import armoire from "../assets/categorieArmoire.jpg";
import { Link } from "react-router-dom";

const PageAccueil = () => {
    return (
        <div>
            <h1 className='font-bold ml-1.5 mt-6'>COLLECTIONS</h1>
            <div className='flex justify-around gap-2 p-2 text-center w-full h-full mb-14'>
           <div className='w-1/4 h-48 rounded-lg'> <Link to="/nosproduits"><img src={canape} className="w-full h-full rounded-lg" alt="Photo categorie Canapé" /><h2 className='relative bottom-8 left-18 text-white'>Canapé</h2></Link></div>
                <div className='w-1/4 h-48 rounded-lg'><Link to="/nosproduits"><img src={chaise} className="w-full h-full rounded-lg" alt="Photo categorie Chaise" /><h2 className='relative left-26 bottom-8 text-white'>Chaise</h2></Link></div>
                <div className='w-1/4 h-48 rounded-lg'><Link to="/nosproduits"><img src={fauteuil} className="w-full h-full rounded-lg" alt="Photo categorie Fauteuil" /><h2 className='relative bottom-8 left-34 text-white'>Fauteuil</h2></Link></div>
                <div className='w-1/4 h-48 rounded-lg'><Link to="/nosproduits"><img src={armoire} className="w-full h-full rounded-lg" alt="Photo categorie Armoire" /><h2 className='relative bottom-8 left-42 text-white'>Armoire</h2></Link></div>

            </div>
        </div>
        
    );
};

export default PageAccueil;