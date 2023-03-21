import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./styleBody.css"
import {Calendario} from './Calendario';
import {useShow} from '../hooks/useShow';
import {useParems} from 'react-router-dom'
import CarouselImage from './CarouselImage';



export default function DetailBody({
  image, 
  facilities, 
  description,
  location,
  id,
  country,
  city,
  mapLocation,
}) {

  const {show, changeShow} = useShow()

  return (
    <div >
        <div className='body-detail-media-icons'>

        <ShareIcon />
        <FavoriteBorderIcon />
        </div>

        <div className='detail-image-container'>
          {
          image?.map((item, index) => {
          return (
            <img key= {index} id = {index}  src={item}  alt = "weeb"/>

           ) } )
          }

        </div>
       
        <div className='image-buttons'>
        <p className='detail-body-verMais' onClick = {changeShow}> Ver mais </p>

        <p className='image-number' onClick = {changeShow} > 1/5 </p>
        </div>

        <div className='popover-images' >

        { show && <CarouselImage  image = {image} />  }

        </div>

        <div className='body-detail-container'>
            <h2 className='body-title'>{location}</h2>
            <p className='body-detail-description'> {description}
            </p>
            </div>

            <div>
                <h1 className='title-service'>O que esse lugar</h1>
                <div className='title-underline'></div>
               
                <div className='services-list'>

                  <ul className='services-list-wrapper'>
                   {facilities?.map(item => 
                       <li key = {item}>{item}</li>
                   )}

                  </ul>

                </div>
               
                <Calendario id = {id}/>
                
                {/* mapa */}
                <div >
                 <h1 className='title-service'>O que esse lugar</h1>
                <div className='title-underline'></div>

                <div className='mapa-wrapper'>
                <p>{city}</p>

                <div className='mapa'>
                <iframe src= {mapLocation} className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

                </div>
                
                </div>
                </div>

                {/* o que voce precisa saber:  */}

                <div>

                    <h1 className='title-service'>O que voce precisa saber:</h1>
                    <div className='title-underline'></div>

                    <div className='detail-card-container'>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Regras da casa</h3>
                          <p>Check-out: 10: 00</p>
                          <p>Noa e permitido festas</p>
                          <p>Nao fumar</p>
                       </div>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Regras da casa</h3>
                          <p>Check-out: 10: 00</p>
                          <p>Noa e permitido festas</p>
                          <p>Nao fumar</p>
                       </div>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Regras da casa</h3>
                          <p>Check-out: 10: 00</p>
                          <p>Noa e permitido festas</p>
                          <p>Nao fumar</p>
                       </div>
                   

                    </div>
                  
                </div>
               
            </div>

        
    </div>
  )
}