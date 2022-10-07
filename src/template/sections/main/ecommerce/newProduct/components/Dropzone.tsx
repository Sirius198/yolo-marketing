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
  content?: any;
  [x: string]: any;
};
const defaultProps: DropzoneProps = {
  content: (
    <Box>
      <Icon as={MdOutlineCloudUpload} w="80px" h="80px" color={'black'} />
      <Text
        mx="auto"
        mb="12px"
        fontSize="lg"
        fontWeight="700"
        whiteSpace="pre-wrap"
        color={'grey.500'}
      >
        Drop your files here, or{' '}
        <Text as="span" fontSize="lg" fontWeight="700" color={'blue'}>
          browse
        </Text>
      </Text>
      <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
        PNG, JPG and GIF files are allowed
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
    <>
      <Flex
        alignItems="center"
        justify="center"
        bg={bg}
        border="1px dashed"
        borderColor={borderColor}
        borderRadius="16px"
        w="100%"
        maxW="100%"
        h="max-content"
        minH="130px"
        cursor="pointer"
        {...getRootProps({ className: 'dropzone' })}
        pt="80px !important"
        pb="105px !important"
        {...rest}
      >
        <Input variant="main" {...(getInputProps() as any)} />
        <Button variant="no-effects">{content}</Button>
      </Flex>
    </>
  );
}

Dropzone.defaultProps = defaultProps;

export default Dropzone;
