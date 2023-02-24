import React from 'react'
import { CategoriaCard } from '../categoria/CategoriaCard'
import './styles.css'

const listHotel = [
    {
        id: '1',
        image :"https://picsum.photos/200/300",
        name: "Hotéis",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '2',
        image :"https://picsum.photos/200/300",
        name: "Hostels",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '3',
        image :"https://picsum.photos/200/300",
        name: "Apartamentos",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '4',
        image :"https://picsum.photos/200/300",
        name: "Cama e café da manhã",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
]

export  function CategoriasCards() {
  return (
    <div className='container'>
       <h2 className='title'> Buscar por tipo de acomodação</h2>
      <div className='cards-wrapper'>
        {
            listHotel.map(item => <CategoriaCard  key = {item.id} image = {item.image}  alt = {item.alt} totals={item.totals} 
            title={item.name} />
               
            )
        }
        </div>
        
    </div>
  )
}
