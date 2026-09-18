import React from 'react';
import { BookingWizard } from '../components/appointments/BookingWizard';
import { ShieldCheck, Clock, Phone, AlertCircle } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const AppointmentPage: React.FC = () => {
  const { route } = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title & Intro */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Online Consultation Booking
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Schedule an Appointment
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Select your specialist doctor or medical department, choose an available time slot, and receive instant demonstration confirmation.
          </p>
        </div>

        {/* 5-Step Interactive Wizard */}
        <BookingWizard
          initialDoctorId={route.query.doctorId}
          initialSpecialtyId={route.query.specialtyId}
        />

        {/* Support Help Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-navy-950">Need assistance booking?</div>
              <div className="text-slate-500">Call our centralized appointment desk: +91 79 4567 8900 (08:00 AM – 08:00 PM)</div>
            </div>
          </div>

          <span className="text-[11px] text-amber-700 font-medium bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shrink-0">
            Demonstration Booking System
          </span>
        </div>
      </div>
    </div>
  );
};
