import React from "react";
import { marked } from "marked";
import "./Output.css";

const Output = ({ input }) => {
  return (
    <>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      ></div>
    </>
  );
};

export default Output;
