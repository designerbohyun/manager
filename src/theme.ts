// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'pretendard variable', 'sans-serif'`,
    body: `'Pretendard Variable', 'sans-serif'`,
  },
  styles: {
    global: {
      body: {
        minWidth: "75rem",
      },
    },
  },
});

export default theme;
