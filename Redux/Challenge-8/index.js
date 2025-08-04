import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = createStore(authReducer);
const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

const App = () => <h1>Challenge 8 - Use const for Action Types</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
