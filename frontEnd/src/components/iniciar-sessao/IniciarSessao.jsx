import './styles.css'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link, useNavigate} from 'react-router-dom';
import { useLogin } from  '../hooks/useLogin'

import './styles.css'
import { TextField } from '@mui/material';

export function IniciaSessao() {

  const [showPassword, setShowPassword] = useState(false);

  const {changeLogin} = useLogin()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] =  useState({email: '', password: ''})
  const [ emailValid, setEmailValid] = useState(false)
   const [passwordValid, setPasswordValid] = useState(false)

  const requestHeader = {
    'Accept': "",
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${localStorage.getItem('token')}`
  }

  

  const bodyRequest = {
    username: userName,
    password: password
  }

  const  requestConfig = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(bodyRequest)
  }
  const url = 'http://localhost:8080/login'
  const navigate = useNavigate();

  async function handleSubmit(e){
    console.log(emailValid)
    e.preventDefault()

    try{
      fetch(url, requestConfig)
      .then(res=>res.json())
      .then(data=>localStorage.setItem('token', data.json))
      }catch(err){
        alert('ocorreu um erro' + err)
      }

    
      if(userName === ""){
        setEmailValid(true)
      }
   

    navigate('/')
   
    changeLogin(true)
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  };

  return (
    <div className='iniciar-session-container'>
        <h1 className='iniciar-title'>Iniciar sessão</h1>
        <form className='iniciar-form' onSubmit={handleSubmit} >
      
        <label htmlFor='email'>Email: </label>
        <input
         className= "input"
          required
          id="email"
          type='email'
          size="small"
          value={userName}
          onChange= {(e) => setUserName(e.target.value)}
           autocomplete="off"
        />
        <label htmlFor='senha'>Confirmar senha: </label>
        <OutlinedInput
         
         className='input'
          required
          id="confirmarSenha"
          size="small"
          value={password}
          onChange= {(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ?  <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          sx={{
            '&:.MuiInputBase-root-MuiOutlinedInput-root:hover':{
                borderColor: 'none'
            },
            '&:.MuiInputBase-root-MuiOutlinedInput-root':{
                borderColor: 'none',
                backgroundColor: 'white'
            },
             
          }}
        />
        <span id="component-error-text" >Este campo é obrigatório</span>
       <div className='btn-wrapper'>
       <button className='iniciar-btn' type="submit">Entrar</button>
      
       <span className='iniciar-login'>Ainda não tem conta? <Link className='login-link' to = "/criar-conta">Registre-se</Link></span>
       </div>
        </form>
    </div>
  )
}
