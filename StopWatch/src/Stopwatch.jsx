import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsrunning] = useState(false);
  const intervalIdRef = useRef(null);
  const [elapsedtime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsrunning(true);
    startTimeRef.current = Date.now() - elapsedtime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsrunning(false);
  }

  function Reset() {
    setIsrunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let hrs = Math.floor(elapsedtime / (60 * 60 * 1000));
    let mins = Math.floor((elapsedtime / (60 * 1000)) % 60);
    let sec = Math.floor((elapsedtime / 1000) % 60);
    let milisecond = Math.floor((elapsedtime % 1000) / 10);
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec<10 ? "0"+sec:sec;

    return `${hrs}:${mins}:${sec}:${milisecond}`;
  }

  return (
    <div className="box">
      <h1>{formatTime()}</h1>
      <div className="buttons">
        <button className="btn btn-start" onClick={start}>
          <i className="fa-solid fa-play"></i>
        </button>
        <button className="btn btn-restart" onClick={Reset}>
          <i className="fa-solid fa-reply"></i>
        </button>
        <button className="btn btn-stop" onClick={stop}>
          <i className="fa-solid fa-stop"></i>
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
