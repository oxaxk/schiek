// File: src/pages/home/page.tsx
import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import SpecialsSection from './components/SpecialsSection';
import ContactSection from './components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <TeamSection />
        <SpecialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;