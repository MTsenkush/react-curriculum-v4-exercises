// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleBoxClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleButtonClick(event) {
    event.stopPropagation(); //stops bubbling
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleBoxClick}
      >
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </>
  );
}

// In the givven code, click of the button called both button and whole div click handlers.
// It appeared because events bubble up from child to parent by default.
// To stop this behaviour we had to use event.stopPropagation()
