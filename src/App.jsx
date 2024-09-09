import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/ToDoContext'
import ToDoForm from './Components/ToDoForm'
import ToDoItem from './Components/ToDoItem'

function App() {
 
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prevTodos)=>[{id:Date.now(),...todo},...prevTodos])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>prevTodo.id!==id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("StoredTodos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);


  useEffect(()=>{
    localStorage.setItem("StoredTodos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='Jonathan rounded-lg'>
        <div className="lwon rounded-lg">
          <h1 className='forgpt rounded-lg' style={{fontSize:40}}>Your ToDo's</h1>
          <div>
            <ToDoForm/>
            <br />
          </div>
          <div className="housse rounded-lg">
            {todos.map((todo)=>(
              <div className='kris' key= {todo.id}>
                <ToDoItem todo={todo}/>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
