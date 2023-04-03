import React from 'react'
import './styleCalendario.css'
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import 'react-calendar/dist/Calendar.css';
import { useToken } from '../hooks/useToken';
import { useDatas } from '../hooks/useDatas';

export function Calendario({ id }) {
  const [checkin, setCheckin] = React.useState(new Date())

  const tokenLocalStorage = localStorage.getItem('token')

  const { startDate, endDate} = useDatas()



  console.log(startDate, endDate)
  return (
    <div className='calendario-container'>
      <h1 className='calendario-title'>Datas Disponíveis</h1>
      <div className='calendario-wrapper'>
        <div className='calendario'>
          <div className='double-calender'>
            <Calendar
              locale = "pt-Br"
              onChange={setCheckin}
              value={checkin}
              showDoubleView
              minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
              selectRange
              prev2Label={null}
              next2Label={null}
            />
          </div>
          <div className='single-calender'>
            <Calendar
            locale = "pt-Br"
              onChange={setCheckin}
              value={checkin}
              minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
              selectRange
              prev2Label={null}
              next2Label={null}
            />
          </div>
        </div>
        <div className='calendario-card'>
          <p>Adicione as datas da sua viagem</p>
          {
             typeof tokenLocalStorage === 'string' ?   <Link to={`reserva`} ><button className='calendario-btn' >Iniciar reserva</button></Link> : <Link to={`/iniciar-sessao`} ><button className='calendario-btn' >Iniciar reserva</button></Link> 
            
          }
        </div>
      </div>
      <div>
        { typeof tokenLocalStorage === 'string' ?  null : <Alert sx={{ marginTop: '10px', '&.MuiAlert-root': { color: "rgb(249, 8, 4) !important" } }} severity="error">Para fazer uma reserva você precisa estar logado</Alert> }
      </div>
    </div>
  )
}