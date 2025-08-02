// Challenge 47 from freeCodeCamp.org
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Check App.js File</p>
      </div>
    );
  }
}
{
  /* 
  // Change code below this line
ReactDOMServer.renderToString(<App />)
*/
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
