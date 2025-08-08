import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const state = [];

// Change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}`;

export default function Challenge05() {
  return (
    <div>
      <h2>Challenge 5: Map State to Props</h2>
      <h3>Code:</h3>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
