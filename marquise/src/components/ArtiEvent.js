import React from 'react';
import foire from '../assets/foire.jpeg';
import astuceDeco from '../assets/astucesDeco.jpg';
import astuceArr from '../assets/astucesArr.avif';
import ArtiEventDetails from './ArtiEventDetails';

const ArtiEvent = () => {
    return (
        <div>
            <h1 className='font-bold ml-1.5 mt-6 text-base'>Articles et événements</h1>
            <div className='flex justify-around gap-2 p-2 text-center w-full h-full mb-14'>
                <ArtiEventDetails 
                    lien = "https://www.salon-habitat-toulouse.com/fr" 
                    titre ="Salon de l'habitat Toulouse: Du 28 septembre au 1er Octobre 2023"
                    image =  {foire} />
                <ArtiEventDetails 
                    lien = "https://www.travaux.com/construction-renovation-maison/articles/10-astuces-deco-a-petit-prix" 
                    titre ="10 astuces pour décorer son intérieur à petit prix"
                    image = {astuceDeco}/>
                    <ArtiEventDetails 
                    lien = "https://www.marieclaire.fr/maison/astuces-ranger-maison,1346717.asp" 
                    titre ="8 conseils de pro pour bien ranger chez soi au quotidien"
                    image =  {astuceArr} />       
            </div>
        </div>
    );
};

export default ArtiEvent;