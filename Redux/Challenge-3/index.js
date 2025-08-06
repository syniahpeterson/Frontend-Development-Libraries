import React from "react";
import { createRoot } from "react-dom/client";

// Define an action here:
const action = {
  type: "LOGIN",
};

const App = () => {
  return (
    <div>
      <h1>Challenge 3: Define a Redux Action</h1>

      <h2>Code:</h2>
      <pre>
        <code>{`const action = { type: "LOGIN" };`}</code>
      </pre>

      <h2>Output:</h2>
      <pre>{action.type}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
