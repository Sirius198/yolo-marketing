import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import BasicCard from './BasicCard';
import { CloseIcon } from '@chakra-ui/icons';

export interface NotificationCardProps {
  /** Unique identifier for the notification */
  uid: string;

  /** Notification text */
  notification: string;

  /** Function to be fired when the close button is pressed */
  onClickCloseIcon: (uid: string) => void;
}

export const defaultProps: NotificationCardProps = {
  uid: 'notification-uid',
  notification:
    'Congratulations on joining YOLO Health Click on this notification to learn more about our platform.',
  onClickCloseIcon: () => console.log('clicked close icon'),
};

export default function NotificationCard({
  uid,
  notification,
  onClickCloseIcon,
}: NotificationCardProps) {
  return (
    <BasicCard
      position="relative"
      padding="32px 65px 32px 34px"
      shadow="none"
      bgColor="white"
      primaryText={notification}
      primaryTextOverrides={{
        fontWeight: 'normal',
        fontSize: 'xl',
        color: 'dashboard.secondaryText',
        noOfLines: undefined,
      }}
      rightAdornment={
        <IconButton
          ml="auto"
          variant="ghostIcon"
          aria-label="Close notification"
          icon={
            <CloseIcon color="dashboard.secondaryText" h="18" w="18" />
          }
          onClick={() => onClickCloseIcon(uid)}
        />
      }
      rightAdornmentBoxOverrides={{
        height: undefined,
        position: 'absolute',
        right: '20px',
        top: '20px',
      }}
    />
  );
}

NotificationCard.defaultProps = defaultProps;
