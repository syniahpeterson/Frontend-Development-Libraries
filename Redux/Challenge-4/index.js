import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const action = {
  type: 'LOGIN'
}

// Define an action creator here:
const actionCreator = () => {
  return action;
}

const App = () => (
  <div>
    <h1>Challenge 4</h1>
    <p>Action type: {actionCreator().type}</p>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
