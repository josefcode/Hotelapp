import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'

export default function DetaleProduto() {

  const [produto, setProduto] = React.useState([])
  const { id } = useParams();

  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODU4OTg4MSwiaWF0IjoxNjc4NDg5ODgxfQ.kj2TIbfoKKJjsAg_-NjZwgeHFoTV-wPqUAkbCr0L3OA"
    }
  };  

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:8081/product/${id}`, requestConfig)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)

      console.log(data)
    }

    fetchData()

  }, [id]);


//   let value = {};
//  produto.map(item => value = item)

 const {type, 
  location, 
  country, 
  nome, 
  stars, 
  puntaje, 
  comment, 
  facilities,
  url_imagem, 
  descricao, 
  distancia,
  city,
  mapLocation,
  imageClass
} = produto


// console.log(image)

  return (
    <div className='app-main'>
        <DetailHeader
         type = {type}
        title = {nome}
        stars = {stars} 
        puntaje = {puntaje}
        comment = {comment}
        distancia = {distancia}
        location = {location}
        country = {country}
        
        />
        <DetailBody 
        image = {url_imagem} 
        facilities = {facilities} 
        description = {descricao} 
        distancia = {distancia}
        location = {location}
        country = {country}
        city = {city}
        mapLocation = {mapLocation}
        imageClass = {imageClass}
        />
    </div>
  )
}
