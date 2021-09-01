import 'styled-components';

export type Theme = {
  theme: {
    background: string;
  color: string;
  },
  switchTheme?: (theme: Theme) => void;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
