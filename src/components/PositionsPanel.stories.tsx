import type { Meta, StoryObj } from '@storybook/react';
import { PositionsPanel, Position } from './PositionsPanel';
import { useState } from 'react';

const meta = {
  title: 'Components/PositionsPanel',
  component: PositionsPanel,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PositionsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const samplePositions: Position[] = [
  {
    id: '1',
    outcome: 'Arsenal',
    type: 'Long',
    gain: '+$200',
    gainPercent: '12.5%',
    avgPrice: '53.5¢',
    markPrice: '53.5¢',
    shares: 3200,
    currentValue: '$12,200',
  },
  {
    id: '2',
    outcome: 'Manchester City',
    type: 'Short',
    gain: '+$150',
    gainPercent: '8.3%',
    avgPrice: '42.0¢',
    markPrice: '38.5¢',
    shares: 2500,
    currentValue: '$9,625',
  },
];

export const WithPositions: Story = {
  args: {
    positions: samplePositions,
    onClosePosition: (id: string) => console.log('Closing position', id),
  },
};

export const Empty: Story = {
  args: {
    positions: [],
    onClosePosition: (id: string) => console.log('Closing position', id),
  },
};

export const Interactive = () => {
  const [positions, setPositions] = useState<Position[]>(samplePositions);

  const handleClose = (positionId: string) => {
    setPositions((prev) => prev.filter((p) => p.id !== positionId));
  };

  return <PositionsPanel positions={positions} onClosePosition={handleClose} />;
};

Interactive.parameters = {
  docs: {
    description: {
      story: 'Click "Market close" or "Limit close" to remove a position from the list.',
    },
  },
};
