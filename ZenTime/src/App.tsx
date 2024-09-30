import CurrentTime from "./currenttime.tsx";
import { useEffect, useState } from "react";
import Timer from "./timer.tsx";
import "./App.css";
import ImageUpload from "./Fileupload.tsx";
import Login from "./login.tsx"
import Stopwatch from "./stopwatch.tsx";
function App() {
  const [timers, setTimers] = useState([<Timer key={0} />]);
  const [stopwatches, setStopwatches] = useState([<Stopwatch key={0} />]);
  const [backendData, setBackendData] = useState([{}])
  const addTimer = () => {
    setTimers([...timers, <Timer key={timers.length} />]);
  };
  const addStopWatch = () => {
    setStopwatches([...stopwatches, <Stopwatch key={timers.length} />]);
  };

  useEffect(() => {
    fetch("/api").then(response => response.json()).then( data => {
      setBackendData(data)
    })
  }, [])
  const [isVisible, setIsVisible] = useState(false);

  return (

   
    <div className="background" >
      {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>user</p>
        )
      )
      )}
      <ImageUpload/>
       
    
     
      <h1>Zentime</h1>
     
      <CurrentTime />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Component
      </button>
      {isVisible ? (
        <div className="clockContainer">
          {timers.map((_, index) => (
            <div className="box">
              <Timer key={index} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {stopwatches.map((_, index) => (
            <div className="box">
              <Stopwatch key={index} />
            </div>
          ))}
        </div>
      )}

      <button onClick={addTimer}>Add Timer</button>
      <button onClick={addStopWatch}>Add Stopwatch</button>
    </div>
    

  );
}
export default App;
