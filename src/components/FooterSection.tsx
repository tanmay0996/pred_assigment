import { ChevronDown, Info } from 'lucide-react';

interface FooterSectionProps {
  selectedTeam: string;
}

export const FooterSection = ({ selectedTeam }: FooterSectionProps) => {
  return (
    <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-dark-bg border-t border-dark-panel mb-16">
      <button className="flex items-center gap-1.5 sm:gap-2 bg-dark-panel rounded px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 hover:bg-dark-panel-hover transition-colors">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center text-[10px] sm:text-xs">
          ⚽
        </div>
        <span className="text-white text-xs sm:text-sm">{selectedTeam}</span>
        <ChevronDown size={14} className="text-gray-400 sm:w-4 sm:h-4" />
      </button>

      <button className="flex items-center gap-1 sm:gap-1.5 text-white text-xs sm:text-sm hover:text-gray-300 transition-colors">
        <Info size={14} className="sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">View team info</span>
        <span className="sm:hidden">Info</span>
      </button>
    </div>
  );
};
