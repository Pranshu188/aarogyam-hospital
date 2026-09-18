import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, X, Calendar } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const TreatmentsPage: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);

  const categories = ['All', 'Cardiac Care', 'Orthopaedics', 'Neurology', 'Gastroenterology', 'Oncology', 'Urology', 'General Surgery', 'Ophthalmology'];

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Clinical Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Treatments & Surgical Procedures
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Explore evidence-based surgical interventions, minimally invasive procedures, and therapeutic solutions offered at Aarogyam Hospital.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                    {treatment.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Stay: {treatment.hospitalStay}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                  {treatment.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {treatment.shortDesc}
                </p>

                {/* Key Benefits snippet */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {treatment.keyBenefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveTreatmentModal(treatment)}
                  className="flex-1 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center"
                >
                  Procedure Details
                </button>
                <button
                  onClick={() => openBookingModal({ specialtyId: treatment.departmentId })}
                  className="flex-1 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold text-center transition-colors shadow-sm"
                >
                  Consult Specialist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procedure Details Modal */}
      {activeTreatmentModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveTreatmentModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close treatment modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                {activeTreatmentModal.category}
              </span>

              <h2 className="text-xl font-bold text-navy-950">
                {activeTreatmentModal.name}
              </h2>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block">Average Hospital Stay</span>
                  <span className="font-bold text-navy-950">{activeTreatmentModal.hospitalStay}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Recovery Expectation</span>
                  <span className="font-bold text-teal-700">{activeTreatmentModal.recoveryTime}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Procedure Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeTreatmentModal.procedureOverview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Clinical Benefits
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeTreatmentModal.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    const deptId = activeTreatmentModal.departmentId;
                    setActiveTreatmentModal(null);
                    openBookingModal({ specialtyId: deptId });
                  }}
                  className="w-full py-3 rounded-xl bg-navy-900 text-white text-xs font-bold shadow-md hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Book Specialist Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
