import React, { Component } from 'react';
import { Box, Flex, Stack, Button } from '@chakra-ui/react';
import { FaBomb, FaCheckCircle } from 'react-icons/fa';
// import Bugsnag from '@bugsnag/js';

const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);',
  backgroundSize: '20px 20px',
  bg: '#edf2f6',
  p: 10,
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export type AppErrorBoundaryProps = {
  children?: React.ReactNode;
};

const defaultProps: AppErrorBoundaryProps = {};

export default class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    // Bugsnag.notify(error);
    return { hasError: true };
  }

  static defaultProps = defaultProps;

  handlePageReload() {
    // localStorage.clear();
    // window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          {...gridStyles}
          p={0}
          alignItems="center"
          justifyContent="center"
          flex={1}
          zIndex={10}
          position="relative"
          height="100vh"
        >
          <Stack
            alignItems="center"
            isInline
            spacing={8}
            bg="white"
            px={6}
            py={6}
            shadow="sm"
            width="lg"
          >
            <Box as={FaBomb} fontSize="100px" />
            <Box>
              <b>Oups…</b>
              <br />
              Something went wrong! Clear cache and refresh.
              <Button
                onClick={this.handlePageReload}
                variant="outline"
                rightIcon={<FaCheckCircle />}
                size="sm"
                mt={4}
                display="block"
              >
                Clear & reload
              </Button>
            </Box>
          </Stack>
        </Flex>
      );
    }

    return <>{this.props.children}</>;
  }
}
