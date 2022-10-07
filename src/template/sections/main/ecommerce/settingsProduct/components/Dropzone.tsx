// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
// Assets
import React from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';

export type DropzoneProps = {
  content: any;
  [x: string]: any;
};
const defaultProps: DropzoneProps = {
  content: (
    <Box maxW="100%">
      <Icon
        as={MdOutlineCloudUpload}
        w="80px"
        h="80px"
        color={'secondaryGray.900'}
      />
      <Text
        mb="12px"
        fontSize="lg"
        w="100%"
        maxW="100%"
        fontWeight="700"
        color={'secondaryGray.900'}
        whiteSpace="pre-wrap"
      >
        Drop your images here, or{' '}
        <Text as="span" fontSize="lg" fontWeight="700" color={'brand.500'}>
          click to browse
        </Text>
      </Text>
      <Text
        fontSize="sm"
        fontWeight="500"
        color="secondaryGray.500"
        white-space="pre-wrap !important"
      >
        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
      </Text>
    </Box>
  ),
};

function Dropzone(props: DropzoneProps) {
  const { content, ...rest } = props;
  const { getRootProps, getInputProps } = useDropzone();
  const bg = useColorModeValue('gray.100', 'brandDark.700');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.100');
  return (
    <Flex
      alignItems="center"
      justify="center"
      bg={bg}
      border="1px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      maxW="100%"
      h={{ base: '208px', '3xl': '300px' }}
      cursor="pointer"
      {...getRootProps({ className: 'dropzone' })}
      {...rest}
    >
      <Input variant="main" {...(getInputProps() as any)} />
      <Button variant="no-effects">{content}</Button>
    </Flex>
  );
}

Dropzone.defaultProps = defaultProps;

export default Dropzone;
