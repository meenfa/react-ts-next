import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const { theme, toggletheme } = useContext(ThemeDataContext);
  //   console.log(data);

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      {/* <h4>theme:{theme} </h4> */}
      <button onClick={toggletheme}>Change theme</button>
    </div>
  );
};

export default Nav2;
