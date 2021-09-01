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

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider (props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(light);

  function switchTheme (theme: Theme) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme } as ThemeContextType} >
      {props.children}
    </ThemeContext.Provider>
  );
}
