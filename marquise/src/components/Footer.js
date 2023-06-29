import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white h-64 flex">
      <div className="container w-full mx-auto flex justify-evenly mt-7">
        <div className='flex flex-col'>
          <h3 className='text-lg uppercase font-bold pb-5'>À propos</h3>
          <ul className='text-base leading-7'>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Condition générale de vente</a>
            </li>
            <li>
              <a href="/">Mentions légales</a>
            </li>
            <li>
              <a href="/">Qui sommes nous</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col mx-9'>
          <h3 className='text-lg uppercase font-bold pb-5'>Social network</h3>
          <ul className='flex items-center justify-center'>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram Marquise">
                <BsInstagram size={25}/>
              </a>
            </li>
            <li className='px-5'>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter Marquise">
                <BsTwitter size={25}/>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook Marquise">
                <BsFacebook size={25}/>
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg uppercase font-bold pb-4'>Moyens de paiement</h3>
          <ul className='flex justify-center'>
            <li>
              <FaCcVisa size={35}/>
            </li>
            <li className='px-5'>
              <FaCcMastercard size={35}/>
            </li>
            <li>
              <FaCcPaypal size={35}/>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
