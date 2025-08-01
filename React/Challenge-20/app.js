class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

class Camper extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Your Name: </h1>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

Camper.defaultProps = {name: 'CamperBot'}
Camper.propTypes = {name: PropTypes.string.isRequired}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CampSite />);