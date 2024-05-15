import { extendTheme } from "@chakra-ui/react";

// 공통 스타일 정의
const commonCursorStyle = {
  cursor: "default",
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Pretendard Variable', 'sans-serif'`,
    body: `'Pretendard Variable', 'sans-serif'`,
  },
  styles: {
    global: {
      body: {
        minWidth: "75rem",
        padding: "0",
        margin: "0",
      },
      tr: commonCursorStyle,
      td: commonCursorStyle,
      p: commonCursorStyle,
      h1: commonCursorStyle,
      h2: commonCursorStyle,
      h3: commonCursorStyle,
      h4: commonCursorStyle,
      h5: commonCursorStyle,
      h6: commonCursorStyle,
    },
  },
});

export default theme;
