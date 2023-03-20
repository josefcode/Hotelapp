import React from 'react'
import './styleCalendario.css'
import Calendar from 'react-calendar';
import Alert from '@mui/material/Alert';
import 'react-calendar/dist/Calendar.css';

export  function Calendario() {
  const [checkin, setCheckin] = React.useState(new Date())
  const [toggle, setToggle] = React.useState(false)
  return (
    <div className='calendario-container'>
    <h1 className='calendario-title'>Datas Disponiveis</h1>


    <div className='calendario-wrapper'>
      
    <div className='calendario'>
    <div className='double-calender'>
    <Calendar onChange={setCheckin} value={checkin} showDoubleView 
     selectRange
     prev2Label= {null}
     next2Label= {null}
    />
    </div>
    <div className='single-calender'>
     <Calendar onChange={setCheckin} value={checkin} 
     selectRange
     prev2Label= {null}
     next2Label= {null}
    />
   </div>
    </div>
        <div className='calendario-card'>
            <p>Adicione as Datas da sua viagem </p>

            <button className='calendario-btn' onClick = {() => setToggle(!toggle)}>Iniciar reserva</button>
           
        </div>
        
    </div>
    <div>
    {toggle && <Alert sx = {{marginTop: '10px', '&.MuiAlert-root': {color: "rgb(249, 8, 4) !important" }}}severity="error">Para fazer uma reserva você precisa estar logado</Alert>}
    </div>
    </div>
  )
}
