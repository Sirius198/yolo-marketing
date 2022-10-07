import type { Tuple } from '../types';
import colorsListLight from './colors/colorsListLight';

export const THEME_COLORS = {
  teal: colorsListLight.teal,

  sage: colorsListLight.sage,

  dark: colorsListLight.slate,

  gray: colorsListLight.mauve,

  red: colorsListLight.red,

  crimson: colorsListLight.crimson,
  pink: colorsListLight.pink,

  grape: colorsListLight.plum,

  violet: colorsListLight.violet,

  indigo: colorsListLight.indigo,

  blue: colorsListLight.blue,
  sky: colorsListLight.sky,

  cyan: colorsListLight.cyan,

  green: colorsListLight.green,
  mint: colorsListLight.mint,
  lime: colorsListLight.lime,

  yellow: colorsListLight.yellow,
  amber: colorsListLight.amber,

  orange: colorsListLight.orange,
  tomato: colorsListLight.tomato,
} as Record<string, Tuple<string, 10>>;
