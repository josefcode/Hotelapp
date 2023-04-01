import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'

export default function DetaleProduto() {

  const [produto, setProduto] = React.useState([])
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://3.140.210.50:8081/product/${id}`)

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


  const imagem = imagensEntityList?.map(item => item.url)

  const facilidade = ["Wi-Fi", "TV", 'Frigobar', 'Lareira', 'Ar-condicionado']

  return (
    <div className='app-main'>
      <DetailHeader
        type={categoriasEntity?.descricao}
        title={nome}
        puntaje={pontuacao}
        comment={comentarios}
        distancia={distancia}
        location={cidadesEntity?.nome}
        country={cidadesEntity?.pais}
      />


      <DetailBody
        id={id}
        image={imagem}
        facilities={facilidade}
        description={description}
        distancia={distancia}
        country={country}
        city={city}
        mapLocation={localMapa}
        imageClass={imageClass}
      />
    </div>
  )
}