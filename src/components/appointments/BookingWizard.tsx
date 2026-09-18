import React, { useState, useEffect } from 'react';
import { Check, Calendar as CalendarIcon, Clock, User, Phone, Mail, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { DEPARTMENTS } from '../../data/departments';
import { useRouter } from '../../router/RouterContext';

interface BookingWizardProps {
  initialDoctorId?: string;
  initialSpecialtyId?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialDoctorId,
  initialSpecialtyId,
  onSuccess,
  isModal = false,
}) => {
  const { navigate } = useRouter();

  // Wizard Step (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectionType, setSelectionType] = useState<'doctor' | 'specialty'>('doctor');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(initialSpecialtyId || '');
  const [selectedDoctor, setSelectedDoctor] = useState<string>(initialDoctorId || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'in-person' | 'video'>('in-person');

  // Patient Info
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [reason, setReason] = useState('');

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingRef, setBookingRef] = useState<string>('');

  // Auto-sync initial props
  useEffect(() => {
    if (initialDoctorId) {
      setSelectedDoctor(initialDoctorId);
      setSelectionType('doctor');
      const doc = DOCTORS.find((d) => d.id === initialDoctorId);
      if (doc) setSelectedSpecialty(doc.departmentId);
    } else if (initialSpecialtyId) {
      setSelectedSpecialty(initialSpecialtyId);
      setSelectionType('specialty');
    }
  }, [initialDoctorId, initialSpecialtyId]);

  // If specialty changes, clear doctor if not matching
  useEffect(() => {
    if (selectedDoctor) {
      const doc = DOCTORS.find((d) => d.id === selectedDoctor);
      if (doc && selectedSpecialty && doc.departmentId !== selectedSpecialty) {
        setSelectedDoctor('');
      }
    }
  }, [selectedSpecialty]);

  // Generate next 10 days for date picker
  const availableDates = Array.from({ length: 10 }).map((_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() + idx);
    const dayName = idx === 0 ? 'Today' : idx === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const formattedDate = d.toISOString().split('T')[0];
    const displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return {
      date: formattedDate,
      dayName,
      displayDate,
    };
  });

  // Set default date if empty
  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].date);
    }
  }, []);

  const timeSlots = [
    { time: '09:00 AM', period: 'Morning' },
    { time: '09:30 AM', period: 'Morning' },
    { time: '10:00 AM', period: 'Morning' },
    { time: '11:00 AM', period: 'Morning' },
    { time: '11:30 AM', period: 'Morning' },
    { time: '02:00 PM', period: 'Afternoon' },
    { time: '02:30 PM', period: 'Afternoon' },
    { time: '03:30 PM', period: 'Afternoon' },
    { time: '04:30 PM', period: 'Evening' },
    { time: '05:30 PM', period: 'Evening' },
    { time: '06:30 PM', period: 'Evening' },
  ];

  // Doctors filtered by selected specialty if any
  const filteredDoctors = selectedSpecialty
    ? DOCTORS.filter((d) => d.departmentId === selectedSpecialty)
    : DOCTORS;

  const currentDoctorObj = DOCTORS.find((d) => d.id === selectedDoctor);
  const currentDeptObj = DEPARTMENTS.find((d) => d.id === selectedSpecialty || d.id === currentDoctorObj?.departmentId);

  // Validation functions
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (selectionType === 'doctor' && !selectedDoctor) {
      newErrors.doctor = 'Please select a doctor to proceed';
    }
    if (selectionType === 'specialty' && !selectedSpecialty) {
      newErrors.specialty = 'Please select a department or specialty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedDate) newErrors.date = 'Please select an appointment date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedTime) newErrors.time = 'Please select an available consultation slot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter patient full name (minimum 3 characters)';
    }
    if (!mobile.trim() || !/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    const ageNum = parseInt(age, 10);
    if (!age || isNaN(ageNum) || ageNum < 1 || ageNum > 115) {
      newErrors.age = 'Please enter a valid age (1-115)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    } else if (currentStep === 3 && validateStep3()) {
      setCurrentStep(4);
    } else if (currentStep === 4 && validateStep4()) {
      // Generate booking reference
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`AAR-2026-${randomNum}`);
      setCurrentStep(5);
      if (onSuccess) onSuccess();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedDoctor('');
    setSelectedSpecialty('');
    setSelectedDate(availableDates[0]?.date || '');
    setSelectedTime('');
    setFullName('');
    setMobile('');
    setEmail('');
    setAge('');
    setReason('');
    setErrors({});
  };

  return (
    <div className={`w-full bg-white ${isModal ? 'p-0' : 'rounded-3xl shadow-card border border-slate-200/80 p-6 md:p-10'}`}>
      {/* Step Progress Bar */}
      {currentStep < 5 && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span className={currentStep >= 1 ? 'text-navy-900 font-bold' : ''}>1. Specialist</span>
            <span className={currentStep >= 2 ? 'text-navy-900 font-bold' : ''}>2. Date</span>
            <span className={currentStep >= 3 ? 'text-navy-900 font-bold' : ''}>3. Time</span>
            <span className={currentStep >= 4 ? 'text-navy-900 font-bold' : ''}>4. Patient Details</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
            <div
              className="bg-teal-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 1: Specialty OR Doctor Selection */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-navy-950">Step 1: Choose Specialty or Doctor</h3>
            <p className="text-sm text-slate-500 mt-1">
              Select how you would like to begin your booking.
            </p>
          </div>

          {/* Toggle Type */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                setSelectionType('doctor');
                setErrors({});
              }}
              className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectionType === 'doctor'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Choose by Doctor
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectionType('specialty');
                setErrors({});
              }}
              className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectionType === 'specialty'
                  ? 'bg-white text-navy-950 shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Choose by Department
            </button>
          </div>

          {/* Consultation Type Selector */}
          <div className="flex items-center gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm">
            <span className="font-semibold text-slate-700">Mode:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="consultMode"
                checked={consultationType === 'in-person'}
                onChange={() => setConsultationType('in-person')}
                className="text-teal-600 focus:ring-teal-500"
              />
              <span className="text-slate-800 font-medium">In-Hospital OPD</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="consultMode"
                checked={consultationType === 'video'}
                onChange={() => setConsultationType('video')}
                className="text-teal-600 focus:ring-teal-500"
              />
              <span className="text-slate-800 font-medium">Video Consultation</span>
            </label>
          </div>

          {/* Doctor Selection View */}
          {selectionType === 'doctor' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Filter by Department (Optional):
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  <option value="">All Specialties (16 Departments)</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Select Specialist Doctor:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                  {filteredDoctors.map((doc) => {
                    const isSelected = selectedDoctor === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => {
                          setSelectedDoctor(doc.id);
                          setSelectedSpecialty(doc.departmentId);
                          setErrors({});
                        }}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-teal-500 bg-teal-50/70 ring-1 ring-teal-500 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-navy-950 truncate">{doc.name}</h4>
                          <p className="text-xs text-slate-500 truncate">{doc.specialty}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] font-semibold text-teal-700 bg-teal-100/70 px-1.5 py-0.5 rounded">
                              {doc.experienceYears} Yrs Exp
                            </span>
                            <span className="text-[11px] text-slate-500">₹{doc.consultationFee}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.doctor && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.doctor}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Specialty Selection View */}
          {selectionType === 'specialty' && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-slate-700">
                Select Medical Department / Centre:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {DEPARTMENTS.map((dept) => {
                  const isSelected = selectedSpecialty === dept.id;
                  return (
                    <div
                      key={dept.id}
                      onClick={() => {
                        setSelectedSpecialty(dept.id);
                        // Auto pick first doctor if available
                        const firstDoc = DOCTORS.find((d) => d.departmentId === dept.id);
                        if (firstDoc) setSelectedDoctor(firstDoc.id);
                        setErrors({});
                      }}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50/70 ring-1 ring-teal-500'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <h4 className="text-sm font-bold text-navy-950">{dept.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{dept.tagline}</p>
                    </div>
                  );
                })}
              </div>
              {errors.specialty && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.specialty}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* STEP 2: Date Selection */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-navy-950">Step 2: Select Appointment Date</h3>
            <p className="text-sm text-slate-500 mt-1">
              Consulting with <span className="font-semibold text-navy-900">{currentDoctorObj?.name || currentDeptObj?.name}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {availableDates.map((item) => {
              const isSelected = selectedDate === item.date;
              return (
                <button
                  type="button"
                  key={item.date}
                  onClick={() => {
                    setSelectedDate(item.date);
                    setErrors({});
                  }}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all text-center ${
                    isSelected
                      ? 'border-teal-500 bg-navy-900 text-white shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isSelected ? 'text-teal-300' : 'text-slate-500'}`}>
                    {item.dayName}
                  </span>
                  <span className="text-base font-extrabold mt-0.5">{item.displayDate}</span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/70 text-xs text-teal-800 flex items-start gap-2.5">
            <CalendarIcon className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Regular OPD Timings:</span> Monday to Saturday, 08:00 AM – 08:00 PM. Emergency care operates 24/7.
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Time Slot Selection */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-navy-950">Step 3: Choose Consultation Time</h3>
            <p className="text-sm text-slate-500 mt-1">
              Selected Date: <span className="font-semibold text-navy-900">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Available Slots:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <button
                    type="button"
                    key={slot.time}
                    onClick={() => {
                      setSelectedTime(slot.time);
                      setErrors({});
                    }}
                    className={`flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border text-sm font-semibold transition-all ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50 text-teal-900 ring-2 ring-teal-500 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{slot.time}</span>
                  </button>
                );
              })}
            </div>
            {errors.time && (
              <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.time}
              </p>
            )}
          </div>
        </div>
      )}

      {/* STEP 4: Patient Details Form */}
      {currentStep === 4 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-navy-950">Step 4: Patient Details</h3>
            <p className="text-sm text-slate-500 mt-1">
              Please enter patient details for clinical registration (demonstration).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                  }`}
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number (10-Digit) *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-xs font-semibold text-slate-500">
                  +91
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  placeholder="98765 43210"
                  className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    errors.mobile ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                  }`}
                />
              </div>
              {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patient@example.com"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                  }`}
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Age & Gender */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Age *
                </label>
                <input
                  type="number"
                  min="1"
                  max="115"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    errors.age ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                  }`}
                />
                {errors.age && <p className="text-xs text-red-600 mt-1">{errors.age}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Reason for Visit / Symptoms (Optional):
            </label>
            <textarea
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. Routine cardiac checkup, second opinion on knee replacement, follow-up"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>
      )}

      {/* STEP 5: Confirmation Screen */}
      {currentStep === 5 && (
        <div className="space-y-6 text-center py-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto ring-8 ring-teal-50/50">
            <CheckCircle2 className="w-9 h-9 text-teal-600" />
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              Appointment Request Received
            </span>
            <h3 className="text-2xl font-black text-navy-950">Thank You, {fullName}!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
              Your demonstration appointment request has been recorded successfully.
            </p>
          </div>

          {/* Summary Card */}
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <span className="text-xs text-slate-500 font-medium">Booking Reference</span>
              <span className="text-sm font-mono font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                {bookingRef}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Doctor / Specialist:</span>
              <span className="font-bold text-navy-950">{currentDoctorObj?.name || 'Assigned Consultant'}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Specialty:</span>
              <span className="font-semibold text-slate-800">{currentDoctorObj?.specialty || currentDeptObj?.name}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Scheduled Date & Time:</span>
              <span className="font-bold text-teal-700">{selectedDate} at {selectedTime}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Consultation Mode:</span>
              <span className="font-medium text-slate-800 capitalize">{consultationType === 'in-person' ? 'In-Hospital OPD' : 'Video Consultation'}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Estimated Consultation Fee:</span>
              <span className="font-bold text-navy-900">₹{currentDoctorObj?.consultationFee || 1000}</span>
            </div>
          </div>

          {/* Demonstration Notice Box */}
          <div className="max-w-md mx-auto p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Portfolio Demonstration Notice:</span> This is a demonstration website created for portfolio review. No actual appointment has been submitted to a live medical center.
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Book Another Appointment
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors shadow-sm"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}

      {/* Navigation Buttons for Steps 1-4 */}
      {currentStep < 5 && (
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>{currentStep === 4 ? 'Confirm & Book Appointment' : 'Continue'}</span>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      )}
    </div>
  );
};
