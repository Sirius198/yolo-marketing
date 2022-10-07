import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export interface ThreadCardProps
  extends Pick<BasicCardProps, 'primaryText' | 'secondaryText'> {
  /** The avatar that will be displayed on the left hand side of the card */
  avatar: React.ReactNode;

  /** If true only the avatar will be displayed */
  isCollapsed: boolean;
}

export const defaultProps: ThreadCardProps = {
  avatar: <Avatar name="Dr. Jean Claude" />,
  isCollapsed: false,
  primaryText: 'Group name',
  secondaryText: 'I am the last message sent',
};

export default function ThreadCard({
  avatar,
  isCollapsed,
  ...rest
}: ThreadCardProps) {
  return (
    <BasicCard
      bgColor="teal.50"
      leftAdornment={<Box ml={isCollapsed ? 3 : undefined}>{avatar}</Box>}
      width={isCollapsed ? 'fit-content' : '100%'}
      secondaryTextOverrides={{ fontSize: 'md', color: 'gray.400' }}
      {...(isCollapsed ? {} : rest)}
    />
  );
}

ThreadCard.defaultProps = defaultProps;
