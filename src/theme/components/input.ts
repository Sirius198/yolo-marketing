import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
        },
      },

      variants: {
        dashboardBorderless: () => ({
          field: {
            borderRadius: '131px',
            height: '64px',
            color: 'dashboard.primaryText',
            _placeholder: {
              color: 'dashboard.secondaryText',
            },
          },
        }),
        dashboard: () => ({
          field: {
            border: '0.5px solid',
            borderColor: 'dashboard.primaryText',
            padding: '18px 32px',
            borderRadius: '131px',
            height: '64px',
            color: 'dashboard.primaryText',
            _placeholder: {
              color: 'dashboard.secondaryText',
            },
            _invalid: { borderColor: 'red.500' },
          },
        }),
        main: (props: StyleFunctionProps) => ({
          field: {
            bg: mode('transparent', 'brandDark.800')(props),
            border: '1px solid',
            color: mode('secondaryGray.900', 'white')(props),
            borderColor: mode(
              'secondaryGray.100',
              'whiteAlpha.100'
            )(props),
            borderRadius: '16px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: { color: 'secondaryGray.400' },
          },
        }),
        auth: (props: StyleFunctionProps) => ({
          field: {
            fontWeight: '500',
            color: mode('brandDark.700', 'white')(props),
            bg: mode('transparent', 'transparent')(props),
            border: '1px solid',
            borderColor: mode(
              'secondaryGray.100',
              'rgba(135, 140, 189, 0.3)'
            )(props),
            borderRadius: '16px',
            _placeholder: {
              color: 'secondaryGray.600',
              fontWeight: '400',
            },
          },
        }),
        authSecondary: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        search: (props: StyleFunctionProps) => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        social: (props: StyleFunctionProps) => ({
          field: {
            bg: mode('secondaryGray.300', 'transparent')(props),
            border: '1px solid',
            color: mode('secondaryGray.900', 'white')(props),
            borderColor: mode(
              'secondaryGray.300',
              'whiteAlpha.100'
            )(props),
            borderRadius: '30px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: {
              color: mode('secondaryGray.700', 'secondaryGray.600')(props),
            },
          },
        }),
        story: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',
            color: 'white',
            borderColor: 'white',
            borderRadius: '30px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: {
              color: 'whiteAlpha.900',
            },
            _active: {
              borderColor: 'white',
            },
          },
        }),
      },
    },
    NumberInput: {
      baseStyle: {
        field: {
          fontWeight: 400,
        },
      },

      variants: {
        main: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        auth: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        authSecondary: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        search: (props: StyleFunctionProps) => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
      },
    },
    Select: {
      baseStyle: {
        field: {
          fontWeight: 400,
        },
      },

      variants: {
        main: (props: StyleFunctionProps) => ({
          field: {
            bg: mode('transparent', 'brandDark.800')(props),
            border: '1px solid',
            color: 'secondaryGray.600',
            borderColor: mode(
              'secondaryGray.100',
              'whiteAlpha.100'
            )(props),
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
          icon: {
            color: 'secondaryGray.600',
          },
        }),
        mini: (props: StyleFunctionProps) => ({
          field: {
            bg: mode('transparent', 'brandDark.800')(props),
            border: '0px solid transparent',
            fontSize: '0px',
            p: '10px',
            _placeholder: { color: 'secondaryGray.600' },
          },
          icon: {
            color: 'secondaryGray.600',
          },
        }),
        subtle: (props: StyleFunctionProps) => ({
          box: {
            width: 'unset',
          },
          field: {
            bg: 'transparent',
            border: '0px solid',
            color: 'secondaryGray.600',
            borderColor: 'transparent',
            width: 'max-content',
            _placeholder: { color: 'secondaryGray.600' },
          },
          icon: {
            color: 'secondaryGray.600',
          },
        }),
        transparent: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '0px solid',
            width: 'min-content',
            color: mode('secondaryGray.600', 'secondaryGray.600')(props),
            borderColor: 'transparent',
            padding: '0px',
            paddingLeft: '8px',
            paddingRight: '20px',
            fontWeight: '700',
            fontSize: '14px',
            _placeholder: { color: 'secondaryGray.600' },
          },
          icon: {
            transform: 'none !important',
            position: 'unset !important',
            width: 'unset',
            color: 'secondaryGray.600',
            right: '0px',
          },
        }),
        auth: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        authSecondary: (props: StyleFunctionProps) => ({
          field: {
            bg: 'transparent',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        search: (props: StyleFunctionProps) => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
      },
    },
    // PinInputField: {
    //   variants: {
    //     main: (props: StyleFunctionProps) => ({
    //       field: {
    //         bg: "red !important",
    //         border: "1px solid",
    //         color: mode("secondaryGray.900", "white")(props),
    //         borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
    //         borderRadius: "16px",
    //         _placeholder: { color: "secondaryGray.600" },
    //       },
    //     }),
    //   },
    // },
  },
};
