import 'styled-components';

// import dark from './themes/theme_dark';

// export type Theme = typeof dark;

export type Theme = {
  background: string;
  color: string;
  borderBottom: string;
  textareaBg: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
