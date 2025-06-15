
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyItWorksSection from '@/components/WhyItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyItWorksSection />
      <TestimonialsSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
