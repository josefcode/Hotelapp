import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles.css'

export function RecomendacoeCard(
    {image, 
        type ,
         stars , 
         title, 
         puntaje,
        distancia,
        mapLink, 
        comment, 
        facilities, 
        description, 
        alt, 
        verMais}) {
    return (
   
      <div className='card-container'>
          <div className='image-wrapper'>
              <FavoriteIcon />
              <img className='recomendacoe-image' src = {image} alt = {alt} />
          </div>
  
          <div className='recomendacao-wrapper'>

            <div className='header-wrapper'>

                <div className='categoria-recomendacoe'>

                        <div className='stars-wrapper'>

                                 <h4 className = 'categoria-title'>{type}</h4>  {stars?.map((star, index) => <span className='stars' key = {index}>{star}</span> )}

                        </div>

                    <h4 className='recomendacoe-title'> {title} </h4>
                    
                </div> 

                <div className='puntaje-comment-wrapper'>
 
                    <div className='card-puntaje'>{puntaje}</div>
                    <p className='card-comment'>{comment}</p>
                    
                </div> 

            </div>

            <div className='location'>

             <LocationOnIcon  />
             <span className='distancia'>{distancia} - <a href={mapLink}>MOSTRAR NO MAPA</a></span>

            </div>

            <div className='facilities'>

                {facilities?.map((item, index) => <div key = {index}>{item}</div>)}

            </div>
            
            <div className='description'>
                <p>{description}</p>
                <button className='link-btn'><a  href = {verMais}>Ver mais</a></button>
            </div>

            
          </div>
      </div>
  
    )
  }
