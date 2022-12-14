import React, { FC, useContext, useMemo } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Divider,
  Spinner,
} from '@chakra-ui/react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import { Select } from 'chakra-react-select';
import {
  FieldProps,
  SelectFieldSchema,
  SelectFieldStyles,
} from '../types';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { useStyles } from '../hooks/useStyles';
import { Ctx } from './Ctx';

export const SelectField: FC<FieldProps<SelectFieldSchema>> = ({
  id,
  name,
  field,
}) => {
  const {
    label,
    helperText,
    isRequired,
    shouldDisplay,
    styles = {},
    divideAfter,
    placeholder,
    ...selectProps
  } = field;

  const { isReadOnly, selectOptions } = useContext(Ctx);

  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const values = useWatch({
    control,
  });

  const fieldStyles = useStyles<SelectFieldStyles>('selectField', styles);

  const errorMessage = useErrorMessage(name, label);

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);

  if (!isVisible) {
    return null;
  }

  const isLoading = field.selectKey
    ? selectOptions[field.selectKey].isLoading
    : false;

  const options = field.selectKey
    ? selectOptions[field.selectKey].options
    : field.options;

  if (!options || !Array.isArray(options)) {
    return <p>Could not find options for select field {name}</p>;
  }

  return (
    <>
      <FormControl
        key={`${name}-control`}
        isRequired={isRequired}
        isInvalid={Boolean(errorMessage)}
        {...fieldStyles.control}
        isReadOnly={isReadOnly}
      >
        {Boolean(label) && (
          <FormLabel htmlFor={name} {...fieldStyles.label}>
            {label}
          </FormLabel>
        )}
        <Select
          data-testid={id}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          isDisabled={isReadOnly || isLoading}
          placeholder={placeholder}
          {...selectProps}
          {...fieldStyles.select}
          {...(isLoading && {
            icon: <Spinner />,
          })}
          options={options}
        />

        <FormErrorMessage>{error && error.message}</FormErrorMessage>

        {Boolean(helperText) && (
          <FormHelperText {...fieldStyles.helperText}>
            {helperText}
          </FormHelperText>
        )}
        <FormErrorMessage {...fieldStyles.errorMessage}>
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
      {divideAfter && <Divider mt="8" />}
    </>
  );
};
