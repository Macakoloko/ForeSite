
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  const sections = {
    sobre: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    servicos: useRef<HTMLDivElement>(null),
    clientes: useRef<HTMLDivElement>(null),
    contato: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-dark-bg text-dark-text font-sans">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection onNavigate={() => scrollToSection('portfolio')} />
        <div ref={sections.sobre}>
          <AboutSection />
        </div>
        <div ref={sections.portfolio}>
          <PortfolioSection />
        </div>
        <div ref={sections.servicos}>
          <ServicesSection />
        </div>
        <div ref={sections.clientes}>
          <TestimonialsSection />
        </div>
        <div ref={sections.contato}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;