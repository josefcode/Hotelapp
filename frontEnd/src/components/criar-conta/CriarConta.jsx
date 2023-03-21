import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import validator from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import { ReservaSucesso } from '../detale-produto-reserva/ReservaSucesso';


export function CriarConta() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [signup, setSignup] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [userData, setUserData] = useState({
    nome: '',
    sobreNome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    userRoles: "ROLE_ADMIN"
  })


  function handleChange(event) {
    const { name, value } = event.target
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  function isValidName(value) {
    return /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validação do nome
    if (!isValidName(userData.nome)) {
      alert('Nome inválido!');
      return;
    }

    // Validação do sobrenome
    if (!isValidName(userData.sobreNome)) {
      alert('Sobrenome inválido!');
      return;
    }
    // Validação do email
    if (!validator.validate(userData.email) || !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
      alert('Email inválido!');
      return;
    }

    // Validação da senha
    if (userData.senha.length < 7) {
      alert('A senha deve ser maior que 6 caracteres!');
      return;
    }

    if (userData.senha !== userData.confirmSenha) {
      alert('Os campos "Confirmar senha" e "Senha" não coincidem!');
      return;
    }

    const {name, sobreNome, senha, email, userRoles} = userData
    try {
      fetch('http://localhost:3004/criarConta', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify({
          name, sobreNome, senha, email, userRoles
        }), // body data type must match "Content-Type" header
      })

      setSignup(true)

    } catch(error) {
      setError(true)
      setSignup(true)
    }
   

  };

  return (
      <div className='iniciar-session-container'>
        
        <h1 className='iniciar-title'>Criar conta</h1>
        <form className='iniciar-form' onSubmit={handleSubmit} >
          <div className='iniciar-nome-sobreNome'>
            <div className='nome-wrapper'>
              <label htmlFor='name'>Nome: </label>
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
            </div>
            <div className='nome-wrapper'>
              <label htmlFor='sobreNome'>Sobrenome: </label>
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
            onChange={handleChange}
          />
          <label htmlFor='senha'>Senha: </label>
          <OutlinedInput
            className='input'
            required
            id="senha"
            size="small"
            name="senha"
            value={userData.senha}
            onChange={handleChange}
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
          />
          <label htmlFor='confirmSenha'>Confirmar senha: </label>
          <input
            required
            className='input'
            id="confirmSenha"
            size="small"
            type='password'
            name='confirmSenha'
            value={userData.confirmSenha}
            onChange={handleChange}
          />

          {userData.confirmSenha === "" && (<span id="component-error-text">Este campo é obrigatório</span>)}

          <div className='btn-wrapper'>
            <button className='iniciar-btn' type='submit'>Registrar</button>

            <span className='iniciar-login'>Ja tem uma Conta? <Link className='login-link' to="/iniciar-sessao">Iniciar sessão</Link></span>
          </div>
        </form>
        {signup && <ReservaSucesso message = {error ? "Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde." : 'A conta foi criada com sucesso!'} link = {error ? '/' :'/iniciar-sessao'} />};
      </div>


  )
}
