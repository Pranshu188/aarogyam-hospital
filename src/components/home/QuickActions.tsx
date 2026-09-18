import React from 'react';
import { Calendar, Search, Stethoscope, AlertTriangle, Package, HeartHandshake } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const QuickActions: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();

  const actions = [
    {
      title: 'Book Appointment',
      desc: 'Instant online specialist booking',
      icon: Calendar,
      color: 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white',
      border: 'hover:border-teal-500',
      action: () => openBookingModal(),
    },
    {
      title: 'Find a Doctor',
      desc: '100+ experienced senior specialists',
      icon: Search,
      color: 'bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white',
      border: 'hover:border-blue-500',
      action: () => navigate('/doctors'),
    },
    {
      title: 'Explore Specialties',
      desc: '25+ Centres of Clinical Excellence',
      icon: Stethoscope,
      color: 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      border: 'hover:border-indigo-500',
      action: () => navigate('/specialties'),
    },
    {
      title: 'Emergency Care',
      desc: '24/7 Trauma, stroke & cardiac unit',
      icon: AlertTriangle,
      color: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      border: 'hover:border-red-500',
      action: () => navigate('/emergency'),
    },
    {
      title: 'Health Packages',
      desc: 'Comprehensive preventive checkups',
      icon: Package,
      color: 'bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
      border: 'hover:border-amber-500',
      action: () => navigate('/packages'),
    },
    {
      title: 'Patient Services',
      desc: 'Insurance, TPA & patient guide',
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
      border: 'hover:border-emerald-500',
      action: () => navigate('/patient-services'),
    },
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {actions.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={item.action}
                className={`group p-4 rounded-2xl border border-slate-200/80 bg-white hover:shadow-card transition-all duration-300 flex flex-col items-center text-center text-left sm:text-center ${item.border}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 mb-3 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-navy-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
