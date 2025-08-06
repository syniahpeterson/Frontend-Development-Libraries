import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => ({ type: INCREMENT });
const decAction = () => ({ type: DECREMENT });

const store = createStore(counterReducer);

const App = () => {
  const [count, setCount] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState());
    });
    return unsubscribe; // Clean up subscription on unmount
  }, []);

  return (
    <div>
      <h1>Challenge 13: Write a Counter with Redux</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
};

const incAction = () => ({ type: INCREMENT });
const decAction = () => ({ type: DECREMENT });`}
        </code>
      </pre>

      <h2>Output:</h2>
      <pre>
        <h3>Count: {count}</h3>
        <button onClick={() => store.dispatch(incAction())}>Increment</button>
        <button onClick={() => store.dispatch(decAction())}>Decrement</button>
      </pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
