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

export default function Main() {

  const [focus, setIsFocused] = useState(false)
  const [inputLocationValue, setInputLocationValue] = useState("")
  const [isHover, setIsHovered] = useState(false)
  const inputRef = useRef()


  const lista = [
    {cidade:"Salvador", pais:"Brasil"},
    {cidade:"Recife", pais:"Brasil"},
    {cidade:"Natal", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
    {cidade:"Maceió", pais:"Brasil"},
  ]


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
        {lista.map((value, index)=>{
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
