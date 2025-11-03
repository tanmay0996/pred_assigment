import type { Meta, StoryObj } from '@storybook/react';
import { TradeScreen } from './TradeScreen';

const meta = {
  title: 'Screens/TradeScreen',
  component: TradeScreen,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TradeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
