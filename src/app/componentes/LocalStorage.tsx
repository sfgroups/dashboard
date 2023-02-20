"use client";

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(
    Number(localStorage.getItem('counter')) || 0,
  );

  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default App;
