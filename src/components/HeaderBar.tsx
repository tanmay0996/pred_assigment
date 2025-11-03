import { ChevronDown, User } from 'lucide-react';

export const HeaderBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-panel-bg">
      <div className="flex items-center gap-3">
        <button className="text-text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <button className="flex items-center gap-2 bg-bg-base rounded px-3 py-1.5">
          <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-xs font-bold text-black">
            ⚽
          </div>
          <span className="text-text-primary text-sm font-medium">EPL 2025</span>
          <ChevronDown size={16} className="text-muted" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative px-3 py-1.5 rounded bg-bg-base overflow-hidden group">
          <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-border-flow"
               style={{
                 animation: 'borderFlow 3s linear infinite',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 padding: '1px'
               }}></div>
          <div className="relative flex items-center gap-1.5">
            <span className="text-blue-400 text-xs">🎁</span>
            <span className="text-text-primary text-xs font-medium">Earn Rewards</span>
          </div>
        </button>

        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <User size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};
