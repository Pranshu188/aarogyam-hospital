import React from 'react';
import {
  CreditCard,
  Globe,
  ClipboardList,
  Receipt,
  Pill,
  FileText,
  Clock,
  DoorOpen,
  MessageSquareHeart,
  Ambulance,
  FolderArchive,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const PatientServicesPage: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();

  const patientJourney = [
    { step: '01', title: 'Appointment', desc: 'Book online or via 24/7 centralized helpline' },
    { step: '02', title: 'Registration', desc: 'Quick digital check-in and UHID generation' },
    { step: '03', title: 'Consultation', desc: 'Comprehensive specialist evaluation & plan' },
    { step: '04', title: 'Diagnostics', desc: 'NABL automated lab tests and 3T imaging' },
    { step: '05', title: 'Treatment', desc: 'Evidence-based outpatient or surgical care' },
    { step: '06', title: 'Follow-Up', desc: 'Digital discharge summary & tele-consults' },
  ];

  const serviceCards = [
    {
      title: 'Insurance & Cashless TPA',
      desc: 'Seamless pre-authorization desk with all major private and PSU health insurance providers.',
      icon: CreditCard,
      highlight: 'Empanelled with 30+ TPAs',
    },
    {
      title: 'International Patient Care',
      desc: 'Visa assistance, airport transfers from Ahmedabad International Airport, and dedicated foreign patient coordinators.',
      icon: Globe,
      highlight: 'Dedicated Global Desk',
    },
    {
      title: 'Digital Patient Registration',
      desc: 'Fast-track OPD registration counter with unique patient identification (UHID) for paperless records.',
      icon: ClipboardList,
      highlight: 'Paperless Check-in',
    },
    {
      title: 'Transparent Billing Information',
      desc: 'Itemized estimates before planned admissions with zero hidden costs or unauthorized surcharges.',
      icon: Receipt,
      highlight: 'Upfront Estimates',
    },
    {
      title: '24/7 In-House Central Pharmacy',
      desc: 'Direct manufacturer-sourced authentic medicines with bedside inpatient delivery.',
      icon: Pill,
      highlight: 'Round-the-clock',
    },
    {
      title: 'Digital Diagnostic Reports',
      desc: 'Scan QR codes on your appointment slip to access verified pathology and radiology reports securely.',
      icon: FileText,
      highlight: 'Instant WhatsApp Access',
    },
    {
      title: 'Visiting Hours & Guidelines',
      desc: 'Designed to support family presence while safeguarding patient healing and infection control.',
      icon: Clock,
      highlight: '04:30 PM - 06:30 PM (General)',
    },
    {
      title: 'Discharge Information & Medication',
      desc: 'Structured discharge counseling by floor clinical pharmacists and nutritionist diet charts.',
      icon: DoorOpen,
      highlight: 'ERAS Rapid Recovery',
    },
    {
      title: 'Patient Feedback & Grievance Cell',
      desc: 'Continuous patient satisfaction tracking to uphold hospital clinical care quality.',
      icon: MessageSquareHeart,
      highlight: 'Director Review',
    },
    {
      title: 'ACLS Emergency Ambulance',
      desc: 'GPS-tracked mobile emergency units with live vital telemetry directly communicating with our ER.',
      icon: Ambulance,
      highlight: '24/7 Fleet Standby',
    },
    {
      title: 'Medical Records Department (MRD)',
      desc: 'Safe archival and expedited issuance of medical certificates, claim documents, and duplicate reports.',
      icon: FolderArchive,
      highlight: 'Confidential EMR',
    },
  ];

  const insurancePartners = [
    'Star Health & Allied Insurance',
    'ICICI Lombard General Insurance',
    'HDFC ERGO General Insurance',
    'Care Health Insurance',
    'Bajaj Allianz General Insurance',
    'New India Assurance',
    'United India Insurance',
    'National Insurance',
    'Oriental Insurance',
    'Max Bupa / Niva Bupa',
    'Medi Assist TPA',
    'Paramount Health TPA',
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Care Pathways & Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Patient Care & Support Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Everything you need for a smooth, transparent, and comfortable hospital experience—from your first consultation to insurance approval.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Patient Journey Roadmap */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-soft space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              The Aarogyam Roadmap
            </span>
            <h2 className="text-2xl font-black text-navy-950 mt-2">
              Your Seamless Patient Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            {patientJourney.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center relative flex flex-col justify-between space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-navy-900 text-teal-400 font-extrabold text-xs flex items-center justify-center mx-auto shadow-sm">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11 Patient Service Cards Grid */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
              Hospital Facilitation
            </span>
            <h2 className="text-2xl font-black text-navy-950 mt-1">
              Comprehensive Support Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-teal-600 text-teal-700 group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {srv.highlight}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insurance & TPA Empanelled Desk Highlight */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-card space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Cashless Hospitalization
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Insurance & TPA Help Desk
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Aarogyam has active cashless tie-ups with leading insurance companies and TPAs. Our dedicated 24/7 Insurance desk coordinates pre-authorization, document verification, and query resolution.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
              Leading Empanelled Partners (Demonstration List):
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {insurancePartners.map((partner, i) => (
                <div key={i} className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="truncate font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md transition-colors"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold border border-navy-700 transition-colors"
            >
              Contact Patient Helpdesk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
