import React, { useState,createContext } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

export const myContext = createContext();
const App = () => {
  const [name,setName]=useState("")
  const [color,setColor]=useState("")

  const myName = (event)=>{
    setName(event.target.value)
  }
  const myColor = (event)=>{
    setColor(event.target.value)
  }
  return (
    <myContext.Provider value={{name,color}}>
      <Navbar/>
      <form>
        <input
          type={"text"}
          placeholder='Enter User Name'
          value={name}
          onChange={myName}
          />
          <input type={"text"}
            placeholder='Enter a color name'
            value={color}
            onChange={myColor}
          />
         
      </form>
      <HeroSection/>
    </myContext.Provider>
  )
}

export default App
