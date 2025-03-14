import { createContext } from "react";

import { Theme } from "../types/theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void ; 
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},

});