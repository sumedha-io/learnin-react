import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})//sending data to context 
    }
  return (
    <>
    <h2>LOGIN</h2>
    <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e)=>{
           setUsername(e.target.value)
        }}
        />
    
    <input 
        type="text" 
        placeholder='password'
        value={password}
        onChange={(e)=>{
           setPassword(e.target.value)
        }}
        />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login