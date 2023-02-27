import React from 'react';
import { useEffect } from 'react';

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = ({ name, age }) => {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You age ${age} times`;
      });

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default MyComponent;
