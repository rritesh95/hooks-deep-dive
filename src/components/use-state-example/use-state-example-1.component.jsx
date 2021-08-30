import { useState } from 'react';

export const UseStateExample1 = () => {
  const [test1, setTest1] = useState(true); // false //after 1st render it will not take default
                                            //value passed instead take latest value
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};
