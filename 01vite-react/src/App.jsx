import { useState } from 'react'

import Code from './Code'

function App() {
  const [count, setCount] = useState(0)
  const username = "ok"
  return (
    <>
      <h1>React {username}</h1>
      <Code />
    </>
  )
}

export default App
