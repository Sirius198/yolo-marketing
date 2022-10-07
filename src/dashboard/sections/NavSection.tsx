import React from 'react';
import { Box, Text, Icon, VStack } from '@chakra-ui/react';
import { TbRun } from 'react-icons/tb';

export interface NavSectionProps {
  /** The section title */
  title: string;
  /** Nav items */
  navItems: Array<{
    uid: string;
    label: string;
    href: string;
    icon: React.ReactNode;
  }>;
}

export const defaultProps: NavSectionProps = {
  title: 'Some nav section',
  navItems: [
    {
      uid: 'uid-1',
      label: 'Page one',
      href: '/?path=/story/dashboard-sections-navsection--nav-section',
      icon: <Icon as={TbRun} w="8" h="8" />,
    },
    {
      uid: 'uid-2',
      label: 'Page two',
      href: '/?path=/story/dashboard-sections-navsection--nav-section',
      icon: <Icon as={TbRun} w="8" h="8" />,
    },
  ],
};

export default function NavSection({ title, navItems }: NavSectionProps) {
  return (
    <Box width="100%">
      <Text fontSize="xl" color="dashboard.secondaryText" mb="27px">
        {title}
      </Text>
      <VStack spacing="16px" align="stretch">
        {navItems.map(({ uid, icon, label, href }, idx) => {
          return (
            <Box
              key={uid}
              display="flex"
              alignItems="center"
              pl="25px"
              as="a"
              href={href}
            >
              {icon}
              <Text fontSize="xl" ml="30px">
                {label}
              </Text>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

NavSection.defaultProps = defaultProps;
