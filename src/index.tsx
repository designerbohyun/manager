import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
