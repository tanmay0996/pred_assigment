import { TrendingUp, BarChart3, DollarSign, MoreHorizontal } from 'lucide-react';

interface NavigationBarProps {
  activeTab?: string;
}

export const NavigationBar = ({ activeTab = 'trade' }: NavigationBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-panel-bg border-t border-muted/20">
      <div className="flex items-center justify-around py-2">
        <NavButton icon={<TrendingUp size={20} />} label="Markets" active={false} />
        <NavButton icon={<BarChart3 size={20} />} label="Trade" active={activeTab === 'trade'} />
        <NavButton icon={<DollarSign size={20} />} label="$0.00" active={false} />
        <NavButton icon={<MoreHorizontal size={20} />} label="More" active={false} />
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
    <button className="flex flex-col items-center gap-1 py-1">
      <div className={active ? 'text-primary' : 'text-muted'}>
        {icon}
      </div>
      <span className={`text-xs ${active ? 'text-primary' : 'text-muted'}`}>
        {label}
      </span>
    </button>
  );
};
