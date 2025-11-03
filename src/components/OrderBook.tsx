interface OrderBookEntry {
  price: string;
  shares: number;
}

interface OrderBookProps {
  orders: OrderBookEntry[];
}

export const OrderBook = ({ orders }: OrderBookProps) => {
  return (
    <div className="bg-bg-base h-full flex flex-col border-l-2 border-[#1B2A30] py-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-muted mb-2 pb-2 border-b-2 border-[#1B2A30] px-2 sm:px-3 md:px-4">
        <div>Price</div>
        <div className="text-right">Shares</div>
      </div>
      <div className="space-y-1 sm:space-y-1.5 overflow-y-auto flex-1">
        {orders.map((order, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm px-2 sm:px-3 md:px-4">
            <div className="text-highlight font-medium">{order.price}</div>
            <div className="text-text-primary text-right">{order.shares.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};