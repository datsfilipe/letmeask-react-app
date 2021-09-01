import { useContext } from 'react';
import { ThemeContext, ThemeContextType  } from '../contexts/ThemeContext';

export function useTheme() {
  const value: ThemeContextType = useContext(ThemeContext);

  return value;
}
