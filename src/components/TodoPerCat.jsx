import React from 'react'

function TodoPerCat(category) {
    const taskList = JSON.parse(localStorage.getItem("todos"))
    const tasks = taskList.filter((item) => item.category === category.category)
    //console.log(tasks,"tasks")
    return (
    <div id="TasksforCat">
    
    { tasks !== null ? tasks.map((x,y) => 
    <div id='task' key={x.id} className='bg-slate-200 my-8'>{x.todo}</div>) : "NULL TASKS"        
   
    }
    </div>
    )
}       
export default TodoPerCat