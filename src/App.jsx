
import { useCallback, useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import InputRefs from './Input-refs/InputRefs'

function App() {
  const [todos, setTodos] = useState([{id:1, value:'Learn React'}])

  function onTodoFormSubmit(value){
    if(value){
      setTodos([...todos, {id: todos.length + 1, value }])
    }
  }

  const DeleteTodoMemo =  useCallback(onDeleteTodo, [todos]) // to avoid re-creation of function on every render, 
  // useCallback(onDeleteTodo, [todos]) means only recreate if todos changes. not every element of list need to recreate/ rerender

  function onDeleteTodo(id){
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listofTodos={todos} onDeleteTodo={DeleteTodoMemo} />
      <hr />
      <h2>Input Refs</h2>
      <InputRefs />
    </>
  )
}

export default App
