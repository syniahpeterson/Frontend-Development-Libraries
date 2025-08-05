import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const store = createStore((state = 5) => state);

// Get current state
const currentState = store.getState();

const App = () => {
  return (
    <div>
      <h1>Challenge 2: Get State from the Redux Store</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const store = createStore((state = 5) => state);
const currentState = store.getState();`}
        </code>
      </pre>

      <h2>Output:</h2>
      <h3>{currentState}</h3>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
