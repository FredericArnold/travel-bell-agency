
import React, {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaPinterest,FaYoutube,FaInstagram} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
      setNav(!nav)
      setLogo(!logo)
    };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div onClick={handleNav} className={logo ? 'hidden': 'block'}>
        <h1>TRAVEL BELL. </h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Accueil</li>
        <li>Destinations</li>
        <li>Voyages</li>
        <li>Aperçu</li>
        <li>Réservations</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-4' size={20} />
        <BsPerson size={20} />
      </div>
 
      {/* Menu Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20} />: <HiOutlineMenuAlt4 size={20} />}        
      </div>
      
      {/* Mobile Menu dropdown */}
      <div onClick={handleNav} className={ nav ? 'absolute left-0 text-black top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
        <ul>
          <h1>TRAVEL BELL. </h1>
          <li className='border-b'>Accueil</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Voyages</li>
          <li className='border-b'>Aperçu</li>
          <li className='border-b'>Réservations</li>
          <div className='flex flex-col'>
            <button className='my-6'>Rechercher</button>
            <button>Compte</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
            <FaInstagram className='icon'/>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar