import React, { useState } from 'react';
import { Box, IconButton, Input, Icon } from '@chakra-ui/react';
import { RiSendPlane2Fill } from 'react-icons/ri';

export interface ChatSendMessageProps {
  /** Function to fire when send button is clicked */
  onSendClick: (message: string) => void;
}

export const defaultProps: ChatSendMessageProps = {
  onSendClick: console.log,
};

export default function ChatSendMessage({
  onSendClick,
}: ChatSendMessageProps) {
  const [message, setMessage] = useState('');

  return (
    <Box display="flex" alignItems="center" width="100%">
      <Input
        placeholder="Start typing"
        size="lg"
        width="100%"
        borderRadius="131px"
        value={message}
        onChange={(e) => setMessage(e?.target?.value)}
        mr={2}
      />
      <IconButton
        ml="auto"
        variant="ghostIcon"
        aria-label="Send message"
        icon={
          <Icon
            as={RiSendPlane2Fill}
            color="dashboard.tealMain"
            w="8"
            h="8"
          />
        }
        onClick={() => onSendClick(message)}
      />
    </Box>
  );
}

ChatSendMessage.defaultProps = defaultProps;
