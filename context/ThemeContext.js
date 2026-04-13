import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      primary: "#3949AB",
      secondary: "#B2E2F7",
      accent: "#FF7043",
      textPrimary: "#212121",
      textSecondary: "#3949AB",
      background: "#ffffff",
      borderPrimary: "#3949AB",
    },
    dark: {
      primary: "#0D1164",
      secondary: "#3949AB",
      accent: "#FF7043",
      textPrimary: "#f5f5f5",
      textSecondary: "#B2E2F7",
      background: "#121212",
      borderPrimary: "#B2E2F7",
    },
  };

  useEffect(() => {
    const root = document.documentElement;
    const tokens = themes[theme];
    root.style.setProperty("--background", tokens.background);
    root.style.setProperty("--foreground", tokens.textPrimary);
    root.style.setProperty("--accent", tokens.accent);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, tokens: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
