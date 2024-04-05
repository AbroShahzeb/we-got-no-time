import React, { useState, useEffect } from "react";
import { differenceInSeconds, addYears, differenceInDays } from "date-fns";
import bonesRain from "../assets/bones-rain.gif";

const LifespanTimer = ({ dob }) => {
  const [initialLifespan] = useState(70);
  const [remainingTime, setRemainingTime] = useState({
    years: 70,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const expectedDeathYear = addYears(dob, initialLifespan);

      // Calculate total seconds left for finer resolution
      const totalSecondsLeft = differenceInSeconds(expectedDeathYear, now);

      const daysLeft = differenceInDays(expectedDeathYear, now);
      const remainingYears = Math.floor(daysLeft / 365);
      const daysInCurrentYear = differenceInDays(
        new Date(now.getFullYear(), 11, 31),
        now
      );

      const remainingDays = Math.max(0, daysLeft - daysInCurrentYear);

      const remainingWeeks = Math.floor(remainingDays / 7) % 52;

      // Calculate hours, minutes, seconds
      const remainingSeconds = totalSecondsLeft % (365 * 24 * 60 * 60); // Seconds remaining within the year
      const remainingHours = Math.floor(remainingSeconds / 3600) % 24;
      const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
      const remainingSec = remainingSeconds % 60;

      setRemainingTime({
        years: remainingYears,
        weeks: remainingWeeks,
        days: remainingDays % 7, // Remaining days within the week
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSec,
      });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [dob, initialLifespan]);

  return (
    <section className="w-sm bg-slate-800 mx-8 mt-4 text-gray-300 p-4 rounded-md border-[1px] border-slate-600 flex flex-col gap-2 relative overflow-hidden">
      <img
        src={bonesRain}
        alt="Skulls animation"
        className="absolute inset-0 opacity-50 w-sm"
      />

      <p className="text-sm">You have got:</p>
      <div className="p-3 bg-gray-900 rounded-sm border-[1px] border-gray-700 relative z-10">
        <p>
          <span className="text-3xl font-bold">{remainingTime.years}</span>
          years,
          <span className="text-3xl font-bold"> {remainingTime.weeks}</span>
          weeks,
          <span className="text-3xl font-bold"> {remainingTime.days}</span>
          days,
          <span className="text-3xl font-bold"> {remainingTime.hours}</span>
          hours,
          <span className="text-3xl font-bold"> {remainingTime.minutes}</span>
          minutes,
          <span className="text-3xl font-bold"> {remainingTime.seconds}</span>
          seconds
        </p>
      </div>
      <p className="text-sm">
        to make the most out of your life. Don't waste any time
      </p>
      <p className="text-xs mt-2">
        Average global lifespan of a human life is 70 years. If you get lucky
        you can live longer.{" "}
        <span className="font-bold text-pink-600">
          Life is very unexpected.
        </span>
      </p>
    </section>
  );
};

export default LifespanTimer;
