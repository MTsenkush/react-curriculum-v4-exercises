// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    // count++ - mutates state;
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// First mistake - we had to declare variable for our hook using const.
// Second and main mistake here - we can not use count++ to mutate the state directly,
// we had to run setCount to make React change our count and re-render
// when we call our function with button listener.
