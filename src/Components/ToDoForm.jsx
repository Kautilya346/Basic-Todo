import React, { useState } from 'react';
import { useTodo } from '../Contexts/ToDoContext';
function ToDoForm(){

    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add = (e) => {
        e.preventDefault()
  
        if (!todo) return
  
        addTodo({ todo, completed: false})
        setTodo("")
    }

    return(

        <form className="Parker rounded-lg" onSubmit={add}>
            <input type="text"
            className='Joker rounded-lg'
            placeholder='Add ToDo...'
            value={todo}
            onChange={(e)=>{
                setTodo(e.target.value)
                console.log("working");
            }}
            />
            <button className='Mary rounded-lg' type='submit'>Add</button>
            
        </form>

    )
}
export default ToDoForm
