import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: "ADD_TO_DO",
    todo,
  };
};

const store = createStore(immutableReducer);

// Dispatch some test actions
store.dispatch(addToDo("Finish homework"));
store.dispatch(addToDo("Read a book"));

const App = () => {
  return (
    <div>
      <h1>Challenge 15: Use the Spread Operator on Arrays</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo];
    default:
      return state;
  }
};`}
        </code>
      </pre>

      <h2>Output:</h2>
      <pre>
        <ul>
          {store.getState().map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
