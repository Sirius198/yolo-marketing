import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import BasicCard from './BasicCard';
import { BsPerson } from 'react-icons/bs';

export interface PrescriptionCardProps {
  /** Prescription icon */
  icon: React.ReactNode;

  /** The prescription title displayed as primary text */
  title: string;

  /** The name of the doctor displayed as secondary text */
  doctorName: string;

  /** The day text, displayed bottom right */
  dayText: string;
}

export const defaultProps: PrescriptionCardProps = {
  icon: <Icon as={BsPerson} w="6" h="6" />,
  title: 'Prescription title',
  doctorName: 'Dr. Name',
  dayText: 'Day 3',
};

export default function PrescriptionCard({
  icon,
  title,
  doctorName,
  dayText,
}: PrescriptionCardProps) {
  return (
    <BasicCard
      p="22px 35px 22px 40px"
      bgColor="dashboard.lightRed"
      leftAdornment={icon}
      primaryText={title}
      secondaryText={doctorName}
      rightAdornment={
        <Box height="100%" display="flex" alignItems="flex-end">
          <Text fontSize="xl" color="dadashboard.secondaryText">
            {dayText}
          </Text>
        </Box>
      }
    />
  );
}

PrescriptionCard.defaultProps = defaultProps;
