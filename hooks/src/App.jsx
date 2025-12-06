// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0);

//   function incremental(){    
//     console.log(setCount);
//     setCount(count + 1);
//   }

//   return (
//     <>
//      <h1>COUNTER </h1>
//      <button onClick={incremental}>click {count} </button>
//     </>
//   )
// }

// export default App

// EXAMPLE CODE FOR SHOWING INITIAL AND FINAL VALUE

// import { useState, useRef } from 'react';

// function App() {
//   const initialCount = useRef(0);   // persists without re-render
//   const [count, setCount] = useState(0);

//   function incremental() {
//     setCount(prev => prev + 1);
//   }

//   return (
//     <>
//       <h1>This is the user count</h1>

//       <h2>Initial count: {initialCount.current}</h2>

//       <h2>After update count: {count}</h2>

//       <button onClick={incremental}>
//         Click
//       </button>
//     </>
//   );
// }

// export default App;

// USEREF EXAMPLE 

// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     console.log('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me! 
//     </button>
//   );
// }

import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}