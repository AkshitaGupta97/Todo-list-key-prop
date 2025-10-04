import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({listofTodos}) {
  return (
    <ul className={{ 'border': '2px solid black', 'padding': '10px', 'width': '300px', 'margin': 'auto', 'marginTop': '20px' }}>
        {
            listofTodos?.map((todo) => {
                return <TodoListItem key={todo.id} todo={todo} />
            })
        }
    </ul>
  )
}

export default TodoList