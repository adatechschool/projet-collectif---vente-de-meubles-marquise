import React from 'react';
import foire from '../assets/foire.jpeg';
import astuceDeco from '../assets/astucesDeco.jpg';
import astuceArr from '../assets/astucesArr.avif';

const ArtiEvent = () => {
    return (
        <div>
            <h1 className='font-bold ml-1.5 mt-6'>Articles et événements</h1>
            <div className='flex justify-around gap-2 p-2 text-center w-full h-full mb-14'>
            <div className='w-1/4 h-48 rounded-lg'>
            <a href="https://www.salon-habitat-toulouse.com/fr" target="_blank" rel="noreferrer"><img src={foire} className="w-full h-full rounded-lg" alt="salon de l'habitat" /> </a>
                <p> Salon de l'habitat Toulouse: Du 28 septembre au 1er Octobre 2023 </p>              
            </div> 
            <div className='w-1/4 h-48 rounded-lg'>
            <a href="https://www.travaux.com/construction-renovation-maison/articles/10-astuces-deco-a-petit-prix" target="_blank" rel="noreferrer"> <img src={astuceDeco} className="w-full h-full rounded-lg" alt="10 astuces de deco" /> </a>
                <p> 10 astuces pour décorer son intérieur à petit prix  </p>
            </div>  
            <div className='w-1/4 h-48 rounded-lg'>
            <a href="https://www.marieclaire.fr/maison/astuces-ranger-maison,1346717.asp" target="_blank" rel="noreferrer"> <img src={astuceArr} className="w-full h-full rounded-lg" alt="8 conseils de rangement " /> </a>
                <p> 8 conseils de pro pour bien ranger chez soi au quotidien  </p>
            </div>
            </div>   

        </div>
    );
};

export default ArtiEvent;