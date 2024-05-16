import { useEffect, useState } from "react";

import { IoCalendarSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

import "assets/scss/clock.scss";

const ClockView = () => {
  const [time, setTime] = useState<string>();

  const date = new Date().toLocaleDateString("en-Us", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const formatTime = (val: number) => {
    return val < 10 ? "0" : "";
  };
  const tick = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();

    setTime(
      `${formatTime(hour)}${hour}:${formatTime(minute)}${minute}:${formatTime(
        seconde
      )}${seconde}`
    );
  };
  return (
    <div className="clock">
      <div className="screen flex flex-col ">
        <h1 className="title mb-2 text-center">TODAY</h1>

        <h1 className="date flex items-center text-start">
          <IoCalendarSharp className="mr-2" />  {date}
        </h1>
        <h1 className="time  flex items-center text-start">
          <FaClock className=" mr-2"/>  {time}
        </h1>
      </div>
    </div>
  );
};

export default ClockView;
