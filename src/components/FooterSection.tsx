import { ChevronDown, Info } from 'lucide-react';

interface FooterSectionProps {
  selectedTeam: string;
}

export const FooterSection = ({ selectedTeam }: FooterSectionProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-panel-bg border-t border-muted/20 mb-16">
      <button className="flex items-center gap-2 bg-bg-base rounded px-3 py-2">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs">
          ⚽
        </div>
        <span className="text-text-primary text-sm">{selectedTeam}</span>
        <ChevronDown size={16} className="text-muted" />
      </button>

      <button className="flex items-center gap-1.5 text-text-primary text-sm">
        <Info size={16} />
        <span>View team info</span>
      </button>
    </div>
  );
};
