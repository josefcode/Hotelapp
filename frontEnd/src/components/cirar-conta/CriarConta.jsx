import React, {useState} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

import { Link, useNavigate} from 'react-router-dom';

import './styles.css'
import { Footer } from '../footer/Footer';

export function CriarConta() {


  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const [userData, setUserData]  = useState({
        nome: '',
        sobreNome: '',
        email: '',
        senha: '',
        
}) 
const navigate = useNavigate();

function handleChange(event) {
  const {name, value } = event.target
  setUserData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      }
  })
}

async function handleSubmit(e){
  e.preventDefault()

  localStorage.setItem('data', JSON.stringify(userData))
  
  
  alert('criar conta foi bem sucedido')

  navigate('/')
  
};

  return (
    <>
    <div className='iniciar-session-container'>
        <h1 className='iniciar-title'>Criar conta</h1>
        <form className='iniciar-form'  onSubmit={handleSubmit} >
        <div className='iniciar-nome-sobreNome'>
        <div className='nome-wrapper'>
        <label htmlFor='name'>Nome: </label>
        <input
        className='input'
          required
          id="name"
          size="small"
          type = "text"
          name='nome'
          value={userData.nome}
          onChange= {handleChange}
        />
        </div>
        <div className='nome-wrapper'>
        <label htmlFor='sobreNome'>Sobre nome: </label>
        <input
         className='input'
          required
          id="sobreNome"
           name='sobreNome'
           type="text"
           value = {userData.sobreNome}
           onChange= {handleChange}
          size="small"
        />
       </div>
        </div>
        <label htmlFor='email'>Email: </label>
        <input
         className='input'
          required
          id="email"
          type='email'
          size="small"
          name='email'
          value={userData.email}
          onChange= {handleChange}
        />
        <label htmlFor='senha'>Senha: </label>
        <OutlinedInput
         className='input'
          required
          id="senha"
          size="small"
          name="senha"
          value = {userData.senha}
          onChange= {handleChange}
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
        />
         <label htmlFor='confirmSenha'>Confirm senha: </label>
        <input
          required
          className='input'
          id="confirmSenha"
          size="small"
          type='password'
      
        />
        <span id="component-error-text" >Este campo é obrigatório</span>
       <div className='btn-wrapper'>
       <button className='iniciar-btn' type = 'submit'>Criar conta</button>
      
       <span className='iniciar-login'>Ja tem uma Conta? <Link className='login-link' to = "/iniciar-sessao">Iniciar sessão</Link></span>
       </div>
        </form>
    </div>
    <Footer />
    </>
  )
}
