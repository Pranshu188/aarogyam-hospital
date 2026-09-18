import React from 'react';
import { Check, ArrowRight, ShieldAlert, Sparkles, Clock } from 'lucide-react';
import { HEALTH_PACKAGES } from '../../data/packages';
import { useRouter } from '../../router/RouterContext';

export const PackagesPreview: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();

  // Highlight 4 representative packages
  const featuredPackages = HEALTH_PACKAGES.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Preventative Healthcare
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
              Personalized Health Checkup Packages
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mt-2">
              Detect lifestyle disorders early. Tailored packages for corporate professionals, families, women, and senior citizens.
            </p>
          </div>

          <div className="text-right">
            <button
              onClick={() => navigate('/packages')}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>View All 7 Health Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="block text-[11px] text-amber-700 mt-1 font-medium">
              *All fees shown are demonstration pricing
            </span>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between p-6 relative group hover:-translate-y-1"
            >
              <div>
                {/* Tag pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    {pkg.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {pkg.totalTests} Tests Included
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-navy-950">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded ml-auto">
                    Demo Price
                  </span>
                </div>

                {/* Fasting & report info */}
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{pkg.fastingRequired ? '10-12 hrs fasting' : 'No fasting required'} • {pkg.reportDelivery}</span>
                </div>

                {/* Sample test highlights */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                  {pkg.categories.slice(0, 3).map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="truncate">{cat.categoryName} ({cat.tests.length} tests)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => navigate('/packages')}
                  className="flex-1 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => openBookingModal()}
                  className="flex-1 py-2 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold text-center transition-colors shadow-sm"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
