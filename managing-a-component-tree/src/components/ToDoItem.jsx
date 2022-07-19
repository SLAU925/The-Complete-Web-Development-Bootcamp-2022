import React from "react";

// const strikeThrough = {
//   textDecoration: "line-through"
// };

function ToDoItem(props) {
  //   const [isClicked, setClick] = React.useState(false);
  //   function handleClick() {
  //     setClick((preValue) => {
  //       return !preValue;
  //     });
  //   }
  // style={isClicked ? strikeThrough : null}

  function handleClick() {}

  return (
    <li
      id={props.id}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}
export default ToDoItem;
