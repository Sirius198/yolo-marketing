import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: '70px',
        boxShadow: 'unset',
        transition: '.25s all ease',
        boxSizing: 'border-box',
        letterSpacing: '1px',
        _focus: {
          boxShadow: 'none',
        },
        _active: {
          boxShadow: 'none',
        },
      },
      sizes: {
        sm: {
          fontWeight: '400',
          fontSize: '1rem',
          height: '40px',
          minWidth: '128px',
        },
        md: {
          fontWeight: '400',
          fontSize: '1.25rem',
          height: '48px',
          minWidth: '192px',
        },
      },
      variants: {
        ghostIcon: () => ({
          bgColor: 'transparent',
          minWidth: 'fit-contents',
          height: 'fit-contents',
        }),
        outline: () => ({
          borderRadius: '70px',
        }),
        brand: (props: StyleFunctionProps) => ({
          bg: mode('brand.500', 'brand.400')(props),
          color: 'white',
          _focus: {
            bg: mode('brand.500', 'brand.400')(props),
          },
          _active: {
            bg: mode('brand.500', 'brand.400')(props),
          },
          _hover: {
            bg: mode('brand.600', 'brand.400')(props),
          },
        }),
        darkBrand: (props: StyleFunctionProps) => ({
          bg: mode('brand.900', 'brand.400')(props),
          color: 'white',
          _focus: {
            bg: mode('brand.900', 'brand.400')(props),
          },
          _active: {
            bg: mode('brand.900', 'brand.400')(props),
          },
          _hover: {
            bg: mode('brand.800', 'brand.400')(props),
          },
        }),
        lightBrand: (props: StyleFunctionProps) => ({
          bg: mode('#F2EFFF', 'whiteAlpha.100')(props),
          color: mode('brand.500', 'white')(props),
          _focus: {
            bg: mode('#F2EFFF', 'whiteAlpha.100')(props),
          },
          _active: {
            bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
          },
          _hover: {
            bg: mode('secondaryGray.400', 'whiteAlpha.200')(props),
          },
        }),
        light: (props: StyleFunctionProps) => ({
          bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
          color: mode('secondaryGray.900', 'white')(props),
          _focus: {
            bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
          },
          _active: {
            bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
          },
          _hover: {
            bg: mode('secondaryGray.400', 'whiteAlpha.200')(props),
          },
        }),
        action: (props: StyleFunctionProps) => ({
          fontWeight: '500',
          borderRadius: '50px',
          bg: mode('secondaryGray.300', 'brand.400')(props),
          color: mode('brand.500', 'white')(props),
          _focus: {
            bg: mode('secondaryGray.300', 'brand.400')(props),
          },
          _active: { bg: mode('secondaryGray.300', 'brand.400')(props) },
          _hover: {
            bg: mode('secondaryGray.200', 'brand.400')(props),
          },
        }),
        setup: (props: StyleFunctionProps) => ({
          fontWeight: '500',
          borderRadius: '50px',
          bg: mode('transparent', 'brand.400')(props),
          border: mode('1px solid', '0px solid')(props),
          borderColor: mode('secondaryGray.400', 'transparent')(props),
          color: mode('secondaryGray.900', 'white')(props),
          _focus: {
            bg: mode('transparent', 'brand.400')(props),
          },
          _active: { bg: mode('transparent', 'brand.400')(props) },
          _hover: {
            bg: mode('secondaryGray.100', 'brand.400')(props),
          },
        }),
      },
    },
  },
};
