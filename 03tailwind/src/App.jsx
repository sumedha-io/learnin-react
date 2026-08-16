import { useState } from 'react'

import './App.css'
import Example from './Example'
import Ex from './Ex'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:'Sume',
    age:45
  }
  let myArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Ex channel='codeforFun' someObj={myObj} someAr={myArr}/>
    </>
  )
}

export default App
