import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return { authenticated: true };
    case "LOGOUT":
      return { authenticated: false };
    default:
      return defaultState;
  }
  // Change code above this line
};

const store = createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// Change code below this line
const App = () => (
  <h1>Challenge 7 - Use a Switch Statement to Handle Multiple Actions</h1>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
