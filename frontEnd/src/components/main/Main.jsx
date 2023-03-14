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
  const { id } = useParams()

  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "http://localhost:8081",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0ZV9Vc2VybmFtZSIsImV4cCI6MTY3ODMxOTQ3NSwiaWF0IjoxNjc4MzE4ODc1fQ.Nzl9pvsIMPuWgulcLSlBaPkcx4uGN959IowCfO_Ssf8",
      "mode": 'no-cors'
    }
  };  

  React.useEffect(() => {
    async function fetchData(){

       const response = await fetch(`http://localhost:8081/cidades/findAll`, requestConfig)
      
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data = await response.json()
      
      setProduto(data)
    }

    fetchData()

  }, [id]);

  console.log(produto)


  return (
   

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
        {inputLocationValue.map((value, index)=>{
          const isMatch = value.cidade.toLowerCase().indexOf(inputLocationValue.toLowerCase()) > -1
          /* const listaValores = []
          console.log(isMatch)
          if(isMatch) {
            listaValores.append(value)
            console.log(listaValores)
          } */
          return(
            <li /* className={isMatch? 'suggestBox-border':'suggestBox-border-none'} */ key={index} onClick={()=>{
              setInputLocationValue(value.cidade)
              inputRef.current.focus()
              setIsFocused(false)
              }}>
              {isMatch && (
                
                <SuggestBox  lista={value} />
                              
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

       
        <RecomendacoesCards />
     
      </main>

 
  )
}
