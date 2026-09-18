import React from 'react';
import { ShieldCheck, Award, Users, Building, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const AboutPage: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();

  const values = [
    {
      title: 'Clinical Integrity',
      desc: 'Transparent medical decisions governed by evidence-based protocols and multidisciplinary reviews.',
      icon: ShieldCheck,
    },
    {
      title: 'Compassionate Care',
      desc: 'Treating patients with human warmth, dignity, and cultural sensitivity at every stage of healing.',
      icon: Heart,
    },
    {
      title: 'Technological Excellence',
      desc: 'Investing in cutting-edge surgical robotics, 3T MRI, and digital PACS to maximize patient safety.',
      icon: Award,
    },
    {
      title: 'Patient-First Transparency',
      desc: 'Clear upfront communication regarding treatments, expected outcomes, and hospital expenses.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              About Aarogyam Multispeciality Hospital
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
              A Legacy of Healing, Hope & Healthcare Excellence
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Established in Ahmedabad, Gujarat, Aarogyam is envisioned as western India's benchmark hospital for tertiary and quaternary clinical care.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Overview & Bed Capacity */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Institutional Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Designed Around Clinical Precision and Patient Wellbeing
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aarogyam Multispeciality Hospital stands as a modern 350-bed tertiary care healthcare facility located strategically on SG Highway, Bodakdev in Ahmedabad. The hospital brings together over 100 distinguished consultants, superspecialists, and compassionate nursing professionals under one roof.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With 25+ specialized clinical disciplines, western India's premier Level 1 Emergency and Trauma Centre, 85 critical care beds, and 12 Class 100 modular operation theatres, Aarogyam delivers advanced healthcare with international clinical rigor.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl font-black text-navy-950">350+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Inpatient Beds</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl font-black text-teal-700">85 Beds</div>
                  <div className="text-[11px] text-slate-500 font-medium">Intensive Care (ICU)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl font-black text-navy-950">12 OTs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Modular Theatres</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=900"
                  alt="Aarogyam Hospital Ahmedabad Facility Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Director's Message */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="rounded-2xl overflow-hidden aspect-square border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600"
                    alt="Medical Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 text-center md:text-left">
                  <h3 className="text-base font-bold text-navy-950">Dr. Rajesh Parikh</h3>
                  <p className="text-xs text-teal-700 font-semibold">Medical Director & Chief of Clinical Services</p>
                  <p className="text-[11px] text-slate-400">MS, MCh (Surgical Oncology), FACS</p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Leadership Note
                </span>
                <h3 className="text-2xl font-black text-navy-950">
                  "When you trust a hospital with your family, trust is earned through clinical accountability."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "At Aarogyam, our founding ethos is rooted in the sacred trust between patients and physicians. We believe medical excellence should never feel distant or intimidating. By empowering world-class specialists with robotic surgery, biplane angiography, and rapid emergency pathways, we ensure that every person who enters our hospital receives care of the highest ethical standards."
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  *Demonstration leadership statement for portfolio presentation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Hospital Values */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Our Compass
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-2">
              The Values That Guide Our Medical Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-950">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience Aarogyam’s Healthcare Standards</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            Explore our specialized departments, meet our doctors, or book your OPD consultation today.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => navigate('/doctors')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
            >
              Find a Doctor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
