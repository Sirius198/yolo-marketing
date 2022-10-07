import React from 'react';
import { Avatar, Box, Button } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export interface PrescriptionDoctorCardProps
  extends Pick<BasicCardProps, 'primaryText' | 'secondaryText'> {
  /** The avatar that will be displayed on the left hand side of the card */
  avatar: React.ReactNode;

  /** The chat button onClick function */
  chatOnClick: () => void;
}

export const defaultProps: PrescriptionDoctorCardProps = {
  primaryText: 'Dr. Jean Claude',
  secondaryText: 'Qualification of Doctor',
  avatar: <Avatar name="Dr. Jean Claude" w="64px" h="64px" />,
  chatOnClick: () => console.log('clicked chat'),
};

export default function PrescriptionDoctor({
  avatar,
  chatOnClick,
  ...rest
}: PrescriptionDoctorCardProps) {
  return (
    <BasicCard
      height="126px"
      padding="29px 44px 29px 36px"
      leftAdornment={avatar}
      rightAdornment={
        <Box display="flex">
          <Button
            colorScheme="dashboardButton"
            variant="solid"
            size="md"
            onClick={chatOnClick}
            ml={4}
          >
            Chat
          </Button>
        </Box>
      }
      primaryTextOverrides={{ fontSize: '2xl' }}
      secondaryTextOverrides={{ color: 'dashboard.secondaryText' }}
      {...rest}
    />
  );
}

PrescriptionDoctor.defaultProps = defaultProps;
