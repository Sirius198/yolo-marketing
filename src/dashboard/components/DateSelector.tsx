import React from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.css';

export interface DateSelectorProps
  extends Pick<ReactDatePickerProps, 'selected'> {
  onChange: (date: Date | null) => void;
}

export const defaultProps: DateSelectorProps = {
  onChange: console.log,
  selected: new Date(),
};

const CustomInput = React.forwardRef<HTMLInputElement>((ref) => {
  return (
    <InputGroup>
      <InputLeftElement>
        <CalendarIcon h={6} w={6} color="white" />
      </InputLeftElement>
      <Input
        bgColor="dashboard.tealMain"
        color="white"
        border="none"
        width="218px"
        borderRadius="8px"
        {...ref}
      />
    </InputGroup>
  );
});
CustomInput.displayName = 'CustomInput';

export default function DateSelector({
  onChange,
  selected,
}: DateSelectorProps) {
  const incrementDate = (daysIncrement: number) => {
    var date = selected ? new Date(selected.getTime()) : new Date();

    date.setDate(date.getDate() + daysIncrement);

    return date;
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        mr="2"
        variant="ghostIcon"
        aria-label="Back one day"
        icon={<ChevronLeftIcon w={8} h={8} color="dashboard.tealMain" />}
        onClick={() => onChange(incrementDate(-1))}
      />
      <ReactDatePicker
        selected={selected}
        onChange={(date) => onChange(date)}
        showPopperArrow={false}
        dateFormat={'dd MMM, EEE'}
        className="react-datapicker__input-text"
        customInput={<CustomInput />}
      />
      <IconButton
        ml="2"
        variant="ghostIcon"
        aria-label="Forward one day"
        icon={<ChevronRightIcon w={8} h={8} color="dashboard.tealMain" />}
        onClick={() => onChange(incrementDate(1))}
      />
    </Box>
  );
}

DateSelector.defaultProps = defaultProps;
