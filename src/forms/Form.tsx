import React from 'react';
import {
  KeepStateOptions,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import { vestResolver } from '@hookform/resolvers/vest';

export interface FormProps<Values>
  extends Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    'ref' | 'onSubmit' | 'children'
  > {
  onSubmit: SubmitHandler<Values & FieldValues>;
  defaultValues: UseFormProps<Values & FieldValues>['defaultValues'];
  validationSchema: any;
  resetOnSubmit?: boolean;
  resetOptions?: KeepStateOptions;
  mode?: UseFormProps<Values & FieldValues>['mode'];
  formProps?: UseFormProps<Values & FieldValues>;
  children: (
    methods: UseFormReturn<Values & FieldValues>
  ) => React.ReactNode;
  ref?: React.Ref<HTMLFormElement> | null;
}

const Form = <
  Values extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  defaultValues,
  validationSchema,
  resetOnSubmit = false,
  resetOptions = {},
  mode = 'all',
  formProps,
  children,
  ref,
  ...otherProps
}: FormProps<Values>) => {
  const methods = useForm<Values>(
    formProps ?? {
      defaultValues,
      resolver: vestResolver(validationSchema),
      mode,
    }
  );
  const { handleSubmit, reset } = methods;

  const customHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault && event.preventDefault();
    event.persist && event.persist();

    handleSubmit(onSubmit)(event);

    if (resetOnSubmit) {
      reset(defaultValues, resetOptions);
    }
  };

  return (
    <form ref={ref} onSubmit={customHandleSubmit} {...otherProps}>
      {children(methods)}
    </form>
  );
};

export default Form;
