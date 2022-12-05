import { useState, useRef } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(
    localStorage.getItem("timer") ? parseInt(localStorage.getItem("timer")) : 0
  );

  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") ? localStorage.getItem("isActive") : false
  );
  const [isPaused, setIsPaused] = useState(
    localStorage.getItem("isPause") ? localStorage.getItem("isPause") : false
  );
  const [inTime, setInTime] = useState(
    localStorage.getItem("inTime")
      ? new Date(localStorage.getItem("inTime"))
      : null
  );
  const [outTime, setOutTime] = useState();
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    localStorage.setItem("isActive", true);
    localStorage.setItem("isPause", true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    setInTime(new Date());
    localStorage.setItem("inTime", new Date());
    setOutTime(null);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    localStorage.setItem("isPause", false);
    localStorage.setItem("timer", timer);
  };

  const handleResume = () => {
    setIsPaused(true);
    localStorage.setItem("isPause", true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
    setIsActive(false);
    setIsPaused(false);
    localStorage.removeItem("isActive");
    localStorage.removeItem("isPause");
    localStorage.removeItem("timer");
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    inTime,
    setInTime,
    setTimer,
    outTime,
    setOutTime,
  };
};

export default useTimer;
