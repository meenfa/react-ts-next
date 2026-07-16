import React, { createContext, useState } from "react";

//1. Creating context
export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  //3.Consuming data using useContext hook
  const [theme, settheme] = useState("light");

  const toggletheme = () => {
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div>
      {/* // 2.providing data */}
      <ThemeDataContext.Provider value={{ theme, toggletheme }}>
        {children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
