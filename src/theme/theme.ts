// 1. Import the extendTheme function
import {
  extendTheme,
  type ThemeConfig,
  ThemeOverride,
  HTMLChakraProps,
  ThemingProps,
} from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { colors } from './foundations/colors';

import { CardComponent } from './additions/card/card';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { inputStyles } from './components/input';
import { progressStyles } from './components/progress';
import { sliderStyles } from './components/slider';
import { textareaStyles } from './components/textarea';
import { switchStyles } from './components/switch';
import { linkStyles } from './components/link';
import { breakpoints } from './foundations/breakpoints';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  // deprecated
  // useSystemColorMode: false,
};

const globalStyles = {
  colors,
  fonts: {
    sans: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
    heading: `Lexend, sans-serif`,
    display: `Gilroy, sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: 'hidden',
        bg: mode('#fdfeff', 'brandDark.900')(props),
        fontFamily: 'Inter',
        letterSpacing: '-0.2px',
      },
      input: {
        color: 'gray.700',
      },
      html: {
        fontFamily: 'Inter',
      },
    }),
  },
};

export const theme: ThemeOverride = extendTheme(
  config,
  { breakpoints }, // Breakpoints
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  progressStyles, // progress styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles, // switch styles
  CardComponent // card component
) as ThemeOverride;

export default theme;

export interface CustomCardProps
  extends HTMLChakraProps<'div'>,
    ThemingProps {}
