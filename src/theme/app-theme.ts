import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  ...theme.config,
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const appTheme = extendTheme({ ...theme, config });

export default appTheme;
