import '../src/styles/fonts.css';
import '../public/fonts/Gilroy/stylesheet.css';
import 'focus-visible';

// Tailwind
import '../src/styles/tailwind/base.css';
import '../src/styles/tailwind/utilities.css';

import React from 'react';
import * as NextFutureImage from 'next/future/image';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/theme';

Object.defineProperty(NextFutureImage, 'default', {
  configurable: true,
  value: (props) => {
    const {
      fill,
      blurDataURL,
      unoptimized,
      src,
      style = {},
      ...restProps
    } = props;

    return (
      <img
        src={src}
        {...restProps}
        style={
          fill
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: 0,
                color: 'transparent',
                ...style,
              }
            : undefined
        }
      />
    );
  },
});

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
