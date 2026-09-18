import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Heart, Clock, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: '25+',
      numeric: 25,
      suffix: '+',
      label: 'Medical Specialties',
      subtext: 'Centres of excellence',
      icon: Award,
    },
    {
      value: '100+',
      numeric: 100,
      suffix: '+',
      label: 'Experienced Doctors',
      subtext: 'Senior consultants & surgeons',
      icon: Users,
    },
    {
      value: '50,000+',
      numeric: 50000,
      suffix: '+',
      label: 'Patients Served',
      subtext: 'Demonstrated clinical trust',
      icon: Heart,
    },
    {
      value: '15+',
      numeric: 15,
      suffix: '+',
      label: 'Years of Medical Care',
      subtext: 'Dedicated service in Gujarat',
      icon: ShieldCheck,
    },
    {
      value: '24/7',
      label: 'Emergency Services',
      subtext: 'Continuous trauma response',
      icon: Clock,
      isEmergency: true,
    },
  ];

  return (
    <section ref={sectionRef} className="py-14 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            A Legacy of Clinical Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Setting Benchmarks in Patient Safety & Outcomes
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            *Demonstration performance indicators representing hospital clinical capability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-navy-900/50 border border-navy-800 text-center transition-all duration-300 hover:border-teal-500/50 hover:bg-navy-900/80 ${
                  item.isEmergency ? 'col-span-2 sm:col-span-1 border-red-900/40 bg-red-950/20' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                  item.isEmergency ? 'bg-red-500/20 text-red-400' : 'bg-teal-500/10 text-teal-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  item.isEmergency ? 'text-red-400' : 'text-white'
                }`}>
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{item.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
