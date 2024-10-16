
import { useState } from 'react'
import './App.css'

function App() {


  const [count,setCount]=useState(0)


  function button1 (){
    alert("button1 is clicked")
  };

  const button2 = ()=>{
    alert("button2 is clicked")
  }
  

 const button4 =(num)=>{
  alert(num + 5)
 }

  const handleAdd =()=>{
      const newCount = count + 1 ;
      setCount(newCount)
  }

  const handleReduce =()=>{
    const newCount = count - 1 ;
    setCount(newCount)
  }
  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={button1}>Button 1</button>
      <button onClick={button2}>Button 2</button>
      <button onClick={ ()=> alert("button3 is clicked")}>Button 3</button>
      <button onClick={()=>button4(5)}>Button 4</button>

      <h1>Count : {count} </h1>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
      
    </>
  )
}

export default App
