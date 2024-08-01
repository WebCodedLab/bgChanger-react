import React from "react";

function Button({ color, text, onClick }) {
  return (
    <button
      className={`px-5 py-3 rounded text-white bg-${color}-600 `}
      onClick={() => onClick(`${color}`)}
    >
      {text}
    </button>
  );
}

export default Button;
