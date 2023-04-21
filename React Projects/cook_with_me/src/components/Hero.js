import React, { useEffect, useState } from 'react'

const Hero = ({meals}) => {
  
  return (
    <div >

      {/* <button onClick={fetchDetails}>Click</button> */}
      <h1>{meals['idMeal']}</h1>
      
    </div>
  )
}

export default Hero

