import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const defaultState = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp",
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE",
  };
};

const store = createStore(immutableReducer);

// Dispatch the action to update the store (you can remove this if you want the output to stay "offline")
store.dispatch(wakeUp());

const code = `
const defaultState = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp"
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => ({ type: "ONLINE" });

const store = createStore(immutableReducer);
store.dispatch(wakeUp());
`;

const App = () => {
  return (
    <div>
      <h1>Challenge 17: Copy an Object with Object.assign</h1>
      <h2>Code:</h2>
      <pre>{code}</pre>
      <h2>Output:</h2>
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
