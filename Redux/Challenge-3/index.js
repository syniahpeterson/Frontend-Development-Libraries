import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

// Define an action here:
const action = {
  type: "LOGIN"
}
const App = () => <h1>{action.type}</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
