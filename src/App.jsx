
import './App.css'

function App() {


  function button1 (){
    alert("button1 is clicked")
  };

  const button2 = ()=>{
    alert("button2 is clicked")
  }
  

 const button4 =(num)=>{
  alert(num + 5)
 }
  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={button1}>Button 1</button>
      <button onClick={button2}>Button 2</button>
      <button onClick={ ()=> alert("button3 is clicked")}>Button 3</button>
      <button onClick={()=>button4(5)}>Button 4</button>
      
    </>
  )
}

export default App
