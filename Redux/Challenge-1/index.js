import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const reducer = (state = 5) => {
    return state;
}

const store = createStore(reducer);  // <-- use createStore directly

const App = () => <h1>{store.getState()}</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
