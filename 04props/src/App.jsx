import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-green-500 mb-5 '>partha</p>
      <Card  userName="partha"/>
      <Card userName="pratim" />
      <Card />
    </>
  )
}

export default App
