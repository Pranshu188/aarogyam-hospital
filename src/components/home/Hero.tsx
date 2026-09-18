import React, { useState } from 'react';
import { Calendar, Search, ShieldCheck, HeartPulse, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { DEPARTMENTS } from '../../data/departments';

export const Hero: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();
  const [quickSpecialty, setQuickSpecialty] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSpecialty) {
      navigate(`/specialties/${quickSpecialty}`);
    } else {
      navigate('/doctors');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Subtle background ambient patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0a2540_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Compassionate Care • Advanced Medicine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Advanced Healthcare.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-teal-700 to-teal-600">
                Closer to Home.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Aarogyam Multispeciality Hospital brings together experienced specialists, cutting-edge surgical robotics, and compassionate patient-first care under one roof in Ahmedabad, Gujarat.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => navigate('/doctors')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-950 font-semibold text-sm border border-slate-300/90 hover:border-slate-400 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Find a Doctor</span>
              </button>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-navy-950">25+</div>
                <div className="text-xs font-medium text-slate-500">Medical Specialties</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-navy-950">100+</div>
                <div className="text-xs font-medium text-slate-500">Specialist Doctors</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-red-600 flex items-center gap-1">
                  <span>24/7</span>
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                </div>
                <div className="text-xs font-medium text-slate-500">Emergency & Trauma</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-teal-700">3T MRI</div>
                <div className="text-xs font-medium text-slate-500">Advanced Imaging</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Search Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=900"
                  alt="Senior Indian Specialist Doctor at Aarogyam Hospital Ahmedabad"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                {/* Overlay Badge at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-950">Centre of Clinical Excellence</div>
                      <p className="text-[11px] text-slate-500">Over 50,000+ happy patient journeys guided</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quick Search Card */}
              <div className="hidden sm:block absolute -top-4 -left-6 bg-white p-4 rounded-2xl shadow-dropdown border border-slate-200/80 max-w-xs">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-navy-950">
                  <Search className="w-3.5 h-3.5 text-teal-600" />
                  <span>Instant Department Search</span>
                </div>
                <form onSubmit={handleQuickSearch} className="flex gap-2">
                  <select
                    value={quickSpecialty}
                    onChange={(e) => setQuickSpecialty(e.target.value)}
                    className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-500 text-slate-700 bg-slate-50"
                  >
                    <option value="">Select Specialty</option>
                    {DEPARTMENTS.slice(0, 8).map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    aria-label="Go to department details"
                    className="p-1.5 rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Floating 24/7 Tag */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 bg-red-600 text-white p-3 rounded-2xl shadow-lg items-center gap-2 text-xs font-bold">
                <Clock className="w-4 h-4 text-red-200" />
                <span>24/7 Emergency Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
