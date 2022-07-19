import React from "react";

function Note(props) {
  function isDeleted(event) {
    props.onClicked(props.id);
    event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={props.id} onClick={isDeleted}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
