import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const DemoDisclaimer: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Demo Disclaimer" className="bg-navy-900 text-slate-300 text-xs py-1.5 px-4 border-b border-navy-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <p className="truncate text-[11px] md:text-xs">
            <span className="font-semibold text-teal-300">Demonstration Portfolio Website:</span> Hospital name, doctors, statistics, contact details, testimonials, and pricing shown are fictional and created for demonstration purposes.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-0.5 rounded transition-colors shrink-0"
          title="Dismiss notification"
          aria-label="Dismiss demo disclaimer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
