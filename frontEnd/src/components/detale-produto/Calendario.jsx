import React from 'react'
import './styleCalendario.css'

export  function Calendario() {
  return (
    <div className='calendario-container'>
    <h1 className='calendario-title'>Datas Disponiveis</h1>


    <div className='calendario-wrapper'>
      
    <div className='calendario'></div>

        <div className='calendario-card'>
            <p>Adicione as Datas da sua viagem </p>

            <button className='calendario-btn' >Iniciar reserva</button>
        </div>
    </div>
    </div>
  )
}
