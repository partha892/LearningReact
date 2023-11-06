import { useState } from 'react'


import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  //let counter = 10

  let Add = ()=>{
    counter = counter +1 
    setCounter(counter)
  }
  let Remove = ()=>{
    counter = counter -1 
    setCounter(counter)
  }

  return (
    <>
      <h1> Hi Your Current Value:{counter}</h1>
      <h3>Current Value : {counter}</h3>

      <button onClick={Add}>Add:{counter}</button>
      <button onClick={Remove}>Remove:{counter}</button>
    </>
  )
}

export default App
