import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CurriculumSection from './sections/CurriculumSection';
import InstructorSection from './sections/InstructorSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';

export default function Home() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <InstructorSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </Box>
  );
}
