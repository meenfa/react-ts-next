import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-full w-60 shrink-0 overflow-hidden relative rounded-2xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />

      <RightCardContent
        color={props.color}
        tag={props.tag}
        id={props.id}
        intro={props.intro}
      />
    </div>
  );
};

export default RightCard;
