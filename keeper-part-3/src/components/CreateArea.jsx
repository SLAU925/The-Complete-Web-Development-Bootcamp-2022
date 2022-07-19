import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleNote(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
