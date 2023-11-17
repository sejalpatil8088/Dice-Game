

import React from 'react';


const StartGame = ({toggle}) => {
   


  return (
    <div className='flex mt-5' >
    
        <div>
           <img src='../Assets/dices 1.png'  alt='main-img' className='w-96 h-96 mt-10 ml-40' />
        </div>
        <div>
            <h1 className='text-7xl mt-40 mr-40 text-bold  '>DICE GAME</h1>
            <button onClick={toggle}  className='bg-black text-white mt-5 ml-40 pt-2 pb-2 pl-4 pr-4 rounded-md'>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame;