import React from 'react';
import { VStack, Avatar } from '@chakra-ui/react';
import AppointmentCard, {
  AppointmentCardProps,
} from '../components/Cards/AppointmentCard';

export interface AppointmentListProps {
  appointments: Array<AppointmentCardProps & { uid: string }>;
}

export const defaultProps: AppointmentListProps = {
  appointments: [
    {
      uid: 'some-unique-id',
      primaryText: 'Dr. Jean Claude',
      secondaryText: '12 July, Sunday @ 4.00',
      avatar: <Avatar name="Dr. Jean Claude" />,
      shouldShowJoinCallButton: true,
      chatOnClick: () => console.log('clicked chat on first card'),
      joinOnClick: () => console.log('clicked join on first card'),
      bgColor: 'dashboard.lightGreen',
    },
    {
      uid: 'another-unique-id',
      primaryText: 'Dr. Who',
      secondaryText: '18 July, Saturday @ 4.00',
      avatar: <Avatar name="Dr. Who" />,
      chatOnClick: () => console.log('clicked chat on second card'),
      joinOnClick: () => console.log('clicked join on second card'),
      bgColor: 'dashboard.lightYellow',
    },
    {
      uid: 'onemore-unique-id',
      primaryText: 'Dr. Sand',
      secondaryText: '18 July, Saturday @ 6.00',
      avatar: <Avatar name="Dr. Sand" />,
      chatOnClick: () => console.log('clicked chat on third card'),
      joinOnClick: () => console.log('clicked join on third card'),
      bgColor: 'dashboard.lightRed',
    },
  ],
};

export default function AppointmentList({
  appointments,
}: AppointmentListProps) {
  return (
    <VStack spacing={4} align="stretch" width="100%">
      {appointments.map(({ uid, ...rest }) => {
        return <AppointmentCard key={uid} {...rest} />;
      })}
    </VStack>
  );
}

AppointmentList.defaultProps = defaultProps;
