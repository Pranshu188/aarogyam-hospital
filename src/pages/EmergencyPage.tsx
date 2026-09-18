import React, { useState } from 'react';
import {
  PhoneCall,
  Navigation,
  AlertCircle,
  HeartCrack,
  Activity,
  Ambulance,
  Flame,
  ShieldAlert,
  Clock,
  MapPin,
  CheckCircle2,
  X,
} from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const EmergencyPage: React.FC = () => {
  const { navigate } = useRouter();
  const [dispatchModalOpen, setDispatchModalOpen] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const [emergencyType, setEmergencyType] = useState('Cardiac / Chest Pain');
  const [dispatched, setDispatched] = useState(false);

  const emergencyProtocols = [
    {
      title: 'Acute Heart Attack Protocol',
      icon: HeartCrack,
      subtitle: 'Door-to-Balloon Time < 48 mins',
      desc: 'Immediate 12-lead telemetry ECG, point-of-care Troponin-I test (< 10 mins), and 24/7 biplane cath lab activation by on-duty interventional cardiologists.',
      symptoms: ['Crushing chest pressure or tightness', 'Radiating pain to left arm or jaw', 'Cold sweating, nausea and breathlessness'],
    },
    {
      title: 'Comprehensive Stroke Care (FAST)',
      icon: Activity,
      subtitle: 'Door-to-Needle Time < 35 mins',
      desc: 'Immediate non-contrast CT/MRI stroke imaging, intravenous thrombolytic administration within 4.5 hours, and endovascular mechanical thrombectomy.',
      symptoms: ['Face drooping or uneven smile', 'Arm weakness or numbness', 'Speech difficulty or slurred words'],
    },
    {
      title: 'Level 1 Polytrauma & Accident Center',
      icon: AlertCircle,
      subtitle: 'Multidisciplinary Trauma Surgeons',
      desc: 'Zero-delay resuscitation bays with immediate crossmatched blood transfusion from on-site blood bank, emergency laparotomy, and neuro-stabilization.',
      symptoms: ['Road traffic accidents & vehicular crashes', 'Severe head trauma or loss of consciousness', 'Compound bone fractures with heavy blood loss'],
    },
    {
      title: 'Pediatric Emergency & NICU Resuscitation',
      icon: ShieldAlert,
      subtitle: 'Fellowship-Trained Neonatologists',
      desc: 'Rapid pediatric triage, specialized pediatric resuscitation equipment, neonatal transport incubators, and immediate Level III NICU admission.',
      symptoms: ['High persistent fever with seizures (febrile fit)', 'Severe breathing distress or stridor', 'Accidental toxic ingestion or poisoning'],
    },
  ];

  const handleSimulateDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickupLocation && patientContact) {
      setDispatched(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* High-Impact Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Emergency Department • Open 24/7 / 365 Days</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Need Urgent Medical Attention?
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Our Emergency & Trauma Care team is available 24 hours a day, 7 days a week. Equipped with trauma resuscitation bays, dedicated cardiac cath labs, and GPS-enabled ACLS mobile emergency ambulances.
          </p>

          {/* Hotline Box */}
          <div className="p-6 rounded-3xl bg-navy-900/90 border-2 border-red-500/40 max-w-xl space-y-3 shadow-2xl">
            <div className="text-xs text-red-300 font-bold uppercase tracking-wider">
              Central Emergency Hotline (Instant Response):
            </div>
            <a
              href="tel:+917945678900"
              className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-black text-white hover:text-red-400 transition-colors"
            >
              <PhoneCall className="w-8 h-8 text-red-500 animate-soft-pulse" />
              <span>+91 79 4567 8900</span>
            </a>
            <p className="text-xs text-slate-400">
              Direct emergency dispatch room • SG Highway, Bodakdev, Ahmedabad
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:+917945678900"
              className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Emergency Hotline</span>
            </a>

            <button
              onClick={() => setDispatchModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Ambulance className="w-4 h-4" />
              <span>Request Ambulance (Demo)</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-teal-400" />
              <span>Get Directions to Campus</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Golden-Hour Emergency Protocols */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Life-Saving Pathways
          </span>
          <h2 className="text-3xl font-extrabold text-navy-950 mt-2">
            Standardized Clinical Emergency Protocols
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            In medical emergencies, every minute directly impacts patient recovery. Aarogyam follows zero-delay triage protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergencyProtocols.map((protocol, idx) => {
            const Icon = protocol.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {protocol.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950">
                  {protocol.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {protocol.desc}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Warning Symptoms to Act On:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {protocol.symptoms.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Directions & Location Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-navy-950">
              Emergency Department Physical Access
            </h3>
            <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
              Direct, wide ambulance bay located at Gate 2, SG Highway, Bodakdev, Ahmedabad. Designed with dedicated ramp access to trauma resuscitation bays and express elevators directly to modular surgical theatres.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition-colors shrink-0"
          >
            View Campus Map & Contact
          </button>
        </div>
      </div>

      {/* Ambulance Dispatch Simulation Modal */}
      {dispatchModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
            <button
              onClick={() => {
                setDispatchModalOpen(false);
                setDispatched(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!dispatched ? (
              <form onSubmit={handleSimulateDispatch} className="space-y-4">
                <div className="flex items-center gap-2 text-red-600">
                  <Ambulance className="w-5 h-5" />
                  <h3 className="text-base font-bold text-navy-950">
                    Request Emergency Ambulance (Demo)
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <span className="font-bold">Demonstration Tool:</span> In a real critical medical emergency in India, always dial 108 or the hospital emergency desk directly.
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Emergency Nature:
                  </label>
                  <select
                    value={emergencyType}
                    onChange={(e) => setEmergencyType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-red-500"
                  >
                    <option>Cardiac / Severe Chest Pain</option>
                    <option>Stroke / Paralysis Symptoms</option>
                    <option>Road Accident / Heavy Trauma</option>
                    <option>Severe Respiratory Distress</option>
                    <option>Other Critical Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pickup Location / Area in Ahmedabad:
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Near Iscon Cross Road, SG Highway"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Caller Contact Number:
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientContact}
                    onChange={(e) => setPatientContact(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Ambulance className="w-4 h-4" />
                  <span>Simulate Dispatch Request</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-3">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-navy-950">
                  Ambulance Dispatched (Demo Simulation)
                </h3>
                <p className="text-xs text-slate-600">
                  Unit <span className="font-mono font-bold text-navy-900">ACLS-04</span> is mobilized towards <span className="font-semibold">{pickupLocation}</span>. Telemetry paramedics notified.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 text-left">
                  This demonstration simulation demonstrates how an interactive emergency dispatch flow functions on modern hospital portals.
                </div>
                <button
                  onClick={() => {
                    setDispatchModalOpen(false);
                    setDispatched(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-navy-900 text-white text-xs font-semibold"
                >
                  Close Simulation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
