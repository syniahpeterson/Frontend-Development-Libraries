import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const ADD_TO_DO = "ADD_TO_DO";

const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store = createStore(immutableReducer);

const App = () => {
  return (
    <div>
      <h1>Challenge 14: Never Mutate State</h1>
      <h2>Code:</h2>
      <pre>
        {`const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return [...state, action.todo];
    default:
      return state;
  }
};`}
      </pre>

      <h2>Output:</h2>
      <ul>
        {store.getState().map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
