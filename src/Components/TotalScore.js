
import React from 'react'

const TotalScore = ({Score}) => {
  return (
    <main className='flex justify-between '>
       <div className='ml-10'> 
          <h1 className='text-6xl ml-16'>{Score}</h1>
          <p className='text-4xl font-bold '>Total Score</p>

       </div>
       


    </main>
  )
}

export default TotalScore;