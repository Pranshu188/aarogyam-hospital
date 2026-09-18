import React from 'react';
import { Phone, Search, Calendar } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const MobileActionBar: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-card">
      <div className="grid grid-cols-3 gap-2">
        {/* Emergency Call */}
        <a
          href="tel:+917945678900"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-red-50 border border-red-200/80 text-red-600 active:bg-red-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-red-600 mb-0.5" />
          <span className="text-[11px] font-bold">24/7 Call</span>
        </a>

        {/* Find Doctor */}
        <button
          onClick={() => navigate('/doctors')}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 active:bg-slate-200 transition-colors"
        >
          <Search className="w-4 h-4 text-slate-700 mb-0.5" />
          <span className="text-[11px] font-semibold">Find Doctor</span>
        </button>

        {/* Book Appointment */}
        <button
          onClick={() => openBookingModal()}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-navy-900 border border-navy-800 text-white active:bg-navy-800 shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 text-teal-400 mb-0.5" />
          <span className="text-[11px] font-bold">Book Visit</span>
        </button>
      </div>
    </div>
  );
};
