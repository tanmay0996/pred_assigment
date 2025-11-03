import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

type TabType = 'positions' | 'orders' | 'history';

export interface Position {
  id: string;
  outcome: string;
  type: 'Long' | 'Short';
  gain: string;
  gainPercent: string;
  avgPrice: string;
  markPrice: string;
  shares: number;
  currentValue: string;
  isPositive?: boolean;
}

interface PositionsPanelProps {
  positions: Position[];
  onClosePosition: (positionId: string, closeType: 'market' | 'limit') => void;
}

export const PositionsPanel = ({ positions, onClosePosition }: PositionsPanelProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('positions');

  return (
    <div className="bg-dark-bg min-h-[240px] border border-dark-panel w-full max-w-[412px]">
      <div className="flex border-b" style={{ borderColor: '#1B2A30' }}>
        <button
          onClick={() => setActiveTab('positions')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'positions'
              ? 'text-white'
              : 'text-gray-500'
          }`}
        >
          Positions
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'orders'
              ? 'text-white'
              : 'text-gray-500'
          }`}
        >
          Open orders
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'history'
              ? 'text-white'
              : 'text-gray-500'
          }`}
        >
          Trade History
        </button>
      </div>

      <div className="p-4 bg-dark-bg">
        {activeTab === 'positions' && (
          <div className="space-y-4">
            {positions.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                No open positions
              </div>
            ) : (
              positions.map((position) => (
                <PositionItem
                  key={position.id}
                  position={position}
                  onClose={onClosePosition}
                />
              ))
            )}
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="text-center py-8 text-gray-500 text-sm">
            No open orders
          </div>
        )}

        {activeTab === 'history' && (
          <div className="text-center py-8 text-gray-500 text-sm">
            No trade history
          </div>
        )}
      </div>
    </div>
  );
};

interface PositionItemProps {
  position: Position;
  onClose: (positionId: string, closeType: 'market' | 'limit') => void;
}

const PositionItem = ({ position, onClose }: PositionItemProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const isPositive = position.isPositive !== false;

  const handleClose = (closeType: 'market' | 'limit') => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(position.id, closeType);
    }, 300);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isClosing ? 'opacity-0 translate-x-4' : 'opacity-100'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-white font-medium text-sm">{position.outcome}</h4>
          <p className="text-gray-400 text-xs mt-0.5">
            Winner · {position.type}
          </p>
        </div>
        <div className="text-right">
          <div className={`font-semibold text-sm ${isPositive ? 'text-primary' : 'text-danger'}`}>
            {position.gain}
          </div>
          <div className={`flex items-center justify-end gap-1 text-xs ${isPositive ? 'text-primary' : 'text-danger'}`}>
            <TrendingUp size={12} />
            <span>{position.gainPercent}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-2 text-xs mb-3">
        <div className="flex justify-between">
          <span className="text-gray-400">Avg. price</span>
          <span className="text-white">{position.avgPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Mark price</span>
          <span className="text-white">{position.markPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Shares</span>
          <span className="text-white">{position.shares.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Current value</span>
          <span className="text-white">{position.currentValue}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <button
          onClick={() => handleClose('market')}
          className="py-1.5 bg-dark-panel text-white text-xs rounded hover:bg-dark-panel-hover transition-colors"
        >
          Market close
        </button>
        <button
          onClick={() => handleClose('limit')}
          className="py-1.5 bg-dark-panel text-white text-xs rounded hover:bg-dark-panel-hover transition-colors"
        >
          Limit close
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 py-8">
        <button className="py-1.5 px-2 bg-dark-panel text-white text-xs rounded hover:bg-dark-panel-hover transition-colors flex items-center gap-1.5">
          <div className="w-4 h-4 bg-white rounded flex items-center justify-center flex-shrink-0">
            <span className="text-xs">⚽</span>
          </div>
          <span className="flex-1 text-left">Manchester city</span>
          <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </button>
        <button className="py-1.5 px-2 bg-dark-panel text-white text-xs rounded hover:bg-dark-panel-hover transition-colors flex items-center gap-1.5">
          <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="flex-1 text-left">View team info</span>
        </button>
      </div>
    </div>
  );
};

// Demo with sample data
export default function App() {
  const [positions, setPositions] = useState<Position[]>([
    {
      id: '1',
      outcome: 'Manchester City wins',
      type: 'Long',
      gain: '+$125.50',
      gainPercent: '+15.2%',
      avgPrice: '$0.65',
      markPrice: '$0.75',
      shares: 1000,
      currentValue: '$750.00',
      isPositive: true
    }
  ]);

  const handleClosePosition = (positionId: string, closeType: 'market' | 'limit') => {
    console.log(`Closing position ${positionId} with ${closeType} order`);
    setPositions(positions.filter(p => p.id !== positionId));
  };

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <PositionsPanel positions={positions} onClosePosition={handleClosePosition} />
    </div>
  );
}