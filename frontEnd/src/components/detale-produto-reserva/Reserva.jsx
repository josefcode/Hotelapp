import React, {useState} from 'react'
import './styleReserva.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {data} from '../detale-produto/data'
import { useParams, Link } from 'react-router-dom';
import { ReservaSucesso } from './ReservaSucesso';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export  function Reserva({

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
    const [reserva, setReserva] = React.useState([])
    const [produtoReserva, setProdutoReserva] = React.useState([])
  
   const {id } = useParams()
    const [checkin, setCheckin] = React.useState(new Date())
    const stars = [<StarIcon fontSize='small'/>, <StarIcon fontSize='small'/>, <StarIcon fontSize='small'/>, <StarIcon fontSize='small' />,]

    const [confirm, setConfirm] = React.useState(false)

    const [userData, setUserData] = useState({
        nome: '',
        sobreNome: '',
        email: '',
        cidadae: '',
        userRoles: "ROLE_ADMIN"
      })


      React.useEffect(() => {
        async function fetchData(){
    
          //  const response = await fetch(`http://localhost:3004/acomodacao?id=${id}`)
          
          const response = await fetch(`http://localhost:8081/product/${id}`)
    
           if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
           const data = await response.json()
          
           setProdutoReserva(data)
    
    
    
        }
    
        fetchData()
    
      }, [id]);
    
      const {imagensEntityList} =  produtoReserva
      const imageUrl = imagensEntityList?.map(img => img.url)
      
      console.log(imageUrl)

      React.useEffect(() => {
        async function fetchData(){
    
           const response = await fetch(`http://localhost:3004/acomodacao?id=${id}`)
          
           if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
           const data = await response.json()
          
          setReserva(data)
        }
    
        fetchData()
    
      }, [id]);

      let value = {};
      reserva.map(item => value = item)


      

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
          <span>{value.type}</span>
          <h3>{value.title}</h3>
          </div>
          <Link to = {`/detaile-produto/${id}`}><ArrowBackIosIcon className='logo-header' /></Link>
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
                value={userData.cidadae}
                onChange={handleChange}
                size="small"
              />
              </label>

            </div>


           <div>

            
            <div>

            <div className='calendario-reserva'>
            <h1 className='calendario-title'>Complete seus dados</h1>
              
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
                   sx = {{
                   
                   
                   }}
                   
                   size = "small"
                   disablePortal
                   id="combo-box-demo"
                   options = {data}
                   renderInput={(params) => <TextField {...params} label="Selecione a sua hora de chegada" />}
                   />
                </div>
                </div>
        </form>
          <div className='reserva-card'>
            <div>
              <h4 className='reserva-header-title'>Detale da reserva</h4>
              
                <img className = 'reserva-image' src = {imageUrl} alt = 'detale reserva' />
                </div>
              <div className = 'reserva-body'>
                <p className='reserva-type'>{value.type}</p>
                <p className='reserva-title'>{value.title}</p>
             
                {
                  stars.map((star, index)=>
                    <span  className='reserva-stars' key = {index}>{star}</span>
                  )
                }
               
              <div >

                <LocationOnIcon fontSize='small'/>
                  <span className='reserva-location'>{value.location} </span>
                </div>

                <div className='reserva-underline' ></div>

                <div className='reserva-data'>
                  <p>check in</p>
                  <p>01/01/2023</p>
                </div>

                <div className='reserva-underline' ></div>

                <div className='reserva-data'>
                  <p>check out</p>
                  <p>01/01/2023</p>
                </div>

                <div className='reserva-underline' ></div>

                <button className='reserva-btn' onClick = {() => setConfirm(!confirm)}>Confirm reserva</button>
                </div>
             </div>
             </div>
           
         
             {confirm && <ReservaSucesso message={'Sua reserva foi feita com sucesso'} link = "/"/> }
                
    </div>
      

  )
}
