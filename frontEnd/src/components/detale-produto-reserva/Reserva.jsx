import React, { useEffect, useState } from 'react'
import './styleReserva.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { data } from '../detale-produto/data'
import { useParams, Link } from 'react-router-dom';
import { ReservaSucesso } from './ReservaSucesso';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useToken } from '../hooks/useToken';
import axios from 'axios';
import moment from 'moment';

export function Reserva({

  image,
  type,
  title,
  puntaje,
  distancia,
  location,
  comment,
  facilities,
  description,

}) {
  // const [reserva, setReserva] = React.useState([])
  const [produtoReserva, setProdutoReserva] = React.useState([])
  const { id } = useParams()
  const { token } = useToken()
  const [checkin, setCheckin] = React.useState(new Date())
  const [checkout, setCheckout] = React.useState(new Date())
  const [selectedValue, setSelectedValue] = useState(null);
  const stars = [<StarIcon fontSize='small' />, <StarIcon fontSize='small' />, <StarIcon fontSize='small' />, <StarIcon fontSize='small' />,]
  const [confirm, setConfirm] = React.useState(false)
  const [cidade, setCidade] = React.useState('')
  const [userData, setUserData] = useState({
    nome: '',
    sobreNome: '',
    email: '',
    cidadae: ''
  })

  function handleDateChange(value) {
    setCheckin(value[0]);
    setCheckout(value[1]);
  }

  function handleAutocompleteChange(event, value) {
    setSelectedValue(value.label);
  }

  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://localhost:8081/product/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setProdutoReserva(data)
      setCidade(data.cidadesEntity.nome)
    }
    fetchData()

    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:8081/user/${token}`);
        const userData = await response.json();

        console.log(userData)
        // Atualiza os valores dos inputs com os dados da resposta
        setUserData({
          nome: userData.nome,
          sobreNome: userData.sobrenome,
          email: userData.email,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData()
  }, [id]);

  function handleReserva() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({
        horaInicial: selectedValue,
        dataInicial: checkin.toISOString(),
        dataFinal: checkout.toISOString()
      })
    };

    fetch('http://localhost:8081/reservas/register', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setConfirm(true)
      })
      .catch(error => {
        alert('Infelizmente a reserva não pôde ser feita. Por favor, tente novamente mais tarde.');
      });
  }

  const { imagensEntityList, nome, cidadesEntity, categoriasEntity } = produtoReserva
  const imageUrl = imagensEntityList?.map(img => img.url)

  function handleChange(event) {
    const { name, value } = event.target
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  return (

    <div >
      <div className='reserva-container-header'>
        <div>
          <span>{categoriasEntity?.descricao}</span>
          <h3>{nome}</h3>
        </div>
        <Link to={`/detaile-produto/${id}`}><ArrowBackIosIcon className='logo-header' /></Link>
      </div>
      <h1 className='title-service'>Complete seus dados</h1>
      <div className='reserva-container'>
        <form action="">
          <div className='produto-logado-wrapper'>

            <label htmlFor='name'>Nome:
              <input
                className='input'
                required
                id="name"
                size="small"
                type="text"
                name='nome'
                value={userData.nome}
                onChange={handleChange}
              />
            </label>

            <label htmlFor='sobreNome'>Sobrenome:
              <input
                className='input'
                required
                id="sobreNome"
                name='sobreNome'
                type="text"
                value={userData.sobreNome}
                onChange={handleChange}
                size="small"
              />
            </label>

            <label htmlFor='sobreNome'>Email:
              <input
                className='input'
                required
                id="sobreNome"
                name='email'
                type="text"
                value={userData.email}
                onChange={handleChange}
                size="small"
              />
            </label>
            <label htmlFor='sobreNome'>Cidade:
              <input
                className='input'
                required
                id="sobreNome"
                name='cidade'
                type="text"
                value={cidade}
                onChange={handleChange}
                size="small"
              />
            </label>

          </div>
          <div>
            <div>
              <div className='calendario-reserva'>
                <h1 className='calendario-title'>Selecione sua data de reserva</h1>
                <div className='double-calender'>
                  <Calendar
                    onChange={handleDateChange}
                    minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
                    showDoubleView
                    selectRange
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
                <div className='single-calender'>
                  <Calendar
                    onChange={handleDateChange}
                    minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
                    selectRange
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='horas-wrapper' >
            <div className='horas-chegada'>
              <div>
                <CheckCircleOutlineIcon />
                <span>Seu quarto estará pronto para check-in entre 10h00 e 23h00</span>
              </div>
              <div>
                <p >Indique a sua hora prevista de chegada</p>
              </div>
              <Autocomplete
                sx={{}}
                size="small"
                disablePortal
                id="combo-box-demo"
                options={data}
                onChange={handleAutocompleteChange}
                renderInput={(params) => <TextField {...params} label="Selecione a sua hora de chegada" />}
              />
            </div>
          </div>
        </form>
        <div className='reserva-card'>
          <div>
            <h4 className='reserva-header-title'>Detalhes da reserva</h4>
            <img className='reserva-image' src={imageUrl} alt='detale reserva' />
          </div>
          <div className='reserva-body'>
            <p className='reserva-type'>{categoriasEntity?.descricao}</p>
            <p className='reserva-title'>{nome}</p>
            {
              stars.map((star, index) =>
                <span className='reserva-stars' key={index}>{star}</span>
              )
            }
            <div >
              <LocationOnIcon fontSize='small' />
              <span className='reserva-location'>{cidadesEntity?.nome} </span>
            </div>
            <div className='reserva-underline' ></div>
            <div className='reserva-data'>
              <p>check in</p>
              <p>{`${moment(checkin.toISOString()).format('DD-MM-YYYY')}`}</p>
            </div>
            <div className='reserva-underline' ></div>
            <div className='reserva-data'>
              <p>check out</p>
              <p>{`${moment(checkout.toISOString()).format('DD-MM-YYYY')}`}</p>
            </div>
            <div className='reserva-underline' ></div>
            {/* <button className='reserva-btn' onClick={() => setConfirm(!confirm)}>Confirmar reserva</button> */}
            <button className='reserva-btn' onClick={handleReserva}>Confirmar reserva</button>
          </div>
        </div>
      </div>
      {confirm && <ReservaSucesso message={'Sua reserva foi feita com sucesso'} link="/" />}
    </div>
  )
}