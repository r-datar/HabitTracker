import React from 'react'
import { useState } from 'react'
import {useCat} from '../contexts/index'


function CatForm() {
  //we store user input here and use the var in other funcs 
  const [category, setCategory] = useState("")
  const {addCat} = useCat()
  
  // we have to write an actual separate fn for onsubmit bcoz a bunch of 
  // things need to be done
  const addInfo = (e) => {
    e.preventDefault()

    if(!category) return

    //we created an object to send to add function
    addCat(category)

    //after adding is done, reset the values
    setCategory("")
    
  }


   return (
    <div className='px-8'> 
    
     <form onSubmit={addInfo} name='catform' className='flex'>
     <div className='content-center w-full align-middle py-8'>
        <input type="text" 
        placeholder='Add Category...'
        className='w-3/5 border border-black/10 text-gray-500 rounded-md px-3 outline-none duration-150 bg-white/20 py-1'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
      
        <button type="submit"
        className='rounded-md ml-8 px-3 py-1 bg-green-500 text-white shrink-0'
        >Add</button>
      </div>  
    </form>
    </div>  
  )
}

export default CatForm