import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { MdAddTask } from 'react-icons/md';

export type IconBoxProps = {
  icon: JSX.Element | string;
  [x: string]: any;
};

const defaultProps: IconBoxProps = {
  icon: <Icon w="28px" h="28px" as={MdAddTask} color="blue" />,
};

export default function IconBox(props: IconBoxProps) {
  const { icon, ...rest } = props;

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'50%'}
      {...rest}
    >
      {icon}
    </Flex>
  );
}

IconBox.defaultProps = defaultProps;
