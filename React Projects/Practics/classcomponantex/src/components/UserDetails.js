import React, { useContext } from 'react'
import { myContext } from './app'
const UserDetails = () => {
  const data = useContext(myContext)
  console.log(data);
  return (
    <div>
      My name is {data.name}
    </div>
  )
}

export default UserDetails
