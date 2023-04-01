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
import { useDatas } from '../hooks/useDatas';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import GavelIcon from '@mui/icons-material/Gavel';
import { useToken } from '../hooks/useToken';
import Alert from '@mui/material/Alert';
import { format } from 'date-fns'
import PetsIcon from '@mui/icons-material/Pets';
import moment from 'moment';

export function Reserva() {

  const {startDate, endDate, changeStartDate, changeEndDate } = useDatas()

  const [produtoReserva, setProdutoReserva] = React.useState([])
  const { id } = useParams()
  const { token } = useToken()
  const [checkin, setCheckin] = React.useState(new Date())
  const [checkout, setCheckout] = React.useState(new Date())
  const [selectedValue, setSelectedValue] = useState(null);
  const stars = [<StarIcon fontSize='small' />, <StarIcon fontSize='small' />, <StarIcon fontSize='small' />, <StarIcon fontSize='small' />,]
  const [confirm, setConfirm] = React.useState(false)
  const [error, setError] = useState(false)
  const [cidade, setCidade] = React.useState('')
  const [idUser, setIdUser] = useState('')
  const [userData, setUserData] = useState({
    nome: '',
    sobreNome: '',
    email: '',
    cidade: '',
  })

  const [tudasDataDisponivel, setTudasDataDisponivel] = useState([])

  const datasss = tudasDataDisponivel.map(data => {
    const dataInicial = [data.dataInicial]
    const dataFinal = [data.dataFinal]

    return {
      dataInicial,
      dataFinal
    }
  })

  console.log(datasss)

  const tokenLocalStorage = localStorage.getItem('token')

  const [dataInicialReservada, setDataInicialReservada] = useState('')
  const [dataFinalReservada, setDataFinalReservada] = useState('')


  const dataInicialValue = new Date(`${dataInicialReservada}`)
  const dataFinalValue = new Date(`${dataFinalReservada}`)

  const date1 = dataInicialValue.getDate()
  const date2 = dataFinalValue.getDate()

  let fullDates = []

  for (let i = date1; i <= date2; i++) {
    fullDates.push(i)
  }

  const listDatas = fullDates.map(item => item)


  function handleDateChange(value) {
    changeStartDate(false)
    changeEndDate(false)
    setCheckin(value[0]);
    setCheckout(value[1]);
  }

  function handleAutocompleteChange(event, value) {
    setSelectedValue(value.label);
  }

  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://3.140.210.50:8081/product/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setCidade(data.cidadesEntity.nome)
      setProdutoReserva(data)
      setTudasDataDisponivel(data.reservasEntity)
      setDataInicialReservada(data.reservasEntity[0].dataInicial)
      setDataFinalReservada(data.reservasEntity[0].dataFinal)
    }
    fetchData()

    async function fetchUserData() {
      try {
        const response = await fetch(`http://3.140.210.50:8081/user/${token || tokenLocalStorage}`);
        const userData = await response.json();

        // Atualiza os valores dos inputs com os dados da resposta
        setUserData({
          nome: userData.nome,
          sobreNome: userData.sobrenome,
          email: userData.email,
        });
        setIdUser(userData.id)

      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData()
  }, [id, userData.id]);

  function handleReserva() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token || tokenLocalStorage}` },
      body: JSON.stringify({
        horaInicial: selectedValue,
        dataInicial: checkin.toISOString(),
        dataFinal: checkout.toISOString(),
        idUser: idUser,
        produtosEntity: {
          id_produtos: id
        }
      })
    };

    fetch('http://3.140.210.50:8081/reservas/register', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setConfirm(true)
      })
      .catch(error => {
        setError(true)
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

        <div className='produto-logado-wrapper'>

          <label htmlFor='name'>Nome:
            <input
              className='input disabled'
              required
              id="name"
              size="small"
              type="text"
              name='nome'
              value={userData.nome}
              onChange={handleChange}
              disabled
            />
          </label>

          <label htmlFor='sobreNome'>Sobrenome:
            <input
              className='input disabled'
              required
              id="sobreNome"
              name='sobreNome'
              type="text"
              value={userData.sobreNome}
              onChange={handleChange}
              size="small"
              disabled
            />
          </label>

          <label htmlFor='sobreNome'>Email:
            <input
              className='input disabled'
              required
              id="sobreNome"
              name='email'
              type="text"
              value={userData.email}
              onChange={handleChange}
              size="small"
              disabled
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
                  locale="pt-Br"
                  onChange={handleDateChange}
                  minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
                  showDoubleView
                  selectRange
                  prev2Label={null}
                  next2Label={null}
                  tileDisabled={({ date }) => {
                    let currDate = date.getDate()
                    return listDatas.indexOf(currDate) !== -1
                  }
                  }
                />
              </div>
              <div className='single-calender'>
                <Calendar
                  locale="pt-Br"
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

              id="combo-box-demo"
              options={data}
              onChange={handleAutocompleteChange}
              renderInput={(params) => <TextField {...params} label="Selecione a sua hora de chegada" />}
            />
          </div>
          <div>
            <div>
              <div className='calendario-reserva'>
                <h1 className='calendario-title'>Selecione sua data de reserva</h1>
                <div className='double-calender'>
                  <Calendar
                  locale = "pt-Br"
                    onChange={handleDateChange}
                    minDate={new Date()} // Adicione esta linha para desabilitar datas anteriores à data atual
                    showDoubleView
                    selectRange
                    prev2Label={null}
                    next2Label={null}
                    tileDisabled={({date}) => {
                     let currDate = date.getDate()
                      return listDatas.indexOf(currDate) !== -1
                      }
                    }
                  />
                </div>
                <div className='single-calender'>
                  <Calendar
                  locale = "pt-Br"
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
                size="small"
                id="combo-box-demo"
                options={data}
                onChange={handleAutocompleteChange}
                renderInput={(params) => <TextField {...params} label="Selecione a sua hora de chegada"  />}
              />
            </div>
            <div>
    
            </div>
          </div>
        </div>
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
              {
                startDate ?
                  <p>{format(new Date(`${startDate}`), 'dd/MM/yyyy')}</p>
                  :
                  <p> {moment(checkin.toISOString()).format('DD/MM/yyyy')}</p>
              }

            </div>
            <div className='reserva-underline' ></div>
            <div className='reserva-data'>
              <p>check out</p>

              {
                endDate ?
                  <p>{format(new Date(`${endDate}`), 'dd/MM/yyyy')}</p>
                  :
                  <p> {moment(checkout.toISOString()).format('DD/MM/yyyy')}</p>
              }

            </div>
            <div className='reserva-underline' ></div>
        

            <button className='reserva-btn' onClick={handleReserva}>Confirmar reserva</button>

          </div>

        </div>
        <div className='error-message'>
          {error && <Alert sx={{ marginTop: '10px', '&.MuiAlert-root': { color: "rgb(249, 8, 4) !important" } }} severity="error">Infelizmente a reserva não pôde ser feita. Por favor, tente novamente mais tarde.</Alert>}
        </div>

      </div>


      <h1 className='title-service'>O que voce precisa saber</h1>
      <div className='title-underline'></div>

      <div className='detail-card-container'>

        <div className='detail-card'>

          <h3 className='detail-card-title' ><GavelIcon /> Regras da casa</h3>
          <p> <PointOfSaleIcon /> Check-out: 12: 00</p>
          <p><span ><CelebrationIcon /> </span>Não é permitido festas</p>
          <p><SmokeFreeIcon />Não é permitido festas</p>
        </div>

        <div className='detail-card'>

          <h3 className='detail-card-title' ><DisabledByDefaultIcon />Cancelamento</h3>
          <p>As políticas de cancelamento e pré-pagamento variam de acordo com o tipo de acomodação. Verifique quais condições podem ser aplicadas a cada opção ao fazer sua seleção.</p>
        </div>

        <div className='detail-card'>

          <h3 className='detail-card-title' ><PetsIcon /> Pets</h3>
          <p>Animais de estimação são permitidos. Encargos podem ser aplicáveis.</p>
        </div>


      </div>

      {confirm && <ReservaSucesso message={'Sua reserva foi feita com sucesso'} link="/" />}

    </div>
  )
}