import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css'

export default function MenuMobile() {
  return (
    <div className='menu-wrapper'>
        <div className='menu-header'>
          <CloseIcon className='menu-Mobile-icon '/>
          <h2 className='menu-title'>MENU</h2>
        </div>
        <div className='menu-body'>
            <Link to = "/criar-conta"><h3 className='menu-subtitle'>Criar conta</h3></Link>
           <div className='menu-socialMedia'>
           <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
           </div>
        </div>
    </div>
  )
}
