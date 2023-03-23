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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import  {SuggestBox}  from '../sugest-box/index';
import { useDatas } from '../hooks/useDatas';

import './styles.css'

export default function Main() {

  const [focus, setIsFocused] = useState(false)
  const [inputLocationValue, setInputLocationValue] = useState("")
  const [isHover, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [produto, setProduto] = useState(false)
  const inputRef = useRef()
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const {startDate, endDate, cidadeValue, changeStartDate, changeEndDate, changeCidadeValue} = useDatas()

  React.useEffect(() => {

      async function fetchData(){

        const response = await fetch(`http://localhost:8081/cities/findAll`)
    
         if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
         const data = await response.json()
        
         setProduto(data)
         console.log(data)
      }
    fetchData()
  }, []);

  async function handleSearch(event) {

    event.preventDefault();
    
    // const cidade = inputLocationValue;
    // const dataInicial = selectedDateRange.startDate.format('YYYY-MM-DD');
    // const dataFinal = selectedDateRange.endDate.format('YYYY-MM-DD');
    const response = await fetch(`http://localhost:8081/product/findByCidadeAndDatas?cidade=${cidadeValue}&dataInicial=${startDate}&dataFinal=${endDate}`);
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log(data);

  };


  return (


    <main className='app-main'>
      <div className='searchBox-container'>

        <h2 className='searchBox-title'>Buscar ofertas em hotéis, casas e muito mais!</h2>

        <form className='searchBox-form'>
          <div className='searchSuggestBox-div'>
          
            <TextField className='location-input' type="search" placeholder='Onde Vamos?'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {
                      isLoading  ?
                       <div className="loading"></div> : 
                      <LocationOnIcon />

                    }
                  
                  </InputAdornment>
                ),
                disabled: isLoading // desativa o input enquanto isLoading for true
              }}
              size='small'
              onFocus={() => setIsFocused(true)}
              onBlur={() => isHover ? "" : setIsFocused(false)}
              value={cidadeValue}
              onChange={c => changeCidadeValue(c.target.value)}
              ref={inputRef}

            /> 
            {focus && (
              <ul className='suggestBox-input'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

              >
                {produto.slice(0, 10).map((p, i) => {
                  const isMatch = p.nome.toLowerCase().indexOf(cidadeValue.toLowerCase()) > -1
                  return (
                    <li key={i} onClick={() => {
                      changeCidadeValue(p.nome)
                      inputRef.current.focus()
                      setIsFocused(false)
                    }}>
                      {isMatch && (

                        <SuggestBox produto={p} />

                      )}

                    </li> 

                  )
                })} 
              </ul>
            )} 
          </div>
          
          <DateRangePicker
              initialSettings={{locale:{
                "format": "DD/MM/YYYY",
                "separator": " - ",
                "applyLabel": "Aplicar",
                "cancelLabel": "Cancelar",
                "fromLabel": "From",
                "toLabel": "To",
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": [
                    "Dom",
                    "Seg",
                    "Ter",
                    "Qua",
                    "Qui",
                    "Sex",
                    "Sab"
                ],
                "monthNames": [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ],
                "firstDay": 1

              }}}
              placeholder="check in check out"
              onApply={(event, picker) => changeStartDate(picker.startDate.format('YYYY-MM-DD'), changeEndDate(picker.endDate.format('YYYY-MM-DD')))}
            >
              <input type="text" className="form-control" placeholder= "checkIn ckeckOut"  />
            </DateRangePicker>

          <button onClick={handleSearch} className='searchBox-btn'>Buscar</button> 
        </form>
       

      </div>


      <RecomendacoesCards />

    </main>
  )
}