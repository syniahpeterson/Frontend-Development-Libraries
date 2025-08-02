class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("Test Message")
    // Change code above this line
  }
  render() {
    return <div />
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);