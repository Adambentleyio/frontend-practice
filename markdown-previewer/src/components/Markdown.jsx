import React from "react";

const Markdown = ({ input, onChange }) => {
  return (
    <textarea
      id="editor"
      className="card bg"
      value={input}
      onChange={onChange}
    ></textarea>
  );
};

export default Markdown;
