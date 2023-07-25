"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button/Button'
import { Autocomplete, TextField } from '@mui/material'
import ControllableStates from './ThemeComponent/Componets/Demot'
export default function Home() {
  const top100Films:string[]=[
    "be","jt","mi","tu"
  ]
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  return (
    <main >
     
     <Button variant='contained'>
      my btn
      </Button> 

      <Autocomplete disableClearable
 id="combo-box-demo"
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie"/>}/>
    <br/>
    <ControllableStates/>    
    </main>
  )
}
