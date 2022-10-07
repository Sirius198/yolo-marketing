import 'react-calendar/dist/Calendar.css';
import '../../../styles/vendors/MiniCalendar.css';

import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';

import { Text, Icon, useColorModeValue } from '@chakra-ui/react';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// Custom components
import Card from '../card/Card';
import { CustomCardProps } from 'src/theme';

export interface MiniCalendarProps
  extends Omit<CustomCardProps, 'onChange' | 'className' | 'defaultValue'>,
    CalendarProps {
  selectRange: boolean;
}

const defaultProps: MiniCalendarProps = {
  gridArea: { md: '1 / 1 / 2 / 2;', lg: '1 / 1 / 2 / 2' },
  selectRange: false,
  mb: '20px',
};

export default function MiniCalendar(props: MiniCalendarProps) {
  const {
    selectRange,
    onChange: baseOnChange,
    className,
    defaultValue,
    ...rest
  } = props;
  const [value, onChange] = useState(new Date());
  // Chakra Color Mode
  const borderColor = useColorModeValue('transparent', 'whiteAlpha.100');
  return (
    <Card
      border="1px solid"
      borderColor={borderColor}
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={'month'}
        tileContent={<Text color="brand.500"></Text>}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Card>
  );
}

MiniCalendar.defaultProps = defaultProps;
