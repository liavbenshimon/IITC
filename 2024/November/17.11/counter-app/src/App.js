import './App.css';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)

  const increasCount = () => {
    setCounter(counter+1)
  }

  const reduceCount = () => {
    setCounter(counter-1) 
  }
  return (
    <div className="App">
          Choose a number
          Form

    </div>
  );
}

export default App;



/*      <div className='counter-container'>
<button onClick={reduceCount}>-</button>
<p>{counter}</p>
<button onClick={increasCount}>+</button>
*/