import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import Markdown from "./components/Markdown";
import Output from "./components/Output";

const App = () => {
  let placeholder = `*Hint: try typing in the text area under editor!*
  # Markdown Document
  Welcome to the markdown previewer! This previewer will show you how markdown renders.
  ## Examples of what you can do in markdown
  Make a list
  * bullets
    * with different levels
  Or numbered...
  1. One
  2. Two
  Use **bold text** to **emphasize a point!**
  Annotate \`code in-line\` or in a block...
  \`\`\`
  def hello_markdown():
      print('Wowza!')
  \`\`\`
  ![Fireworks](https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=300&q=80)
  Block quotes provide a nice way to reference other ideas.
  >Positive thinking will let you do everything better than negative thinking will.
  >
  >-Zig Ziglar
  I hope that you enjoy this tool, feel free to [checkout my other projects on github](https://github.com/willbeaumont)!`;

  const [input, setInput] = useState(placeholder);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // handle input

  return (
    <div className="app flex">
      <div className="container">
        <Markdown input={input} onChange={handleInput} />
      </div>
      <div className="container preview">
        <div className="card bg">
          <Output input={input} />
        </div>
      </div>
    </div>
  );
};

export default App;
