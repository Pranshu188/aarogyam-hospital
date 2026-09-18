import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import { DEPARTMENTS } from '../../data/departments';

interface DoctorFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
  selectedExperience: string;
  setSelectedExperience: (exp: string) => void;
  selectedAvailability: string;
  setSelectedAvailability: (avail: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  onReset: () => void;
  totalCount: number;
}

export const DoctorFilter: React.FC<DoctorFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedSpecialty,
  setSelectedSpecialty,
  selectedExperience,
  setSelectedExperience,
  selectedAvailability,
  setSelectedAvailability,
  selectedGender,
  setSelectedGender,
  onReset,
  totalCount,
}) => {
  const hasActiveFilters =
    searchQuery ||
    selectedSpecialty ||
    selectedExperience ||
    selectedAvailability ||
    selectedGender;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft space-y-4">
      {/* Search Bar Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search doctor, specialty or treatment..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-slate-50/50"
        />
        <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs text-slate-400 hover:text-slate-600 absolute right-3.5 top-3.5 font-medium"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        {/* Specialty Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Specialty
          </label>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-teal-500"
          >
            <option value="">All Specialties</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Experience
          </label>
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-teal-500"
          >
            <option value="">Any Experience</option>
            <option value="15">15+ Years Experience</option>
            <option value="12">12+ Years Experience</option>
            <option value="10">10+ Years Experience</option>
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Availability
          </label>
          <select
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-teal-500"
          >
            <option value="">Any Availability</option>
            <option value="today">Available Today</option>
          </select>
        </div>

        {/* Gender Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Doctor Gender
          </label>
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-teal-500"
          >
            <option value="">All Genders</option>
            <option value="Female">Female Doctor</option>
            <option value="Male">Male Doctor</option>
          </select>
        </div>
      </div>

      {/* Results Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
        <div>
          Showing <span className="font-bold text-navy-950">{totalCount}</span> specialists
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-teal-700 hover:text-teal-800 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
