import type { Meta, StoryObj } from '@storybook/react';
import { OrderPanel } from './OrderPanel';

const meta = {
  title: 'Components/OrderPanel',
  component: OrderPanel,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    availableBalance: { control: 'number' },
    marketName: { control: 'text' },
  },
} satisfies Meta<typeof OrderPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    availableBalance: 265,
    marketName: 'MANC',
  },
};

export const LowBalance: Story = {
  args: {
    availableBalance: 50,
    marketName: 'MANC',
  },
};

export const HighBalance: Story = {
  args: {
    availableBalance: 10000,
    marketName: 'Arsenal',
  },
};
