import { useState } from 'react';

export const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  const handleAlert = () => { //will hold value of "count" when it was called even if current
    setTimeout(() => {        //"count" value is different as functional components in react
      alert(`Alert count is: ${count}`);  //renders from top to bottom always but implements
    }, 3000); //components like closures. 
  };

  return (
    <div>
      <h1>Count value: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>

      <button onClick={handleAlert}>Alert current Count</button>
    </div>
  );
};
