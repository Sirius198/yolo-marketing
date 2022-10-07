import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { defaultProps } from 'react-select/dist/declarations/src/Select';

export type CircularProgressProps = {
  title?: string;
  percentage: number;
};

export const defaultProps: CircularProgressProps = {
  title: 'Conversion',
  percentage: 66,
};

export default function CircProgress({
  title,
  percentage,
}: CircularProgressProps) {
  // const { title, percentage } = props;
  let textColor = useColorModeValue('secondaryGray.900', 'white');
  let stylesColorMode = useColorModeValue(
    {
      rotation: 0.25,
      textSize: '0px',
      textColor: 'transparent',
      pathTransitionDuration: 0.5,
      pathColor: `#0c6d62`,
      trailColor: '#E9EDF7',
      backgroundColor: '#3e98c7',
    },
    {
      rotation: 0.25,
      textSize: '0px',
      pathTransitionDuration: 0.5,
      pathColor: `#19F3DE`,
      textColor: 'transparent',
      trailColor: '#2D3736',
    }
  );
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles(stylesColorMode)}
    >
      <Box>
        <Text fontSize="sm" color="secondaryGray.600" fontWeight="500">
          {title}
        </Text>
        <Text
          fontSize="xl"
          color={textColor}
          fontWeight="700"
          textAlign={'center'}
        >
          {percentage}%
        </Text>
      </Box>
    </CircularProgressbarWithChildren>
  );
}

export type CircularProgressMiniProps = {
  step?: string;
  percentage: number;
};

export const defaultProps2: CircularProgressMiniProps = {
  step: '1',
  percentage: 100,
};

export function CircProgressMini(props: CircularProgressMiniProps) {
  const { step, percentage } = props;
  let textColor = useColorModeValue('secondaryGray.900', 'white');
  let stylesColorMode = useColorModeValue(
    {
      rotation: 0.25,
      textSize: '0px',
      textColor: 'transparent',
      pathTransitionDuration: 0.5,
      pathColor: `#01B574`,
      trailColor: '#E9EDF7',
      backgroundColor: '#3e98c7',
    },
    {
      rotation: 0.25,
      textSize: '0px',
      pathTransitionDuration: 0.5,
      pathColor: `#01B574`,
      textColor: 'transparent',
      trailColor: '#2D3736',
    }
  );
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      text={`${step}`}
      styles={buildStyles(stylesColorMode)}
    >
      <Box>
        <Text fontSize="sm" color={textColor} fontWeight="700">
          {step}
        </Text>
      </Box>
    </CircularProgressbarWithChildren>
  );
}

CircProgress.defaultProps = defaultProps;
CircProgressMini.defaultProps = defaultProps2;
