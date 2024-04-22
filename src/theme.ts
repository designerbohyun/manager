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
        padding: "0",
        margin: "0",
      },
      tr: {
        cursor: "default",
      },
      td: {
        cursor: "default",
      },
    },
  },
});

export default theme;
