import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'


const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LA FORMULE LUXE CONCERNE AUSSI LES RESERVATIONS POUR 2 PERSONNES</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum totam
                ipsa iste a velit laudantium saepe ab repudiandae aliquam, error dolores autem
                placeat commodi et possimus vero assumenda unde illo alias est eos maxime ullam 
                quas! Nam odio repellat alias quas asperiores consequuntur cum adipisci! Rerum 
                ducimus distinctio aliquid labore laboriosam odit totam quos aspernatur sed 
                repudiandae maiores, soluta esse minima deleniti earum, mollitia ipsam nisi, 
                accusantium ipsum? Porro reiciendis reprehenderit non repudiandae quibusdam 
                sunt earum, sed assumenda ipsam placeat laudantium aut veniam quos dignissimos 
                exercitationem voluptatibus accusantium officiis possimus rem eligendi explicabo! 
                Excepturi voluptates blanditiis quibusdam, facere voluptatum ab.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className="py-1">SERVICE DE QUALITE PREMIUM</h3>
                        <p className='py-1'>LEADER SUR NOTRE SEGMENT <br />DEPUIS PLUS DE 20 ANS.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className="py-1">SERVICE DE QUALITE PREMIUM</h3>
                        <p className='py-1'>LEADER SUR NOTRE SEGMENT <br /> DEPUIS PLUS DE 20 ANS.</p>
                    </div>
                </div>

                <div></div>
            </div>
        </div>

        <div>
            <div className='border text-center'>
                <p className='py-4'>OBTENIR UNE REMISE DE 10% SUPPLEMENTAIRE.</p>    
                <p className='py-4'>PLUS QUE 12H00 POUR EN BENEFICIER</p>
                <p className='bg-gray-800 text-gray-200 py-2'>RESERVEZ MAINTENANT ET ENREGISTREZ-VOUS</p>
            </div>  
            <form className='w-full'>
                <div className='flex flex-col my-2 font-bold'>
                    <label>Destination</label>
                    <select className='border rounded-md py-2' >
                        <option>Guadeloupe</option>
                        <option>Martinique</option>
                        <option>La Réunion</option>
                        <option>Les Maldives</option>
                    </select>
                </div>  
                <div className='flex flex-col my-2 font-bold'>
                    <label>Date de départ</label>
                    <input className='border rounded-md py-2' type="date" />
                </div>              
                <div className='flex flex-col my-2 font-bold'>
                    <label>Date de retour</label>
                    <input classNam='border rounded-md py-2'e type="date" />
                </div>      
                <button className='w-full py-4'>Taux et Disponibilités</button>        

            </form>  
        </div>       
    </div>
  )
}

export default Search