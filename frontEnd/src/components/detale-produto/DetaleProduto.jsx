import React from 'react'
import DetailBody from './DetailBody'
import DetailHeader from './DetailHeader'
import { useParams } from 'react-router-dom'


const image  = [
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/431820542.jpg?k=5726858389a94388310de50bf3c1af8d73a02c6690dc1f01184097cdb1efab51&o=&hp=1",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
]

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


  // let value = {};
//  produto.map(item => value = item)

if(produto === "undefined"){
  return 
}

const {
  location, 
  country, 
  nome, 
  pontuacao, 
  comentarios, 
  cidadesEntity,
  // imagensEntityList,
  categoriasEntity,
  description, 
  distancia,
  city,
  localMapa,
  imageClass
} = produto

// const stars = [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />,]
const imagem = imagensEntityList?.map(item => item.url)

console.log(imagem)

const facilidade = ["Wi-Fi","TV", 'Frigobar', 'Lareira', 'Ar-condicionado' ]


  return (
    <div className='app-main'>
        <DetailHeader
         type = {categoriasEntity?.descricao}
          title = {nome}
        // stars = {stars} 
          puntaje = {pontuacao}
         comment = {comentarios}
         distancia = {distancia}
        location = {cidadesEntity?.nome}
        country = {cidadesEntity?.pais}


      //  location = {location}
      //  country = {country}

        />
        <DetailBody 
        id = {id}
        image = {image}
        facilities = {facilidade} 
        description = {description} 
        distancia = {distancia}
        // location = {location}
        country = {country}
        city = {city}
        mapLocation = {localMapa}
        imageClass = {imageClass}
        />
    </div>
  )
}