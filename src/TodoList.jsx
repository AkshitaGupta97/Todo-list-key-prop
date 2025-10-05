import React, { useCallback } from 'react'
import TodoListItem from './TodoListItem'

function TodoList({listofTodos, onDeleteTodo}) {

    function DeleteTodo(id){
        console.log("id of item",id)
        onDeleteTodo?.(id)
    }

    const memoDeleteTodo = useCallback(DeleteTodo, [onDeleteTodo]) // to avoid re-creation of function on every render, 
    // useCallback(DeleteTodo, [onDeleteTodo]) means only recreate if onDeleteTodo changes. not every element of list need to recreate/ rerender

  return (
    <ul className={{ 'border': '2px solid black', 'padding': '10px', 'width': '300px', 'margin': 'auto', 'marginTop': '20px' }}>
        {
            listofTodos?.map((todo) => {
                return <TodoListItem key={todo.id} todo={todo} onDelete={memoDeleteTodo} />
            })
        }
    </ul>
  )
}

export default TodoList