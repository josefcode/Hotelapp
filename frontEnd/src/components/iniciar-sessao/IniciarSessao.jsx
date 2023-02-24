import './styles.css'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';
import './styles.css'

export function IniciaSessao() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='iniciar-session-container'>
        <h1 className='iniciar-title'>Iniciar sessão</h1>
        <form className='iniciar-form'>
      
        <label htmlFor='email'>Email: </label>
        <input
         className='input'
          required
          id="email"
          type='email'
          size="small"
          
        />
        <label htmlFor='senha'>Confirmar senha: </label>
        <OutlinedInput
         className='input'
          required
          id="confirmarSenha"
          size="small"
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
       <button className='iniciar-btn'>Criar conta</button>
      
       <span className='iniciar-login'>Ainda não tem conta? <Link className='login-link' to = "/criar-conta">Registre-se</Link></span>
       </div>
        </form>
    </div>
  )
}
