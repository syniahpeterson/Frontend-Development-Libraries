import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const defaultState = {
  login: false,
};

// Reducer
const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return { ...state, login: true }; // Better practice
  }
  return state;
};

const store = createStore(reducer);

// Action creator
const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch action so we can see updated output
store.dispatch(loginAction());

const App = () => {
  return (
    <div>
      <h1>Challenge 6 - Handle an Action in the Store</h1>

      <h2>Code:</h2>
      <pre>
        {`const defaultState = { login: false };
const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return { ...state, login: true };
  }
  return state;
};`}
      </pre>

      <h2>Output:</h2>
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
