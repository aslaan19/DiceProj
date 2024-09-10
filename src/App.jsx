import React, { useState } from 'react';
import LuckyN from './LuckyN';

function App() {
  
  const [goal, setGoal] = useState(7); 
  const [goal2, setGoal2] = useState(5);
  const [goal3, setGoal3] = useState(50);
  const [blocks1, setBlocks1] = useState(3)

  const handleGoalChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) { 
      setGoal(value);
    }
  };
  const handleGoalChange1 = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) { 
      setGoal2(value);
    }
  };
  const handleGoalChange2 = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) { 
      setGoal3(value);
    }
  };

  const Addblock = (event) =>{
  setBlocks1(blocks1+1)
  }
  const resetBlocks = (event) =>{
    setBlocks1(3)
    }
  return (
    <>
      <div>
        <label>
          Enter your goal: 
          <input type="number" value={goal} onChange={handleGoalChange} placeholder='Write the goal'/>
        </label>
      </div>
      
      <LuckyN numDice={blocks1} goal={goal} Addblock={Addblock}/>
      
      <button onClick={resetBlocks}> Reset</button>
      <div>
        <label>
          Enter your goal: 
          <input type="number" value={goal2} onChange={handleGoalChange1} placeholder='Write the goal'/>
        </label>
      </div>
      <LuckyN numDice={2} goal={goal2}/>
      <div>
        <label>
          Enter your goal: 
          <input type="number" value={goal3} onChange={handleGoalChange2} placeholder='Write the goal'/>
        </label>
      </div>
      <LuckyN numDice={10} goal={goal3}/>
    </>
  )
}

export default App;
