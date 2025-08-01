// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

const challengeNode = ReactDOM.createRoot(
  document.getElementById("challenge-node")
);
challengeNode.render(<MyComponent />);
