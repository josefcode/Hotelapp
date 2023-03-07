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



export default function DetailBody() {

  const {show, changeShow} = useShow()

  return (
    <div >
        <div className='body-detail-media-icons'>

        <ShareIcon />
        <FavoriteBorderIcon />
        </div>

        <div className='detail-image-container'>
            <div className="detail-image"></div>
            <div className="detail-image2"></div>
            <div className="detail-image3"></div>
            <div className="detail-image4"></div>
            <div className="detail-image5"></div>

        </div>
       
        <div className='image-buttons'>
        <p className='detail-body-verMais' onClick = {changeShow}> Ver mais </p>

        <p className='image-number'> 1/5 </p>
        </div>

        <div className='popover-images' >

        { show && <CarouselImage  />  }

        </div>

        <div className='body-detail-container'>
            <h2 className='body-title'>Fique no coração de Buenos Aires</h2>
            <p className='body-detail-description'>Está localizado a poucas quadras da Avenida Alvear, da Avenida Quintana, do Parque San Martín e do bairro da Recoleta. Nos arredores também existem vários locais de interesse, como a Rua Florida, o Centro Comercial Galerías Pacífico, a zona de Puerto Madero, a Plaza de Mayo e o Palácio Municipal.

            Nossos clientes afirmam que esta parte de Buenos Aires é a preferida, segundo avaliações independentes.

            O Hotel é um sofisticado hotel de 4 estrelas que goza de uma localização tranquila, a poucos passos de prestigiadas galerias de arte, teatros, museus e áreas comerciais. Há também WiFi gratuito.
            A propriedade serve um café da manhã variado das 07:00 h às 10:30 h.
            </p>
            </div>

            <div>
                <h1 className='title-service'>O que esse lugar</h1>
                <div className='title-underline'></div>
               
                <div className='services-list'>
                  <ul className='services-list-wrapper'>

                    <li>
                      <CountertopsIcon /> Cozinha
                    </li>
                    <li>
                      <LiveTvIcon /> Televisor
                    </li>
                    <li>
                      <AcUnitIcon /> Ar condicionado
                    </li>
                    <li>
                      <PetsIcon /> Pets
                    </li>
                    <li>
                      <DirectionsCarIcon /> Cozinha
                    </li>
                    <li>
                      <PoolIcon /> Piscina
                    </li>
                    <li>
                      <WifiIcon /> Piscina
                    </li>

                  </ul>
                </div>
               
                <Calendario />
                
                {/* mapa */}
                <div >
                 <h1 className='title-service'>O que esse lugar</h1>
                <div className='title-underline'></div>

                <div className='mapa-wrapper'>
                <p>Buenos</p>

                <div className='mapa'>

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
