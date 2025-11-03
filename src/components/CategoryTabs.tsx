import { Clock, Trophy, Award, TrendingUp } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory?: string;
}

export const CategoryTabs = ({ activeCategory = 'winner' }: CategoryTabsProps) => {
  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-bg-base">
      <CategoryTab
        icon={<Clock size={14} />}
        label="Live & Upcoming"
        active={false}
      />
      <CategoryTab
        icon={<Trophy size={14} />}
        label="Winner"
        active={activeCategory === 'winner'}
      />
      <CategoryTab
        icon={<Award size={14} />}
        label="MVP"
        active={false}
      />
      <CategoryTab
        icon={<TrendingUp size={14} />}
        label="Top 3 te"
        active={false}
      />
    </div>
  );
};

interface CategoryTabProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const CategoryTab = ({ icon, label, active }: CategoryTabProps) => {
  return (
    <button
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
        active
          ? 'bg-text-primary text-black'
          : 'bg-panel-bg text-muted'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};
