import React, { useState, useMemo } from 'react';
import { DOCTORS } from '../data/doctors';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { DoctorFilter } from '../components/doctors/DoctorFilter';
import { useRouter } from '../router/RouterContext';

export const DoctorsPage: React.FC = () => {
  const { route } = useRouter();

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(route.query.specialty || '');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doctor) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = doctor.name.toLowerCase().includes(q);
        const matchesSpecialty = doctor.specialty.toLowerCase().includes(q);
        const matchesQual = doctor.qualifications.toLowerCase().includes(q);
        const matchesAreas = doctor.areasOfExpertise.some((a) => a.toLowerCase().includes(q));
        if (!matchesName && !matchesSpecialty && !matchesQual && !matchesAreas) {
          return false;
        }
      }

      // Specialty
      if (selectedSpecialty && doctor.departmentId !== selectedSpecialty) {
        return false;
      }

      // Experience
      if (selectedExperience) {
        const minExp = parseInt(selectedExperience, 10);
        if (doctor.experienceYears < minExp) return false;
      }

      // Availability
      if (selectedAvailability === 'today' && !doctor.isAvailableToday) {
        return false;
      }

      // Gender
      if (selectedGender && doctor.gender !== selectedGender) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedSpecialty, selectedExperience, selectedAvailability, selectedGender]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('');
    setSelectedExperience('');
    setSelectedAvailability('');
    setSelectedGender('');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Medical Faculty & Consultants
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Find Experienced Specialist Doctors
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Browse our faculty of senior consultants across 25+ medical departments in Ahmedabad. Filter by specialty, experience, and real-time OPD availability.
          </p>
        </div>
      </section>

      {/* Main Filter & Doctors Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Filter Panel */}
        <DoctorFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          selectedAvailability={selectedAvailability}
          setSelectedAvailability={setSelectedAvailability}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          onReset={handleResetFilters}
          totalCount={filteredDoctors.length}
        />

        {/* Doctors Grid or Empty State */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-3 shadow-soft">
            <h3 className="text-lg font-bold text-navy-950">No specialists found matching criteria</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query, clearing filters, or browsing all specialties.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
