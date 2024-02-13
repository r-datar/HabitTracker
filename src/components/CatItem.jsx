import React from 'react'
import { useState } from 'react'
import { useCat } from '../contexts/CatContext'

function CatItem(catObj) {
    
    const { deleteCat} = useCat()
    
    return (

    <div className='flex'>
    <div
    className={`flex w-3/5 border border-black/10 border-r-[#ccbed7]
                rounded-l-lg py-1.5 shadow-sm shadow-white/50 duration-300
                 bg-[#ccbed7] text-black`}
    >
      
        <input type="text" 
        className={`outline-none bg-[#ccbed7] px-3`}
        value={catObj.cat.category}
        readOnly
        />
    </div>
      <div className='flex rounded-r-lg border border-black/10 border-l-[#ccbed7] px-1 py-1.5 bg-[#ccbed7]'>
        <button
        className='inline-flex  rounded-md w-8 h-8 text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteCat(catObj.cat.id)}
        >x</button>
      </div>    
    </div>
  )
}

export default CatItem