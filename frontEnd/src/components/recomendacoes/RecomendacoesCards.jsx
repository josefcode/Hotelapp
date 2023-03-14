import React from 'react'
import { RecomendacoeCard } from '../recomendacoe/RecomendacoeCard'
import './styles.css'

export function RecomendacoesCards() {
  const [produto, setProduto] = React.useState([]);
  const [categoria, setCategoria] = React.useState(null);

  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODg1MjU0OCwiaWF0IjoxNjc4NzUyNTQ4fQ.t12h61R93_u6HRxO4SCj21SAt96uKKb_6M8bT4P3C5E"
    }
  };  

  React.useEffect(() => {
    async function fetchData() {
      let url = "http://localhost:8081/product/findAll";

      if (categoria) {
        url = `http://localhost:8081/product/findByCategory/${categoria}`;
      }
      const response = await fetch(url, requestConfig);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduto(data);
    }
    fetchData();
  }, [categoria]);

  function handleCategoryClick(categoria) {
    if (categoria === null) {
      setCategoria(null);
    } else {
      setCategoria(categoria);
    }
  }  

  return (
    <div className="recomendacaoes-container">
      <h2 className="recomendacaoes-title"> Recomendações </h2>
      <div>
        <a onClick={() => handleCategoryClick("Hotéis")}>#Hotéis </a>
        <a onClick={() => handleCategoryClick("Hostels")}>#Hostels </a>
        <a onClick={() => handleCategoryClick("Apartamentos")}>#Apartamentos </a>
        <a onClick={() => handleCategoryClick("Cama e café da manhã")}>#Cama_e_café_da_manhã </a>
        <a onClick={() => handleCategoryClick(null)}>#Todas</a>
      </div>

      <div className="recomendacaoes-cards-wrapper">
        {produto.map((item) => (
          <RecomendacoeCard
            key={item.id_produtos}
            id={item.id_produtos}
            image={item.categoriasEntity.url_imagem}
            alt={item.alt}
            type={item.type}
            title={item.nome}
            puntaje={item.puntaje}
            distancia={item.distancia}
            mapLink={item.mapLink}
            comment={item.comment}
            facilities={item.facilities}
            description={item.descricao}
            verMais={item.verMais}
            stars={item.stars}
          />
        ))}
      </div>
    </div>
  );
}
