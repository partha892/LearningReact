import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor: color}}>

    <button onClick={()=>{setColor("Green")}}>Green</button><br />
    <button onClick={()=>{setColor("red")}}>Red</button><br/>
    <button onClick={()=>{setColor("Blue")}}>Blue</button>
      
    </div>
    </>
  )
}

export default App
