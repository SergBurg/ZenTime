import React, { useState, useEffect } from "react";

function Timer() {
  const [hour, setHour] = useState(() => Number(localStorage.getItem("Hours")) || 0);
  const [minute, setMinutes] = useState(() => Number(localStorage.getItem("Minutes")) || 0);
  const [second, setSecond] = useState(() => Number(localStorage.getItem("Seconds")) || 0);
  const [isActive, setIsActive] = useState(false);
  const [congratText, setText] = useState("");
  const [Notes, setNotes] = useState("");
  const [boxColor, changeBoxColor] = useState('rgb(18, 142, 183')
    
    
  const HandleBoxChange = (event) => {
   
    
    changeBoxColor(event.target.value);
   
   
  };

  useEffect(() => {
    // Load start time from local storage on mount
    const savedStartTime = localStorage.getItem("startTime");
    if (savedStartTime) {
      const savedTime = (new Date(Number(savedStartTime))) / 1000;
      const currentTime = new Date() / 1000;
      const elapsedTime = Math.floor((currentTime - savedTime)); // Elapsed time in seconds

      const totalSeconds = hour * 3600 + minute * 60 + second;
      const remainingSeconds = totalSeconds - elapsedTime;

      if (remainingSeconds > 0) {
        // Update state with remaining time
        setHour(Math.floor(remainingSeconds / 3600));
        setMinutes(Math.floor((remainingSeconds % 3600) / 60));
        setSecond(remainingSeconds % 60);
      } else {
        setText("Timer done!");
      }
    }
  }, []);
useEffect(() => {
  document.documentElement.style.setProperty('--box-color', boxColor); // Update the CSS variable
}, [boxColor]);

  useEffect(() => {
    // Store timer values in local storage
    localStorage.setItem("Hours", hour);
    localStorage.setItem("Minutes", minute);
    localStorage.setItem("Seconds", second);
  }, [hour, minute, second]);
  const HandleNoteChange = (event) => {
     
      
    setNotes(event.target.value);
    
   
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      const initialTime = Date.now();
      localStorage.setItem("startTime", initialTime);

      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - initialTime) / 1000);
        const totalSeconds = hour * 3600 + minute * 60 + second;
        const remainingSeconds = totalSeconds - elapsedTime;

        if (remainingSeconds <= 0) {
          setText("Timer done!");
          setIsActive(false);
          setHour(0);
          setMinutes(0);
          setSecond(0);
        } else {
          setHour(Math.floor(remainingSeconds / 3600));
          setMinutes(Math.floor((remainingSeconds % 3600) / 60));
          setSecond(remainingSeconds % 60);
        }
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [isActive]);

  const setTimer = () => {
    setText(""); // Reset congratulatory text
    setIsActive(true);
  };

  const formatTime = () => {
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Set Time</h1>
      <h2>Set Hours</h2>
      <input type="number" value={hour} onChange={(e) => setHour(Math.max(0, e.target.value))} />
      <h2>Set Minutes</h2>
      <input type="number" value={minute} onChange={(e) => setMinutes(Math.max(0, Math.min(59, e.target.value)))} />
      <h2>Set Seconds</h2>
      <input type="number" value={second} onChange={(e) => setSecond(Math.max(0, Math.min(59, e.target.value)))} />
      <h1>{formatTime()}</h1>
      <button onClick={setTimer}>Set Timer!</button>
      <h1>{congratText}</h1>
      <h1>Notes......</h1>
          <input value={Notes} 
            onChange={HandleNoteChange} />
          <h3>Change Colour.</h3>
          <input type="color" value={boxColor} 
            onChange={HandleBoxChange} />
    </div>
    
  );
}

export default Timer;