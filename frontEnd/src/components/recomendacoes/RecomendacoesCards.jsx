import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import { useFilterCategoria } from '../hooks/useFilterCategoria'
import './styles.css'





export  function RecomendacoesCards() {

  const { filter } = useFilterCategoria()
   const [produto, setProduto] = React.useState([])
   const [newProduto, setNewPorduto] = React.useState([])

   function handleFilter(fil){

    if(fil === ""){
      setProduto(produto)
      return;
    }
    
   }

   console.log(filter)

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:3004/acomodacao`)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()

       setProduto(data)
    }
    fetchData()

  }, []);


  //   const filterCard = produto.filter(item => item.type === filter)

           
  //   setProduto(filterCard)
  // }

  // function reader(){
  //   if( filter === ""){
  //     return produto.map(item => {
  //       return  <RecomendacoeCard  key = {item.id} 
  //       id = {item.id}
  //     image = {item.image}  
  //     alt = {item.alt} 
  //     type={item.type} 
  //     title = {item.title} 
  //     puntaje = {item.puntaje} 
  //     distancia={item.distancia} 
  //     mapLink = {item.mapLink}
  //     comment = {item.comment}
  //     facilities = {item.facilities}
  //     description = {item.description}
  //     verMais = {item.verMais} 
  //     stars = {item.stars}
  //     />   
  //   }
  //     )

  // }
  //  else {
  //   const filterCard = produto.filter(item => item.type === filter)
  //   setNewPorduto(filterCard)




  return (
    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
       {produto.map(item =>{
          return ( 

            <RecomendacoeCard  key = {item.id} 
            id = {item.id}
          image = {item.image}  
          alt = {item.alt} 
          type={item.type} 
          title = {item.title} 
          puntaje = {item.puntaje} 
          distancia={item.distancia} 
          mapLink = {item.mapLink}
          comment = {item.comment}
          facilities = {item.facilities}
          description = {item.description}
          verMais = {item.verMais} 
          stars = {item.stars}
          />
          )
       } 
       )
        
       }
           
        </div>
        </div>
  )
}
