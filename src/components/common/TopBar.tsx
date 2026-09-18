import React from 'react';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const TopBar: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 border-b border-slate-200/80 text-xs text-slate-600 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left location & timings */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>SG Highway, Bodakdev, Ahmedabad, Gujarat</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>OPD: 8:00 AM – 8:00 PM</span>
          </div>
        </div>

        {/* Right Emergency & Quick Contacts */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="font-medium text-slate-700">24/7 Emergency Care:</span>
            <a
              href="tel:+917945678900"
              className="font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 79 4567 8900
            </a>
          </div>

          <div className="h-3.5 w-px bg-slate-300" />

          <button
            onClick={() => navigate('/emergency')}
            className="text-slate-600 hover:text-navy-900 font-medium transition-colors flex items-center gap-1"
          >
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            Emergency Services
          </button>
        </div>
      </div>
    </div>
  );
};
