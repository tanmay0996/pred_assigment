import { ChevronDown, Info } from 'lucide-react';

interface FooterSectionProps {
  selectedTeam: string;
}

export const FooterSection = ({ selectedTeam }: FooterSectionProps) => {
  return (
    <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-panel-bg border-t border-muted/20 mb-16">
      <button className="flex items-center gap-1.5 sm:gap-2 bg-bg-base rounded px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center text-[10px] sm:text-xs">
          ⚽
        </div>
        <span className="text-text-primary text-xs sm:text-sm">{selectedTeam}</span>
        <ChevronDown size={14} className="text-muted sm:w-4 sm:h-4" />
      </button>

      <button className="flex items-center gap-1 sm:gap-1.5 text-text-primary text-xs sm:text-sm">
        <Info size={14} className="sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">View team info</span>
        <span className="sm:hidden">Info</span>
      </button>
    </div>
  );
};
