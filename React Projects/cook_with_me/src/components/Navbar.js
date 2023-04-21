import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Hero from './Hero'
const Navbar = () => {
 const [meal,setMeal]=useState('Sushi')
 const [meals,setMeals] = useState({})
 const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(meal);
      setMeal(meal)
      fetchDetails()
    }





  
  
  const fetchDetails = async()=>{
  const {data}= await Axios.get(baseUrl+meal)
    console.log(data);
    // const meal = data.meals[0]

    // console.log(data.meals[0]);
  setMeals(data.meals[0])
  }
  useEffect(()=>{
    fetchDetails()
  },[])


  

  return (
    <div >
      
      <p className='bg-cyan-900 py-5 flex-initial flex-auto w-[40%] text-5xl text-[#CAD5E2] font-extrabold text-center'>Cook With Me</p>

      <form onSubmit={handleSubmit} className='flex-initial '>
            <input  type="text" name='meal' value={meal} onChange={(e) => setMeal(e.target.value)} />
            <input id='search' type="submit" />
        </form>
        <Hero meals={meals}/>
    </div>
  )
}

export default Navbar


          