import { useLayoutEffect, useEffect, useRef } from 'react';

import './styles.css';

export const UseLayoutEffectExample = () => {
  const ourDiv = useRef();

  useEffect(() => { //gets called after DOM is painted, it is non-blocking effect. If we change
    console.log('useEffect'); //background of ourDiv here we will see color changing on 
  }, [ourDiv]); //browser which looks like flickering from black to red background.

  useLayoutEffect(() => { //gets called before DOM is Painted, it will block DOM from painting
    console.log('useLayoutEffect'); //unless it is executed. so it will stop flicker when we
    ourDiv.current.style.backgroundColor = 'red'; //are changing background of ourDiv.
  }, [ourDiv]);
  //all other functionalities of "useLayoutEffect" is same as of "useEffect".

  return (
    <div id='my-div' ref={ourDiv}>
      useLayoutEffect vs useEffect
    </div>
  );
};
