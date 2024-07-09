'use client';

import { useState, useEffect } from 'react';

// Convert to 12 hrs
const converTo12Hrs = (num: number) => {
  if (num > 12) return num - 12;
  if (num === 0) return 12;
  return num;
};

const formatTime = (date: Date) => ({
  hours: converTo12Hrs(date.getHours()).toString().padStart(2, '0'),
  minutes: String(date.getMinutes()).padStart(2, '0'),
  seconds: String(date.getSeconds()).padStart(2, '0'),
  meridian: date.getHours() >= 12 ? 'PM' : 'AM',
});

const useClock = () => {
  const [currentTime, setCurrentTime] = useState({ hr: '00', min: '00', sec: '00', meridian: '-' });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hr: formatTime(now).hours,
        min: formatTime(now).minutes,
        sec: formatTime(now).seconds,
        meridian: formatTime(now).meridian,
      });
    }, 1000); // Update every sec

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

export default useClock;
