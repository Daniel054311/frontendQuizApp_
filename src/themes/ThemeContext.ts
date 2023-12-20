import React, {useEffect, useState, createContext } from 'react';
import { Theme, themes } from './Themes';

interface ThemeContextProps {
  theme: Theme;
  handleThemeChange: () => void;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  handleThemeChange: () => {},
});

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : themes.light;
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme.name === 'light' ? themes.dark : themes.light));
  };

  return (
    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
      )
    }
