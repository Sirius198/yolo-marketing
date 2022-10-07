import React from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/react';

export interface ChatMessageProps {
  /** The message text */
  message: string;

  /** The kind of message, either received or sent */
  kind: 'received' | 'sent';
}

export const defaultProps: ChatMessageProps = {
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  kind: 'received',
};

export default function ChatMessage({ message, kind }: ChatMessageProps) {
  const boxProps: BoxProps = {};

  if (kind === 'received') {
    boxProps.shadow = 'sm';
    boxProps.borderRadius = '0px 10px 10px 10px';
  }

  if (kind === 'sent') {
    boxProps.bgColor = 'dashboard.tealMain';
    boxProps.borderRadius = '10px 10px 0px 10px';
    boxProps.ml = 'auto';
  }

  return (
    <Box width="100%">
      <Box maxWidth="75%" p={4} width="fit-content" {...boxProps}>
        <Text fontSize="xl" fontWeight="normal">
          {message}
        </Text>
      </Box>
    </Box>
  );
}

ChatMessage.defaultProps = defaultProps;
