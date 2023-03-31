
import React, { useRef } from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import { useHotelFilterCidade } from '../hooks/useHotelFilterCidade';
import './styles.css'

const image = [
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/431820542.jpg?k=5726858389a94388310de50bf3c1af8d73a02c6690dc1f01184097cdb1efab51&o=&hp=1",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
]

export function RecomendacoesCards() {
  const [produto, setProduto] = React.useState([])
  const [newProduto, setNewPorduto] = React.useState([])
  const [filter, setFilter] = React.useState('')
  const [categoria, setCategoria] = React.useState([])
  const totals = "807.105 hotéis"

  const {hotelPorCidade, changeHotelPorCidade } = useHotelFilterCidade()


  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://3.140.210.50:8081/category/findAll/`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setCategoria(data)
    }
    fetchData()
  }, []);


  React.useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://3.140.210.50:8081/product/findAll/`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setProduto(data)
      setNewPorduto(data)
      
    }
    fetchData()
  }, []);

  const ref = useRef(null)

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    };
  }, [])

  const handleClickOutside = (event) => {

    if (ref.current && !ref.current.contains(event.target)) {
      setFilter("")
    }
  };

  React.useEffect(() => {
    if (filter === "") {
      setNewPorduto(produto)
      return;
    }
    // const result = produto.filter((fil) => fil.type === filter)
    const result = produto.filter((fil) => fil.categoriasEntity.descricao === filter)
    changeHotelPorCidade(null)
    setNewPorduto(result)

  }, [filter, produto]);

  return (
    <div >
      <div className='container-categoria'>
        <h2 className='title'> Buscar por tipo de acomodação</h2>
        <div className='cards-wrapper'>
          {
            categoria.map(item => {
              const { id_categorias, descricao, url_imagem } = item
              return (
                <form ref={ref} key={id_categorias} className='card-wrapper' onClick={(e) => setFilter(e.currentTarget.name)} name={descricao}>
                  <div >
                    <img className='card-image' src={url_imagem} alt={descricao} />
                  </div>
                  <div>
                    <div className='card-title' > {descricao} </div>
                    <div className='subtitle' > {totals} </div>
                  </div>
                </form>
              )
              })

            
          }
          
              
          
        
              
        </div>
      </div>
      <div className='recomendacaoes-container'>
        <h2 className='recomendacaoes-title'> Recomendações </h2>
        <div className='recomendacaoes-cards-wrapper'>
          {
          
          hotelPorCidade ? 
          (
            hotelPorCidade.map(item => {
              const facilities = [<PoolIcon />, <WifiIcon />]
              const { id_produtos, nome, descricao, categoriasEntity, pontuacao, comentarios, localMapa, distancia } = item
            return (
              <RecomendacoeCard key={id_produtos}
                id={id_produtos}
                image={image}
                alt={nome}
                type={categoriasEntity.descricao}
                title={nome}
                puntaje={pontuacao}
                distancia={distancia}
                mapLink={localMapa}
                comment={comentarios}
                facilities={facilities}
                description={descricao}
              />
            )
            })
            )

            :
          
          newProduto.map(item => {
            const facilities = [<PoolIcon />, <WifiIcon />]
            const { id_produtos, nome, descricao, categoriasEntity, pontuacao, comentarios, localMapa, distancia } = item
            return (
              <RecomendacoeCard key={id_produtos}
                id={id_produtos}
                image={image}
                alt={nome}
                type={categoriasEntity.descricao}
                title={nome}
                puntaje={pontuacao}
                distancia={distancia}
                mapLink={localMapa}
                comment={comentarios}
                facilities={facilities}
                description={descricao}
              />
            )
          }
          )
          }
        </div>
      </div>
    </div>
  )
}
