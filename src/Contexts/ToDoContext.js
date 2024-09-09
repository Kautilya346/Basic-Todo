import { useContext,createContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todomsg:"Todo Msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(ToDoContext)
}

export const TodoProvider=ToDoContext.Provider