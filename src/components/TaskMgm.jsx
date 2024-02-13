import React from 'react'
import { useEffect, useState } from 'react'
import { TodoProvider,CatProvider } from '../contexts'
import { CatForm, TodoForm, TodoItem } from './'
import { Link, NavLink } from 'react-router-dom'
import CatItem from './CatItem'
var catList = []

function TaskMgm() {
      
    const [todos, setTodos] = useState([])
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem("categories")))
   
    const addTodo = (todo) => {
      //console.log('In add todo')
      setTodos((prev) => [{id: Date.now(),...todo},...prev]) 
    
    } 
  
    const updateTodo = (id, todo) => {
      console.log(todo.category,"cat in fn")
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
      console.log(todos)
    }
  
    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
  
    const toggleComplete  = (id) => {
      setTodos((prev) => 
          prev.map((prevTodo) => 
          prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
        )
      )
    }
  
    //since no dependency array is given, as soon as component mounts the hook will execute
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
  
    /* Category */
  
  //Add the category here
  const addCat = (category) => {
    let catList = JSON.parse(localStorage.getItem("categories"))
    if (catList === null) {
      let temp = []
      temp.push({id:Date.now(), category})
      catList = temp
    }
    else {
      catList = [...catList,{ id: Date.now(),category}]   
    }
    
    localStorage.setItem("categories",JSON.stringify(catList))    
    setCategories(catList)
  } 
  
  const deleteCat = (id) => {
    
    let temp = categories.filter((objj) => objj.id !== id)
    
    setCategories(temp)
    localStorage.setItem("categories",JSON.stringify(temp)) 

  }

    return (
      
   
      <div className="bg-[#f5f7f5] min-h-screen py-8 " id="big">
            {/* <div className="w-3/4 max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                 Todos | Categories
                </h1>
            </div> */}
            <div className='flex  flex-row'>
            <div id="todoform" className='w-1/2 border-r-2'>
              <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
                {/* Every tag inside here is now aware of the context */}

                  <div className="mb-4" >
                      {/* Todo form goes here */} 
                      <TodoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                      <div key={todo.id}
                      className='w-full px-8'
                      >
                          <TodoItem todo={todo} />
                      </div>
                      ))}

                </div>          
  
              </TodoProvider>    

            </div>
            <div id='catform' className="w-1/2">
              <CatProvider value={{addCat, deleteCat}}>
              
                  <div className='mb-4'>
                  <CatForm />     
                  </div>
                  <div className="flex flex-wrap gap-y-3 px-8">
                      {/*Loop and Add TodoItem here */}
                      {/* {console.log(categories,"before map")} */}
                      {categories !== null ? categories.map((catObj) => (
                      <div key={catObj.category}
                      className='w-full'
                      >
                          <CatItem cat={catObj} />
                      </div>
                      )) : ""}

                </div>           
                  
              </CatProvider>
            </div>
            </div>  
      </div>  
    )
  
}

export default TaskMgm