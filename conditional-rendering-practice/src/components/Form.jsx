import React from "react";
import Input from "./Input";
import diffInputs from "../input";

function Form(props) {
  return (
    <form className="form">
      {diffInputs.map((props) => (
        <Input type={props.type} placeholder={props.placeholder} />
      ))}
      {props.registered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="button">{props.btn}</button>
    </form>
  );
}

export default Form;
