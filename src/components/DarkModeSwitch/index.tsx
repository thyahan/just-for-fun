import React from "react";
import css from "./index.module.css";
import useTheme from "hooks/useTheme";
import { HiMoon, HiOutlineSun } from "react-icons/hi";

const size = "1.25em";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useTheme("dark");

  return (
    <div className={css["darkmode-switch"]}>
      {theme === "dark" ? <HiOutlineSun size={size} onClick={() => setTheme("light")} /> : <HiMoon size={size} onClick={() => setTheme("dark")} />}
    </div>
  );
};

export default DarkModeSwitch;
