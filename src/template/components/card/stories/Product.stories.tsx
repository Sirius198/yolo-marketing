import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import Product, { ProductProps } from '../Product';

export default {
  title: 'Templates / Components / Card',
  component: Product,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof Product>;

export const ProductCard = (props: ProductProps) => <Product {...props} />;
