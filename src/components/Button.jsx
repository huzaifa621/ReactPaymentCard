import React from "react";

function Button({ text }) {
  return (
    <div
      style={{
        background: "black",
        height: "40px",
        color: "white",
        width: "120px",
        fontSize: "18px",
        padding: "10px",
        boxSizing: "border-box"
      }}
    >
      {text}
    </div>
  );
}

export default Button;
