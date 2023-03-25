import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'
import { useToken } from '../hooks/useToken'

export default function DetaleProduto() {

  const [produto, setProduto] = React.useState([])
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://localhost:8081/product/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setProduto(data)
    }
    fetchData()
  }, [id]);

  if (produto === "undefined") {
    return
  }

  const {
    location,
    country,
    nome,
    pontuacao,
    comentarios,
    cidadesEntity,
    imagensEntityList,
    categoriasEntity,
    description,
    distancia,
    city,
    localMapa,
    imageClass
  } = produto

  // const stars = [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />,]
  const imagem = imagensEntityList?.map(item => item.url)

  const facilidade = ["Wi-Fi", "TV", 'Frigobar', 'Lareira', 'Ar-condicionado']

  return (
    <div className='app-main'>
      <DetailHeader
        type={categoriasEntity?.descricao}
        title={nome}
        // stars = {stars} 
        puntaje={pontuacao}
        comment={comentarios}
        distancia={distancia}
        location={cidadesEntity?.nome}
        country={cidadesEntity?.pais}
      //  location = {location}
      //  country = {country}

      />
      <DetailBody
        id={id}
        image={imagem}
        facilities={facilidade}
        description={description}
        distancia={distancia}
        // location = {location}
        country={country}
        city={city}
        mapLocation={localMapa}
        imageClass={imageClass}
      />
    </div>
  )
}