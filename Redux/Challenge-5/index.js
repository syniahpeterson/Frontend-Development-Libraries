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
const App = () => <h1>Challenge 5 - Dispatch an Action Event</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
