import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import './styles.css'

export  function RecomendacoesCards() {
  
  const [produto, setProduto] = React.useState([])

  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODU4OTg4MSwiaWF0IjoxNjc4NDg5ODgxfQ.kj2TIbfoKKJjsAg_-NjZwgeHFoTV-wPqUAkbCr0L3OA"
    }
  };  

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:8081/product/findAll`, requestConfig)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)
      console.log(data)
    }

    fetchData()

  }, []);

  return (
    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
        {
            produto.map(item => <RecomendacoeCard  key = {item.id_produtos} 
              id = {item.id_produtos}
            image = {item.categoriasEntity.url_imagem}  
            alt = {item.alt} 
            type={item.type} 
            title = {item.nome} 
            puntaje = {item.puntaje} 
            distancia={item.distancia} 
            mapLink = {item.mapLink}
            comment = {item.comment}
            facilities = {item.facilities}
            description = {item.descricao}
            verMais = {item.verMais} 
            stars = {item.stars}
            />
               
            )
        }
        </div>
        </div>
  )
}
