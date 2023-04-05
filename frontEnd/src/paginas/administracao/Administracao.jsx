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
            // pais: '',
            // sigla: '',
            descricao: "",
            normasCasa: '',
            saudeSeguranca: '',
            politicasCancelamento: '',
            pontuacao: '',
            localMapa: '',
            comentarios: ''

        }
    )

    const {nomeProduto, categoriaValue , endereco, cidade,  saudeSeguranca, normasCasa, politicasCancelamento, pontuacao, localMapa, comentarios, descricao} = formData
    
    const [image, setImage ] = React.useState([
        {url: ""}
    ])

  

    const [caracteristicas, setCaracteristicas ] = React.useState([
        {nome: ""}
    ])

    function handleAddCaracteristicas(){
        
        setCaracteristicas([...caracteristicas, {nome: ""}])
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


        console.log(value)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

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

         async function fetchData(){
   
           const response = await fetch(`http://3.140.210.50:8081/cities/findAll`)
       
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
            nome: nomeProduto,
            descricao: descricao,
            pontuacao: pontuacao,
            facilidades:"teste",
            localMapa: localMapa,
            distancia: endereco,
            linkMapa:"teste",
            comentarios: comentarios,
            verMais: "teste",
            caracteristicasEntityList: [],
            imagensEntityList: [],
            categoriasEntity:[],
             cidadesEntity: {
                 id_cidades: 882,
                 nome: cidade,
                //  pais: pais,
                //  sigla: sigla
                 },
            reservasEntity: [],
            politicasCancelamento: politicasCancelamento,
            saudeSegurança: saudeSeguranca,
            normasCasa: normasCasa
        }

        console.log(body, caracteristicas, image)

        fetch('http://localhost:8081/product/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            setConfirm(true)
            alert('Produto OK!');
          })
          .catch(error => {
            alert('Não foi possível cadastrar o produto. Tente novamente mais tarde.');
          });
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
                        onChange={handleChange}
                        name="categoriaValue"
                            >
                                 <option value = "">-- selecione uma opção --</option>
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
                        onChange={handleChange}
                        name="cidade"
                            >
                                  <option value = "">-- selecione uma opção --</option>
                                {
                                    produto.map(cidade => {
                                        const { nome } = cidade
                                        return <option key = {nome} value={nome}>{nome}</option>
                                    })
                                }

                    </select>
                </label>
                {/* <label htmlFor='pais'>pais:
                <select 
                        id="pais" 
                        className = 'input'
                        onChange={handleChange}
                        name="pais"
                            >

                                <option value = "">-- selecione uma opção --</option>
                                <option value = {produto[0]?.pais}>{produto[0]?.pais}</option>
                         

                    </select>
                </label> */}
                {/* <label htmlFor='sigla'>Sigla:
                <select 
                        id="sigla" 
                        className = 'input'
                     
                        onChange={handleChange}
                        name="sigla"
                            >
                                 <option value = "">-- selecione uma opção --</option>
                                {
                                    produto.map(cidade => {
                                        const { sigla } = cidade
                                        return <option key = {sigla} value={sigla}>{sigla}</option>
                                    })
                                }

                    </select>
                </label> */}

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
                        className = 'input '
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
                    className=' direcao text'
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
                   <label htmlFor='nome'>Caracteristicas: 🛀, 🏊🏼‍♀️, 
                   {
                    caracteristicas.map((item, index) => {
                        console.log(item.nome)
                    return (
                         <div key = {index} className='image-container'>
                                <div className="first-division">
                                <input
                                    className='input image'
                                    required
                                    id="nome"
                                    name='nome'
                                    type="text"
                                    value = {item.nome}
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
