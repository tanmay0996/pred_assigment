import type { Meta, StoryObj } from '@storybook/react';
import { MarketCard } from './MarketCard';

const meta = {
  title: 'Components/MarketCard',
  component: MarketCard,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarketCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: '⚽',
    title: 'MANC',
    volume: '1,398,829M Vol.',
    chance: '30% chance',
    priceChange: 'Up $130',
  },
};

export const Arsenal: Story = {
  args: {
    logo: '⚽',
    title: 'Arsenal',
    volume: '2,150,000M Vol.',
    chance: '45% chance',
    priceChange: 'Up $250',
  },
};

export const Liverpool: Story = {
  args: {
    logo: '⚽',
    title: 'Liverpool',
    volume: '980,500M Vol.',
    chance: '22% chance',
    priceChange: 'Down $50',
  },
};
