import React, { useState } from 'react';
// import useKeyListener from '@jrh/npm-talk-standard-version/lib/useKeyListener';
// import { useKeyListener } from '@jrh/npm-talk-standard-version';
import { useKeyListener } from '@jrh/lerna-hooks';

const App = () => {
  const [keyPresses, setKeyPresses] = useState(0);
  
  useKeyListener(['a'], () => {
    console.log(`user pressed "a" ${keyPresses + 1} times`);
    
    setKeyPresses(keyPresses + 1);
  }, [keyPresses]);
  
  return (
    <h1>
      Hello World!
    </h1>
  );
}

export default App;
