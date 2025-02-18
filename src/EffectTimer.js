import React, { useState, useEffect } from 'react';

const EffectTimer = () => {
 const [seconds, setSeconds] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
 }, []);

 return (
    <div>
      <h1>Seconds Elapsed: {seconds}</h1>
    </div>
 );
};

export default EffectTimer;