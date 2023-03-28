import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';
import UserAvatar from '../user-avatar/UserAvatar';
import { useLogin } from '../hooks/useLogin';
import MenuMobile from '../menu-mobile/MenuMobile';
import { useToken } from '../hooks/useToken';

export default function Navbar() {
  const { login } = useLogin();

  const tokenLocalStorage = localStorage.getItem('token')


  const { token } = useToken()



  const location = useLocation();
  const data = localStorage.getItem('userAvata');
  const detalesDoAvatar = JSON.parse(data)

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { nome , sobrenome } = detalesDoAvatar || {}
  // console.log(nome , sobrenome)

  const renderCreateAccountButton = () => {
    if (!tokenLocalStorage && location.pathname === '/criar-conta') {
      return <>
        <button className="login-btn" onClick={handleGoBack}>Voltar</button>
        {/* <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link> */}
      </>;

    } else if (!tokenLocalStorage && location.pathname === '/iniciar-sessao') {
      return <>
        <button className="login-btn" onClick={handleGoBack}>Voltar</button>
        {/* <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link> */}
      </>;

    } else if (!tokenLocalStorage) {
      return <>
        <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link>
        <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link>
      </>;
    } else if (typeof tokenLocalStorage === 'string'){
      return <> 
      <UserAvatar
      nome={nome}
      sobrenome={sobrenome}
      />
      </>
    } 
   
    
    
  };
  

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/">
          {/* <img className="navbar-logo" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt="travelLogos" /> */}
          <span className='navbar-logo-title'>SuaViagem.com</span>
        </Link>
        <MenuIcon className="menu-icon" />

        <div className="navbar-btn">
          {renderCreateAccountButton()}

          {/* {token && 
            // email={localStorage.getItem('email')}
          /> } */}

        </div>
      </nav>
      <div className="menu-icon">
        <MenuMobile />
      </div>
    </header>
  );
}
