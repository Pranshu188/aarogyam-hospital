import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!phone.trim() || !/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Contact & Directions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Aarogyam Multispeciality Hospital is located along the SG Highway corridor in Bodakdev, Ahmedabad. Reach our helpdesk, OPD coordination, or administration.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Demonstration Disclaimer notice */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Demonstration Portfolio Notice:</span> The hospital contact phone numbers, email addresses, and form submission systems shown here are fictional demonstration assets created for web experience review.
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">24/7 Emergency Helpline</h3>
            <a href="tel:+917945678900" className="text-base font-black text-navy-950 hover:text-red-600 block">
              +91 79 4567 8900
            </a>
            <p className="text-[11px] text-slate-400">Continuous ambulance dispatch & trauma response</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">OPD & Visiting Timings</h3>
            <div className="text-sm font-black text-navy-950">
              08:00 AM – 08:00 PM
            </div>
            <p className="text-[11px] text-slate-400">Monday to Saturday • Sunday Emergency Only</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Patient Care Email</h3>
            <a href="mailto:care@aarogyamhospital.demo" className="text-sm font-bold text-navy-950 hover:text-teal-600 block truncate">
              care@aarogyamhospital.demo
            </a>
            <p className="text-[11px] text-slate-400">Inpatient inquiries, reports & corporate tie-ups</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Campus Address</h3>
            <div className="text-xs font-bold text-navy-950 leading-snug">
              Bodakdev, Sarkhej - Gandhinagar Highway
            </div>
            <p className="text-[11px] text-slate-400">Ahmedabad, Gujarat 380054, India</p>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-navy-950">Send Us an Inquiry</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and our patient relations desk will get back to you.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 ${
                        errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (10 digits) *</label>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 ${
                        errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 ${
                        errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Department</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Health Checkup inquiry, TPA query"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can assist you..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 ${
                      errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-teal-400" />
                  <span>Send Message (Demo)</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Thank You, {name}!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been submitted in demonstration mode. In a production environment, our patient coordination desk would contact you at {phone} or {email}.
                </p>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Interactive Map UI Placeholder */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy-950">Campus Location & Landmarks</h3>
              <p className="text-xs text-slate-500 mt-1">
                Located on SG Highway with direct arterial access to Gandhinagar, North Gujarat, and Central Ahmedabad.
              </p>
            </div>

            {/* Visual map preview container */}
            <div className="rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden relative aspect-video flex flex-col items-center justify-center text-center p-6 space-y-2">
              <MapPin className="w-8 h-8 text-red-500 animate-bounce" />
              <div className="text-xs font-bold text-navy-950">
                AAROGYAM MULTISPECIALITY HOSPITAL
              </div>
              <div className="text-[11px] text-slate-500 max-w-xs">
                Opposite Iscon Mega Mall, SG Highway, Bodakdev, Ahmedabad, Gujarat 380054
              </div>
              <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200 mt-2">
                Coordinates: 23.0338° N, 72.5074° E
              </span>
            </div>

            {/* Key transit distance points */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>Ahmedabad International Airport (AMD):</span>
                <span className="font-bold text-navy-950">16 km (25 mins)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>Kalupur Railway Junction:</span>
                <span className="font-bold text-navy-950">12 km (20 mins)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Metro Station (Thaltej):</span>
                <span className="font-bold text-navy-950">1.8 km (5 mins)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
