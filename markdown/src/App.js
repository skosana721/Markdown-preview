import "./App.css";
import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
let marked = require("marked");
let initialState = `
# Hello

## World

- List item 1
- List item 2
- List item 3

[codewars link](https://www.codewars.com/)

This is an line \`<div></div>\`

This is a block of code
\`\`\`
let x = 8
let y = 2
let return = x*y
\`\`\`

**This is bold** 

As Fyodor Dostoevsky said:

> Right or wrong, it's very pleasant to break something from time to time.

![Image](https://t4.ftcdn.net/jpg/01/02/89/35/360_F_102893505_9T3uAOypQ4LDntfPmS3nh3VnA6tImxYm.jpg)
`;

function App() {
  const [markdown, setMarkdown] = useState({
    text: initialState,
  });

  const markedValue = marked(markdown.text, { breaks: true });
  return (
    <div className="App">
      <header className="App-header">Markdown Previewer</header>
      <div>
        <FormGroup>
          <Label for="editor">Editor</Label>
          <Input
            type="textarea"
            name="text"
            id="editor"
            onChange={(e) => setMarkdown({ text: e.target.value })}
            value={markdown.text}
          />
        </FormGroup>
      </div>
      <div>
        <h2>Previewer</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: markedValue }}
        ></div>
      </div>
    </div>
  );
}

export default App;
