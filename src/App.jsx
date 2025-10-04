
import { useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{id:1, value:'Learn React'}])

  function onTodoFormSubmit(value){
    if(value){
      setTodos([...todos, {id: todos.length + 1, value }])
    }
  }


  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listofTodos={todos} />
    </>
  )
}

export default App
