import React from 'react'
import {Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './styleAdministracao.css'
import { ReservaSucesso } from '../../components/detale-produto-reserva/ReservaSucesso';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Administracao() {


    const [confirm, setConfirm] = React.useState(false)

    const [categoria, setCategoria] = React.useState([])
    const [produto, setProduto] = React.useState([])

   
 
    const [formData, setFormData] = React.useState(
        {
            nomeProduto: "", 
            categoriaValue: "", 
            endereco: "", 
            cidade: "", 
            descricao: "",
            normasCasa: '',
            saudeSeguranca: '',
            politicasCancelamento: '',
            pontuacao: '',
            localMapa: '',
            comentarios: ''

        }
    )

    const {nomeProduto, categoriaValue , endereco, cidade, saudeSeguranca, normasCasa, politicasCancelamento, pontuacao, localMapa, comentarios, descricao} = formData
    
    const [image, setImage ] = React.useState([
        {url: ""}
    ])

    const [caracteristicas, setCaracteristicas ] = React.useState([
        {caracteristicas: ""}
    ])

    function handleAddCaracteristicas(){
        setCaracteristicas([...caracteristicas, {caracteristicas: ""}])
       }
    function handleRemoveCaracteristicas(index){
        const list = [...caracteristicas]
        list.splice(index, 1);
    
        setCaracteristicas(list)
       }

       function handleCaracteristicasChange(e, index) {
    
        const {name, value} = e.target
        const list = [...caracteristicas]
        list[index][name] = value;
        setCaracteristicas(list)
       }

   function handleAddImage(){
    setImage([...image, {url: ""}])
   }

   function handleRemoveImage(index){
    const list = [...image]
    list.splice(index, 1);

    setImage(list)
   }
    
   function handleImageChange(e, index) {
    const {name, value} = e.target
    const list = [...image]
    list[index][name] = value;
    setImage(list)
   }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
      
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

        
    }

    React.useEffect(() => {
        async function fetchData() {
    
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
   
           const response = await fetch(`http://localhost:8081/cities/findAll`)
       
            if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }
            const data = await response.json()
           
            setProduto(data)

         }
       fetchData()
     }, []);

     function handleSubmit(e){
        e.preventDefault()
        const body = {
            nome : nomeProduto,
            descricao,
            pontuacao,
            facilidades:"",
            localMapa,
            distancia: endereco,
            linkMapa:"",
            comentarios,
            verMais: "",
            caracteristicasEntityList: caracteristicas,
            imagensEntityList: image,
            categoriasEntity:{
                descricao: categoriaValue,
                url_imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.corinthia.com%2Fmedia%2F1563%2Fcorinthia-lisbon-deluxe-king-bedroom.jpg&f=1&nofb=1&ipt=0d0842f3e887b1bfd8a82d2ebc3633acac094bad75534497c67288734289559a&ipo=images",
                },
            cidadesEntity: {
                    nome: cidade,
                    pais: "Brasil",
                    sigla: "DF",
                    },
            politicasCancelamento,
            saudeSeguranca,
            normasCasa
        }
       
        setConfirm(true)
     }

  return (
 <div>

    <div className='reserva-container-header'>
            <div>
            <h3>Administração de Produtos</h3>
            </div>
            <Link to={`/`}><ArrowBackIosIcon className='logo-header' /></Link>
    </div>

    <div className='criar-produto'>

     <h3>Criar propriedade</h3>
        <form className='form-container' onSubmit={handleSubmit}> 

             <div className='nome-produto-container'>

                 <label htmlFor='nomeProduto'>Nome do produto:
                    <input
                        className='input nome-do-produto'
                        required
                        id="nomeProduto"
                        size="small"
                        type="text"
                        name='nomeProduto'
                        value={nomeProduto}
                        onChange={handleChange}
                        
                    />
               </label>

                 <label htmlFor='categoriaValue '>Categoria:
                        <select 
                        id="categoriaValue" 
                        className = 'input'
                        value={categoriaValue}
                        onChange={handleChange}
                        name="categoriaValue"
                            >
                                {
                                    categoria.map(value => {
                                        const {descricao} = value
                                        return  <option key = {descricao} value={descricao}> {descricao} </option>
                                    })
                                }
                    </select>
                </label>

               
                <label htmlFor='endereco'>Endereço:
                    <input
                        className='input descrição'
                        required
                        id="endereco"
                        name='endereco'
                        type="text"
                        value={endereco}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor='cidade'>Cidade:
                <select 
                        id="cidade" 
                        className = 'input'
                        value={cidade}
                        onChange={handleChange}
                        name="cidade"
                            >
                                {
                                    produto.map(cidade => {
                                        const { nome } = cidade
                                        return <option key = {nome} value={nome}>{nome}</option>
                                    })
                                }

                    </select>
                </label>

                <label htmlFor='pontuacao'>Pontuacao:
                <input 
                        id="pontuacao" 
                        className = 'input'
                        value={pontuacao}
                        onChange={handleChange}
                        name="pontuacao"
                        type = 'number'
                            />

                 
                </label>

                <label htmlFor='localMapa'>local Google maps:
                <input 
                        id="localMapa" 
                        className = 'input'
                        value={localMapa}
                        onChange={handleChange}
                        name="localMapa"
                        type = 'text'
                            />

                 
                </label>

                <label htmlFor='comentarios'>Comentarios:
                <input 
                        id="comentarios" 
                        className = 'input'
                        value={comentarios}
                        onChange={handleChange}
                        name="comentarios"
                        type = 'text'
                            />

                 
                </label>

            
            </div>
               
                <div>
                <label htmlFor='descricao'>Descrição: </label>
                </div>
                    <textarea 
                    className=' direcao'
                    required
                    id="descricao"
                    name='descricao'
                    rows="5"
                    value={descricao}
                    onChange={handleChange}
                    
                    />
            <div className='adicionar-atributos-container'>
                <h3>Adicionar atributos</h3>

                   <div className='adicionar-atributos'>
                   <label htmlFor='caracteristicas'>Caracteristicas:
                   {
                    caracteristicas.map((item, index) => {
                    
                    return (
                         <div key = {index} className='image-container'>
                                <div className="first-division">
                                <input
                                    className='input image'
                                    required
                                    id="imagens"
                                    name='caracteristicas'
                                    type="text"
                                    value = {item.caracteristicas}
                                    onChange={(e) =>handleCaracteristicasChange(e, index)}
                                />
                            
                           {
                             caracteristicas.length -1 === index && caracteristicas.length < 5 && (
                                
                            <button onClick = {handleAddCaracteristicas}
                            className='image-btn'><AddCircleIcon /></button>
                            
                             )                               
                           }
                           </div>
                           <div className="second-division">
                           {
                            caracteristicas.length > 1 && 
                            <div>
                            <button
                            className='image-btn' onClick = {() => handleRemoveCaracteristicas(index)}><RemoveCircleIcon /></button>
                            </div>
                           }
                           </div>
                        </div>
                        )
                    })
                   }
                   </label>

                   </div>
            </div>

            
                
                <label htmlFor='imagens'>Imagens:
                   {
                    image.map((item, index) => {
                      
                    return (
                         <div key = {index} className='image-container'>
                                <div className="first-division">
                                <input
                                    className='input image'
                                    required
                                    id="imagens"
                                    name='url'
                                    type="text"
                                    value = {item.url}
                                    onChange={(e) =>handleImageChange(e, index)}
                                />
                            
                           {
                             image.length -1 === index && image.length < 5 && (
                                
                            <button onClick = {handleAddImage}
                            className='image-btn'><AddCircleIcon /></button>
                            
                             )                               
                           }
                           </div>
                           <div className="second-division">
                           {
                            image.length > 1 && 
                            <div>
                            <button
                            className='image-btn' onClick = {() => handleRemoveImage(index)}><RemoveCircleIcon /></button>
                            </div>
                           }
                           </div>
                        </div>
                        )
                    })
                   }
                   </label>
                    
                
             

             <div>
               <h4>Politicas do produto:</h4>

               <div>
                <label htmlFor='normasCasa'>Normas de casa: </label>
                </div>
                    <textarea 
                    className=' direcao'
                    required
                    id="normasCasa"
                    name='normasCasa'
                    rows="5"
                    value={normasCasa}
                    onChange={handleChange}
                    />

               <div>
                <label htmlFor='saudeSeguranca'>Saúde e segurança: </label>
                </div>
                    <textarea 
                    className=' direcao'
                    required
                    id="saudeSeguranca"
                    name='saudeSeguranca'
                    rows="5"
                    value={saudeSeguranca}
                    onChange={handleChange}
                    />

               <div>
                <label htmlFor='politicasCancelamento'>Políticas de cancelamento: </label>
                </div>
                    <textarea 
                    className=' direcao'
                    required
                    id="politicasCancelamento"
                    name='politicasCancelamento'
                    rows="5"
                    value={politicasCancelamento}
                    onChange={handleChange}
                    />


             </div>

             <button className = 'adm-btn' type = 'submit'>Criar</button>

            </form> 
        </div>

        {confirm && <ReservaSucesso message={'criação de produto bem-sucedida'} link = "/"/> }

</div>
  )
}
