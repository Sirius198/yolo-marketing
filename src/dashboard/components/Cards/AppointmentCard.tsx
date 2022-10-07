import React from 'react';
import { Avatar, Box, Button } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export interface AppointmentCardProps
  extends Pick<
    BasicCardProps,
    'primaryText' | 'secondaryText' | 'bgColor'
  > {
  /** If true the "join call" button will be displayed */
  shouldShowJoinCallButton?: boolean;

  /** The avatar that will be displayed on the left hand side of the card */
  avatar?: React.ReactNode;

  /** The chat button onClick function */
  chatOnClick?: () => void;

  /** The join button onClick function */
  joinOnClick?: () => void;

  /** If minimal is true a text only appointment card is returned (no avatar or buttons) */
  minimal?: boolean;
}

export const defaultProps: AppointmentCardProps = {
  primaryText: 'Dr. Jean Claude',
  secondaryText: '12 July, Sunday @ 4.00',
  avatar: <Avatar name="Dr. Jean Claude" />,
  chatOnClick: () => console.log('clicked chat'),
  joinOnClick: () => console.log('clicked join'),
};

export default function AppointmentCard({
  shouldShowJoinCallButton,
  avatar,
  chatOnClick,
  joinOnClick,
  minimal,
  ...rest
}: AppointmentCardProps) {
  if (minimal)
    return (
      <BasicCard
        pt="24px"
        pb="32px"
        primaryTextOverrides={{ color: 'dashboard.secondaryText' }}
        {...rest}
      />
    );

  return (
    <BasicCard
      leftAdornment={avatar}
      rightAdornment={
        <Box display="flex">
          <Button
            colorScheme="dashboardButton"
            variant="outline"
            size="sm"
            onClick={chatOnClick}
          >
            Chat
          </Button>
          {shouldShowJoinCallButton ? (
            <Button
              colorScheme="dashboardButton"
              variant="solid"
              size="sm"
              onClick={joinOnClick}
              ml={4}
            >
              Join call
            </Button>
          ) : null}
        </Box>
      }
      {...rest}
    />
  );
}

AppointmentCard.defaultProps = defaultProps;
