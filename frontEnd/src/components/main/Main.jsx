import React from 'react'
import { CategoriasCards } from '../categorias/CategoriasCards'
import { Footer } from '../footer/Footer'
import Navbar from '../header/Navbar'

import { RecomendacoesCards } from '../recomendacoes/RecomendacoesCards'
import { SearchBox } from '../search-box/SearchBox'

// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css'

export default function Main() {
  return (
    <>

    <main className='app-main'>
        <SearchBox/>
        <CategoriasCards />
      
        <RecomendacoesCards />
        
     
      </main>

      </>
  )
}
