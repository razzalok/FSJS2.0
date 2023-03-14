import React,{useState} from "react";

function App() {
  const [count,setCount]= useState(0)
  const incrementCount= ()=>{
    setCount(count+1);
  }
  const decrementCount = ()=>{
    setCount(count-1);
  }
  const products = [
    {title:"Alok",id:1},
    {title:"Ankit",id:2},
    {title:"Boss",id:3},
  ]
  const listItem = products.map( p =>
    <li key={p.id}>{p.title}</li>
    )
  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <ul>{listItem}</ul>
      
    </div>
  );
}

export default App;
