import React, { useState } from "react";
import "../App.css";

const description = `<article">
    <h2>Controlling user behaviour</h2>
    <h3>One method for using inputs in react through controlled components, where data is handled by a React component rather than being handled by the DOM </h3>
    <p>Controlled inputs derive their value from the components state, and state is updated by using the onChange property to pass the event to a function that sets state</p>
  </article>`;

const ClickMe = () => {
  const [input, setInput] = useState("");

  const clicked = (event) => {
    event.preventDefault();
    input === "" ? alert("Write a message") : alert(input);
    setInput("");
  };

  return (
    <div className="content flex col center">
      <h2>Click Me</h2>
      <div className="flex col gap-xs">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={clicked}>Click</button>
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

export default ClickMe;
