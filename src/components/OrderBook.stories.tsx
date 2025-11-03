import type { Meta, StoryObj } from '@storybook/react';
import { OrderBook } from './OrderBook';

const meta = {
  title: 'Components/OrderBook',
  component: OrderBook,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderBook>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOrders = [
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.8¢', shares: 210000 },
  { price: '34.8¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '29.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
];

export const Default: Story = {
  args: {
    orders: sampleOrders,
  },
};

export const Empty: Story = {
  args: {
    orders: [],
  },
};
