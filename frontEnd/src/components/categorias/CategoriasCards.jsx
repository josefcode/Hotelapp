import React from 'react'
import { CategoriaCard } from '../categoria/CategoriaCard'
import './styles.css'

export  function CategoriasCards() {

   const [categoria, setCategoria] = React.useState([])
 
   React.useEffect(() => {
     async function fetchData(){
 
        const response = await fetch(`http://localhost:3004/categorias`)
       
        if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
        const data = await response.json()
       
        setCategoria(data)
     }
 
     fetchData()
 
   }, []);

  
  return (
    <div className='container-categoria'>
       <h2 className='title'> Buscar por tipo de acomodação</h2>
      <div className='cards-wrapper'>
        {
            categoria.map(item => <CategoriaCard  key = {item.id} image = {item.image}  alt = {item.alt} totals={item.totals} 
            title={item.name} />
               
            )
        }
        </div>
        
    </div>
  )
}
