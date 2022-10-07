import React from 'react';
import { Avatar, Box, Button, Text } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export interface AppointmentDoctorCardProps
  extends Pick<
    BasicCardProps,
    'primaryText' | 'secondaryText' | 'bgColor'
  > {
  /** The avatar that will be displayed on the left hand side of the card */
  avatar: React.ReactNode;

  /** Fires when select is clicked */
  selectOnClick: () => void;

  /** If true select button appears */
  selectable?: boolean;

  /** The tertiary text */
  tertiaryText: string;
}

export const defaultProps: AppointmentDoctorCardProps = {
  selectOnClick: () => console.log('Select clicked'),
  avatar: <Avatar name="Dr. Jean Claude" width="80px" height="80px" />,
  primaryText: 'Dr. Jean Claude',
  secondaryText: 'Qualification of Doctor',
  tertiaryText: 'Last Appointment : 12/02/2022',
};

export default function AppointmentDoctorCard({
  selectOnClick,
  selectable,
  tertiaryText,
  avatar,
  ...rest
}: AppointmentDoctorCardProps) {
  return (
    <BasicCard
      position="relative"
      p="18px 23px 12px 23px"
      height="128px"
      bgColor="dashboard.lightTeal"
      leftAdornment={avatar}
      rightAdornment={
        selectable ? (
          <Button
            colorScheme="dashboardButton"
            variant="outline"
            size="sm"
            onClick={selectOnClick}
          >
            Select
          </Button>
        ) : undefined
      }
      secondaryTextOverrides={{ fontSize: 'md' }}
      {...rest}
    >
      <>
        <Text fontSize="md" color="dashboard.secondaryText">
          {tertiaryText}
        </Text>
        {selectable ? (
          <Box
            w="100%"
            h="100%"
            top="0"
            left="0"
            bgColor="white"
            position="absolute"
            opacity="0.7"
          />
        ) : null}
      </>
    </BasicCard>
  );
}

AppointmentDoctorCard.defaultProps = defaultProps;
