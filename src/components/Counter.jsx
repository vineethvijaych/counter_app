import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [isRunning]);

  function toggleCounter() {
    setIsRunning(!isRunning);
  }

  function resetCounter() {
    setIsRunning(false);
    setCounter(0);
  }

  return (
    <div className="container mt-5">
      <div className="text-center text-dark">
        <h1>Counter</h1>
        <h2 className="fs-1">{counter}</h2>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary m-3 mx-2 px-3 py-2 fs-5"
          onClick={toggleCounter}
        >
          {isRunning ? "⏸️ Stop" : "▶️ Continue"}
        </button>
        <Button
          className="btn btn-warning m-3 mx-2 px-3 py-2 fs-5"
          onClick={resetCounter}
        >
          🔄 Reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;
