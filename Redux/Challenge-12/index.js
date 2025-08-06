import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => ({ type: REQUESTING_DATA });
const receivedData = (data) => ({ type: RECEIVED_DATA, users: data.users });

const handleAsync = () => {
  return function (dispatch) {
    dispatch(requestingData());
    setTimeout(() => {
      const data = { users: ["Jeff", "William", "Alice"] };
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return { fetching: true, users: [] };
    case RECEIVED_DATA:
      return { fetching: false, users: action.users };
    default:
      return state;
  }
};

const store = createStore(asyncDataReducer, applyMiddleware(thunk));

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    store.dispatch(handleAsync());
    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Challenge 12: Use Middleware to Handle Asynchronous Actions</h1>
      <h2>Code: </h2>
      <pre>
        <code>
          {`dispatch(requestingData())
wait 2.5 seconds
dispatch(receivedData(users))`}
        </code>
      </pre>
      <h2>Output: </h2>
      <pre>
        {state.fetching ? (
          <h3>Loading...</h3>
        ) : (
          <h3>Users: {state.users.join(", ")}</h3>
        )}
      </pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
