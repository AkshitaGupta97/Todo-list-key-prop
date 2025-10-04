
import React, { useState } from 'react'

function TodoInput({onSubmit}) {
    const [inputValue, setInputValue] = useState('')

    function onFormSubmit(e){
        e.preventDefault();
        onSubmit(inputValue)
        setInputValue('')
    }
  return (
    <form onSubmit={onFormSubmit} className={{'textAlign': 'center', 'marginTop': '20px'}}>
        <input type="text" 
            placeholder='Enter todo item'
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
        />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoInput