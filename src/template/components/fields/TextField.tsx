// Chakra imports
import {
  Flex,
  FormLabel,
  Textarea,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import React from 'react';

export type TextFieldProps = {
  id?: string;
  label?: string;
  extra?: string;
  placeholder?: string;
  [x: string]: any;
};

const defaultProps: TextFieldProps = {
  id: 'Description',
  placeholder: 'Short description about the product',
  label: 'Description',
};

export default function TextField(props: TextFieldProps) {
  const { mb, id, label, extra, placeholder, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const bgPrimary = useColorModeValue('transparent', 'brandDark.800');
  const borderPrimary = useColorModeValue(
    'secondaryGray.100',
    'whiteAlpha.100'
  );
  return (
    <Flex direction="column" mb={mb ? mb : '30px'}>
      <FormLabel
        display="flex"
        ms="10px"
        htmlFor={id}
        fontSize="sm"
        color={textColorPrimary}
        fontWeight="bold"
        _hover={{ cursor: 'pointer' }}
      >
        {label}
        <Text fontSize="sm" fontWeight="normal" ms="2px">
          {extra}
        </Text>
      </FormLabel>
      <Textarea
        id={id}
        placeholder={placeholder}
        h="44px"
        maxH="44px"
        color={textColorPrimary}
        fontSize="sm"
        bg={bgPrimary}
        border="1px solid "
        borderColor={borderPrimary}
        borderRadius="16px"
        {...rest}
        _placeholder={{ color: 'secondaryGray.500' }}
      />
    </Flex>
  );
}

TextField.defaultProps = defaultProps;
