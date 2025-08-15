import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const DEFAULT_MD = `# Markdown Previewer

## Subheading

This is a [link](https://freecodecamp.org).

Inline code: \`const x = 42\`.

\`\`\`js
// code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- List item 1
- List item 2

> Blockquote time.

**Bold text!**

![FCC Logo](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
`;

const App = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const html = DOMPurify.sanitize(marked.parse(markdown));
  return (
    <div className="container">
      <h1 className="display-6 mb-4 text-center">Markdown Previewer</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header">Editor</div>
            <div className="card-body">
              <textarea
                id="editor"
                className="form-control"
                value={markdown}
                onChange={handleChange}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header">Preview</div>
            <div className="card-body">
              <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

marked.setOptions({
  breaks: true,
  gfm: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
