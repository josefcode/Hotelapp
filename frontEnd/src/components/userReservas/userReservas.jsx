import React, { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams } from 'react-router-dom'
import './styles.css'
import { useLogin } from '../hooks/useLogin'
import { CardProdutoReserva } from '../card-produto-reserva/cardProdutoReserva';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';

export function UserReservas() {

    const {token, changeToken} = useToken()
    const [reservas, changeReservas] = useState()
    const [produtos, changeProdutos] = useState()
    const {login} = useLogin()
    const tokenLocalStorage = localStorage.getItem('token')
    const {idUser} = useParams()
    
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token || tokenLocalStorage}` }
    }
    
    console.log(token)
    console.log(login)
    console.log(idUser)
    
    //Usado para testar o if no lugar de reservas.
    /* const teste = '' */
    
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

    function dadosReserva(dados){
        const lista = []
        for (let i = 0; i < dados.reservasEntity.length ; i++) {
                        
            const element = dados.reservasEntity[i];
            
            if (element.idUser == idUser) {

                lista.push({nome:dados.nome,
                    img:dados.imagensEntityList[0].url,
                    dataInicial:element.dataInicial,
                    dataFinal:element.dataFinal,
                    horaEntrada:element.horaInicial}
                )

                
            }
        }
        return lista
    }



    
    return (
        <main className='app-main'>
        <div className='searchBox-container' >
            <div className = 'history-reserva-container'>
      
            <h2 className='history-reserva-title'>Minhas Reservas</h2>
            <Link to="/"><ArrowBackIosIcon className='logo-header' /></Link>
            </div>

        </div>
        <div className='history-reserva-fully-container'>
        {
            reservas?
                produtos?.map((item) => {
                    console.log('kkkkkkkk')
                    const lista=dadosReserva(item)   
                    console.log(lista)                 
                    return(
                        
                        lista.map((item2,index)=> (

                            <CardProdutoReserva key={index} dados={item2}/>
                        ))
                        
                    )
                })
                
                

                
                    
            
            :
            <div className={"sem-reservas"}>
                <ContentPasteOffIcon className={"sem-reservas-icon"}/>
                <Link to={'/'}>HOME</Link>
                <h5>Você ainda não fez nenhuma reserva</h5>
            </div>

            
        }
        </div>
        
        </main>
    )
}