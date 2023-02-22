
import React from 'react'
import { SearchBox } from '../search-box/SearchBox'
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'

export default function navbar() {
  return (

<header className='navbar-header'>
    <nav className='navbar'>
      <img className = "navbar-logo" src ="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt ="travelLogos"/>
      <MenuIcon className='menu-icon' />
      <div className='navbar-btn'>
      
        <button className='login-btn'>Login</button>
        <button className='login-btn'>login up</button>
      </div>
      </nav>
      <SearchBox />

  </header>
  )
}
