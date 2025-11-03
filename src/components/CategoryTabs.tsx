import { Clock, Trophy, Award, TrendingUp } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory?: string;
}

export const CategoryTabs = ({ activeCategory = 'winner' }: CategoryTabsProps) => {
  return (
    <div className="flex w-full max-w-[412px] bg-bg-base scrollbar-hide">
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

interface CategoryTabProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  position: 'first' | 'middle' | 'last';
}

const CategoryTab = ({ icon, label, active, position }: CategoryTabProps) => {
  const getRoundedClass = () => {
    if (position === 'first') return 'rounded-l';
    if (position === 'last') return 'rounded-r';
    return '';
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 sm:gap-1.5 flex-1 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${getRoundedClass()} ${
        active
          ? 'bg-white text-black'
          : 'bg-gray-800 text-gray-400'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};