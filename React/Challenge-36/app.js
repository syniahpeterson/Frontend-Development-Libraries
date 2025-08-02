class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: 72 }}>Big Red</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Colorful />);
