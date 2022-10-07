import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import Header from './Header';
import NotificationCard from '../components/Cards/NotificationCard';

export interface NotificationPaneProps {
  /** Function that is called when the chevron is clicked */
  onChevronClick: () => void;

  /** Function that is called when the clear all button is clicked */
  onClearAllClick: () => void;

  /** Function that is called when the close icon is clicked on an
   * individual notification */
  onClickCloseIcon: (uid: string) => void;

  /** List of notifications */
  notifications: Array<{ uid: string; notification: string }>;
}

export const defaultProps: NotificationPaneProps = {
  onChevronClick: () => console.log('clicked chevron'),
  onClearAllClick: () => console.log('clicked clear all'),
  onClickCloseIcon: console.log,
  notifications: [
    {
      uid: 'first-notification',
      notification:
        'Congratulations on joining YOLO Health Click on this notification to learn more about our platform.',
    },
    {
      uid: 'second-notification',
      notification:
        'Congratulations on joining YOLO Health Click on this notification to learn more about our platform.',
    },
  ],
};

export default function NotificationPane({
  onChevronClick,
  onClearAllClick,
  onClickCloseIcon,
  notifications = [],
}: NotificationPaneProps) {
  return (
    <Box width="100%" p="105px 44px 44px 48px" bgColor="teal.50">
      <Header
        onChevronClick={onChevronClick}
        text="Notifications"
        rightAdornment={
          <Button
            colorScheme="teal"
            onClick={onClearAllClick}
            variant="ghost"
          >
            Clear all
          </Button>
        }
      />
      <VStack mt="59px" spacing={4} width="100%">
        {notifications.map((notification) => {
          return (
            <NotificationCard
              key={notification.uid}
              {...notification}
              onClickCloseIcon={onClickCloseIcon}
            />
          );
        })}
      </VStack>
    </Box>
  );
}

NotificationPane.defaultProps = defaultProps;
