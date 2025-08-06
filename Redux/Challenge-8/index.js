import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

// Constants for action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Default state
const defaultState = {
  authenticated: false,
};

// Reducer
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { authenticated: true };
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
};

// Create store
const store = createStore(authReducer);

// Action creators
const loginUser = () => ({ type: LOGIN });
const logoutUser = () => ({ type: LOGOUT });

// Dispatch actions and get state snapshots
store.dispatch(loginUser());
const afterLogin = store.getState();
store.dispatch(logoutUser());
const afterLogout = store.getState();

// App component
const App = () => {
  return (
    <div>
      <h1>Challenge 8 - Use const for Action Types</h1>

      <h2>Code:</h2>
      <pre>
        {`const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";`}
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
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
