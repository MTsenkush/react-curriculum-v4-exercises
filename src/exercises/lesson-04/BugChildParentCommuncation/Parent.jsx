import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/*pass function to the child*/}
      <Child onIncrement={incrementCounter} />
    </div>
  );
}
