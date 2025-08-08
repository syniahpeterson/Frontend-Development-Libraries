import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState((state) => ({
      messages: [...state.messages, state.input],
      input: ""
    }));
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((msg, index) => 
            <li key={index}>{msg}</li>
          )}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};`;

export default function Challenge07() {
  return (
    <div>
      <h2>Challenge 2: Manage State Locally First</h2>
      <h3>Code:</h3>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
