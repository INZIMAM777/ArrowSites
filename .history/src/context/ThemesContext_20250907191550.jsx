// contexts/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemesContext = createContext();

export const useTheme = () => {
  return useContext(ThemesContext);
};

export const ThemesProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemesContext.Provider value={value}>
      {children}
    </ThemesContext.Provider>
  );
};