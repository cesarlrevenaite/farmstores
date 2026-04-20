import React from 'react';
import { Hero } from './Hero';
import { BakerySection } from './BakerySection';
import { DairySection } from './DairySection';
import { CategoriesSection } from './CategoriesSection';
import { MenuSection } from './MenuSection';
import { OrderNowSection } from './OrderNowSection';
import { AboutUsSection } from './AboutUsSection';
import { LicenseSection } from './LicenseSection';
import { CallToAction } from './CallToAction';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BakerySection />
      <DairySection />
      <CategoriesSection />
      <MenuSection />
      <OrderNowSection />
      <AboutUsSection />
      <LicenseSection />
      <CallToAction />
    </div>
  );
}
