import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export type Theme = "light" | "dark";

const useTheme = (initialValue: Theme) => {
  const [theme, setTheme] = useLocalStorage("theme", initialValue);

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    if (theme === "dark") {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [theme, setTheme]);

  return [theme, setTheme];
};

export default useTheme;
