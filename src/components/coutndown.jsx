import React, { useEffect, useState } from "react";

function CountDownx(props) {
  var countDownDate = props.time;
  console.log(countDownDate);

  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="de_countdown">
      <span className="time timer_hour ">{hours}h </span>
      <span className="time timer_min">{minutes}m </span>
      <span className="time timer_sec">{seconds}s</span>
    </div>
  );
}

export default CountDownx;
