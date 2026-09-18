import React from 'react';
import { X, Calendar } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { BookingWizard } from '../appointments/BookingWizard';

export const AppointmentModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, bookingPrefill } = useRouter();

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy-900 text-teal-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-navy-950">Book an Appointment</h3>
              <p className="text-xs text-slate-500">Aarogyam Multispeciality Hospital, Ahmedabad</p>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal content with BookingWizard */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <BookingWizard
            isModal={true}
            initialDoctorId={bookingPrefill?.doctorId}
            initialSpecialtyId={bookingPrefill?.specialtyId}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
