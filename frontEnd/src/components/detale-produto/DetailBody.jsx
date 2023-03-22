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

          {/* {
          image?.map((item, index) => {
          return (
            <img key= {index} id = {index}  src={item}  alt = "weeb"/>

           ) } )
          } */}

        </div>
       
        <div className='image-buttons'>
        <p className='detail-body-verMais' onClick = {changeShow}> Ver mais </p>

        <p className='image-number' onClick = {changeShow} > 1/5 </p>
        </div>

        <div className='popover-images' >

        { show && <CarouselImage  image = {categoriasEntity} />  }

        </div>

        <div className='body-detail-container'>
            <h2 className='body-title'>{distancia}</h2>
            <p className='body-detail-description'> {descricao}
            </p>
            </div>

            <div>
                <h1 className='title-service'>Características</h1>
                <div className='title-underline'></div>
               
                <div className='services-list'>

                  <ul className='services-list-wrapper'>
                   {/* {facilities?.map(item => 
                       <li key = {item}>{item}</li>
                   )} */}
                     <li>{facilidades}</li>


                  </ul>

                </div>
               
                <Calendario id = {id}/>
                
                {/* mapa */}
                <div >
                 <h1 className='title-service'>Localização</h1>
                <div className='title-underline'></div>

                <div className='mapa-wrapper'>
                <p>{cidadesEntity}</p>

                <div className='mapa'>
                <iframe src= {localMapa} className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

                </div>
                
                </div>
                </div>

                {/* o que voce precisa saber:  */}

                <div>

                    <h1 className='title-service'>Políticas</h1>
                    <div className='title-underline'></div>

                    <div className='detail-card-container'>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Políticas 1</h3>
                          <p>Check-out: 10: 00</p>
                          <p>Noa e permitido festas</p>
                          <p>Nao fumar</p>
                       </div>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Políticas 2</h3>
                          <p>Check-out: 10: 00</p>
                          <p>Noa e permitido festas</p>
                          <p>Nao fumar</p>
                       </div>

                       <div className='detail-card'>

                          <h3 className='detail-card-title' >Políticas 3</h3>
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