import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', showSubtitle = true }) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Abstract Medical Cross + Vital Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br ${isLight ? 'from-teal-400 to-teal-600' : 'from-navy-900 to-navy-800'} text-white shadow-md ${iconSizes[size]}`}>
        {/* Cross icon structure */}
        <div className="w-5 h-5 relative flex items-center justify-center">
          <span className="absolute w-1.5 h-full bg-teal-400 rounded-full" />
          <span className="absolute h-1.5 w-full bg-teal-400 rounded-full" />
          <span className="absolute w-2 h-2 rounded-full bg-white ring-2 ring-teal-500 shadow-sm" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight font-sans ${titleSizes[size]} ${isLight ? 'text-white' : 'text-navy-950'}`}>
            AAROGYAM
          </span>
          <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
            Hospital
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] md:text-[11px] font-medium tracking-wider uppercase ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
            Multispeciality Hospital • Ahmedabad
          </span>
        )}
      </div>
    </div>
  );
};
