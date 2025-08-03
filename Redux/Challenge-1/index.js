import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const reducer = (state = 5) => state;

const store = createStore(reducer);

const App = () => <h1>{store.getState()}</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
