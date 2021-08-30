import { useState, useEffect, useCallback, useMemo } from 'react';

// const myFunc = () => { //Way-1 if not dependent on any props or state variable function can be moved
//   console.log("my function called"); //outside component so that it won't get called from
// }    //useEffect on every re-render

export const UseEffectExample = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);

  const myObj = useMemo( //same as "useCallback", difference is that it returns object
    () => ({
      a: 'my value of a is ' + test1,
    }),
    [test1]
  );

  // const myFunc = useCallback( () => { //Way-2, if we have some function getting called inside 
  //   console.log("callback functioncalled with" + test1); //"useEffect" which is dependent on
  // }, [test1]); //props or state variable then we can use "useCallback" like this to memoize it.
  //"useCallback" won't create new copy of function untill value it depends on changed on 
  //subsequent re-renders and use memoized copy of function.

  useEffect(() => {
    console.log(myObj.a);
  }, [myObj]);

  // useEffect(() => { //Way-2, when "useEffect" is dependent on function inside functional
  //   myFunc();       // component or that function is dependent on "props" or "state"
  // }, [myFunc]);

  // useEffect(() => { //Way-1 if function getting called inside "useEffect" has no dependency on state
  //   myFunc();       // or prop values
  // }, []);

  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
