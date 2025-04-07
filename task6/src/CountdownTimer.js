import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState(0); // user input
  const [timeLeft, setTimeLeft] = useState(0);   // countdown time
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputTime > 0) {
      setTimeLeft(inputTime);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputTime(0);
  };

  return (
    <div>
      <input
        type="number"
        min="1"
        placeholder="Enter seconds"
        value={inputTime}
        onChange={(e) => setInputTime(Number(e.target.value))}
        disabled={isRunning}
        className="input-field"
      />
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        ⏳ {timeLeft} sec
      </div>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
