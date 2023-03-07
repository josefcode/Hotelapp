import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useShow} from '../hooks/useShow'
import './styleCarouselImage.css'

export default function CarouselImage(setShowMore) {

  const {changeShow} = useShow()
  const navigate = useNavigate()

  const [toggle, setToggle] = React.useState(false)

  function handleClose(){
    setToggle(true)
    changeShow()

  }

  return (
    <div className={`slider-container ${toggle ? 'hide' : null}`}>
     <div className="slider">


  <div className="slides">

    <div id="slide-1">
    <a href="#slide-1" ><img src = "https://picsum.photos/id/9/600/300" alt= '' /></a>
    </div>
    <div id="slide-2">
    <a href="#slide-1" ><img src = "https://picsum.photos/id/3/600/300" alt= '' /></a>
    </div>
    <div id="slide-3">
    <a href="#slide-1" ><img src = "https://picsum.photos/id/2/600/300" alt= '' /></a>
    </div>
    <div id="slide-4">
    <a href="#slide-1" ><img src = "https://picsum.photos/id/6/600/300" alt= '' /></a>
    </div>
    <div id="slide-5">
    <a href="#slide-1" ><img src = "https://picsum.photos/id/7/600/300" alt= '' /></a>
    </div>
    
  </div>

  <div className='close-btn' onClick={handleClose}
  
>X</div>
  <div>
      1/5
    </div>
  <div className='image-small-wrapper'>
  <a href="#slide-1" ><img className='image-small' src = "https://picsum.photos/id/9/200/100" alt= '' /></a>
  <a href="#slide-2" ><img className='image-small' src = "https://picsum.photos/id/3/200/100" alt= '' /></a>
  <a href="#slide-3" ><img className='image-small' src = "https://picsum.photos/id/2/200/100" alt= '' /></a>
  <a href="#slide-4" ><img className='image-small' src = "https://picsum.photos/id/6/200/100" alt= '' /></a>
  <a href="#slide-5" ><img className='image-small' src = "https://picsum.photos/id/7/2a00/100" alt= '' /></a>
  </div>
</div>

    </div>
  )
}
