import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const store = createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());
console.log(store.dispatch(loginAction()));
const App = () => {
  return (
    <div>
      <h1>Challenge 5 - Dispatch an Action Event</h1>
      <h2>Code: </h2>
      <pre>
        <code>store.dispatch(loginAction());</code>
      </pre>
      <h2>Output: </h2>
      <pre>Dispatched Action: {JSON.stringify(loginAction())}</pre>
      <pre>Current State: {JSON.stringify(store.getState())}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
