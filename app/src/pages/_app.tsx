import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const components = {
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ["dialog, dialogContainer"],
          dialog: {
            pointerEvents: "auto"
          },
          dialogContainer: {
            pointerEvents: "none"
          }
        }
      }
    }
  };
  
  const theme = extendTheme({
    components
  });
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>;
}
