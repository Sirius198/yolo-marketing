import React from 'react';
import {
  Box,
  IconButton,
  Input,
  InputProps,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  VStack,
  Button,
} from '@chakra-ui/react';
import Header from './Header';
import { BellIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import HorizontalMediaList, {
  MediaItem,
} from '../components/HorizontalMediaList';
import AppointmentCard, {
  AppointmentCardProps,
} from '../components/Cards/AppointmentCard';
import PrescriptionCard, {
  PrescriptionCardProps,
} from '../components/Cards/PrescriptionCard';
import { BsPerson } from 'react-icons/bs';

export interface ChatOptionsProps {
  /** Fired when top right bell is clicked */
  onClickBell: () => void;

  /** Fired when back chevron is clicked */
  onChevronClick: () => void;

  /** Fired when media chevron is clicked */
  onMediaChevronClick: () => void;

  /** Fired when new appointment button is clicked */
  onNewAppointmentClick: () => void;

  /** Props for the search input */
  searchInputProps: InputProps;

  /** Media list */
  media: Array<{ uid: string } & MediaItem>;

  /** Appointment list */
  appointments: Array<{ uid: string } & AppointmentCardProps>;

  /** Prescription list */
  prescriptions: Array<{ uid: string } & PrescriptionCardProps>;
}

export const defaultProps: ChatOptionsProps = {
  onClickBell: () => console.log('clicked bell'),
  onChevronClick: () => console.log('clicked chevron'),
  onMediaChevronClick: () => console.log('clicked media chevron'),
  onNewAppointmentClick: () => console.log('clicked new appointment'),
  searchInputProps: { onChange: () => console.log('search changed') },
  media: [
    {
      uid: 'uid-1',
      src: 'https://picsum.photos/90/90',
      alt: 'Some image alt',
    },
    {
      uid: 'uid-2',
      src: 'https://via.placeholder.com/90',
      alt: 'Some image alt',
    },
    {
      uid: 'uid-3',
      src: 'https://picsum.photos/90/90',
      alt: 'Some image alt',
    },
  ],
  appointments: [
    {
      uid: 'uid-1',
      primaryText: 'Dr. Jean Claude',
      secondaryText: '12 July, Sunday @ 4.00',
    },
  ],
  prescriptions: [
    {
      uid: 'uid-1',
      icon: <Icon as={BsPerson} w="6" h="6" />,
      title: 'Prescription title',
      doctorName: 'Dr. Name',
      dayText: 'Day 3',
    },
  ],
};

export default function ChatOptions({
  onClickBell,
  onChevronClick,
  onMediaChevronClick,
  onNewAppointmentClick,
  searchInputProps,
  media,
  appointments,
  prescriptions,
}: ChatOptionsProps) {
  return (
    <Box width="100%" p="105px 44px 44px 48px" bgColor="teal.50">
      <Header
        onChevronClick={onChevronClick}
        text="Notifications"
        rightAdornment={
          <IconButton
            mr="2"
            variant="ghostIcon"
            aria-label="Notifications"
            icon={<BellIcon w={8} h={8} color="dashboard.tealMain" />}
            onClick={onClickBell}
          />
        }
      />
      <InputGroup mt="40px">
        <InputLeftElement height="100%" width="fit-contents" pl="34px">
          <SearchIcon h={5} w={5} color="primaryText" />
        </InputLeftElement>
        <Input
          pl="68px"
          placeholder="Search"
          size="lg"
          variant="dashboardBorderless"
          width="100%"
          shadow="sm"
          {...searchInputProps}
        />
      </InputGroup>

      <Box display="flex" mt="48px" mb="32px">
        <Text fontSize="xl" fontWeight="medium">
          Media, Links and Docs
        </Text>
        <IconButton
          ml="auto"
          variant="ghostIcon"
          aria-label="Go to media"
          icon={
            <ChevronRightIcon w={9} h={9} color="dashboard.tealMain" />
          }
          onClick={onMediaChevronClick}
        />
      </Box>
      <HorizontalMediaList media={media} />

      <Box display="flex" mt="48px" mb="32px" alignItems="center">
        <Text fontSize="xl" fontWeight="medium">
          Appointments
        </Text>
        <Button
          ml="auto"
          size="sm"
          colorScheme="dashboardButton"
          onClick={onNewAppointmentClick}
        >
          New appointment
        </Button>
      </Box>
      <VStack spacing={4} align="stretch" width="100%">
        {appointments.map(({ uid, ...rest }) => {
          return (
            <AppointmentCard
              bgColor="white"
              key={uid}
              minimal={true}
              {...rest}
            />
          );
        })}
      </VStack>

      <Text fontSize="xl" fontWeight="medium" mt="48px" mb="32px">
        Prescriptions
      </Text>
      <VStack spacing={4} align="stretch" width="100%">
        {prescriptions.map(({ uid, ...rest }) => {
          return <PrescriptionCard key={uid} {...rest} />;
        })}
      </VStack>
    </Box>
  );
}

ChatOptions.defaultProps = defaultProps;
