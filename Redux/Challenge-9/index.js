import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => (count += 1));
// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);

const App = () => <h1>Challenge 9 - Register a Store Listener</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
