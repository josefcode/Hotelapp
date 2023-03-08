import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CountertopsIcon from '@mui/icons-material/Countertops';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import WifiIcon from '@mui/icons-material/Wifi';
import "./styleBody.css"
import {Calendario} from './Calendario';
import {useShow} from '../hooks/useShow'
import CarouselImage from './CarouselImage';



export default function DetailBody({
  image, 
  facilities, 
  description,
  location,
  country,
  city,
  mapLocation,
  imageClass
}) {

  function classNames(classes) {
    return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(' ');
  }
  
  const classes = {
    "detail-image": "detail-image ",
    'detail-image2': 'detail-image2',
    'detail-image3': 'detail-image3',
    'detail-image4': 'detail-image4',
    'detail-image5': 'detail-image5',
  };

  const myClassNames = classNames(classes);
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
          console.log(index)
          return (
            <img key= {index} id = {index}  src={item}  alt = "weeb"/>

           ) } )
          }
            {/* <div className="detail-image"></div>
            <div className="detail-image2"></div>
            <div className="detail-image3"></div>
            <div className="detail-image4"></div>
            <div className="detail-image5"></div> */}

        </div>
       
        <div className='image-buttons'>
        <p className='detail-body-verMais' onClick = {changeShow}> Ver mais </p>

        <p className='image-number'> 1/5 </p>
        </div>

        <div className='popover-images' >

        { show && <CarouselImage  />  }

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
               
                <Calendario />
                
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
