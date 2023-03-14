import React from 'react'
import { CategoriaCard } from '../categoria/CategoriaCard'
import './styles.css'

export  function CategoriasCards() {

   const [categoria, setCategoria] = React.useState([])
   const total = ['807.105 hotéis'] 

   const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODg1MjU0OCwiaWF0IjoxNjc4NzUyNTQ4fQ.t12h61R93_u6HRxO4SCj21SAt96uKKb_6M8bT4P3C5E"
    }
  };  

   React.useEffect(() => {
     async function fetchData(){
 
        const response = await fetch('http://localhost:8081/category/findAll', requestConfig)
        

        if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
        const data = await response.json()
       
        setCategoria(data)
        console.log(data)

     }
 
     fetchData()


   }, []);

  
  return (
    <div className='container-categoria'>
       <h2 className='title'> Buscar por tipo de acomodação</h2>
      <div className='cards-wrapper'>
        {
            categoria.map(item => <CategoriaCard  key = {item.id} image = {item.url_imagem}  alt = {item.alt} totals={total} 
            title={item.descricao} />
               
            )
        }
        </div>
        
    </div>
  )
}
