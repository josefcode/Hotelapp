import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import {acomodacao} from './info'
import './styles.css'




export  function RecomendacoesCards() {

  

  return (
    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
        {
            acomodacao.map(item => <RecomendacoeCard  key = {item.id} 
              id = {item.id}
            image = {item.image}  
            alt = {item.alt} 
            type={item.type} 
            title = {item.title} 
            puntaje = {item.puntaje} 
            distancia={item.distancia} 
            mapLink = {item.mapLink}
            comment = {item.comment}
            facilities = {item.facilities}
            description = {item.description}
            verMais = {item.verMais} 
            stars = {item.stars}
            />
               
            )
        }
        </div>
        </div>
  )
}
