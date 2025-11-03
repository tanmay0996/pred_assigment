import { TrendingUp, BarChart3, DollarSign, MoreHorizontal } from 'lucide-react';

interface NavigationBarProps {
  activeTab?: string;
}

export const NavigationBar = ({ activeTab = 'trade' }: NavigationBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-bg border-t border-dark-panel">
      <div className="flex items-center justify-around py-5 sm:py-2">
        <NavButton icon={<TrendingUp size={18} />} label="Markets" active={false} />
        <NavButton icon={<BarChart3 size={18} />} label="Trade" active={activeTab === 'trade'} />
        <NavButton icon={<DollarSign size={18} />} label="$0.00" active={false} />
        <NavButton icon={<MoreHorizontal size={18} />} label="More" active={false} />
      </div>
    </div>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavButton = ({ icon, label, active }: NavButtonProps) => {
  return (
    <button className="flex flex-col items-center gap-0.5 sm:gap-1 py-0.5 sm:py-1">
      <div className={active ? 'text-primary' : 'text-gray-500'}>
        {icon}
      </div>
      <span className={`text-[10px] sm:text-xs ${active ? 'text-primary' : 'text-gray-500'}`}>
        {label}
      </span>
    </button>
  );
};
