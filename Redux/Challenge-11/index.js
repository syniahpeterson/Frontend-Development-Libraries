import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case "ADD_NOTE":
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store = createStore(notesReducer);

// Change code below this line
const App = () => {
  // Dispatch the action here so UI reflects updated state
  store.dispatch(addNoteText("Hello!"));

  return (
    <div>
      <h1>Challenge 11: Send Action Data to the Store</h1>

      <h2>Code:</h2>
      <pre>
        <code>
          {`const notesReducer = (state = "Initial State", action) => {
  switch(action.type) {
    case "ADD_NOTE":
      return action.text;
    default:
      return state;
  }
};

const addNoteText = (note) => ({
  type: ADD_NOTE,
  text: note
});`}
        </code>
      </pre>

      <h2>Output:</h2>
      <p>
        <strong>Initial State:</strong> "Initial State"
      </p>
      <p>
        <strong>After dispatch:</strong> "{store.getState()}"
      </p>
    </div>
  );
};

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());

const root = createRoot(document.getElementById("root"));
root.render(<App />);
