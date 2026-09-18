import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Send, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { navigate, openBookingModal } = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Cards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-navy-800/80">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-900/60 border border-navy-800">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-red-500 animate-soft-pulse" />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-red-400">24/7 Emergency Helpline</h4>
              <a href="tel:+917945678900" className="text-xl font-bold text-white hover:text-red-300 transition-colors block mt-0.5">
                +91 79 4567 8900
              </a>
              <p className="text-xs text-slate-400 mt-1">Direct ambulance dispatch & resuscitation team</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-900/60 border border-navy-800">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-teal-400">Patient Care Desk</h4>
              <a href="mailto:care@aarogyamhospital.demo" className="text-base font-semibold text-white hover:text-teal-300 transition-colors block mt-0.5">
                care@aarogyamhospital.demo
              </a>
              <p className="text-xs text-slate-400 mt-1">Inpatient queries, OPD schedules & reports</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-900/60 border border-navy-800">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400">Campus Location</h4>
              <p className="text-sm font-semibold text-white mt-0.5">
                Bodakdev, Sarkhej - Gandhinagar Highway
              </p>
              <p className="text-xs text-slate-400 mt-1">Ahmedabad, Gujarat 380054, India</p>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1 & 2: Hospital Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Aarogyam Multispeciality Hospital is envisioned as a premier healthcare institution in Ahmedabad, Gujarat. Combining world-class clinical expertise, advanced medical robotic technology, and compassionate patient-first care across 25+ specialties.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>NABH Accredited (Demo)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>NABL Lab Standards</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((network) => (
                <span
                  key={network}
                  className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center text-xs font-semibold cursor-pointer transition-colors border border-navy-800"
                  title={network}
                >
                  {network[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-teal-400 transition-colors">About Aarogyam</button>
              </li>
              <li>
                <button onClick={() => navigate('/doctors')} className="hover:text-teal-400 transition-colors">Find a Doctor</button>
              </li>
              <li>
                <button onClick={() => navigate('/specialties')} className="hover:text-teal-400 transition-colors">Medical Specialties</button>
              </li>
              <li>
                <button onClick={() => navigate('/treatments')} className="hover:text-teal-400 transition-colors">Treatments & Procedures</button>
              </li>
              <li>
                <button onClick={() => navigate('/facilities')} className="hover:text-teal-400 transition-colors">Hospital Facilities</button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-teal-400 transition-colors">Contact & Directions</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Patient Care */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Patient Care</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => openBookingModal()} className="hover:text-teal-400 transition-colors font-medium text-teal-300">Book Appointment</button>
              </li>
              <li>
                <button onClick={() => navigate('/packages')} className="hover:text-teal-400 transition-colors">Health Packages</button>
              </li>
              <li>
                <button onClick={() => navigate('/patient-services')} className="hover:text-teal-400 transition-colors">Insurance & Cashless TPA</button>
              </li>
              <li>
                <button onClick={() => navigate('/patient-services')} className="hover:text-teal-400 transition-colors">Patient Journey Guide</button>
              </li>
              <li>
                <button onClick={() => navigate('/faq')} className="hover:text-teal-400 transition-colors">Frequently Asked Questions</button>
              </li>
              <li>
                <button onClick={() => navigate('/emergency')} className="hover:text-red-400 transition-colors text-red-400">Emergency 24/7 Protocols</button>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Tips */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Health Updates</h3>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to receive practical health tips, seasonal wellness guidelines, and preventative advice from our specialists.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-600/40 text-teal-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Thank you! You are subscribed to Aarogyam health updates (demo).</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-navy-900 border border-navy-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to health updates"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-slate-500 block">We respect your privacy. No spam.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Aarogyam Multispeciality Hospital, Ahmedabad. All rights reserved.
            <span className="block text-slate-500 text-[11px] mt-0.5">
              Demonstration portfolio website. Fictional medical institution designed for healthcare presentation.
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={() => navigate('/faq')} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <span className="text-slate-700">•</span>
            <button onClick={() => navigate('/faq')} className="hover:text-slate-300 transition-colors">Terms of Use</button>
            <span className="text-slate-700">•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-slate-300 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
