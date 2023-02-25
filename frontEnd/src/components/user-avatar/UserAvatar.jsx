import React from 'react'
import './styles.css'
import CloseIcon from '@mui/icons-material/Close';

export default function UserAvatar({nome, sobrenome}) {
    
  return (
    <div className='avatar-container'>
        <div className='avatar-image'>
            {nome.charAt(0).toUpperCase()}{sobrenome.charAt(0).toUpperCase()}
        </div>
        <div className='avatar-text'>
            <span>Ola</span>
            <p>{nome} {sobrenome}</p>
        </div>
        <div className='avatar-close'>
         <CloseIcon sx ={{fontSize: '14px',
    color: '#383B58'}}/>
        </div>
    </div>
  )
}
