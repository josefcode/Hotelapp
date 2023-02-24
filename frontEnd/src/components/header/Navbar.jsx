
import React from 'react'
import { SearchBox } from '../search-box/SearchBox'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'

export default function navbar() {
  return (

<header className='navbar-header'>
    <nav className='navbar'>
      <Link to = '/' ><img className = "navbar-logo" src ="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt ="travelLogos"/></Link>
      <MenuIcon className='menu-icon' />
      <div className='navbar-btn'>
      
        <Link to = 'criar-conta'><button className='login-btn'>Criar conta</button></Link>
        <Link  to= "iniciar-sessao" ><button className='login-btn'>Iniciar sessão </button></Link>
      </div>
      </nav>
      <SearchBox />

  </header>
  )
}
