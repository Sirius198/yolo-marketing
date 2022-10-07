const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const customColors = {
  dashboardTabs: {
    100: '#fff',
  },
  dashboardButton: {
    50: '#f0fdfa',
    500: '#0AC5B3',
    600: '#0AC5B3',
  },
  dashboard: {
    primaryText: '#141716',
    secondaryText: '#8A918E',
    tealMain: '#0AC5B3',
    tealText: '#0AC5B3',
    lightTeal: '#f1fcfa',
    lightRed: '#FFF8F8',
    lightYellow: '#FFFCE8',
    lightGreen: '#F7FCF0',
  },
  marketing: {
    primary: '#0C4A6E',
    body: '#475569',
    secondary: '#94A3B8',
  },
  brand: {
    100: '#e5feff',
    200: '#28f4fb',
    300: '#28f4fb',
    400: '#52f9ff',
    500: '#04d0d7',
    600: '#10d7da',
    DEFAULT: '#10d7da',
    700: '#02494b',
    800: '#079092',
    900: '#04787c',
  },
  brandScheme: {
    100: '#e5fcff',
    200: '#52e8ff',
    300: '#52e8ff',
    400: '#52e8ff',
    500: '#28e6fb',
    600: '#10c3da',
    700: '#02424b',
    800: '#078492',
    900: '#02414b',
  },
  brandTabs: {
    100: '#e5fcff',
    200: '#28e2fb',
    300: '#28e2fb',
    400: '#28e2fb',
    500: '#28e2fb',
    600: '#10c3da',
    700: '#02434b',
    800: '#078092',
    900: '#02434b',
  },
  secondary: colors.orange,
  neutral: colors.sky,
  secondaryGray: {
    50: '#fbfdfc',
    100: '#dfeff1',
    200: '#e2f6f8',
    300: '#edfbfb',
    400: '#e9f5f7',
    500: '#939e9f',
    600: '#879798',
    DEFAULT: '#879798',
    700: '#3c6164',
    800: '#6fa8ae',
    900: '#0c2f32',

    // 50: '#fbfdfc',
    // 100: '#e0f2f2',
    // 200: '#e1f8f8',
    // 300: '#f6fdfe',
    // 300: '#edfbfb',
    // 400: '#e9f7f7',
    // 500: '#8fb8ba',
    // 600: '#879798',
    // 600: '#a4ccd0',
    // 600: '##6c878a',
    // DEFAULT: '#879798',
    // 700: '#3c6164',
    // 700: '#6fa7ae',
    // 800: '#3c6164',
    // 900: '#0c2f32',
    // 900: '#1c525a',
  },
  red: {
    100: '#FEEFEE',
    500: '#EE5D50',
    600: '#E31A1A',
  },
  blue: {
    50: '#EFF4FB',
    500: '#3965FF',
  },
  orange: {
    100: '#FFF6DA',
    500: '#FFB547',
  },
  green: {
    100: '#E6FAF5',
    500: '#01B574',
  },
  navy: {
    50: '#d0effb',
    100: '#a9e5fe',
    200: '#a5dff8',
    300: '#71c6ea',
    400: '#3697ba',
    500: '#1b8bbb',
    600: '#246b8a',
    700: '#1b3d4b',
    800: '#113745',
    900: '#0b2a37',
  },
  gray: {
    100: '#fbfdfe',
  },
};

/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './pages/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    '../../packages/yoloui/src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    // Not sure we need this font size here
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '40px',
        '2xl': '128px',
      },
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '5rem',
      },
      boxShadow: {
        sm: '0 2px 6px rgb(15 23 42 / 0.08)',
        DEFAULT:
          '0 8px 8px rgb(15 23 42 / 0.05), 0 3px 6px rgb(15 23 42 / 0.05)',
        md: '0 8px 8px rgb(15 23 42 / 0.05), 0 3px 6px rgb(15 23 42 / 0.05)',
        lg: '0 8px 15px rgb(15 23 42 / 0.08), 0 3px 6px rgb(15 23 42 / 0.08)',
        xl: '2px 11px 16px rgb(15 23 42 / 0.17), 0 1px 6px rgb(15 23 42 / 0.17), 3px 23px 24px rgb(15 23 42 / 0.17)',
        // sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        // DEFAULT:
        //   '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        raised: '0 20px 50px rgba(0,0,0, 0.075)',
        faint: '0 20px 42px 0 rgba(105, 143, 183, 0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        dark: colors.stone,
        slate: colors.slate,
        ...customColors,
        // secondaryGray: secondaryGray,
        // brand: {
        //   ...colors.teal,
        // },
        // secondary: {
        //   ...colors.orange,
        // },
        // neutral: {
        //   ...colors.sky,
        // },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        // serif: ['Nunito', ...defaultTheme.fontFamily.serif],
        serif: ['Lexend', ...defaultTheme.fontFamily.serif],
        heading: ['Lexend', ...defaultTheme.fontFamily.serif],
        display: ['Gilroy', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
        hero: '4.5rem',
      },
      maxHeight: {
        12: '3rem',
        48: '12rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      spacing: {
        28: '7rem',
      },
    },
  },
};

module.exports = config;
