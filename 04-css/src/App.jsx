import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      intro: "Fast support whenever you need assistance.",
      tag: "Satisfied",
      color: "#22c55e", // Green
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      intro: "Friendly experts ready to solve your issues.",
      tag: "Not Satisfied",
      color: "#f59e0b", // Amber
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      intro: "Building trust through exceptional customer care.",
      tag: "Unsatisfied",
      color: "#ef4444", // Red
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
      intro: "Our team responds to customer queries within minutes.",
      tag: "Excellent",
      color: "#3b82f6", // Blue
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
      intro: "Professional guidance for every stage of your journey.",
      tag: "Trusted",
      color: "#8b5cf6", // Purple
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
      intro: "Helping customers achieve success through personalized support.",
      tag: "Recommended",
      color: "#06b6d4", // Cyan
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
