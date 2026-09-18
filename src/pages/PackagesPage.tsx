import React, { useState } from 'react';
import { HEALTH_PACKAGES } from '../data/packages';
import { HealthPackage } from '../types';
import { Check, Clock, Calendar, AlertCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const PackagesPage: React.FC = () => {
  const { openBookingModal } = useRouter();
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>('essential-health-check');

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Preventative Medicine
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Preventative Health Checkup Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Detect hidden lifestyle disorders, metabolic markers, and organ stress before symptoms emerge. All packages include specialist physician review.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Notice Strip */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Portfolio Demonstration Pricing:</span> The checkup packages, test lists, and rates displayed below are illustrative demonstration figures designed to showcase healthcare package presentation for hospital owners.
          </div>
        </div>

        {/* Packages List */}
        <div className="space-y-6">
          {HEALTH_PACKAGES.map((pkg) => {
            const isExpanded = expandedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden transition-all duration-300"
              >
                {/* Header Row */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                        {pkg.tag}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {pkg.totalTests} Diagnostic Tests
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        • {pkg.recommendedFor}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-navy-950">
                      {pkg.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        {pkg.fastingRequired ? '10-12 hours fasting required' : 'No fasting required'}
                      </span>
                      <span>•</span>
                      <span>Delivery: {pkg.reportDelivery}</span>
                    </div>
                  </div>

                  {/* Price & CTA Action */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-navy-950">
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block mt-0.5 text-center lg:text-right">
                        Demonstration Pricing
                      </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Test List' : 'View All Tests'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => openBookingModal({ packageId: pkg.id })}
                        className="px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
                      >
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        <span>Book Package</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Test Breakdown */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                      Complete Test Breakdown ({pkg.totalTests} Parameters):
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pkg.categories.map((cat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-2">
                          <h4 className="text-xs font-bold text-navy-950 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                            <span>{cat.categoryName}</span>
                            <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-1.5 py-0.5 rounded">
                              {cat.tests.length}
                            </span>
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {cat.tests.map((test, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                <span>{test}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-navy-950">Preparation Tip:</span> Fast for 10-12 hours overnight. Drink plain water freely. Arrive at Aarogyam Health Check Lounge between 08:00 AM – 09:30 AM.
                      </div>
                      <button
                        onClick={() => openBookingModal({ packageId: pkg.id })}
                        className="text-xs font-bold text-teal-700 hover:text-teal-800 underline shrink-0"
                      >
                        Schedule This Checkup
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
