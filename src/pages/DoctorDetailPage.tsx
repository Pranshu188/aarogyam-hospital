import React from 'react';
import {
  Calendar,
  Clock,
  Star,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ChevronLeft,
  Share2,
} from 'lucide-react';
import { DOCTORS } from '../data/doctors';
import { useRouter } from '../router/RouterContext';

export const DoctorDetailPage: React.FC = () => {
  const { route, navigate, openBookingModal } = useRouter();
  const doctorId = route.params.doctorId || 'dr-ananya-mehta';

  const doctor = DOCTORS.find((d) => d.id === doctorId) || DOCTORS[0];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/doctors')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Doctors</span>
          </button>

          <span className="text-xs text-slate-400 font-medium">
            Doctor Profile • Aarogyam Multispeciality Hospital
          </span>
        </div>

        {/* Top Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Doctor Portrait Image */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-card border-2 border-slate-100 aspect-[4/4.5] relative bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-navy-900 shadow-sm">
                  {doctor.specialty}
                </div>
              </div>
            </div>

            {/* Main Doctor Bio & Quick Badges */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                    {doctor.experienceYears} Years Clinical Experience
                  </span>
                  {doctor.isAvailableToday && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available Today
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-navy-950 mt-2">
                  {doctor.name}
                </h1>
                <p className="text-sm font-semibold text-teal-700 mt-0.5">
                  {doctor.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {doctor.qualifications}
                </p>
              </div>

              {/* Rating & Languages */}
              <div className="flex items-center gap-4 text-xs pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-navy-950">{doctor.rating}</span>
                  <span className="text-slate-400">({doctor.reviewCount} verified patient feedback)</span>
                </div>
                <div className="h-3 w-px bg-slate-200" />
                <div className="text-slate-600">
                  <span className="font-semibold text-slate-800">Languages:</span> {doctor.languages.join(', ')}
                </div>
              </div>

              {/* OPD Schedule & Timings Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-950">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>OPD Consultation Schedule:</span>
                </div>
                <p className="text-xs text-slate-600 font-medium pl-6">
                  {doctor.opdTimings}
                </p>
                <div className="pl-6 text-[11px] text-slate-400">
                  Estimated Consultation Fee: <span className="font-bold text-navy-900">₹{doctor.consultationFee}</span> (demonstration pricing)
                </div>
              </div>

              {/* Book Appointment CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => openBookingModal({ doctorId: doctor.id, specialtyId: doctor.departmentId })}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Book Appointment with {doctor.name.split(' ')[1]}</span>
                </button>

                <a
                  href="tel:+917945678900"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Call Hospital Helpdesk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs & Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Main Details Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Doctor */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
              <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span>About the Doctor</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {doctor.about}
              </p>
            </div>

            {/* Areas of Clinical Expertise */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
              <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Areas of Clinical Expertise</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.areasOfExpertise.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-medium text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Treated */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4">
              <h2 className="text-lg font-bold text-navy-950">
                Conditions Treated
              </h2>
              <div className="flex flex-wrap gap-2">
                {doctor.conditionsTreated.map((cond, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 font-semibold border border-teal-200"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Experience History */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-6">
              <div>
                <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-teal-600" />
                  <span>Education & Advanced Fellowships</span>
                </h2>
                <ul className="space-y-2 text-xs text-slate-600 pl-2">
                  {doctor.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h2 className="text-lg font-bold text-navy-950 flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                  <span>Professional Career & Positions Held</span>
                </h2>
                <ul className="space-y-2 text-xs text-slate-600 pl-2">
                  {doctor.experienceHistory.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Sticky Appointment Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-soft space-y-5">
              <h3 className="text-base font-bold text-navy-950 pb-3 border-b border-slate-100">
                Consultation Overview
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Department:</span>
                  <span className="font-semibold text-slate-800">{doctor.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Next Available Slot:</span>
                  <span className="font-bold text-teal-700">{doctor.nextAvailableSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Available Modes:</span>
                  <span className="font-medium text-slate-800">In-Person & Video OPD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="font-bold text-navy-950">₹{doctor.consultationFee} (Demo)</span>
                </div>
              </div>

              <button
                onClick={() => openBookingModal({ doctorId: doctor.id, specialtyId: doctor.departmentId })}
                className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Instant Appointment Request</span>
              </button>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-snug">
                Appointments are subject to consultant availability and demonstration registration on this portfolio website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
