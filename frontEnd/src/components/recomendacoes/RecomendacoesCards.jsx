import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import './styles.css'




export  function RecomendacoesCards() {

  
  const [produto, setProduto] = React.useState([])


  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:3004/acomodacao`)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)
    }

    fetchData()

  }, []);

  return (
    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
        {
            produto.map(item => <RecomendacoeCard  key = {item.id} 
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
