import React, { useState } from 'react';
import { useTodo } from '../Contexts/ToDoContext';

function ToDoItem({todo}){

    const [isEditable,setisEditable] =useState(false)
    const [ToDoMsg,setToDoMsg]=useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:ToDoMsg})
        setisEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return(
        <div className='Jhon'>
            
            <label className={`custom-checkbox`}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
            </label>
            <input
              type="text"
              className={`rounded-lg ${
                  isEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={ToDoMsg}
              onChange={(e) => setToDoMsg(e.target.value)}
              readOnly={!isEditable}
          />
            <button className='Suneo rounded-lg'
            onClick={()=>{
                if(todo.completed) return

                if(isEditable){
                    editTodo()
                }
                else{
                    setisEditable((prev)=>!prev)
                }
            }}>
                {isEditable?"📂":"✒️"}
            </button>
            <button
              className="Gian rounded-lg"
              onClick={() => deleteTodo(todo.id)}
            >🗑️</button>

        </div>
    

    )
}

export default ToDoItem