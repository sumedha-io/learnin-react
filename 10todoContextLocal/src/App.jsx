import { useEffect, useState } from 'react'

import { TodoProvider , useTodo } from './context'

function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now() , ...todo} , ...prev])
    // set always contains prev data; prev contains the previous todos array
    //We know that todos is an array so ...prev spreads all the elements 
    //setTodos takes callback fn that returns an array with a new object added to the prev array
  }

  const updateTodo = (id,todo) => {
     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo) ) )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo)=>(prevTodo.id!==id) ) )
  }

  const toggleComplete = (id) => {
    //setTodos((prev) => prev.map((eachPrevTodo)=>(eachPrevTodo.id===id? eachPrevTodo.completed="true" : eachPrevTodo)))
    setTodos((prev) => prev.map((eachPrevTodo)=>(eachPrevTodo.id===id? {...eachPrevTodo,completed:!eachPrevTodo.completed} : eachPrevTodo)))
  }

  //We do not want todos to be lost on refresh hence localstorage is used

  useEffect(()=>{
    //On refreshing ui is rerendered so we need to get data stored in LocalStorage and setTodos([previous array])

    const localTodos = JSON.parse(localStorage.getItem("todos"))

  },[])

  useEffect(()=>{
     //On change of todos localStorage has to be updated

    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])

  return (
    <TodoProvider value={{todos , addTodo , updateTodo, deleteTodo,toggleComplete}}>
      {/* Destructuring is easier than accesing elements of the object like this TodoProvider.todos */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
