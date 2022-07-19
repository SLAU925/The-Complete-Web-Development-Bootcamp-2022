import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [fullNote, setFullNote] = React.useState([]);

  function addNote(note) {
    setFullNote((preNotes) => {
      return [...preNotes, note];
    });
  }
  function deleteNote(targetNote) {
    setFullNote((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== targetNote;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {fullNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onClicked={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
