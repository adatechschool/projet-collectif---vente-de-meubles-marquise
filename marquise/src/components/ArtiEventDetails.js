import React from 'react';

const ArtiEventDetails = (props) => {  
    return (
        <div> 
           <div className=' h-48 rounded-lg'>
                    <a href={props.lien} target="_blank" rel="noreferrer"><img src= {props.image} className="w-full h-full rounded-lg" alt={props.titre} /> </a>
                    <p> {props.titre}</p> 
            </div>
        </div>
    );
};

export default ArtiEventDetails;