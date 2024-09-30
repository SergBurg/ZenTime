import React, { useState, useEffect } from "react";
function Stopwatch() {
    const [hour, setHour] = useState(() => Number(localStorage.getItem("Hours")) || 0);
   const [minute, setMinutes] = useState(() => Number(localStorage.getItem("Minutes")) || 0);
   const [second, setSecond] = useState(() => Number(localStorage.getItem("Seconds")) || 0);
    const [isActive, setIsActive] = useState(false);
    const [CongratText, Settext] = useState("");
    const [Notes, setNotes] = useState("");
    const [boxColor, changeBoxColor] = useState('rgb(18, 142, 183')
    
    
    const HandleBoxChange = (event) => {
     
      
      changeBoxColor(event.target.value);
     
     
    };
    useEffect(() => {
      document.documentElement.style.setProperty('--box-color', boxColor); // Update the CSS variable
    }, [boxColor]
  );
  useEffect(() => {
    // Store timer values in local storage
    localStorage.setItem("Hours", hour);
    localStorage.setItem("Minutes", minute);
    localStorage.setItem("Seconds", second);
  }, [hour, minute, second]);
  
    const HandleNoteChange = (event) => {
     
      
      setNotes(event.target.value);
      
     
    };
  
    function HourInput(event) {}
    const HandleHourChange = (event) => {
      if (event.target.value >= 0 && event.target.value < 24)
      {
          setHour(event.target.value);
      }
     
    };
    const HandleMinuteChange = (event) => {
      if (event.target.value >= 0 && event.target.value < 60)
      {   
          setMinutes(event.target.value);
      }
     
    };
    const HandleSecondChange = (event) => {
      if (event.target.value >= 0 && event.target.value < 60)
      {
          setSecond(event.target.value);
      }
     
    };
  
    useEffect(() => {
      let intervalId;
    
      if (isActive) {
        setSecond(second); // Assuming Psecond is defined and represents the initial seconds
    
        intervalId = setInterval(() => {
          setSecond((second) => {
            if (second < 59) {
              return second + 1; // Decrement seconds
            } else {
              
              if (minute < 59)
                  {
                      setMinutes((minute) => 
                          {
                              return minute + 1;
                             
                          })
                      setSecond((second) => 
                      {
                          return 0;
                                 
                      })
                      
                      
                  }
              else
                  {
                     
                          
                          setHour((hours) => {
                             
                              return hours + 1;
                          
                             
                          })
                          setMinutes((minute) => 
                              {
                                  return 0;
                                 
                              })
                          setSecond((second) => 
                          {
                               return 0;
                                     
                          })
                        
  
                      
                    
                     
                    
                    return 0;
                  }
             
              {}
              // Handle transition to minutes or hours if needed
              // For example, you could add your logic here for minutes and hours
             return 59; // Ensure seconds don't go below 0
            }
          });
        }, 1000);
      }
    
      // Cleanup function to clear the interval when isActive changes
      return () => {
        clearInterval(intervalId);
      };
    }, [isActive, hour, minute, CongratText]);
  
    const SetTimer = () => 
    {
      setIsActive(true);
    
    }
  
    function formatTime() {
     
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    }
    return (
      <div className="TimerContainer">
        <div className="Timer">
          <h1>Stopwatch</h1>
          <h2>Set Hours</h2>
       
          <h2>Set Minutes</h2>
          
          <h2>Set Seconds</h2>
         
          <h1>{formatTime()}</h1>
          <button onClick={SetTimer}> SetTimer! </button>
       
          <h1>Notes......</h1>
          <input value={Notes} 
            onChange={HandleNoteChange} />
          <h3>Change Colour.</h3>
          <input type="color" value={boxColor} 
            onChange={HandleBoxChange} />
  
  
        </div>
      </div>
    );
    
  }
  export default Stopwatch;
  