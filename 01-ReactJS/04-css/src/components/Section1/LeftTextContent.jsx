import { ArrowUpRight } from "lucide-react";
import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import HeroArrow from "./HeroArrow";

const LeftTextContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 text-left ">
      <HeroText />
      <HeroArrow />
    </div>
  );
};

export default LeftTextContent;
