import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message,
  };
};

// Change code below this line
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  };
}`;

export default function Challenge09() {
  return (
    <div>
      <h2>Challenge 6: Map Dispatch to Props</h2>
      <h3>Code:</h3>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
