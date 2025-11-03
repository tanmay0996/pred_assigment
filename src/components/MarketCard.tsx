interface MarketCardProps {
  logo: string;
  title: string;
  volume: string;
  chance: string;
  priceChange: string;
}

export const MarketCard = ({ logo, title, volume, chance, priceChange }: MarketCardProps) => {
  return (
    <div className="bg-panel-bg rounded-lg p-3 flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl">
          {logo}
        </div>
        <div>
          <h3 className="text-text-primary font-semibold text-base">{title}</h3>
          <p className="text-muted text-xs mt-0.5">{volume}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-text-primary font-semibold text-sm">{chance}</div>
        <div className="text-primary text-xs mt-0.5">{priceChange}</div>
      </div>
    </div>
  );
};
