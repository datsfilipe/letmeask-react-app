import { ButtonHTMLAttributes } from 'react';
import { ButtonToggleTheme } from './style';
import { useTheme } from '../../hooks/useTheme';

export function ButtonToggle(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { buttonImg } = useTheme();

  return (
    <>
      <ButtonToggleTheme
      {...props} >
        <img src={buttonImg} alt="Change theme" />
      </ButtonToggleTheme>
    </>
  )
};
