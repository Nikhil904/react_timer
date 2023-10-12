import { useState, useEffect } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div>
      <h1>Timer: {counter} seconds</h1>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
