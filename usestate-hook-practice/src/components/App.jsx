import React from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-GB");
  const [currentTime, setTime] = React.useState(time);
  function refresh() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  setInterval(refresh, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
