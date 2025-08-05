import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

// Reducer
const reducer = (state = 5) => state;

// Create store
const store = createStore(reducer);

const App = () => {
  return (
    <div>
      <h1>Challenge 1: Create a Redux Store</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const reducer = (state = 5) => state;
const store = createStore(reducer);`}
        </code>
      </pre>

      <h2>Output:</h2>
      <h3>{store.getState()}</h3>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
