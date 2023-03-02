import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';
import UserAvatar from '../user-avatar/UserAvatar';
import { useLogin } from '../hooks/useLogin';
import MenuMobile from '../menu-mobile/MenuMobile';

export default function Navbar() {
  const { login } = useLogin();
  const location = useLocation();
  const data = localStorage.getItem('data');


  const renderCreateAccountButton = () => {
    if (!login && location.pathname === '/criar-conta') {
      return <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link>;

    } else if (!login && location.pathname === '/iniciar-sessao') {
      return <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link>;

    } else if (!login) {
      return <>
        <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link>
        <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link>
      </>;
    }
    return null;
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/">
          <img className="navbar-logo" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt="travelLogos" />
          <span className='navbar-logo-title'>SuaViagem</span>
        </Link>
        <MenuIcon className="menu-icon" />
        <div className="navbar-btn">
          {renderCreateAccountButton()}

          {login ? <UserAvatar nome={localStorage.getItem('nome')} sobrenome={localStorage.getItem('sobreNome')} /> : null}

        </div>
      </nav>
      <div className="menu-icon">
    <MenuMobile />
    </div>
    </header>
  );
}
