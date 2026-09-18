import React from 'react';
import { CheckCircle2, ArrowRight, Building2, Users2, Stethoscope, HeartHandshake, ShieldAlert } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const AboutPreview: React.FC = () => {
  const { navigate } = useRouter();

  const pillars = [
    {
      title: 'Modern Infrastructure',
      desc: '350+ beds, 12 Class 100 modular OTs, and 85 specialized critical care beds.',
      icon: Building2,
    },
    {
      title: 'Multidisciplinary Medical Teams',
      desc: 'Collaborative doctor panels for complex multi-organ and oncology care.',
      icon: Users2,
    },
    {
      title: 'Advanced Diagnostic Services',
      desc: '3.0 Tesla Silent MRI, 128-slice CT, and automated 24/7 NABL-standard pathology.',
      icon: Stethoscope,
    },
    {
      title: 'Patient-Centered Care',
      desc: 'Empathetic bedside nursing, transparent billing, and dedicated patient navigators.',
      icon: HeartHandshake,
    },
    {
      title: '24/7 Emergency Support',
      desc: 'Rapid door-to-balloon heart attack care and golden-hour stroke interventions.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                    alt="Modern patient room at Aarogyam Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-teal-600 text-white shadow-md">
                  <div className="text-2xl font-black">350+</div>
                  <div className="text-xs font-semibold text-teal-100">Bed Multispeciality Facility</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-navy-900 text-white shadow-md">
                  <div className="text-2xl font-black">85</div>
                  <div className="text-xs font-semibold text-slate-300">Intensive Care (ICU) Beds</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600"
                    alt="Advanced surgical suite at Aarogyam Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Healthcare Built Around You
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight leading-tight">
                Compassionate Care Combined with Cutting-Edge Clinical Science
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Aarogyam Multispeciality Hospital is envisioned as a comprehensive healthcare destination where clinical expertise, advanced technology and compassionate patient care come together in Ahmedabad, Gujarat.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-soft">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-950">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <span>Discover Aarogyam</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
