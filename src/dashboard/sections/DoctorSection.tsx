import React, { useState } from 'react';
import { Avatar, Box, Button, Text } from '@chakra-ui/react';
import Header from './Header';
import AppointmentDoctorCard, {
  AppointmentDoctorCardProps,
} from '../components/Cards/AppointmentDoctorCard';

export interface DoctorSectionProps extends AppointmentDoctorCardProps {}

export const defaultProps: DoctorSectionProps = {
  selectOnClick: () => console.log('Select clicked'),
  avatar: <Avatar name="Dr. Jean Claude" width="80px" height="80px" />,
  primaryText: 'Dr. Jean Claude',
  secondaryText: 'Qualification of Doctor',
  tertiaryText: 'Last Appointment : 12/02/2022',
};

export default function DoctorSection({
  selectOnClick,
  ...rest
}: DoctorSectionProps) {
  const [isSelectable, setIsSelectable] = useState(false);
  return (
    <Box width="100%">
      <Header
        text="Doctor"
        onChevronClick={null}
        rightAdornment={
          <Button
            colorScheme="dashboardButton"
            variant="outline"
            size="sm"
            onClick={() => setIsSelectable(true)}
          >
            Request new doctor
          </Button>
        }
      />
      <Box mb="18px" />
      <AppointmentDoctorCard
        {...rest}
        selectable={isSelectable}
        selectOnClick={() => {
          setIsSelectable(false);
          selectOnClick();
        }}
      />
      {isSelectable ? (
        <Box mt="16px" display="flex" justifyContent="center">
          <Text m="auto" fontSize="xl" fontWeight="medium">
            We will find you a new medical provider
          </Text>
        </Box>
      ) : null}
    </Box>
  );
}

DoctorSection.defaultProps = defaultProps;
