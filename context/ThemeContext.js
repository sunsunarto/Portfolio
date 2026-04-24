import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      primary: "#3949AB",
      secondary: "#e6f7ff",
      accent: "#FF7043",
      textPrimary: "#212121",
      textSecondary: "#000080",
      textBlack: "#ffffff",
      background: "#ffffff",
      borderPrimary: "#000080",
      buttonPrimary: "#3949AB",
    },
    dark: {
      primary: "#000080",
      secondary: "#3949AB",
      accent: "#FF7043",
      textPrimary: "#f5f5f5",
      textSecondary: "#e6f7ff",
      textBlack: "#000000",
      background: "#121212",
      borderPrimary: "#e6f7ff",
      buttonPrimary: "#e6f7ff",
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
