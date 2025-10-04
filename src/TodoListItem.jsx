
function TodoListItem({todo}) {
  return (
    <li className={{'color: orange'}}>
        {todo.value}
    </li>
  )
}

export default TodoListItem