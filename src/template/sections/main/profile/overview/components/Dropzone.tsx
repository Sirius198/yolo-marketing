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
// Assets
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { MdUpload } from 'react-icons/md';

export type DropzoneProps = {
  content: React.ReactNode;
  [x: string]: any;
};
const defaultProps: DropzoneProps = {
  content: (
    <Box>
      <Icon as={MdUpload} w="80px" h="80px" color={'brand.500'} />
      <Flex justify="center" mx="auto" mb="12px">
        <Text fontSize="xl" fontWeight="700" color={'brand.500'}>
          Upload Files
        </Text>
      </Flex>
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
  const borderColor = useColorModeValue(
    'secondaryGray.100',
    'whiteAlpha.100'
  );
  return (
    <Flex
      alignItems="center"
      justify="center"
      bg={bg}
      border="1px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      h="max-content"
      minH="100%"
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
