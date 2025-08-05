import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
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

const rootReducer = combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <div>
      <h1>Challenge 10 - Combine Multiple Reducers</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const rootReducer = combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);`}
        </code>
      </pre>

      <h2>Output:</h2>
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
