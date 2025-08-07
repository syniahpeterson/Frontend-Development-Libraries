// MessagesApp.jsx
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// ===== Redux =====
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = createStore(messageReducer);

// ===== React (Presentational) =====
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  submitMessage() {
    if (this.state.input.trim() === "") return;
    this.props.submitNewMessage(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="messages-app">
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// ===== React-Redux bindings =====
const mapStateToProps = (state) => ({ messages: state });

const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// ===== App Wrapper =====
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
