import React, { useState, useEffect } from "react";

function Digital() {
  const [time, setTime] = useState(new Date());
  //create a useEFffect
  useEffect(()=>{
    const intervalId = setInterval(()=>{
        setTime(new Date());
    } ,1000);
//clean up function
    return ()=>{clearInterval(intervalId)};
  },[]);

  function formatTime(){
    let hrs= time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridian = hrs > 12?"PM":"AM";
    hrs = hrs == 24?12:hrs%12;
     hrs = hrs < 10?`0${hrs}`:hrs;
    return `${hrs}:${min}:${sec} ${meridian}`
  }
  return (
    <div className="container">
        <div className="clock">
      <h1 className="Heading">DIGITAL CLOCK</h1>
      <h1 className="time">{formatTime()}</h1>
      </div>
    </div>
  );
}

export default Digital;
