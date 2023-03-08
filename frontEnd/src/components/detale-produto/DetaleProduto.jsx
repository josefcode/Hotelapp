import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'

export default function DetaleProduto() {

  const [produto, setProduto] = React.useState([])
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:3004/acomodacao?id=${id}`)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)
    }

    fetchData()

  }, [id]);


  let value = {};
 produto.map(item => value = item)

 const {type, 
  location, 
  country, 
  title, 
  stars, 
  puntaje, 
  comment, 
  facilities, 
  image, 
  description, 
  distancia,
  city,
  mapLocation,
  imageClass
} = value


console.log(image)

  return (
    <div className='app-main'>
        <DetailHeader
         type = {type}
        title = {title}
        stars = {stars} 
        puntaje = {puntaje}
        comment = {comment}
        distancia = {distancia}
        location = {location}
        country = {country}
        
        />
        <DetailBody 
        image = {image} 
        facilities = {facilities} 
        description = {description} 
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
