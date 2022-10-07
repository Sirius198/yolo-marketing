import React from 'react';
import {} from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export type ChatTitleCardProps = Required<
  Pick<BasicCardProps, 'primaryText' | 'secondaryText'>
>;

export const defaultProps: ChatTitleCardProps = {
  primaryText: 'Doctor Name',
  secondaryText: 'Qualification of Doctor',
};

export default function ChatTitleCard(props: ChatTitleCardProps) {
  return (
    <BasicCard
      {...props}
      secondaryTextOverrides={{ color: 'gray.400' }}
      width="fit-content"
      height="fit-content"
      p={0}
      shadow="none"
    />
  );
}

ChatTitleCard.defaultProps = defaultProps;
