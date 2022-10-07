import React from 'react';
import { Box, IconButton, VStack, Icon } from '@chakra-ui/react';
import ChatSendMessage, {
  ChatSendMessageProps,
} from '../components/ChatSendMessage';
import ChatTitleCard from '../components/Cards/ChatTitleCard';
import ChatMessage, { ChatMessageProps } from '../components/ChatMessage';
import ChatLinkPreview, {
  ChatLinkPreviewProps,
  defaultProps as chatLinkPreviewDefaultProps,
} from '../components/ChatLinkPreview';
import { FaEllipsisV } from 'react-icons/fa';

export type ChatProps = {
  /** The Doctor's name */
  doctorName: string;

  /** The Doctor's qualification */
  doctorQualification: string;

  /** List of messages to be rendered, the last element
   * of the array will appear at the bottom of the chat window  */
  messages: Array<
    | ({ uid: string; type: 'standard' } & ChatMessageProps)
    | ({ uid: string; type: 'link' } & ChatLinkPreviewProps)
  >;

  /** Ellipsis button displayed to the right of the doctor card (top right) */
  onEllipsisClick: () => void;
} & ChatSendMessageProps;

export const defaultProps: ChatProps = {
  doctorName: 'Dr. Name',
  doctorQualification: 'Qualification of doctor',
  onSendClick: console.log,
  onEllipsisClick: () => console.log('clicked ellipsis'),
  messages: [
    {
      type: 'standard',
      uid: 'some-uid',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      kind: 'received',
    },
    {
      type: 'standard',
      uid: 'another-uid',
      message: 'Lorem ipsum dolor si ipsum',
      kind: 'received',
    },
    {
      type: 'link',
      uid: 'some-link-uid',
      ...chatLinkPreviewDefaultProps,
    },
    {
      type: 'standard',
      uid: 'last-uid',
      message: 'Lorem ipsum dolor si ipsum',
      kind: 'sent',
    },
  ],
};

export default function Chat({
  doctorName,
  doctorQualification,
  messages,
  onSendClick,
  onEllipsisClick,
}: ChatProps) {
  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <ChatTitleCard
          primaryText={doctorName}
          secondaryText={doctorQualification}
        />
        <IconButton
          ml="auto"
          variant="ghostIcon"
          aria-label="Chat menu"
          icon={
            <Icon
              as={FaEllipsisV}
              color="dashboard.tealMain"
              w="6"
              h="6"
            />
          }
          onClick={onEllipsisClick}
        />
      </Box>
      <VStack
        my={2}
        spacing={4}
        align="stretch"
        width="100%"
        flex="1"
        overflowY="scroll"
      >
        {messages.map(({ uid, type, ...rest }) => {
          if (type === 'standard')
            return <ChatMessage key={uid} {...rest} />;

          if (type === 'link')
            return <ChatLinkPreview key={uid} {...rest} />;
        })}
      </VStack>
      <ChatSendMessage onSendClick={onSendClick} />
    </Box>
  );
}

Chat.defaultProps = defaultProps;
