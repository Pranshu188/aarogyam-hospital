import React from 'react';
import { PhoneCall, Navigation, AlertCircle, HeartCrack, Activity, Ambulance, ShieldAlert } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const EmergencyBanner: React.FC = () => {
  const { navigate } = useRouter();

  const emergencyServices = [
    { title: 'Trauma & Accident Care', desc: 'Resuscitation bays & trauma surgery', icon: AlertCircle },
    { title: 'Cardiac Emergencies', desc: 'Door-to-Balloon angioplasty < 48 min', icon: HeartCrack },
    { title: 'Acute Stroke Response', desc: 'Golden hour thrombolysis & clot retrieval', icon: Activity },
    { title: 'Mobile ACLS Ambulances', desc: 'GPS telemetry fleet with paramedics', icon: Ambulance },
  ];

  return (
    <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Restrained subtle crimson highlight on border & gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-900/90 border border-red-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info & Phone */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>24/7 Level 1 Emergency & Trauma Care</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Need Urgent Medical Attention?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Our Emergency & Trauma Care team is available 24 hours a day, 7 days a week in Ahmedabad. Every critical emergency is triaged immediately by experienced emergency physicians.
              </p>

              {/* Helpline Highlight */}
              <div className="pt-2">
                <div className="text-xs text-red-300 font-semibold uppercase tracking-wider">
                  Direct Emergency Helpline (Toll-Free):
                </div>
                <a
                  href="tel:+917945678900"
                  className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-black text-white hover:text-red-400 transition-colors mt-1"
                >
                  <PhoneCall className="w-8 h-8 text-red-500 animate-bounce" />
                  <span>+91 79 4567 8900</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="tel:+917945678900"
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Emergency Now</span>
                </a>

                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Get Directions (Bodakdev)</span>
                </button>

                <button
                  onClick={() => navigate('/emergency')}
                  className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-medium transition-all"
                >
                  Emergency Services Guide
                </button>
              </div>
            </div>

            {/* Right: Key Emergency Services Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800/80 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{service.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-snug">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
