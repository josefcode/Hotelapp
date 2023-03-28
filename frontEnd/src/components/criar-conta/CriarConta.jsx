import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import validator from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
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
    sobrenome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    roles: ""
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
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
    if (!isValidName(userData.sobrenome)) {
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

    if (userData.roles == "" || userData.roles == null) {
      alert('O tipo de usuário não foi selecionado!');
      return;
    }

    const { nome, sobrenome, senha, email, roles } = userData

    axios.post('http://localhost:8081/user', {
      nome,
      sobrenome,
      email,
      senha,
      userRoles: roles
    })

    setSignup(true)

      .catch(error => {
        alert('Não foi possível criar a conta. Tente novamente mais tarde.');
        setError(true)
        setSignup(false)
      });
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
            <label htmlFor='sobrenome'>Sobrenome: </label>
            <input
              className='input'
              required
              id="sobrenome"
              name='sobrenome'
              type="text"
              value={userData.sobrenome}
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
        <h5 className='user-roles-title'>Tipo de usuário: </h5>
        <div className='user-roles'>
          <input
            type="radio"
            id="ROLE_ADMIN"
            name='roles'
            value='ROLE_ADMIN'
            checked={userData.roles === "ROLE_ADMIN"}
            onChange={handleChange}
          />
          <label htmlFor='ROLE_ADMIN' >Administrador</label>
          <input
            type="radio"
            id="ROLE_USER"
            name='roles'
            value="ROLE_USER"
            checked={userData.roles === "ROLE_USER"}
            onChange={handleChange}
          />
          <label htmlFor='ROLE_USER'>Usuário comum</label>
        </div>
        <div className='btn-wrapper'>
          <button className='iniciar-btn' type='submit'>Registrar</button>

          <span className='iniciar-login'>Já tem uma conta? <Link className='login-link' to="/iniciar-sessao">Iniciar sessão </Link></span>
        </div>
      </form>
      {signup && <ReservaSucesso message={error ? "Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde." : 'A conta foi criada com sucesso!'} link={error ? '/' : '/iniciar-sessao'} />}
    </div>
  )
}
