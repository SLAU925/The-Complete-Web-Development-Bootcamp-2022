import React from "react";

function App() {
  const [newItem, setNewItem] = React.useState("");
  const [list, setList] = React.useState([]);

  function updateItem(event) {
    setNewItem(event.target.value);
  }

  function updateList() {
    setList((preValue) => [...preValue, newItem]);
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItem} type="text" value={newItem} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
