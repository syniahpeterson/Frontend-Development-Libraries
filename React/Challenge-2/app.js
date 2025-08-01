function App() {
  const JSX = (
    <div>
      <h1>Count to Three!</h1>
      <p>Start at 1.</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
  return JSX;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
