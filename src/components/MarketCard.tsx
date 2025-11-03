interface MarketCardProps {
  logo: string;
  title: string;
  volume: string;
  chance: string;
  priceChange: string;
}

export const MarketCard = ({ logo, title, volume, chance, priceChange }: MarketCardProps) => {
  return (
    <div className="bg-panel-bg rounded-lg p-2 sm:p-2.5 md:p-3 flex items-start justify-between">
      <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-xl sm:text-2xl">
          {logo}
        </div>
        <div>
          <h3 className="text-text-primary font-semibold text-sm sm:text-base">{title}</h3>
          <p className="text-muted text-[10px] sm:text-xs mt-0.5">{volume}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-text-primary font-semibold text-xs sm:text-sm">{chance}</div>
        <div className="text-primary text-[10px] sm:text-xs mt-0.5">{priceChange}</div>
      </div>
    </div>
  );
};
