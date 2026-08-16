import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

function MyApp(){
  return(
      <div>
        <h1>Custom fun !</h1>
      </div>
  )
}

const anotherUser = 'mango'

const anotherElement = 
  (<a href="https://google.com" target='_blank'>Visit Google </a>)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to visit google',
  anotherUser// just the variable injection
)


createRoot(document.getElementById('root')).render(
  // anotherElement
  //reactElement
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>
)
