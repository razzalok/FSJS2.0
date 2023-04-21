import React, { useEffect, useState } from 'react'
import Card from './card'
import Axios from 'axios'
const App = () => {
  const [details,setDetails] = useState({})
  let list = ["Alok","Chaman","Ankit","Mohan"]
  useEffect(()=>{
    fetchDetails()
  },[])
  const fetchDetails = async()=>{
    const {data} = await Axios.get('https://randomuser.me/api')
    // console.log(data);
    const details = data.results[0]
    // console.log(details);
    setDetails(details)
  }
    console.log(details.name?.first);
  return (
    <div>
      <Card list={list} details={details}/>
      Hello
      <button onClick={fetchDetails}>Click</button>

    </div>
  )
}

export default App
