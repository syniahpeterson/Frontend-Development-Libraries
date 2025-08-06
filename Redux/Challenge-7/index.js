import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

// Default state
const defaultState = {
  authenticated: false,
};

// Reducer
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { authenticated: true };
    case "LOGOUT":
      return { authenticated: false };
    default:
      return state;
  }
};

const store = createStore(authReducer);

// Action creators
const loginUser = () => ({ type: "LOGIN" });
const logoutUser = () => ({ type: "LOGOUT" });

// Dispatch both actions to test reducer
store.dispatch(loginUser());
const afterLogin = store.getState();
store.dispatch(logoutUser());
const afterLogout = store.getState();

// App component
const App = () => (
  <div>
    <h1>Challenge 7 - Use a Switch Statement to Handle Multiple Actions</h1>

    <h2>Code:</h2>
    <pre>
      <code>
        {`switch (action.type) {
  case "LOGIN":
    return { authenticated: true };
  case "LOGOUT":
    return { authenticated: false };
  default:
    return state;
}`}
      </code>
    </pre>

    <h2>Output:</h2>
    <pre>
      <p>
        <strong>After LOGIN:</strong> {JSON.stringify(afterLogin)}
      </p>
      <p>
        <strong>After LOGOUT:</strong> {JSON.stringify(afterLogout)}
      </p>
    </pre>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
