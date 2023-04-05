import React, { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import './styles.css'
import { useLogin } from '../hooks/useLogin'
import { CardProdutoReserva } from '../card-produto-reserva/cardProdutoReserva';


export function UserReservas() {

    const {token, changeToken} = useToken()
    const [reservas, changeReservas] = useState()
    const [produtos, changeProdutos] = useState()
    const navigate = useNavigate()
    const {login} = useLogin()
    const tokenLocalStorage = localStorage.getItem('token')
    const {idUser} = useParams()

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token || tokenLocalStorage}` }
    }
    
    console.log(token)
    console.log(login)
    
    useEffect(() => {
        async function fetchReservasData() {
            
            const response = await fetch(`http://3.140.210.50:8081/reservas/findByIdUser/${idUser}`,requestOptions)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            console.log(data)
            changeReservas(data)
        }
        fetchReservasData()
        
        async function fetchProdutosData() {
            
            const response = await fetch(`http://3.140.210.50:8081/product/findAll`)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            console.log(data)
            changeProdutos(data)
        }
        fetchProdutosData()

    },[idUser]);
    
    return (
        <main className='app-main'>
        <div className='searchBox-container'>

            <h2 className='searchBox-title'>Minhas Reservas</h2>

                    

        </div>
        {
            reservas? 
                produtos.map((item, index) => {
                    console.log('kkkkkkkk')
                    for (let i = 0; i < item.reservasEntity.length; i++) {
                        
                        const element = item.reservasEntity[i];
                        if (element.idUser == idUser) {
                            console.log(item.nome)
                            return(
                                <CardProdutoReserva key={index} dados={item} element={element} />
                            )
                        }
                        
                    }
                })
                    
                
            
            :
            ""
        }
        
        </main>
    )
}