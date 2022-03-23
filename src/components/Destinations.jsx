import React from 'react'

import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'



const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Séjour complet tous frais compris !</h1>
        <p className='py-4'>Sur les meilleures plages des caraïbes </p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Borabora} alt="/" />
            <img className='w-full h-full object-cover' src={Borabora2} alt="/" />
            <img className='w-full h-full object-cover' src={Keywest} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
        </div>        
    </div>
  )
}

export default Destinations
