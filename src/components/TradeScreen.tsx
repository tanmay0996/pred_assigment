import { useState } from 'react';
import { HeaderBar } from './HeaderBar';
import { CategoryTabs } from './CategoryTabs';
import { MarketCard } from './MarketCard';
import { OrderPanel } from './OrderPanel';
import { OrderBook } from './OrderBook';
import { PositionsPanel, Position } from './PositionsPanel';
import { FooterSection } from './FooterSection';
import { NavigationBar } from './NavigationBar';
import { MoreVertical } from 'lucide-react';

const initialPositions: Position[] = [
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
];

const orderBookData = [
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.8¢', shares: 210000 },
  { price: '34.8¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '29.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
  { price: '34.9¢', shares: 210000 },
];

export const TradeScreen = () => {
  const [positions, setPositions] = useState<Position[]>(initialPositions);

  const handleClosePosition = (positionId: string) => {
    setPositions((prev) => prev.filter((p) => p.id !== positionId));
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary pb-20">
      <HeaderBar />
      <CategoryTabs />

      <div className="px-4 py-3">
        <MarketCard
          logo="⚽"
          title="MANC"
          volume="1,398,829M Vol."
          chance="30% chance"
          priceChange="Up $130"
        />
      </div>

      <div className="px-4">
        <div className="flex items-stretch w-full max-w-[412px] mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
          <div className="w-1/2 pr-2">
            <OrderPanel availableBalance={265} marketName="MANC" />
          </div>
          <div className="w-1/2 pl-2">
            <OrderBook orders={orderBookData} />
          </div>
        </div>
      </div>

      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-text-primary text-sm font-medium">EPL</span>
        <button className="text-muted">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="px-4">
        <PositionsPanel positions={positions} onClosePosition={handleClosePosition} />
      </div>

      <FooterSection selectedTeam="Manchester city" />
      <NavigationBar activeTab="trade" />
    </div>
  );
};
