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
}

interface PositionsPanelProps {
  positions: Position[];
  onClosePosition: (positionId: string, closeType: 'market' | 'limit') => void;
}

export const PositionsPanel = ({ positions, onClosePosition }: PositionsPanelProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('positions');

  return (
    <div className="bg-dark-bg rounded-lg min-h-[240px] border border-dark-panel">
      <div className="flex border-b border-dark-panel">
        <button
          onClick={() => setActiveTab('positions')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'positions'
              ? 'text-white border-b-2 border-primary'
              : 'text-gray-500'
          }`}
        >
          Positions
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'orders'
              ? 'text-white border-b-2 border-primary'
              : 'text-gray-500'
          }`}
        >
          Open orders
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'history'
              ? 'text-white border-b-2 border-primary'
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
        <div className="flex items-center gap-1 text-primary">
          <TrendingUp size={14} />
          <span className="font-semibold text-sm">{position.gain}</span>
          <span className="text-xs">{position.gainPercent}</span>
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

      <div className="flex gap-2">
        <button
          onClick={() => handleClose('market')}
          className="flex-1 py-2 bg-dark-panel text-white text-sm rounded hover:bg-dark-panel-hover transition-colors"
        >
          Market close
        </button>
        <button
          onClick={() => handleClose('limit')}
          className="flex-1 py-2 bg-dark-panel text-white text-sm rounded hover:bg-dark-panel-hover transition-colors"
        >
          Limit close
        </button>
      </div>
    </div>
  );
};
