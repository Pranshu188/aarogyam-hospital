import React from 'react';
import { Hero } from '../components/home/Hero';
import { QuickActions } from '../components/home/QuickActions';
import { StatsSection } from '../components/home/StatsSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { SpecialtiesPreview } from '../components/home/SpecialtiesPreview';
import { FeaturedDoctors } from '../components/home/FeaturedDoctors';
import { EmergencyBanner } from '../components/home/EmergencyBanner';
import { TechnologySection } from '../components/home/TechnologySection';
import { PackagesPreview } from '../components/home/PackagesPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ArticlesPreview } from '../components/home/ArticlesPreview';
import { FAQPreview } from '../components/home/FAQPreview';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickActions />
      <StatsSection />
      <AboutPreview />
      <SpecialtiesPreview />
      <FeaturedDoctors />
      <EmergencyBanner />
      <TechnologySection />
      <PackagesPreview />
      <TestimonialsSection />
      <ArticlesPreview />
      <FAQPreview />
    </div>
  );
};
