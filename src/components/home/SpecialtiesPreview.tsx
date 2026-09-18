import React from 'react';
import {
  HeartPulse,
  Bone,
  Brain,
  Baby,
  Activity,
  ShieldAlert,
  Smile,
  Droplet,
  ArrowRight,
  Stethoscope,
} from 'lucide-react';
import { DEPARTMENTS } from '../../data/departments';
import { useRouter } from '../../router/RouterContext';

export const SpecialtiesPreview: React.FC = () => {
  const { navigate } = useRouter();

  // 8 core flagship specialties for home preview
  const previewDepartments = DEPARTMENTS.slice(0, 8);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Bone':
        return <Bone className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-teal-600 group-hover:text-white" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-600 group-hover:text-white" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Centres of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
              Specialized Medical Departments
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mt-2">
              Combining world-trained senior clinicians, specialized intensive care, and cutting-edge medical technology.
            </p>
          </div>

          <button
            onClick={() => navigate('/specialties')}
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>View All 16 Specialties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewDepartments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(`/specialties/${dept.id}`)}
              className="group p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-500/50 hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm">
                  {getIcon(dept.iconName)}
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors line-clamp-1">
                  {dept.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                  {dept.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-800">
                <span>Explore Centre</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for all specialties */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/specialties')}
            className="px-6 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy-950 transition-colors"
          >
            Browse All Clinical Disciplines & Surgical Specialities
          </button>
        </div>
      </div>
    </section>
  );
};
