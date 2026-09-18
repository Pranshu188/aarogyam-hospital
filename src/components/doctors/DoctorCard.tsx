import React from 'react';
import { Calendar, Clock, Star, MapPin, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Doctor } from '../../types';
import { useRouter } from '../../router/RouterContext';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { navigate, openBookingModal } = useRouter();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      <div>
        {/* Top Image + Badges Container */}
        <div className="relative h-64 bg-slate-100 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Specialty tag pill */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-navy-900 shadow-sm border border-white/60">
            {doctor.specialty}
          </div>

          {/* Availability pill */}
          <div className="absolute top-3 right-3">
            {doctor.isAvailableToday ? (
              <span className="flex items-center gap-1 bg-emerald-500/90 text-white backdrop-blur-md text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Available Today
              </span>
            ) : (
              <span className="bg-slate-800/80 text-slate-200 backdrop-blur-md text-[11px] font-medium px-2 py-0.5 rounded-md">
                Next: {doctor.nextAvailableSlot}
              </span>
            )}
          </div>

          {/* Rating overlay badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold">
            <div className="flex items-center gap-1 bg-navy-900/80 backdrop-blur-sm px-2 py-1 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{doctor.rating}</span>
              <span className="text-slate-300 text-[10px]">({doctor.reviewCount})</span>
            </div>
            <div className="bg-navy-900/80 backdrop-blur-sm px-2 py-1 rounded-md text-[11px] text-teal-300">
              {doctor.experienceYears} Years Exp
            </div>
          </div>
        </div>

        {/* Doctor Details Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3
              onClick={() => navigate(`/doctors/${doctor.id}`)}
              className="text-base font-bold text-navy-950 hover:text-teal-700 cursor-pointer transition-colors line-clamp-1"
            >
              {doctor.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 line-clamp-1 mt-0.5">
              {doctor.title}
            </p>
          </div>

          <div className="text-xs text-slate-600 space-y-1.5 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span className="truncate text-slate-700 font-medium">{doctor.qualifications}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate text-[11px]">{doctor.opdTimings}</span>
            </div>
          </div>

          {/* Languages spoken */}
          <div className="flex items-center gap-1 flex-wrap pt-1">
            <span className="text-[11px] text-slate-400">Speaks:</span>
            {doctor.languages.map((lang) => (
              <span key={lang} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA buttons */}
      <div className="p-4 pt-0 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={() => navigate(`/doctors/${doctor.id}`)}
          className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy-950 transition-colors text-center"
        >
          View Profile
        </button>

        <button
          onClick={() => openBookingModal({ doctorId: doctor.id, specialtyId: doctor.departmentId })}
          className="flex-1 py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-400" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
