import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { ThemeContext } from "../context/theme-context";

import { Theme } from "../types/theme";

import { THEME_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys";

type Props = PropsWithChildren;

const ThemeProvider = ({ children }: Props): ReactNode => {
  const [theme, setTheme] = useState<Theme>(loadThemeInitialState);

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((old) => (old === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

const loadThemeInitialState = (): Theme => {
  const item = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  return item === "dark" || item === "light" ? item : "dark";
};
