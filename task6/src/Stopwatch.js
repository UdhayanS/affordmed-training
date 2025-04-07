import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>Time: {seconds} seconds</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
    </div>
  );
};

export default Stopwatch;
