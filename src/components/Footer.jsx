import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-300 py-14'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>TRAVEL BELL. </h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                    <FaInstagram className='icon'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>A propos</li>
                    <li>Partenariats</li>
                    <li>Offres d'emploi</li>
                    <li>Newsletters</li>
                    <li>Publicités</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li>Accueil</li>
                    <li>Destinations</li>
                    <li>Voyages</li>
                    <li>Aperçu</li>
                    <li>Réservations</li>
                </ul>
            </div>


        </div>
        
    </div>
  )
}

export default Footer