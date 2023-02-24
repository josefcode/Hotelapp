import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import StarIcon from '@mui/icons-material/Star';
import './styles.css'


const acomodacao = [
    {
        id: '1',
        image :"https://picsum.photos/200/300",
        title: "Hermitage Hotel",
        type: 'hotel',
        stars: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />],
        puntaje: 8,
        distancia: 'A 940 m do centro',
        mapLink: 'https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Nashville+Downtown/@36.165426,-158.499258,3z/data=!4m12!1m2!2m1!1sHermitage+Hotel!3m8!1s0x88646658219a93b7:0x3da6b57fbed02ba7!5m2!4m1!1i2!8m2!3d36.1654258!4d-86.7805082!16s%2Fg%2F11h0qft46',
        description: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires.',
        facilities: [<WifiIcon/>, <PoolIcon /> ],
        comment: 'muito bom',
        verMais: 'https://www.hilton.com/en/hotels/bnadudt-doubletree-nashville-downtown/?SEO_id=GMB-AMER-DH-BNADUDT&y_source=1_MTM3MjU2Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
        alt: 'hotelImage'
     },
     {
        id: '2',
        image :"https://picsum.photos/200/300",
        title: "Hermitage Hotel",
        type: 'hotel',
        stars: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />],
        puntaje: 8,
        distancia: 'A 940 m do centro',
        mapLink: 'https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Nashville+Downtown/@36.165426,-158.499258,3z/data=!4m12!1m2!2m1!1sHermitage+Hotel!3m8!1s0x88646658219a93b7:0x3da6b57fbed02ba7!5m2!4m1!1i2!8m2!3d36.1654258!4d-86.7805082!16s%2Fg%2F11h0qft46',
        description: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires.',
        facilities: [<WifiIcon/>, <PoolIcon /> ],
        comment: 'muito bom',
        verMais: 'https://www.hilton.com/en/hotels/bnadudt-doubletree-nashville-downtown/?SEO_id=GMB-AMER-DH-BNADUDT&y_source=1_MTM3MjU2Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
        alt: 'hotelImage'
     },
     {
        id: '3',
        image :"https://picsum.photos/200/300",
        title: "Hermitage Hotel",
        type: 'hotel',
        stars: [<StarIcon />, <StarIcon />, <StarIcon />, <StarIcon />],
        puntaje: 8,
        distancia: 'A 940 m do centro',
        mapLink: 'https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Nashville+Downtown/@36.165426,-158.499258,3z/data=!4m12!1m2!2m1!1sHermitage+Hotel!3m8!1s0x88646658219a93b7:0x3da6b57fbed02ba7!5m2!4m1!1i2!8m2!3d36.1654258!4d-86.7805082!16s%2Fg%2F11h0qft46',
        description: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires.',
        facilities: [<WifiIcon/>, <PoolIcon /> ],
        comment: 'muito bom',
        verMais: 'https://www.hilton.com/en/hotels/bnadudt-doubletree-nashville-downtown/?SEO_id=GMB-AMER-DH-BNADUDT&y_source=1_MTM3MjU2Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
        alt: 'hotelImage'
     },
     
]

export  function RecomendacoesCards() {
  return (
    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
        {
            acomodacao.map(item => <RecomendacoeCard  key = {item.id} 
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
