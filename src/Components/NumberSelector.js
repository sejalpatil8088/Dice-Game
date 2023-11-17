
import React, { useState } from 'react'


//we are that selected numbers and setselected number as a props
const NumberSelector = ({ setError , error , selectedNumber , setSelectedNumber}) => {
    const arrayNumber = [1 , 2 , 3 , 4 , 5 , 6];
   

    const NumberSelectorHandler  = (value) => {
        setSelectedNumber(value)
        setError(" ")
        
    }
  return (
       
    
    
    <div> 
        <p className='flex justify-end text-red ml-40 '>{error}</p>  
      <div className='flex justify-end gap-4 mr-10 h-14 '>
      
        {arrayNumber.map((value , index) => 
            <div 
               key={index}
               isSelected={value === selectedNumber}
               onClick={() => NumberSelectorHandler(value)}
               className={`p-4 border-black border-2 hover:bg-slate-500 hover:text-white ${
               value === selectedNumber ? 'bg-black  text-white' : ''
               }`}
               >
              {value}
            </div>
            )}
            <p className='mt-14 mr-4 text-bold'>Select Number</p>
          
       </div>
    </div>
  )
}


export default NumberSelector;