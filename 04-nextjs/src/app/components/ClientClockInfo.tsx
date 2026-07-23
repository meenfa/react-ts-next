"use client"; 

import { useState, useEffect } from "react";

export default function ClientClockInfo() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Update time in every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-2 border rounded">
      <h1 className="text-lg font-bold">Client Component Clock</h1>
      <p>Current Time: {time}</p>
     <p className="text-sm text-gray-600 mt-2">
        This is the client component time and updates without refreshing.
      </p>
      </div>
  );
}