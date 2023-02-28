
import React from 'react'
import './styles.css'


export function CategoriaCard({image, title, totals, alt}) {
  return (
 
    <div className='card-wrapper'>
        <div >
            <img className='card-image' src = {image} alt = {alt} />
        </div>

        <div>

          <h4 className='card-title'> {title} </h4>
         
          <p className='subtitle'> {totals} </p>
      
        </div>
    </div>

  )
}
