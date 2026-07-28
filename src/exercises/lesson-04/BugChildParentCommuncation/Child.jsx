export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Parent Manages State and store the counter state.
// A helper function incrementCounter updates the state
// and is passed to the Child as a prop.
