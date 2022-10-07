import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PageFadeInUpAnimateComponent, {
  PageFadeInUpAnimateProps,
} from '../PageFadeInUpAnimate';

export default {
  title: 'Templates / Components / menu',
  component: PageFadeInUpAnimateComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PageFadeInUpAnimateComponent>;

export const PageFadeInUpAnimate = (props: PageFadeInUpAnimateProps) => (
  <PageFadeInUpAnimateComponent {...props} />
);
