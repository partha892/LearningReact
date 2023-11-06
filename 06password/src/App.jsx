import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[lenth,setLenth]=useState(8)
const[number,setNumber]=useState(false)

const[charAllow,setCharAllow]=useState(false)

const[password,setPassword]=useState()


  return (
    <>
     <h1>Password Genrator</h1>
    </>
  )
}

export default App
