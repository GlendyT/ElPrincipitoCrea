import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";

type ThemeType = "dark" | "light";

type DarkModeContextType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  colorTheme: string;
  darkSide: boolean;
  setDarkSide: Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: (checked: boolean) => void;
};

type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType>(null!);
const DarkProvider = ({ children }: DarkModeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "light" ? true : false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleDarkMode = (checked: boolean): void => {
    setTheme(colorTheme); 
    setDarkSide(checked);
  };

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        setTheme,
        colorTheme,
        darkSide,
        setDarkSide,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkProvider };
export default DarkModeContext;
