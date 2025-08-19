import { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  // Timer state
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const beepRef = useRef(null);
  const timerRef = useRef(null);

  // Format seconds to mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  // Determine glow color
  const getBorderClass = () => {
    const total = onBreak ? breakLength * 60 : sessionLength * 60;
    const percent = timeLeft / total;
    if (percent <= 0.1) return "glow-red";
    if (percent <= 0.5) return "glow-yellow";
    return "glow-green";
  };

  // Reset timer
  const handleReset = () => {
    clearInterval(timerRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setOnBreak(false);
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
  };

  // Start or pause timer
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
  };

  // Switch between session and break
  useEffect(() => {
    if (timeLeft < 0) {
      beepRef.current.play();
      if (onBreak) {
        setOnBreak(false);
        setTimeLeft(sessionLength * 60);
      } else {
        setOnBreak(true);
        setTimeLeft(breakLength * 60);
      }
    }
  }, [timeLeft, onBreak, breakLength, sessionLength]);

  // Adjust break length
  const changeBreak = (amount) => {
    setBreakLength((prev) => Math.min(60, Math.max(1, prev + amount)));
  };

  // Adjust session length
  const changeSession = (amount) => {
    setSessionLength((prev) => {
      const newLength = Math.min(60, Math.max(1, prev + amount));
      if (!isRunning) setTimeLeft(newLength * 60);
      return newLength;
    });
  };

  return (
    <div className="container">
      <div className={`card ${getBorderClass()}`}>
        <h3 id="timer-label">{onBreak ? "Break" : "Session"}</h3>
        <h1 id="time-left">{formatTime(timeLeft < 0 ? 0 : timeLeft)}</h1>

        <div className="controls">
          <div className="control-col">
            <h4 id="break-label">Break Length</h4>
            <button
              id="break-decrement"
              className="btn btn-outline-light"
              onClick={() => changeBreak(-1)}
            >
              -
            </button>
            <span id="break-length">{breakLength}</span>
            <button
              id="break-increment"
              className="btn btn-outline-light"
              onClick={() => changeBreak(1)}
            >
              +
            </button>
          </div>
          <div className="control-col">
            <h4 id="session-label">Session Length</h4>
            <button
              id="session-decrement"
              className="btn btn-outline-light"
              onClick={() => changeSession(-1)}
            >
              -
            </button>
            <span id="session-length">{sessionLength}</span>
            <button
              id="session-increment"
              className="btn btn-outline-light"
              onClick={() => changeSession(1)}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button
            id="start_stop"
            className="btn btn-success"
            onClick={handleStartStop}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button id="reset" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>

        <audio
          id="beep"
          preload="auto"
          ref={beepRef}
          src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
