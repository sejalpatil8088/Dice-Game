
import { useState } from 'react';
import './App.css';
import PlayGame from './Components/PlayGame';
import StartGame from './Components/StartGame';

function App() {
  const [isGameStarted , setIsGameStarted]  = useState(false);

  const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev);
    };
 
  return (
    <div>
    {
      isGameStarted ? ( 
        <PlayGame/> 
        )  : (
           <StartGame toggle={toggleGamePlay} />

        )}
     

    </div>

  );
}

export default App;
