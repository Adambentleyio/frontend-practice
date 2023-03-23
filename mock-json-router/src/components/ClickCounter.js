import React, { useState } from "react";
import "../App.css";

const description = `<article">
    <h2>Updating UI with state</h2>
    <h3>State is at the very heart of React. State variables allow us to ripple changes through our web apps based on their values</h3>
    <p>The counter example is one of the first exercises a beginner will tackle when learning React. It involves declaring component state that resolves to the number of times a button is clicked, an onClick function to update the state variable, and a javascript expression to show the state in the UI.  </p>
  </article>`;

const ClickCounter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="content flex col center">
      <h2>Click Counter</h2>
      <h2>You clicked the button {value} times</h2>
      <div className="flex col gap-xs">
        <button onClick={increment}>Click</button>
        <button onClick={() => setValue(0)}>Reset</button>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "var(--spacing-m)",
          color: "var(--gray-700)",
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ClickCounter;
