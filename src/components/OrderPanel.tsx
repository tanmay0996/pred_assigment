import { useState } from 'react';
import { ChevronDown, Plus, Minus, Info } from 'lucide-react';

type OrderType = 'long' | 'short';
type PriceType = 'market' | 'limit';
type AssetType = 'usdc' | 'shares';

interface OrderPanelProps {
  availableBalance: number;
  marketName: string;
}

export const OrderPanel = ({ availableBalance, marketName }: OrderPanelProps) => {
  const [orderType, setOrderType] = useState<OrderType>('long');
  const [priceType, setPriceType] = useState<PriceType>('market');
  const [assetType, setAssetType] = useState<AssetType>('usdc');
  const [amount, setAmount] = useState<string>('0.00');
  const [limitPrice, setLimitPrice] = useState<string>('');
  const [reduceOnly, setReduceOnly] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showAssetDropdown, setShowAssetDropdown] = useState(false);

  const handlePercentClick = (percent: number) => {
    const calculatedAmount = (availableBalance * percent / 100).toFixed(2);
    setAmount(calculatedAmount);
  };

  const handleAmountChange = (value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const toWinAmount = amount && parseFloat(amount) > 0
    ? (parseFloat(amount) * 0.3).toFixed(0)
    : '0';

  return (
    <div className="bg-panel-bg rounded-lg p-4 h-full flex flex-col overflow-y-auto">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setOrderType('long')}
          className={`flex-1 py-2 rounded font-medium text-sm transition-colors ${
            orderType === 'long'
              ? 'bg-primary text-black'
              : 'bg-bg-base text-muted'
          }`}
        >
          Long/Buy
        </button>
        <button
          onClick={() => setOrderType('short')}
          className={`flex-1 py-2 rounded font-medium text-sm transition-colors ${
            orderType === 'short'
              ? 'bg-danger text-white'
              : 'bg-bg-base text-muted'
          }`}
        >
          Short/Sell
        </button>
      </div>

      <div className="space-y-3">
        <div className="relative">
          <button
            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
            className="w-full flex items-center justify-between bg-bg-base px-3 py-2.5 rounded text-sm"
          >
            <span className="text-text-primary">
              {priceType === 'market' ? 'Market Price' : 'Limit Price'}
            </span>
            <ChevronDown size={16} className="text-muted" />
          </button>
          {showPriceDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-panel-bg border border-muted rounded z-10">
              <button
                onClick={() => {
                  setPriceType('market');
                  setShowPriceDropdown(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-text-primary hover:bg-bg-base"
              >
                Market Price
              </button>
              <button
                onClick={() => {
                  setPriceType('limit');
                  setShowPriceDropdown(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-text-primary hover:bg-bg-base"
              >
                Limit Price
              </button>
            </div>
          )}
        </div>

        {priceType === 'limit' && (
          <div>
            <input
              type="text"
              value={limitPrice}
              onChange={(e) => setLimitPrice(e.target.value)}
              placeholder="Enter limit price"
              className="w-full bg-bg-base px-3 py-2.5 rounded text-sm text-text-primary placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setShowAssetDropdown(!showAssetDropdown)}
            className="w-full flex items-center justify-between bg-bg-base px-3 py-2.5 rounded text-sm"
          >
            <span className="text-text-primary">{assetType.toUpperCase()}</span>
            <ChevronDown size={16} className="text-muted" />
          </button>
          {showAssetDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-panel-bg border border-muted rounded z-10">
              <button
                onClick={() => {
                  setAssetType('usdc');
                  setShowAssetDropdown(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-text-primary hover:bg-bg-base"
              >
                USDC
              </button>
              <button
                onClick={() => {
                  setAssetType('shares');
                  setShowAssetDropdown(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-text-primary hover:bg-bg-base"
              >
                Shares
              </button>
            </div>
          )}
        </div>

        <div className="text-muted text-xs">${availableBalance.toFixed(2)} Available</div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const currentAmount = parseFloat(amount) || 0;
              if (currentAmount > 0) {
                setAmount((currentAmount - 1).toFixed(2));
              }
            }}
            className="w-8 h-8 flex items-center justify-center bg-bg-base rounded text-muted hover:text-text-primary"
          >
            <Minus size={16} />
          </button>
          <input
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="flex-1 bg-bg-base px-3 py-2 rounded text-sm text-text-primary text-center focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            onClick={() => {
              const currentAmount = parseFloat(amount) || 0;
              setAmount((currentAmount + 1).toFixed(2));
            }}
            className="w-8 h-8 flex items-center justify-center bg-bg-base rounded text-muted hover:text-text-primary"
          >
            <Plus size={16} />
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handlePercentClick(25)}
            className="flex-1 py-1.5 bg-bg-base rounded text-xs text-muted hover:text-text-primary"
          >
            25%
          </button>
          <button
            onClick={() => handlePercentClick(50)}
            className="flex-1 py-1.5 bg-bg-base rounded text-xs text-muted hover:text-text-primary"
          >
            50%
          </button>
          <button
            onClick={() => handlePercentClick(100)}
            className="flex-1 py-1.5 bg-bg-base rounded text-xs text-muted hover:text-text-primary"
          >
            100%
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="reduce-only"
            checked={reduceOnly}
            onChange={(e) => setReduceOnly(e.target.checked)}
            className="w-4 h-4 bg-bg-base border border-muted rounded"
          />
          <label htmlFor="reduce-only" className="text-text-primary text-sm">
            Reduce only
          </label>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-text-primary flex items-center gap-1">
            To Win <Info size={14} className="text-muted" />
          </span>
          <span className="text-text-primary">${toWinAmount}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Avg. price</span>
          <span className="text-text-primary">30¢</span>
        </div>

        <button
          disabled={!amount || parseFloat(amount) === 0}
          className={`w-full py-3 rounded font-semibold text-sm transition-opacity ${
            orderType === 'long'
              ? 'bg-primary text-black'
              : 'bg-danger text-white'
          } ${(!amount || parseFloat(amount) === 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {orderType === 'long' ? 'Long' : 'Short'} {marketName}
        </button>
      </div>
    </div>
  );
};
