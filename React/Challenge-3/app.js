function App() {
  const JSX = (
    <div>
      {/* This is a comment */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
  return JSX;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
