import type { Meta, StoryObj } from '@storybook/react';
import { HeaderBar } from './HeaderBar';

const meta = {
  title: 'Components/HeaderBar',
  component: HeaderBar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
