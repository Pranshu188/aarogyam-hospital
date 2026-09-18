import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { DoctorCard } from '../doctors/DoctorCard';
import { useRouter } from '../../router/RouterContext';

export const FeaturedDoctors: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Top departments for pill filters
  const deptFilters = [
    { id: 'all', label: 'All Specialists' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'orthopaedics', label: 'Orthopaedics' },
    { id: 'obstetrics-gynaecology', label: 'Gynaecology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'gastroenterology', label: 'Gastroenterology' },
    { id: 'paediatrics', label: 'Paediatrics' },
  ];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDeptFilter === 'all' || doc.departmentId === selectedDeptFilter;
    const matchesSearch =
      searchFilter === '' ||
      doc.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchFilter.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Find the Right Specialist for You
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Consult experienced doctors, department heads, and fellowship-trained surgeons dedicated to transparent care.
          </p>
        </div>

        {/* Search Bar & Department Filter Pills */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search doctor, specialty or treatment..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white shadow-soft"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
          </div>

          {/* Quick department filter tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {deptFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDeptFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedDeptFilter === tab.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.slice(0, 6).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* View All Doctors button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/doctors')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>View Full Directory of 100+ Doctors</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
