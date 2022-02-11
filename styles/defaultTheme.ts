import { DefaultTheme } from 'styled-components';

const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const calcRem = (size: number) => `${size / 16}rem`;

const media = {
  xs: mediaQuery(375),
  sm: mediaQuery(768),
  md: mediaQuery(1024),
  lg: mediaQuery(1200),
  xl: mediaQuery(1440),
  xxl: mediaQuery(1920),
};

const font = {
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
};

const padding = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margin = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const button = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

export const defaultTheme: DefaultTheme = {
  media,
  font,
  padding,
  margin,
  button,
};
