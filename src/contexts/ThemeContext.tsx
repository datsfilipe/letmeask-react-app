import 'styled-components';
import { createContext, ReactNode, useState } from 'react';
import light from '../styles/themes/theme_light';
import { Theme } from '../styles/styled';

export type ThemeContextType = {
  theme: Theme;
  switchTheme: (theme: Theme) => void;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType);

function ThemeContextProvider (props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(light);

  function switchTheme (theme: Theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }} >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
