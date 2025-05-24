import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

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
      if (intervalId) clearInterval(intervalId);
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
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="shadow-lg"
        style={{ width: "22rem", borderRadius: "15px" }}
      >
        <Card.Header className="bg-primary text-white">
          <h2 className="text-center mb-0">Timer Counter</h2>
        </Card.Header>
        <Card.Body className="text-center py-4">
          <Badge pill bg={isRunning ? "success" : "danger"} className="mb-3">
            {isRunning ? "Running" : "Paused"}
          </Badge>
          <div className="display-2 my-4" style={{ fontFamily: "monospace" }}>
            {counter}
          </div>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant={isRunning ? "danger" : "success"}
              onClick={toggleCounter}
              className="px-4"
            >
              {isRunning ? "⏸ Pause" : "▶ Resume"}
            </Button>
            <Button variant="warning" onClick={resetCounter} className="px-4">
              🔄 Reset
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          {new Date().toLocaleTimeString()}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Counter;
