"use client";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      className='dark-mode-toggle bg-darkModeBg cursor-pointer rounded-[50%] p-1'
      onClick={toggleTheme}
    >
      {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </div>
  );
}

export default DarkMode;
