import React, {useState, useEffect} from 'react';

function CurrentTime()
{
    const [time, Settime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() =>
        {
            Settime(new Date())

            return () =>
            {
                clearInterval(intervalId)
            }
        }, 1000);
    }, [] )

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
    }
    return(<div className="ClockContainer">
        <div className="clock">
            <h1>Current Time</h1>
            <span>{formatTime()}</span>

        </div>

    </div>);
}
export default CurrentTime;