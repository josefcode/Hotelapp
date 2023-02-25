
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'
import UserAvatar from '../user-avatar/UserAvatar';

export default function Navbar() {

  const token = localStorage.getItem('token')
 const data = localStorage?.getItem('data')
 const object = JSON.parse(data)
 
  
  
  return (

<header className='navbar-header'>
    <nav className='navbar'>
      <Link to = '/' ><img className = "navbar-logo" src ="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt ="travelLogos"/></Link>
      <MenuIcon className='menu-icon' />
    
      <div className='navbar-btn'>
      
    
   
      {
        typeof token === 'object' ?
        <>
        <Link to = 'criar-conta'><button className='login-btn'>Criar conta</button></Link>
        <Link  to= "iniciar-sessao" ><button className='login-btn'>Iniciar sessão </button></Link> 
        </> : 
      
        <UserAvatar nome = {object?.nome} sobrenome = {object?.sobreNome} />
      }
      </div>
      </nav>

  </header>
  )
}
