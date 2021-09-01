import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';
import { useState } from 'react';

export function useLogo() {
  const [logo, setLogo] = useState(logoLight);

  return { logo, setLogo, logoLight, logoDark };
}
