function App() {
  const JSX = <h1>Hello JSX!</h1>;
  return JSX
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);