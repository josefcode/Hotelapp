import React from 'react'
import './styles.css'
import CloseIcon from '@mui/icons-material/Close';
import { useLogin } from '../hooks/useLogin';

export default function UserAvatar({nome, sobrenome, email}) {
  
   const {changeLogin} = useLogin()

    const handleRemove = () => {
 
        localStorage.removeItem('nome')
        localStorage.removeItem('sobreNome')
        localStorage.removeItem('email')
        // localStorage.removeItem('senha')

         changeLogin(false)
    }

  return (
    <div className='avatar-container'>
        <div className='avatar-image'>
            {/* {nome?.charAt(0).toUpperCase()}
            {sobrenome?.charAt(0).toUpperCase()} */}
            {email?.charAt(0).toUpperCase()}
        </div>
        <div className='avatar-text'>
            <span>Olá</span>
            <p>
            {/* {nome}
            {sobrenome} */}
            {email}
            </p>
        </div>
        <div className='avatar-close'>
        <CloseIcon onClick = {handleRemove} sx ={{fontSize: '14px',
    color: '#383B58'}}/>
        </div>
    </div>
  )
}
