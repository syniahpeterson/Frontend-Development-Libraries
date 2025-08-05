import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const action = {
  type: "LOGIN",
};

// Define an action creator here:
const actionCreator = () => {
  return action;
};

const App = () => {
  return (
    <div>
      <h1>Challenge 4: Define an Action Creator</h1>
      <h2>Code: </h2>
      <pre>
        <code>
          {`const action = { type: "LOGIN" };
const actionCreator = () => {
  return action;
};`}
        </code>
      </pre>
      <h2>Output: </h2>
      <h3>Action type: {actionCreator().type}</h3>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
