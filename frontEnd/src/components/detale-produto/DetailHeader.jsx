import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import './styleHeader.css'
import { Link } from 'react-router-dom';

export default function DetailHeader() {
  return (
    <div className = "detail-header-container" >
      <div className='detail-first-header-wrapper'>
       <div>
        <p className='type-header'>Hotel</p>
        <h2 className='title-header'>Exemple</h2>
       </div>

       <Link to = "/"><ArrowBackIosIcon className='logo-header'/></Link>

       </div>

       <div className='detail-second-header-wrapper'>

        <div className='detail-location'>

       <LocationOnIcon />

       <p className='location-text'>Buenos Aires, Cidade Autônoma de Buenos Aires,Argentina
940 m para o centro</p>

       </div>

       <div className='detail-puntaje'>
           <div>
            <span className='nota'>muito bom</span>

                <div className='detail-stars'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
                </div>
                <div className='detail'>8</div>
            </div>
            
       </div>
    </div>
  )
}
