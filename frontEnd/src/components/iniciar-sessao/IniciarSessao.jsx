
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin'
import './style.css'

export function IniciaSessao() {

  const [showPassword, setShowPassword] = useState(false);

  const { changeLogin } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

    const isValid = validateLogin(email, password);

    console.log(localStorage.getItem('email'), localStorage.getItem('senha'))

    if (isValid) {
      // faça login
      navigate('/');
      changeLogin(true);


    } else {
      // exibir mensagem de erro
      alert('Por favor, tente novamente, suas credenciais são inválidas');
    }

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

        <div className='btn-wrapper'>
          <button className='iniciar-btn' type="submit">Iniciar sessão</button>

          <span className='iniciar-login'>Ainda não tem conta? <Link className='login-link' to="/criar-conta">Registre-se</Link></span>
        </div>
      </form>

    </div>
  )
}
