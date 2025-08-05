import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = createStore(immutableReducer);

// Dispatch action to get updated state
store.dispatch(removeItem(2)); // remove item at index 2 (value 2)
const currentState = store.getState();

const App = () => {
  return (
    <div>
      <h1>Challenge 16: Remove an Item from an Array</h1>
      <h2>Code:</h2>
      <pre>{`
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

store.dispatch(removeItem(2));
      `}</pre>
      <h2>Output:</h2>
      <pre>{JSON.stringify(currentState)}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
