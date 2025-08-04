import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    state = {
      login: true,
    };
    return state;
  } else {
    return state;
  }
  // Change code above this line
};

const store = createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

const App = () => <h1>Challenge 6 - Handle an Action in the Store</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
