import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
    // console.log(`Clicked : ${counter}`);
    // counter+=1
    // if(counter>20) counter =0 //if we dont want nos >20

    // setCounter(counter++)
    // setCounter(counter++)
    // setCounter(counter++)

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)//every function gets the same value of counter

    // setCounter(a=>a+1)
    // setCounter(a=>a+1) //every setCounter function has a callback value storing the previous value of counter
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
  }
  const removeValue = () => {
    console.log(`Clicked : ${counter}`);
    counter-=1
    if(counter<0) counter =0 //if we dont want -ve nos
    setCounter(counter)
  }
  
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add a value</button>
      <button onClick={removeValue}>Remove a value</button>
    </>
  )
}

export default App
