import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  ...theme.config,
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const colors = {
  brand: {
    50: '#fef7df',
    100: '#f3e7b9',
    200: '#ebd792',
    300: '#e1c769',
    400: '#d9b740',
    500: '#bf9e26',
    600: '#957b1c',
    700: '#6a5811',
    800: '#413506',
    900: '#171200',
  },
};
const appTheme = extendTheme({ ...theme, config, colors });

export default appTheme;
