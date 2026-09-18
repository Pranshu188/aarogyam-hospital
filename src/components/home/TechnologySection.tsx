import React from 'react';
import { Cpu, Eye, ShieldCheck, Activity, Laptop, Zap, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';

export const TechnologySection: React.FC = () => {
  const { navigate } = useRouter();

  const technologies = [
    {
      title: 'Siemens 3.0 Tesla Silent MRI',
      tag: 'Advanced Imaging',
      desc: 'Sub-millimeter neurological and musculoskeletal clarity with 70% quieter acoustic experience and wider gantry.',
      icon: Eye,
    },
    {
      title: 'Dual-Source 128-Slice CT',
      tag: 'Low Radiation',
      desc: 'Full heart coronary angiogram in less than 4 heartbeats, utilizing AI-driven low-dose radiation protocols.',
      icon: Zap,
    },
    {
      title: 'Class 100 Modular Theatres',
      tag: 'Surgical Precision',
      desc: '12 HEPA-filtered laminar airflow surgical suites equipped with 4K Stryker laparoscopy and robotic navigation.',
      icon: ShieldCheck,
    },
    {
      title: 'Philips Biplane Cath Lab',
      tag: 'Cardiac & Neuro Interventions',
      desc: 'ClarityIQ ultra-low radiation angiography for life-saving coronary stenting and acute stroke thrombectomy.',
      icon: Activity,
    },
    {
      title: 'Integrated Cloud PACS & EMR',
      tag: 'Digital Health Records',
      desc: 'Instant QR-enabled mobile access to lab reports, X-rays, and prescription summaries for patients and doctors.',
      icon: Laptop,
    },
    {
      title: 'Centralized ICU Telemetry',
      tag: 'Continuous Surveillance',
      desc: '24/7 continuous multi-parameter telemetry alerting intensivists to vital micro-fluctuations instantly.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Precision & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Technology That Supports Better Care
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Modern diagnostic and surgical precision reduces recovery times, minimizes surgical incisions, and elevates patient safety benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-500/50 hover:shadow-card-hover transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 group-hover:bg-teal-600 text-navy-900 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                    {tech.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                  {tech.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Facilities CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/facilities')}
            className="px-6 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy-950 transition-colors"
          >
            Explore Complete Campus Facilities & Diagnostic Equipment
          </button>
        </div>
      </div>
    </section>
  );
};
