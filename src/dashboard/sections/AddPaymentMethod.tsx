import React, { useState } from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalProps,
  IconButton,
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Switch,
  Button,
} from '@chakra-ui/react';
import Header from './Header';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import PaymentRadio from '../components/PaymentRadio';
import { BsBoxArrowDownRight } from 'react-icons/bs';

interface FormData {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  password: string;
  savePayment: boolean;
}

type PaymentMethod = 'mastercard' | 'paypal';

export interface AddPaymentMethodProps
  extends Omit<ModalProps, 'children'> {
  /** Function called when the user submits a valid form */
  onSubmit: (date: FormData) => void;

  /** Image source for mastercard logo */
  mastercardLogoSrc: string;

  /** Image source for paypal logo */
  paypalLogoSrc: string;
}

export const defaultProps: AddPaymentMethodProps = {
  onClose: () => console.log('Closed modal'),
  isOpen: true,
  onSubmit: console.log,
  mastercardLogoSrc:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1600px-MasterCard_early_1990s_logo.svg.png?20161110182502',
  paypalLogoSrc:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/52px-PayPal_Logo_Icon_2014.svg.png',
};

export default function AddPaymentMethod({
  onSubmit: onSuccesfulSubmit,
  mastercardLogoSrc,
  paypalLogoSrc,
  ...rest
}: AddPaymentMethodProps) {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => setShowPassword(!showPassword);
  const { formState, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      savePayment: true,
      cardNumber: '',
      cvv: '',
      expiryDate: '',
      password: '',
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Modal {...rest} isCentered>
      <ModalOverlay />
      <ModalContent
        height="799px"
        width="1099px"
        maxWidth="90%"
        maxHeight="90%"
        p="61px 87px"
        overflowY="auto"
      >
        {/* Header */}
        <Header
          text="Add Payment Method"
          rightAdornment={
            <IconButton
              ml="auto"
              variant="ghostIcon"
              aria-label="Close details"
              icon={<CloseIcon />}
              onClick={() => rest.onClose()}
              alignItems="flex-start"
            />
          }
          onChevronClick={null}
        />

        {/* Payment method selection */}
        <Box width="100%" display="flex" mt="75px" flexWrap="wrap">
          <PaymentRadio
            src={mastercardLogoSrc}
            text="Mastercard"
            isChecked={paymentMethod === 'mastercard'}
            onChange={() => setPaymentMethod('mastercard')}
          />
          <Box mr="32px" />
          <PaymentRadio
            src={paypalLogoSrc}
            text="Paypal"
            isChecked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
        </Box>

        {/* Main form - Inputs */}
        <Box
          display="flex"
          mt="40px"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          width="100%"
          noValidate
        >
          <Box width="579px" maxWidth="100%">
            <Controller
              name="cardNumber"
              control={control}
              rules={{ required: 'Card number required' }}
              render={({ field }) => (
                <FormControl
                  isRequired
                  isInvalid={!!formState?.errors?.cardNumber?.message}
                >
                  <FormLabel
                    requiredIndicator={<></>}
                    fontSize="xl"
                    color="dashboard.primaryText"
                    mb="24px"
                  >
                    Card Number
                  </FormLabel>
                  <Input
                    variant="dashboard"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    {...field}
                  />
                  <FormErrorMessage>
                    {formState?.errors?.cardNumber?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Box display="flex" justifyContent="space-between" my="31px">
              <Controller
                name="cvv"
                control={control}
                rules={{ required: 'CVV number required' }}
                render={({ field }) => (
                  <FormControl
                    isRequired
                    isInvalid={!!formState?.errors?.cvv?.message}
                  >
                    <FormLabel
                      requiredIndicator={<></>}
                      fontSize="xl"
                      color="dashboard.primaryText"
                      mb="24px"
                    >
                      CVV Number
                    </FormLabel>
                    <Input
                      variant="dashboard"
                      placeholder="XXX"
                      maxWidth="90%"
                      {...field}
                    />
                    <FormErrorMessage>
                      {formState?.errors?.cvv?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />

              <Controller
                name="expiryDate"
                control={control}
                rules={{ required: 'Expiry date required' }}
                render={({ field }) => (
                  <FormControl
                    isRequired
                    isInvalid={!!formState?.errors?.expiryDate?.message}
                  >
                    <FormLabel
                      requiredIndicator={<></>}
                      fontSize="xl"
                      color="dashboard.primaryText"
                      mb="24px"
                    >
                      Expiry Date
                    </FormLabel>
                    <Input
                      variant="dashboard"
                      placeholder="XXX"
                      maxWidth="90%"
                      {...field}
                    />
                    <FormErrorMessage>
                      {formState?.errors?.expiryDate?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
            </Box>

            {/* Password */}
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password required' }}
              render={({ field }) => (
                <FormControl
                  isRequired
                  isInvalid={!!formState?.errors?.password?.message}
                >
                  <FormLabel
                    requiredIndicator={<></>}
                    fontSize="xl"
                    color="dashboard.primaryText"
                    mb="24px"
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      variant="dashboard"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      pr="50px"
                      {...field}
                    />
                    <InputRightElement h="100%" pr="32px">
                      <IconButton
                        ml="auto"
                        variant="ghostIcon"
                        aria-label="Send message"
                        icon={
                          showPassword ? (
                            <ViewOffIcon
                              color="dashboard.secondaryText"
                              h="21"
                              w="21"
                            />
                          ) : (
                            <ViewIcon
                              color="dashboard.secondaryText"
                              h="21"
                              w="21"
                            />
                          )
                        }
                        onClick={handleShowPasswordClick}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {formState?.errors?.password?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            {/* Save card switch */}
            <Controller
              name="savePayment"
              control={control}
              render={({ field }) => (
                <Box display="flex" alignItems="center" mt="24px">
                  <Switch
                    isChecked={!!field.value}
                    id={'save-card'}
                    onChange={() => field.onChange(!field.value)}
                    variant="dashboard"
                    mr="15px"
                  />
                  <label
                    htmlFor={'save-card'}
                    className="text-xl font-normal text-dashboard-primaryText"
                  >
                    Save payment method
                  </label>
                </Box>
              )}
            />
          </Box>

          <Button
            colorScheme="dashboardButton"
            size="lg"
            type="submit"
            ml="100px"
            alignSelf="flex-end"
          >
            Add
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}

AddPaymentMethod.defaultProps = defaultProps;
