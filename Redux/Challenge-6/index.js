import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const store = createStore (
  (state = 6) => state
);

// Change code below this line
const currentState = store.getState()
const App = () => <h1>{currentState}</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
