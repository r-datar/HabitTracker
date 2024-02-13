import React from 'react'
import TodoForm from './TodoForm'
import TodoPerCat from './TodoPerCat'


function DailyTasks() {

  var temp=[]  
  var catList = JSON.parse(localStorage.getItem("categories"))
  const taskList = JSON.parse(localStorage.getItem("todos"))
  //console.log(catList)
  catList.forEach(x => {
    temp = taskList.filter((item) => item.category === x.category)
    //console.log(temp,temp)
    if(temp.length === 0) {
      catList.splice(catList.indexOf(x), 1)
    }
  })
  //console.log(catList, "newcats")
  
  return (
   <>
    <div className='todaystasks'>
    <div className='flex px-8  justify-center gap-x-8 pt-12' >
      { catList.length !== 0 ? catList.map((x,y) => (
          <div key={x.id}>
          <div className='bg-slate-400 px-7' key={x.category}> {x.category}
          </div>
          <div key={x.id}><TodoPerCat category={x.category} /></div>
          </div>
      )) : <div><h1  className="text-2xl sm:text-5xl py-10 font-medium">No tasks added yet</h1>
                <p>You can add tasks and assign tasks to categories at  <a href="manage" className='underline'>Manage</a>
                </p>
            </div>
          
      } 
     
    </div> 
    
    
    </div> 
   </>
  )
}

export default DailyTasks