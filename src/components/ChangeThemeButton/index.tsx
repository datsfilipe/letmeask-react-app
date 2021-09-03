import { ButtonHTMLAttributes } from 'react';
import { ButtonToggleTheme } from './style';

export function ButtonToggle(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <ButtonToggleTheme
      {...props} >
        Change Theme
      </ButtonToggleTheme>
    </>
  )
};
