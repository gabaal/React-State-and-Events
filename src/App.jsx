import { useState } from 'react'


export default function App() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }
  function decrementCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function resetCounter() { // This is a function that resets the counter back to 0.
    setMyCounterState(0);
  }
  return (
    <div>
      <h1>Cookies!</h1>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decrementCounter}>Take a cookie</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
