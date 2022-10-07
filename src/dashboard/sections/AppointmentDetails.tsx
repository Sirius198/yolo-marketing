import React from 'react';
import { Avatar, Box, Button, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FaRegStickyNote } from 'react-icons/fa';
import BasicCard from '../components/Cards/BasicCard';

export interface AppointmentDetailsProps {
  /** If true the appointment details will be visible */
  show: boolean;

  /** Function to fire when the close icon is clicked */
  onClickCloseIcon: () => void;

  /** The text displayed next to "Vertical:" for example "Weight Loss" */
  verticalText: string;

  /** Optional notes, if provided these will be displayed next to an icon */
  notes?: string;

  /** The chat button onClick function */
  chatOnClick: () => void;

  /** The join button onClick function */
  joinOnClick: () => void;

  /** The Doctor's avatar */
  avatar: React.ReactNode;

  /** The Doctor's name */
  doctorName: string;

  /** The Doctor's qualification */
  doctorQualification: string;
}

export const defaultProps: AppointmentDetailsProps = {
  show: true,
  onClickCloseIcon: () => console.log('clicked close icon'),
  verticalText: 'Weight Loss',
  notes:
    'Optional notes if any that were added by the doctor or (if) patient.',
  chatOnClick: () => console.log('clicked chat'),
  joinOnClick: () => console.log('clicked join'),
  avatar: <Avatar name="Dr. Jean Claude" />,
  doctorName: 'Dr. Name',
  doctorQualification: 'Qualification of doctor',
};

export default function AppointmentDetails({
  show,
  onClickCloseIcon,
  verticalText,
  notes,
  chatOnClick,
  joinOnClick,
  avatar,
  doctorName,
  doctorQualification,
}: AppointmentDetailsProps) {
  if (!show) return null;

  return (
    <Box width="100%" p="56px 36px 56px 48px" bgColor="teal.50">
      <Box display="flex">
        <Text
          fontSize="2xl"
          fontWeight="medium"
          color="dashboard.primaryText"
          mb="28px"
        >
          Appointment Details
        </Text>
        <IconButton
          ml="auto"
          variant="ghostIcon"
          aria-label="Close details"
          icon={<CloseIcon />}
          onClick={onClickCloseIcon}
          alignItems="flex-start"
        />
      </Box>
      <Text fontSize="xl" mb="32px">
        Vertical: {verticalText}
      </Text>
      {notes ? (
        <Box display="flex" mb="32px">
          <FaRegStickyNote size={28} />
          <Text ml="30px" fontSize="xl">
            {notes}
          </Text>
        </Box>
      ) : null}
      <Box mb="32px" display="flex">
        <Button
          colorScheme="dashboardButton"
          variant="solid"
          size="sm"
          onClick={joinOnClick}
          ml="auto"
        >
          Join call
        </Button>
      </Box>

      <Text fontSize="2xl" fontWeight="medium" mb="32px">
        Doctor
      </Text>
      <BasicCard
        p={0}
        height="fit-content"
        shadow="none"
        bgColor="transparent"
        primaryText={doctorName}
        secondaryText={doctorQualification}
        leftAdornment={avatar}
        rightAdornment={
          <Button
            colorScheme="dashboardButton"
            variant="outline"
            size="sm"
            onClick={chatOnClick}
          >
            Chat
          </Button>
        }
      />
    </Box>
  );
}

AppointmentDetails.defaultProps = defaultProps;
