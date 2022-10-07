import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import BMIBar, { BMIBarProps } from '../components/BMIBar';
import MeasurementCard from '../components/Cards/MeasurementCard';

export interface MedicalInfoSectionProps extends BMIBarProps {
  /** Function fired when the update button is clicked */
  onClickUpdate: () => void;

  /** The weight string, for example 84kg */
  weight: string;

  /** The height string, for example 5ft 9in */
  height: string;
}

export const defaultProps: MedicalInfoSectionProps = {
  onClickUpdate: () => console.log('clicked update'),
  highlightStart: 35,
  highlightEnd: 65,
  chevronPosition: 80,
  bmiString: 'Normal (BMI: 35)',
  weight: '70kg',
  height: '5ft 9in',
};

export default function MedicalInfoSection({
  onClickUpdate,
  weight,
  height,
  ...BMIBarProps
}: MedicalInfoSectionProps) {
  return (
    <Box width="100%">
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <MeasurementCard name="Weight" value={weight} />
        <MeasurementCard name="Height" value={height} />
      </Box>
      <BMIBar {...BMIBarProps} />
      <Box width="100%" display="flex" justifyContent="flex-end" mt="20px">
        <Button
          ml="auto"
          size="sm"
          colorScheme="dashboardButton"
          variant="outline"
          onClick={onClickUpdate}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

MedicalInfoSection.defaultProps = defaultProps;
