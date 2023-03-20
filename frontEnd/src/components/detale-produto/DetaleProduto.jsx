import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'

export default function DetaleProduto() {

  const [produto, setProduto] = React.useState([])
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(){

      //  const response = await fetch(`http://localhost:3004/acomodacao?id=${id}`)
      
      const response = await fetch(`http://localhost:8081/product/${id}`)

       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)

    }

    fetchData()

  }, [id]);

  const { 
    id_produtos,
    nome, 
    pontuacao, 
    descricao, 
    facilidades, 
    distancia,
    comentarios, 
    localMapa,
    linkMapa,
    verMais, 
    categoriasEntity,
    cidadesEntity
  } = produto;


  //  let value = {produto};
//  produto.map(item => value = item)

  // const {
  // type, 
  // location, 
  // country, 
  //  nome, 
  // stars, 
  //  pontuacao, 
  // comment, 
  //  facilidades, 
  // image, 
  // description, 
  // distancia,
  // city,
  // mapLocation,
  // imageClass

  // type, 
  // location, 
  // country, 
  // title, 
  // stars, 
  // puntaje, 
  // comment, 
  // facilities, 
  // image, 
  // description, 
  // distancia,
  // city,
  // mapLocation,
  // imageClass

  // } = produto

 console.log(produto)


  return (
    <div className='app-main'>
        <DetailHeader
        //  type = {type}
          title = {nome}
        // stars = {stars} 
          puntaje = {pontuacao}
         comment = {comentarios}
         distancia = {distancia}
        // location = {location}
        // country = {country}

      //   type = {type}
      //  title = {title}
      //  stars = {stars} 
      //  puntaje = {puntaje}
      //  comment = {comment}
      //  distancia = {distancia}
      //  location = {location}
      //  country = {country}

        />
        <DetailBody 
        // image = {image} 
         facilities = {facilidades} 
        // description = {description} 
        // distancia = {distancia}
        // location = {location}
        // country = {country}
        // city = {city}
        // mapLocation = {mapLocation}
        // imageClass = {imageClass}

        // image = {image} 
        //  facilities = {facilidades} 
        // description = {description} 
        // distancia = {distancia}
        // location = {location}
        // country = {country}
        // city = {city}
        // mapLocation = {mapLocation}
        // imageClass = {imageClass}

        />
    </div>
  )
}
