
import React, { useState } from 'react';

const RoleDice = ({roleDice ,currentDice }) => {
 

  

  return (
    <div>
      <div className='flex justify-center items-center' onClick={roleDice}>
        <img
          src={`./Assets/dice_${currentDice}.png`}
          alt={`dice-${currentDice}`}
          className='w-40 h-40 mt-20 cursor-pointer'
        />
      </div>
      <div className='flex justify-center'>
        <p className='mt-2 font-bold'>Click on Dice roll</p>
      </div>
    </div>
  );
};

export default RoleDice;



// import React, { useState } from 'react'

// const RoleDice = () => {
//     const [currentDice , setCurrentDice] = useState(1);

//     const generateRandomNumber = (min , max) => {
//         return Math.floor(Math.random() * (max - min) + min);
//     };

//     const roleDice = () => {
//         const randomNumber = generateRandomNumber(1 , 7);
//         setCurrentDice((prev) => randomNumber);
//     }
//   return (
//     <div>
//       <div className='flex justify-center items-center' onClick={roleDice}>
//         <img src={require(`../Assets/dice_${currentDice}.png`).default} alt={`dice-${currentDice}`} className='w-40 h-40 mt-20 cursor-pointer'
//         />
//       </div> 
//       <div className='flex justify-center '>
//          <p  className='mt-2 font-bold'>Click on Dice roll</p>
//       </div>
//     </div>
//   )
// }

// export default RoleDice;

