import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const switchStyles = {
  components: {
    Switch: {
      baseStyle: {
        thumb: {
          fontWeight: 400,
          borderRadius: '50%',
          w: '16px',
          h: '16px',
          _checked: { transform: 'translate(20px, 0px)' },
        },
        track: {
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          w: '40px',
          h: '20px',
          p: '2px',
          ps: '2px',
          _focus: {
            boxShadow: 'none',
          },
        },
      },

      variants: {
        dashboard: () => ({
          track: {
            bg: 'dashboard.lightTeal',
            pl: '5px',
            h: '30px',
            w: '57px',
            _checked: {
              bg: 'dashboard.lightTeal',
            },
          },
          thumb: {
            bg: 'dashboard.secondaryText',
            _checked: {
              transform: 'translate(31px, 0px)',
              bg: 'dashboard.tealMain',
            },
          },
        }),
        main: (props: StyleFunctionProps) => ({
          track: {
            bg: mode('gray.300', 'brandDark.700')(props),
          },
        }),
      },
    },
  },
};
