import React from 'react'
import { useState } from 'react'
import {useTodo} from '../contexts/index'
var categOptions=[]

function TodoForm() {
  const [todo, setTodo] = useState("")  
  const [category, setCategory] = useState("")
  //const [categOptions, setCategOptions] =  useState("")
  const {addTodo} = useTodo()

  let temp = JSON.parse(localStorage.getItem("categories"))
  categOptions = temp.map((objj) => objj.category)
  //console.log(categOptions)
  
  // we have to write an actual separate fn for onsubmit bcoz a bunch of 
  // things need to be done
  const add = (e) => {
    
    e.preventDefault()
    if(!todo) return
    //we created an object to send to add function
    addTodo({todo ,completed: false,category})
    //after adding is done, reset the values
    setTodo("")
    setCategory("")  
  }


   return (
     <form onSubmit={add} className='flex' name="todoform">
      <div className='content-center w-full align-middle py-8 px-8'>
        <input type="text" 
        name="todotext"
        placeholder='Add Task...'
        className='w-2/5 border border-black/30 text-gray-500 rounded-md px-3 py-1.5 outline-none duration-150 bg-white/20 '
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />

        
        <select name='category' required className='border border-black/30 py-1.5 ml-8 rounded-md outline-none text-gray-500'
        onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value=''>Choose Category</option>
            {
              categOptions.map((x,y)=> <option key={x} value={x}>{x}</option>)
            }        
        </select>
        
         
        <button type="submit"
        className='rounded-md px-3 py-1 bg-green-500 text-white shrink-0 ml-8'
        >Add</button>
      </div>  
    </form>
  )
}

export default TodoForm