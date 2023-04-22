import React, { useEffect, useState } from 'react'

const Hero = ({meals}) => {
  const ingredient = "strIngredient"
  
    
//  console.log(meals[ingredient+"1"]);
  return (
    <>
    <div className='flex items-center flex-col mt-20 '>
    <div className='flex items-center flex-col border rounded-xl border-slate-700 overflow-hidden shadow-lg dark:shadow-gray-800 bg-[#03203C]'>
    <img className='w-80' src={meals['strMealThumb']} alt="img" />
    <p className='text-[#CAD5E2] text-3xl my-3 inline-block px-3 py-1 font-bold'>{meals['strMeal']}</p>
    </div>
    <p>{meals['strCategory']}</p>
    <p>{meals['strArea']}</p>
    <listitem/>
    <Ingredients meals={meals}/>
    <p>{meals['strInstructions']}</p>
    {/* <p>{meals['strInstructions']}</p>
    <p>{meals['strInstructions']}</p>
    <p>{meals['strInstructions']}</p> */}
    </div>
    </>
    
  )
}

export default Hero

