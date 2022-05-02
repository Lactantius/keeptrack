import React from 'react';

function Clock() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const refresh = () => {
        setTime(new Date().toLocaleTimeString());
    }

    React.useEffect(() => {
        const timerID = setInterval(refresh, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <p>{time}</p>
            <button onClick={refresh}>Refresh</button>
        </div>
    );
}

export default Clock;
