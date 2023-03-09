import React, {useRef, useState } from 'react'
import { CategoriasCards } from '../categorias/CategoriasCards'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { RecomendacoesCards } from '../recomendacoes/RecomendacoesCards'
// import { DateRangePicker } from 'rsuite';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import  {SuggestBox}  from '../sugest-box/index';

import './styles.css'
import { useParams } from 'react-router-dom';

export default function Main() {

  const [focus, setIsFocused] = useState(false)
  const [inputLocationValue, setInputLocationValue] = useState("")
  const [isHover, setIsHovered] = useState(false)
  const inputRef = useRef()
  const [produto, setProduto] = useState(false)

  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODM2NjI1NywiaWF0IjoxNjc4MzY1NjU3fQ.e-R3ZvbZOH48LwnIySy-hO72LEv4xmviVNw6Dgs9uYM"
    }
  };  

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:8081/cities/1`, requestConfig)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)
    }

    fetchData()

  }, []);

  console.log(produto)


  return (
    <>

    <main className='app-main'>
    <div className='searchBox-container'>

        <h2 className='searchBox-title'>Buscar ofertas em hotéis, casas e muito mais!</h2>

        <form className='searchBox-form'>
        <div className='searchSuggestBox-div'>
      <TextField  className='location-input' type = "search" placeholder='Onde Vamos?' 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        ),
      }}
      size = 'small'
      onFocus={()=>setIsFocused(true)}
      onBlur={()=>isHover? "":setIsFocused(false)}
      value={inputLocationValue}
      onChange={c => setInputLocationValue(c.target.value)}
      ref={inputRef}
      
      />
      {focus && (
      <ul className='suggestBox-input' 
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}
        
        >
        {produto.map((value, index)=>{
          const isMatch = value.nome.toLowerCase().indexOf(inputLocationValue.toLowerCase()) > -1
          /* const listaValores = []
          console.log(isMatch)
          if(isMatch) {
            listaValores.append(value)
            console.log(listaValores)
          } */
          return(
            <li /* className={isMatch? 'suggestBox-border':'suggestBox-border-none'} */ key={index} onClick={()=>{
              setInputLocationValue(value.nome)
              inputRef.current.focus()
              setIsFocused(false)
              }}>
              {isMatch && (
                
                <SuggestBox  produto={produto} />
                              
              )}

            </li>
          )
        })}
      </ul>
      )}
    </div>

             
            <DateRangePicker placeholder = "check in check out "><input type="text" className="form-control" /></DateRangePicker >
           
            <button className='searchBox-btn'>Buscar</button>
            </form>
        </div>

        <CategoriasCards />
    
        <RecomendacoesCards />
     
      </main>

      </>
  )
}
