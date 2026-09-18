import React from 'react';
import { ChevronLeft, Calendar, ArrowRight, ShieldCheck, Cpu, CheckCircle2, HelpCircle } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS } from '../data/doctors';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { useRouter } from '../router/RouterContext';

export const SpecialtyDetailPage: React.FC = () => {
  const { route, navigate, openBookingModal } = useRouter();
  const specialtyId = route.params.specialtyId || 'cardiology';

  const department = DEPARTMENTS.find((d) => d.id === specialtyId) || DEPARTMENTS[0];

  // Doctors belonging to this department
  const deptDoctors = DOCTORS.filter((doc) => doc.departmentId === department.id);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Banner with Image and Overview */}
      <section className="relative bg-navy-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={department.image}
            alt={department.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <button
            onClick={() => navigate('/specialties')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>All Specialties</span>
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold uppercase tracking-wider">
            Centre of Clinical Excellence
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {department.name}
          </h1>

          <p className="text-base text-teal-300 font-medium max-w-2xl">
            {department.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {department.fullDesc}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBookingModal({ specialtyId: department.id })}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment in {department.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {department.stats.map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-2xl font-black text-navy-950">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Procedures & Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Procedures */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <span>Key Procedures & Interventions</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {department.keyProcedures.map((proc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                  <span>{proc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cutting-Edge Technology */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-teal-600" />
              <span>Advanced Medical Technology</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {department.keyTechnologies.map((tech, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mt-2 shrink-0" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conditions Treated */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
          <h2 className="text-lg font-bold text-navy-950">
            Conditions Treated in {department.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {department.conditionsTreated.map((cond, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200"
              >
                {cond}
              </span>
            ))}
          </div>
        </div>

        {/* Faculty Doctors in this Department */}
        {deptDoctors.length > 0 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                Consultant Faculty
              </span>
              <h2 className="text-2xl font-bold text-navy-950 mt-1">
                Specialists in {department.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deptDoctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          </div>
        )}

        {/* Department Specific FAQs */}
        {department.faqs.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
            <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <span>Department FAQs</span>
            </h2>
            <div className="space-y-3">
              {department.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <h4 className="text-xs font-bold text-navy-950">{faq.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
