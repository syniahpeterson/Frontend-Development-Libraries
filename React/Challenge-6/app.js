function App() {
  {
    /* Fix Errors 
  const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
*/
  }
  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );
  return JSX;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
