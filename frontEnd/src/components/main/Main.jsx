import React from 'react'
import { CategoriasCards } from '../categorias/CategoriasCards'
import { RecomendacoesCards } from '../recomendacoes/RecomendacoesCards'
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css'

export default function Main() {
  return (
    <main className='app-main'>
        <CategoriasCards />
        <section className='recomendacaoes-section'>
        <RecomendacoesCards />
        </section>
      
      </main>
  )
}
