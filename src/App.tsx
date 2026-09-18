import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { DemoDisclaimer } from './components/common/DemoDisclaimer';
import { TopBar } from './components/common/TopBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileActionBar } from './components/common/MobileActionBar';
import { AppointmentModal } from './components/common/AppointmentModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { SpecialtyDetailPage } from './pages/SpecialtyDetailPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { PackagesPage } from './pages/PackagesPage';
import { PatientServicesPage } from './pages/PatientServicesPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

const AppContent: React.FC = () => {
  const { route } = useRouter();

  // Page Routing Switch
  const renderCurrentPage = () => {
    const { path } = route;

    if (path === '/' || path === '') return <HomePage />;
    if (path === '/about') return <AboutPage />;
    if (path === '/doctors') return <DoctorsPage />;
    if (path.startsWith('/doctors/')) return <DoctorDetailPage />;
    if (path === '/specialties') return <SpecialtiesPage />;
    if (path.startsWith('/specialties/')) return <SpecialtyDetailPage />;
    if (path === '/treatments') return <TreatmentsPage />;
    if (path === '/facilities') return <FacilitiesPage />;
    if (path === '/packages') return <PackagesPage />;
    if (path === '/patient-services') return <PatientServicesPage />;
    if (path === '/book-appointment') return <AppointmentPage />;
    if (path === '/emergency') return <EmergencyPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/faq') return <FAQPage />;

    return <HomePage />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 antialiased">
      {/* Top Demo Disclaimer */}
      <DemoDisclaimer />

      {/* Top Bar for Desktop */}
      <TopBar />

      {/* Sticky Main Navigation Header */}
      <Header />

      {/* Main Routed Page Content */}
      <main className="flex-grow pb-16 md:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Global Large Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileActionBar />

      {/* Global Interactive Appointment Modal */}
      <AppointmentModal />
    </div>
  );
};

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
