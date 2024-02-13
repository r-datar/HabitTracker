import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
var categOptions = []

// The functionality here is for editing a todo
function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [todoCat, setTodoCat] = useState(todo.category)
 
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    
    let temp = JSON.parse(localStorage.getItem("categories"))
    categOptions = temp.map((objj) => objj.category)

    const editTodo = () => {
        console.log(todoCat,"chosen cat")
        updateTodo(todo.id, {...todo, todo: todoMsg, category: todoCat})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    <div
    className={`flex w-3/4 border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 
                shadow-sm shadow-white/50 duration-300  text-black 
                ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        />
        <select name='category' className='bg-gray-200 rounded-md'
        onChange={(e) => setTodoCat(e.target.value)} disabled={isTodoEditable ? "" : "disabled"}
        value={todoCat}>
            <option value=''>Category</option>
            {
                categOptions.map((x,y) => 
                <option key={x} value={x}>{x}</option>

                )    
                
            }
            
        </select>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
                editTodo()
            }else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
        >{isTodoEditable ? "📁": "✏️"}</button>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default TodoItem