import React from 'react';

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Content from './components/Content';
import {
  renderThumb,
  renderTrack,
  renderView,
} from '../scrollbar/Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';

// Assers
import { IoMenuOutline } from 'react-icons/io5';
import { IRoute } from '../../../allRoutes';

export type SidebarProps = {
  routes: IRoute[];
  logoText?: string;
  variant?: string;
  secondary?: boolean;
};

const defaultProps: SidebarProps = {
  routes: [],
};

// FUNCTIONS

function Sidebar({ routes }: SidebarProps) {
  // this is for the rest of the collapses
  let variantChange = '0.2s linear';
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset'
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue('brand.25', 'brandDark.800');
  let sidebarRadius = '30px';
  let sidebarMargins = '0px';

  // let isWindows = navigator.platform.startsWith("Win");

  // SIDEBAR
  return (
    <Box
      display={{ sm: 'none', xl: 'block' }}
      position="fixed"
      minH="100%"
    >
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="320px"
        // ms={{
        //   sm: '16px',
        // }}
        px={{
          sm: '20px',
        }}
        py={{
          sm: '16px',
        }}
        h="100vh"
        // h="calc(100vh - 32px)"
        // m={sidebarMargins}
        borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}
Sidebar.defaultProps = defaultProps;

// FUNCTIONS
export function SidebarResponsive({ routes }: SidebarProps) {
  let sidebarBackgroundColor = useColorModeValue('white', 'brandDark.800');
  let menuColor = useColorModeValue('gray.400', 'white');
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <Flex
        ref={btnRef as any}
        w="max-content"
        h="max-content"
        onClick={onOpen}
      >
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        // placement={
        //   document.documentElement.dir === 'rtl' ? 'right' : 'left'
        // }
        finalFocusRef={btnRef as any}
      >
        <DrawerOverlay />
        <DrawerContent
          w="285px"
          maxW="285px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            zIndex="3"
            // onClose={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS
SidebarResponsive.defaultProps = defaultProps;

export default Sidebar;
