import { Clock, Trophy, Award, TrendingUp } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory?: string;
}

export const CategoryTabs = ({ activeCategory = 'winner' }: CategoryTabsProps) => {
  return (
    <div className="flex w-full max-w-[412px] bg-gray-900 scrollbar-hide">
      <CategoryTab
        icon={<Clock size={14} />}
        label="Live & Upcoming"
        active={false}
        position="first"
      />
      <CategoryTab
        icon={<Trophy size={14} />}
        label="Winner"
        active={activeCategory === 'winner'}
        position="middle"
      />
      <CategoryTab
        icon={<Award size={14} />}
        label="MVP"
        active={false}
        position="middle"
      />
      <CategoryTab
        icon={<TrendingUp size={14} />}
        label="Top 3 te"
        active={false}
        position="last"
      />
    </div>
  );
};

interface MarketCardProps {
  logo: string;
  title: string;
  volume: string;
  chance: string;
  priceChange: string;
}

export const MarketCard = ({ logo, title, volume, chance, priceChange }: MarketCardProps) => {
  return (
    <div className="bg-panel-bg w-full max-w-[412px]">
      <div className="flex items-start justify-between px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white flex items-center justify-center text-xl sm:text-2xl">
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
    </div>
  );
};