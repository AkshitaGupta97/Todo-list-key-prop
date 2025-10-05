import {memo} from 'react'
function TodoListItem({todo, onDelete}) {
  return (
    <li style={{'border': '1px solid gray','color': 'orange', 'margin': '5px', 'padding': '5px'}}>
        {todo.value}
            <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  )
}

export default memo(TodoListItem)

// memo() => we wrapped them in memo to stop re-rendering of items
