import React, { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import { useLogin } from '../hooks/useLogin'


export function UserReservas() {

    const {token, changeToken} = useToken()
    const [user, changeUser] = useState()
    const navigate = useNavigate()
    const {login} = useLogin()

    console.log(token)
    console.log(login)
    React.useEffect(() => {
        async function fetchData() {
    
          const response = await fetch(`http://localhost:8081/reservas/findAll`)
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json()
          console.log(data)
        }
        fetchData()
      });


    return (
        <main className='app-main'>
        <div className='searchBox-container'>

            <h2 className='searchBox-title'>Minhas Reservas</h2>

                    

        </div>
        
        
        </main>
    )
}