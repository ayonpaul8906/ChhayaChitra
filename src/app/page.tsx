'use client';

import * as React from 'react';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { ShutterLoader } from '@/components/shutter-loader';
import { AboutSection } from '@/components/about-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { BehindTheLensSection } from '@/components/behind-the-lens-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Corresponds to the shutter animation duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ShutterLoader />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <BehindTheLensSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
