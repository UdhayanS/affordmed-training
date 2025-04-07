import React from 'react';
import CountdownTimer from './CountdownTimer';
import Stopwatch from './Stopwatch';
import './App.css'; // Custom styles

function App() {
  return (
    <div className="app-container">
      <h1>⏲️ React Timers</h1>

      <div className="timers-wrapper">
        <div className="timer-card">
          <h2>Countdown Timer</h2>
          <CountdownTimer />
        </div>

        <div className="timer-card">
          <h2>Stopwatch</h2>
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default App;
