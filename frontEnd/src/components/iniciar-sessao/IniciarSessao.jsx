
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import axios from 'axios'
import { useLogin } from '../hooks/useLogin'
import './style.css';
import Alert from '@mui/material/Alert';
import { ReservaSucesso } from '../detale-produto-reserva/ReservaSucesso';

export function IniciaSessao() {

  const [showPassword, setShowPassword] = useState(false);
  
  const { changeLogin } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  // const [token, setToken] = useState('')

  const {token, changeToken} = useToken()

  function validateLogin(email, password) {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('senha');

    if (email === storedEmail && password === storedPassword) {
      return true;

    }

    return false;
  }


  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
  
    axios.post('http://localhost:8081/user/authenticate', {
      email: email,
      senha: password
    }).then(response => {
      localStorage.setItem('email', email);
    
      alert('Login realizado com sucesso!');
  
      changeToken(response.data.token)
      navigate('/');
      changeToken(response.data.jwt)
      changeLogin(true);
  
    }).catch(error => {
      setErrorMessage('Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde.');
    });
  };
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  };

  return (
    <div className='iniciar-session-container'>
      <h1 className='iniciar-title'>Iniciar sessão</h1>
     {
      !token && <Alert sx = {{marginTop: '10px', '&.MuiAlert-root': {color: "rgb(249, 8, 4) !important" }}}severity="error">Para fazer uma reserva você precisa estar logado</Alert>
     }
      
      {errorMessage && <Alert sx = {{marginTop: '10px', '&.MuiAlert-root': {color: "rgb(249, 8, 4) !important" }}}severity="error">{errorMessage}</Alert>}

      <form className='iniciar-form' onSubmit={handleSubmit} >

        <label htmlFor='email'>Email: </label>
        <input
          className="input"
          required
          id="email"
          type='email'
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete="off"
        />
        <label htmlFor='senha'>Confirmar senha: </label>
        <OutlinedInput

          className='input'
          required
          id="senha"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          sx={{
            '&:.MuiInputBase-root-MuiOutlinedInput-root:hover': {
              borderColor: 'none'
            },
            '&:.MuiInputBase-root-MuiOutlinedInput-root': {
              borderColor: 'none',
              backgroundColor: 'white'
            },

          }}
        />
        {password === "" && (<span id="component-error-text" >Este campo é obrigatório</span>)}
        <div>
         
        </div>
        <div className='btn-wrapper'>
          <button className='iniciar-btn' type="submit">Iniciar sessão</button>

          <span className='iniciar-login'>Ainda não tem conta? <Link className='login-link' to="/criar-conta">Registre-se</Link></span>
        </div>
      </form>
       {/* <ReservaSucesso link = "/" message = "A conta foi criada com sucesso!"/> */}
    </div>
  )
}
