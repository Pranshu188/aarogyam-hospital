import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Patient Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Voices of Restored Health & Trust
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            *Representative demonstration patient feedback illustrating Aarogyam's clinical care pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-teal-500/50 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-navy-950">{test.patientName}</div>
                <div className="text-[11px] text-teal-700 font-semibold">{test.treatmentReceived}</div>
                <div className="text-[10px] text-slate-400">Consultant: {test.doctorName} • {test.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
