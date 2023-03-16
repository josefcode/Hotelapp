import React, { useRef } from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import './styles.css'



export  function RecomendacoesCards() {

   const [produto, setProduto] = React.useState([])

   const [newProduto, setNewPorduto] = React.useState([])

   const [filter, setFilter ] = React.useState('')

   const [categoria, setCategoria] = React.useState([])

   const totals = "807.105 hotéis"
 
   React.useEffect(() => {
     async function fetchData(){
 
        // const response = await fetch(`http://localhost:3004/categorias`)
       
        const response = await fetch(`http://localhost:8081/category/findAll/`)

        if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
        const data = await response.json()
       
        setCategoria(data)
     }
 
     fetchData()
 
   }, []);


  React.useEffect(() => {
    async function fetchData(){

       // const response = await fetch(`http://localhost:3004/acomodacao`)

       const response = await fetch(`http://localhost:8081/product/findAll/`)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()

       setProduto(data)
       setNewPorduto(data)

       console.log(produto)
    }
    fetchData()

  }, []);

  const ref = useRef(null)

  React.useEffect(()=>{
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    };
  }, [])
  
  const handleClickOutside = (event) => {
 
    if(ref.current && !ref.current.contains(event.target)){
      setFilter("")
    }
  
  };

  
  React.useEffect(() => {
    if(filter === ""){
       setNewPorduto(produto)
       return;
    }
    // const result = produto.filter((fil) => fil.type === filter)
    const result = produto.filter((fil) => fil.categoriasEntity.descricao === filter)
    setNewPorduto(result)
  }, [filter, produto]);

  console.log(categoria)

  return (
    <>
    <div className='container-categoria'>
       <h2 className='title'> Buscar por tipo de acomodação</h2>
      <div className='cards-wrapper'>
      
        {
          categoria.map(item =>  
              
            // <form  ref = {ref} key = {item.id} className='card-wrapper' onClick={(e) => setFilter(e.currentTarget.name) } name = {item.name}>  
            <form  ref = {ref} key = {item.id_categorias} className='card-wrapper' onClick={(e) => setFilter(e.currentTarget.name) } name = {item.descricao}>  


            <div >
                {/* <img className='card-image' src = {item.image}  alt = {item.alt} /> */}
                <img className='card-image' src = {item.url_imagem}  alt = {item.alt} />
            </div>
    
            <div>
    
              {/* <div className='card-title' > {item.name} </div> */}
              <div className='card-title' > {item.descricao} </div>

              {/* <div className='subtitle' > {item.totals} </div> */}
              <div className='subtitle' > {totals} </div>

            </div>
            </form>
        
             )
        }
        
        </div>
        
    </div>

    <div className='recomendacaoes-container'>
       <h2 className='recomendacaoes-title'> Recomendações </h2>
      <div className='recomendacaoes-cards-wrapper'>
       {newProduto.map(item =>{
          return ( 

        //     <RecomendacoeCard  key = {item.id} 
        //   id = {item.id}
        // image = {item.image}  
        // alt = {item.alt} 
        // type={item.type} 
        // title = {item.title} 
        // puntaje = {item.puntaje} 
        // distancia={item.distancia} 
        // mapLink = {item.mapLink}
        // comment = {item.comment}
        // facilities = {item.facilities}
        // description = {item.description}
        // verMais = {item.verMais} 
        // stars = {item.stars}
        // />

        <RecomendacoeCard  key = {item.id_produtos} 
            id = {item.id_produtos}
          image = {item.categoriasEntity.url_imagem}  
          alt = {item.alt} 
          type={item.categoriasEntity.descricao} 
          title = {item.nome} 
          puntaje = {item.puntaje} 
          distancia={item.distancia} 
          mapLink = {item.mapLink}
          comment = {item.comment}
          facilities = {item.facilities}
          description = {item.descricao}
          verMais = {item.verMais} 
          stars = {item.stars}
          />

          )
       } 
       )
        
       }
           
        </div>
        
   </div>
        </>
  )
}
