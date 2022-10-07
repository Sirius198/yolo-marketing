// Chakra Imports
import { Button, Icon, useColorMode } from '@chakra-ui/react';
// Custom Icons
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import React from 'react';

export type FixedPluginProps = {
  [x: string]: any;
};

const defaultProps: FixedPluginProps = {};

export default function FixedPlugin(props: FixedPluginProps) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  let bgButton = 'linear-gradient(135deg, #8dcec3 0%, #0c6d62 100%)';

  return (
    <Button
      {...rest}
      h="60px"
      w="60px"
      bg={bgButton}
      position="fixed"
      zIndex="99"
      variant="no-effects"
      // left={document.documentElement.dir === 'rtl' ? '35px' : ''}
      // right={document.documentElement.dir === 'rtl' ? '' : '35px'}
      bottom="30px"
      border="1px solid"
      borderColor="#53F6E7"
      borderRadius="50px"
      onClick={toggleColorMode}
      display="flex"
      p="0px"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        h="24px"
        w="24px"
        color="white"
        as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
      />
    </Button>
  );
}

FixedPlugin.defaultProps = defaultProps;
