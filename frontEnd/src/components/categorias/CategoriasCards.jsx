// import React from 'react'
// import { CategoriaCard } from '../categoria/CategoriaCard'

// import './styles.css'

// export  function CategoriasCards() {



//    const [categoria, setCategoria] = React.useState([])
 
//    React.useEffect(() => {
//      async function fetchData(){
 
//         const response = await fetch(`http://localhost:3004/categorias`)
       
//         if (!response.ok) {
//          throw new Error(`HTTP error! status: ${response.status}`);
//        }
//         const data = await response.json()
       
//         setCategoria(data)
//      }
 
//      fetchData()
 
//    }, []);


//   return (
//     <div className='container-categoria'>
//        <h2 className='title'> Buscar por tipo de acomodação</h2>
//       <div className='cards-wrapper'>
//         {
//             categoria.map(item =>     <form className='card-wrapper' onClick={handleChange } name = {item.title}>
//             <div >
//                 <img className='card-image' src = {item.image}  alt = {item.alt} />
//             </div>
    
//             <div>
    
//               <div className='card-title' > {item.title} </div>
             
//               <div className='subtitle' > {item.totals} </div>
          
//             </div>
//         </form>
               
//             )
//         }
//         </div>
        
//     </div>
//   )
// }
