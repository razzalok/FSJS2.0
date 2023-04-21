import React from 'react'

const card = ({list,details}) => {
    // console.log(props);
  return (
    <div>
      {list.map(i=>
        <li key={i}>{i}</li>
      )}

      <h3>{details.name?.first + " " + details.name?.last}</h3>
      <img src={details.picture?.medium} alt="" />
    </div>
  )
}

export default card
