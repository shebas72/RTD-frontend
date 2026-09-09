import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { RateCalculator } from './components/RateCalculator';
import { MerchantDashboardPreview } from './components/MerchantDashboardPreview';
import { WarehousingSection } from './components/WarehousingSection';
import { LebanonCoverage } from './components/LebanonCoverage';
import { AboutGallery } from './components/AboutGallery';
import { ComparisonSection } from './components/ComparisonSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrackingModal } from './components/TrackingModal';
import { PickupModal } from './components/PickupModal';
import { PartnerModal } from './components/PartnerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeTrackingWaybill, setActiveTrackingWaybill] = useState<string>('');
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  // Check URL query parameters for track on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackCode = params.get('track') || params.get('tracking_id');
    if (trackCode) {
      setActiveTrackingWaybill(trackCode);
      setIsTrackingOpen(true);
    }
  }, []);

  const handleOpenTracking = (waybill?: string) => {
    if (waybill) {
      setActiveTrackingWaybill(waybill);
    }
    setIsTrackingOpen(true);
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Header */}
      <Header
        onOpenTracking={handleOpenTracking}
        onOpenPickup={() => setIsPickupOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onSelectSection={handleSelectSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with interactive Quick Action Console */}
        <Hero
          onTrackWaybill={handleOpenTracking}
          onOpenPickupModal={() => setIsPickupOpen(true)}
          onOpenPartnerModal={() => setIsPartnerOpen(true)}
          onSelectSection={handleSelectSection}
        />

        {/* Core Services for E-Commerce */}
        <ServicesOverview
          onSchedulePickup={() => setIsPickupOpen(true)}
          onPartnerClick={() => setIsPartnerOpen(true)}
          onSelectSection={handleSelectSection}
        />

        {/* Interactive Rate & Remittance Calculator */}
        <RateCalculator
          onSchedulePickup={() => setIsPickupOpen(true)}
          onPartnerClick={() => setIsPartnerOpen(true)}
        />

        {/* Live Merchant Software Dashboard Demo */}
        <MerchantDashboardPreview
          onTrackWaybill={handleOpenTracking}
          onOpenPickupModal={() => setIsPickupOpen(true)}
          onOpenPartnerModal={() => setIsPartnerOpen(true)}
        />

        {/* Warehousing & Inventory Storage Section */}
        <WarehousingSection
          onPartnerClick={() => setIsPartnerOpen(true)}
          onOpenPickupModal={() => setIsPickupOpen(true)}
        />

        {/* Lebanon Coverage & Logistics Hubs */}
        <LebanonCoverage
          onSchedulePickup={() => setIsPickupOpen(true)}
          onPartnerClick={() => setIsPartnerOpen(true)}
        />

        {/* Real Operations & Facilities Gallery from rtdeliveries.net */}
        <AboutGallery
          onSchedulePickup={() => setIsPickupOpen(true)}
          onPartnerClick={() => setIsPartnerOpen(true)}
        />

        {/* Why Choose RT Deliveries Comparison */}
        <ComparisonSection
          onPartnerClick={() => setIsPartnerOpen(true)}
          onSchedulePickup={() => setIsPickupOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenPickup={() => setIsPickupOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenTracking={() => handleOpenTracking()}
      />

      {/* Floating Lebanese WhatsApp Dispatch Widget */}
      <FloatingWhatsApp
        onOpenTracking={() => handleOpenTracking()}
        onOpenPickup={() => setIsPickupOpen(true)}
      />

      {/* Modals */}
      <TrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        initialWaybill={activeTrackingWaybill}
        onSchedulePickup={() => {
          setIsTrackingOpen(false);
          setIsPickupOpen(true);
        }}
      />

      <PickupModal
        isOpen={isPickupOpen}
        onClose={() => setIsPickupOpen(false)}
      />

      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </div>
  );
}
