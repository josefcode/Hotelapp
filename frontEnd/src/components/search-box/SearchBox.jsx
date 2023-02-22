import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css'


export function SearchBox() {
  return (
 
<div className='searchBox-container'>

    <h2 className='searchBox-title'>Buscar ofertas em hotéis, casas e muito mais</h2>

<form className='searchBox-form'>
  <TextField  className = "location-input" type = "text" placeholder='Onde Vamos?' 
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LocationOnIcon />
      </InputAdornment>
    ),
  }}
  size = 'small'
  />
  <TextField 
  className = "date-input"
  type = "date" 
  placeholder='Data' 
  size='small'

  />
  <button className='searchBox-btn'>Buscar</button>
  </form>
</div>
  )
}
