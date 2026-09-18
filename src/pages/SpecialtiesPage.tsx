import React, { useState } from 'react';
import {
  HeartPulse,
  Bone,
  Brain,
  Baby,
  Activity,
  ShieldAlert,
  Smile,
  Droplet,
  Crosshair,
  Wind,
  Scissors,
  Stethoscope,
  Sparkles,
  Eye,
  Ambulance,
  Search,
  ArrowRight,
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { useRouter } from '../router/RouterContext';

export const SpecialtiesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [search, setSearch] = useState('');

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-teal-600 group-hover:text-white transition-colors" };
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Bone': return <Bone {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'Crosshair': return <Crosshair {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Ambulance': return <Ambulance {...props} />;
      default: return <Stethoscope {...props} />;
    }
  };

  const filteredDepts = DEPARTMENTS.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.tagline.toLowerCase().includes(search.toLowerCase()) ||
    d.shortDesc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Centres of Clinical Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Medical Departments & Specialties
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Aarogyam provides comprehensive tertiary healthcare across 16 specialized medical institutes and surgical units in Ahmedabad, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Search */}
        <div className="max-w-md">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search medical department or specialty..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 bg-white shadow-soft"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* 16 Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(`/specialties/${dept.id}`)}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm">
                  {getIcon(dept.iconName)}
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors line-clamp-1">
                  {dept.name}
                </h3>

                <p className="text-[11px] font-semibold text-teal-700 mt-0.5 line-clamp-1">
                  {dept.tagline}
                </p>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                  {dept.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-800">
                <span>View Department</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
