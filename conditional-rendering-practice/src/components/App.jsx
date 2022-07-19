import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form btn="Login" registered={userIsRegistered} />
      ) : (
        <Form btn="Register" registered={userIsRegistered} />
      )}
    </div>
  );
}

export default App;
