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
    <div className="bg-panel-bg rounded-lg">
      <div className="flex border-b border-muted/20">
        <button
          onClick={() => setActiveTab('positions')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'positions'
              ? 'text-text-primary border-b-2 border-primary'
              : 'text-muted'
          }`}
        >
          Positions
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'orders'
              ? 'text-text-primary border-b-2 border-primary'
              : 'text-muted'
          }`}
        >
          Open orders
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'history'
              ? 'text-text-primary border-b-2 border-primary'
              : 'text-muted'
          }`}
        >
          Trade History
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'positions' && (
          <div className="space-y-4">
            {positions.length === 0 ? (
              <div className="text-center py-8 text-muted text-sm">
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
          <div className="text-center py-8 text-muted text-sm">
            No open orders
          </div>
        )}

        {activeTab === 'history' && (
          <div className="text-center py-8 text-muted text-sm">
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
          <h4 className="text-text-primary font-medium text-sm">{position.outcome}</h4>
          <p className="text-muted text-xs mt-0.5">
            Winner · {position.type}
          </p>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <TrendingUp size={14} />
          <span className="font-semibold text-sm">{position.gain}</span>
          <span className="text-xs">{position.gainPercent}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mb-3">
        <div className="flex justify-between">
          <span className="text-muted">Avg. price</span>
          <span className="text-text-primary">{position.avgPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Mark price</span>
          <span className="text-text-primary">{position.markPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Shares</span>
          <span className="text-text-primary">{position.shares.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Current value</span>
          <span className="text-text-primary">{position.currentValue}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleClose('market')}
          className="flex-1 py-2 bg-bg-base text-text-primary text-sm rounded hover:bg-muted/20 transition-colors"
        >
          Market close
        </button>
        <button
          onClick={() => handleClose('limit')}
          className="flex-1 py-2 bg-bg-base text-text-primary text-sm rounded hover:bg-muted/20 transition-colors"
        >
          Limit close
        </button>
      </div>
    </div>
  );
};
