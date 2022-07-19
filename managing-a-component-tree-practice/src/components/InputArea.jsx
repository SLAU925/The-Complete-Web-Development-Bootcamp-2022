import React from "react";

function InputArea(props) {
  const [inputText, setText] = React.useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onClicked(inputText);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
