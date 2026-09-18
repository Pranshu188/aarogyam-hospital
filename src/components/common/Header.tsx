import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, Search, PhoneCall, ChevronRight, ChevronDown, HeartPulse, ShieldAlert, Package, HeartHandshake, HelpCircle } from 'lucide-react';
import { useRouter } from '../../router/RouterContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { route, navigate, openBookingModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientCareDropdown, setPatientCareDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPatientCareDropdown(false);
  }, [route.path]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPatientCareDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Core desktop navigation links
  const primaryNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Specialties', path: '/specialties' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Facilities', path: '/facilities' },
  ];

  const patientCareLinks = [
    { label: 'Health Packages', path: '/packages', icon: Package, desc: 'Preventative checkup plans' },
    { label: 'Patient Services & TPA', path: '/patient-services', icon: HeartHandshake, desc: 'Insurance, billing & roadmap' },
    { label: 'Frequently Asked Questions', path: '/faq', icon: HelpCircle, desc: 'Admissions, timings & reports' },
    { label: 'Emergency 24/7 Guide', path: '/emergency', icon: ShieldAlert, desc: 'Trauma & acute response' },
  ];

  // All links for mobile menu
  const mobileNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Specialties', path: '/specialties' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Health Packages', path: '/packages' },
    { label: 'Patient Services & TPA', path: '/patient-services' },
    { label: 'Emergency Care', path: '/emergency' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/' && route.path === '/') return true;
    if (path !== '/' && route.path.startsWith(path)) return true;
    return false;
  };

  const isPatientCareActive = () => {
    return ['/packages', '/patient-services', '/faq'].some((p) => route.path.startsWith(p));
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft border-b border-slate-200/80 py-2'
          : 'bg-white border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            onClick={() => navigate('/')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg text-left shrink-0"
            aria-label="Aarogyam Hospital Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Streamlined Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs font-semibold text-slate-700">
            {primaryNavLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-2.5 py-1.5 rounded-lg transition-colors relative whitespace-nowrap ${
                    active
                      ? 'text-navy-950 font-bold bg-slate-100'
                      : 'hover:text-navy-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-teal-600 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Patient Care Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setPatientCareDropdown(true)}
              onMouseLeave={() => setPatientCareDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setPatientCareDropdown(!patientCareDropdown)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  isPatientCareActive()
                    ? 'text-navy-950 font-bold bg-slate-100'
                    : 'hover:text-navy-950 hover:bg-slate-50'
                }`}
              >
                <span>Patient Care</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${patientCareDropdown ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
                {isPatientCareActive() && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-teal-600 rounded-full" />
                )}
              </button>

              {patientCareDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-dropdown border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {patientCareLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => {
                          setPatientCareDropdown(false);
                          navigate(item.path);
                        }}
                        className="w-full px-3.5 py-2.5 text-left hover:bg-slate-50 transition-colors flex items-start gap-2.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-teal-50 group-hover:text-teal-700 text-slate-600 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-navy-950 group-hover:text-teal-700 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <button
              onClick={() => navigate('/contact')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                isLinkActive('/contact')
                  ? 'text-navy-950 font-bold bg-slate-100'
                  : 'hover:text-navy-950 hover:bg-slate-50'
              }`}
            >
              Contact
              {isLinkActive('/contact') && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-teal-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Desktop Right Actions: Compact & In-Frame */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Emergency Button */}
            <button
              onClick={() => navigate('/emergency')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200/70 transition-colors shadow-sm whitespace-nowrap"
              title="24/7 Emergency Care"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Emergency 24/7</span>
            </button>

            {/* Find Doctor */}
            <button
              onClick={() => navigate('/doctors')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-navy-950 hover:bg-slate-100 border border-slate-200 transition-colors whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Find Doctor</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => openBookingModal()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Bar (Menu toggle + quick appointment button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBookingModal()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-navy-900 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>Book Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] z-50 bg-navy-950/40 backdrop-blur-sm">
          <div className="bg-white border-b border-slate-200 max-h-[85vh] overflow-y-auto px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
            {/* Quick emergency callout */}
            <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wide">24/7 Emergency</div>
                  <a href="tel:+917945678900" className="text-sm font-extrabold text-red-900">
                    +91 79 4567 8900
                  </a>
                </div>
              </div>
              <button
                onClick={() => navigate('/emergency')}
                className="text-xs font-semibold text-red-700 underline"
              >
                Services
              </button>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-1 gap-1 divide-y divide-slate-100">
              {mobileNavLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`flex items-center justify-between py-3 px-2 text-sm font-medium transition-colors ${
                      active ? 'text-teal-700 font-bold bg-teal-50/60 rounded-lg' : 'text-slate-700 hover:text-navy-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-teal-600' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate('/doctors')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Find Doctor</span>
              </button>
              <button
                onClick={() => openBookingModal()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 shadow-md"
              >
                <HeartPulse className="w-4 h-4 text-teal-400" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
