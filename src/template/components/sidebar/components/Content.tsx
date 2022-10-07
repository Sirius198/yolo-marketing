// chakra imports
import {
  Box,
  Flex,
  Avatar,
  Text,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
//   Custom components
import Brand from './Brand';
import Links from './Links';
import React from 'react';
import { IRoute } from '../../../../allRoutes';

export type ContentProps = { routes: IRoute[] };

const defaultProps: ContentProps = {
  routes: [],
};

// FUNCTIONS
function SidebarContent({ routes }: ContentProps) {
  const textColor = useColorModeValue('brandDark.700', 'white');
  // SIDEBAR
  return (
    <Flex
      direction="column"
      minH="100%"
      height="max-content"
      // pt="20px"
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: '16px', '2xl': '1px' }}>
          <Links routes={routes} />
        </Box>
      </Stack>
      <Flex
        mt="75px"
        mb="56px"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          h="48px"
          w="48px"
          src={`/assets/images/avatars/avatar4.png`}
          me="20px"
        />
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="700">
            Adela Parkson
          </Text>
          <Text color="secondaryGray.600" fontSize="sm" fontWeight="400">
            Squad Leader
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
SidebarContent.defaultProps = defaultProps;

export default SidebarContent;
