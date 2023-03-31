import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./styleBody.css"
import { Calendario } from './Calendario';
import { useShow } from '../hooks/useShow';
import { useToken } from '../hooks/useToken';
import { useParems } from 'react-router-dom'
import CarouselImage from './CarouselImage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import GavelIcon from '@mui/icons-material/Gavel';
import PetsIcon from '@mui/icons-material/Pets';
import { ConnectingAirportsOutlined } from '@mui/icons-material';

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

  const { show, changeShow } = useShow()

  return (
    <div >
      <div className='body-detail-media-icons'>

        <ShareIcon />
        <FavoriteBorderIcon />
      </div>

      <div className='detail-image-container'>
        {
          image?.slice(0, 5).map((item, index) => {
            return (
              <img key={index} id={index} src={item} alt="weeb" />

            )
          })
        }

      </div>

      <div className='image-buttons'>
        <p className='detail-body-verMais' onClick={changeShow}> Ver mais </p>

        <p className='image-number' onClick={changeShow} > 1/5 </p>
      </div>

      <div className='popover-images' >

        {show && <CarouselImage image={image} />}

      </div>

      <div className='body-detail-container'>
        <h2 className='body-title'>{location}</h2>
        <p className='body-detail-description'> {description}
        </p>
      </div>

      <div>
        <h1 className='title-service'>O que tem nesse lugar</h1>
        <div className='title-underline'></div>

        <div className='services-list'>

          <ul className='services-list-wrapper'>
            {facilities?.map(item =>
              <li key={item}>{item}</li>
            )}

          </ul>

        </div>

        <Calendario id={id} />

        {/* mapa */}
        <div >
          <h1 className='title-service'>Mapa</h1>
          <div className='title-underline'></div>

          <div className='mapa-wrapper'>
            <p>{city}</p>

            <div className='mapa'>
              <iframe src={mapLocation} className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

            </div>

          </div>
        </div>

        {/* o que voce precisa saber:  */}
        <div>

          <h1 className='title-service'>O que voce precisa saber</h1>
          <div className='title-underline'></div>

          <div className='detail-card-container'>

<div className='detail-card'>

   <h3 className='detail-card-title' ><GavelIcon /> Regras da casa</h3>
   <p> <PointOfSaleIcon /> Check-out: 12: 00</p>
   <p><span ><CelebrationIcon  /> </span>Não é permitido festas</p>
   <p><SmokeFreeIcon />Não é permitido festas</p>
</div>

<div className='detail-card'>

   <h3 className='detail-card-title' ><DisabledByDefaultIcon />Cancelamento</h3>
   <p>As políticas de cancelamento e pré-pagamento variam de acordo com o tipo de acomodação. Verifique quais condições podem ser aplicadas a cada opção ao fazer sua seleção.</p>
</div>

<div className='detail-card'>

   <h3 className='detail-card-title' ><PetsIcon/> Pets</h3>
   <p>Animais de estimação são permitidos. Encargos podem ser aplicáveis.</p>
</div>


</div>
        </div>
      </div>
    </div>
  )
}