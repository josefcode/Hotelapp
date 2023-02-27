import React from 'react'
import { CategoriaCard } from '../categoria/CategoriaCard'
import './styles.css'

const listHotel = [
    {
        id: '1',
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.corinthia.com%2Fmedia%2F1563%2Fcorinthia-lisbon-deluxe-king-bedroom.jpg&f=1&nofb=1&ipt=0d0842f3e887b1bfd8a82d2ebc3633acac094bad75534497c67288734289559a&ipo=images",
        name: "Hoteis",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '2',
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboulder.a-lodge.com%2Fwp-content%2Fuploads%2FLodging_Youth_Hostile_Gallery_2_Desktop.jpg&f=1&nofb=1&ipt=50b0408c85160c742cda249210126f47b2bc47138b404be23f7bca932e21f8bc&ipo=images",
        name: "Hostels",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '3',
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa3%2F90%2F88%2Fa390889080eb260884a70183ebae8a8f.jpg&f=1&nofb=1&ipt=30539561fb86c87a3f3c97f5e3939d0f822b17df0cdb2e1c70ee704818e683d6&ipo=images",
        name: "Apartamentos",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
     {
        id: '4',
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F01%2F23%2F23%2F55%2Fbreakfast-in-bed-1158270_960_720.jpg&f=1&nofb=1&ipt=3be7be28c18d310a5bb9d616fa9b48ac157c024e8754ccb60f3a79e1a009e62a&ipo=images",
        name: "Cama e cafe da manha",
        totals: '807.105 hotéis',
        alt: 'hotelImage'
     },
]

export  function CategoriasCards() {
  return (
    <div className='container-categoria'>
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
