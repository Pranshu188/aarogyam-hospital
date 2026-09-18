import React, { useState } from 'react';
import { FACILITIES } from '../data/facilities';
import { Facility } from '../types';
import { CheckCircle2, ShieldCheck, X, Eye } from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewFacility, setPreviewFacility] = useState<Facility | null>(null);

  const categories = ['All', 'Critical Care', 'Diagnostics', 'Surgical', 'Patient Comfort', 'Support Services'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            World-Class Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Hospital Facilities & Technology
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            A 350-bed campus engineered for clinical precision, infection prevention, patient comfort, and rapid emergency intervention.
          </p>
        </div>
      </section>

      {/* Main Container */}
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-navy-900 shadow-sm">
                    {fac.category}
                  </div>
                  <button
                    onClick={() => setPreviewFacility(fac)}
                    className="absolute bottom-3 right-3 bg-navy-900/80 hover:bg-navy-900 text-white p-2 rounded-xl backdrop-blur-sm transition-colors"
                    title="View facility specifications"
                    aria-label="View facility specifications"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {fac.keyHighlights.slice(0, 2).map((high, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="truncate">{high}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => setPreviewFacility(fac)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center"
                >
                  View Facility Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Details Modal */}
      {previewFacility && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewFacility(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-64 sm:h-72 w-full relative">
              <img
                src={previewFacility.image}
                alt={previewFacility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-navy-900/80 px-2.5 py-1 rounded-md">
                  {previewFacility.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {previewFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                {previewFacility.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Infrastructure Specifications & Safety Standards
                </h4>
                <div className="space-y-2.5">
                  {previewFacility.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                Aarogyam facilities adhere to NABH hospital infection control norms and international air exchange requirements.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
