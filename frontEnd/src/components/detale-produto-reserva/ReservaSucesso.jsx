import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Link } from 'react-router-dom'
import './styleReservaSucesso.css'

export  function ReservaSucesso() {
  return (
    <div className='reservaSucesso-container'>
        <div className='reservaSucesso-card'>
            <CheckCircleOutlineIcon fontSize='large'/>
            <h3 className = "reservaSucesso-title1" >Muito obrigado!</h3>
            <h4 className = "reservaSucesso-title2">Sua reserva foi feita com sucesso</h4>
            <Link to ={"/"} className='reservaSucesso-btn' ><button className='reservaSucesso-btn'>ok</button></Link>
        </div>
    </div>
  )
}
