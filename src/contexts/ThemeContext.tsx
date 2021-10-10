import 'styled-components';
import { createContext, ReactNode, useState } from 'react';
import light from '../styles/themes/theme_light';
import { Theme } from '../styles/styled';
import logoLight from '../assets/images/logo-light.svg';
import lightModeImg from '../assets/images/light-mode.svg';

export type ThemeContextType = {
  theme: Theme;
  switchTheme: (theme: Theme, logo: string, buttonImg: string) => void;
  logo: string;
  buttonImg: string;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType);

function ThemeContextProvider (props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(light);
  const [logo, setLogo] = useState<string>(logoLight);
  const [buttonImg, setButtonImg] = useState<string>(lightModeImg)

  function switchTheme (theme: Theme, logo: string, buttonImg: string) {
    setTheme(theme);
    setLogo(logo);
    setButtonImg(buttonImg);
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, logo, buttonImg }} >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
