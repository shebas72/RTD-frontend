import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrackingModal } from './components/TrackingModal';
import { PickupModal } from './components/PickupModal';
import { PartnerModal } from './components/PartnerModal';

// Dedicated Multiple Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WarehousingPage } from './pages/WarehousingPage';
import { MerchantPortalPage } from './pages/MerchantPortalPage';
import { CoveragePage } from './pages/CoveragePage';
import { AboutPage } from './pages/AboutPage';
import { TrackingPage } from './pages/TrackingPage';
import { ContactPage } from './pages/ContactPage';

export type PageId = 
  | 'home' 
  | 'services' 
  | 'warehousing' 
  | 'merchant-portal' 
  | 'coverage' 
  | 'about' 
  | 'tracking' 
  | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeTrackingWaybill, setActiveTrackingWaybill] = useState<string>('RT-8942-BEY');
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  // Sync with browser hash and query params on mount & on popstate/hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home', 
        'services', 
        'warehousing', 
        'merchant-portal', 
        'coverage', 
        'about', 
        'tracking', 
        'contact'
      ];
      
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }

      // Check query params for tracking code
      const params = new URLSearchParams(window.location.search);
      const trackCode = params.get('track') || params.get('tracking_id');
      if (trackCode) {
        setActiveTrackingWaybill(trackCode);
        setCurrentPage('tracking');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const navigateToPage = (pageId: string) => {
    const target = (pageId === 'faq' ? 'contact' : pageId === 'rate-calculator' ? 'services' : pageId === 'about-gallery' ? 'about' : pageId) as PageId;
    setCurrentPage(target);
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTracking = (waybill?: string) => {
    if (waybill) {
      setActiveTrackingWaybill(waybill);
    }
    setIsTrackingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Header with Navigation for All Pages */}
      <Header
        onOpenTracking={handleOpenTracking}
        onOpenPickup={() => setIsPickupOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onSelectSection={navigateToPage}
        activeSection={currentPage}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onOpenTracking={handleOpenTracking}
            onOpenPickup={() => setIsPickupOpen(true)}
            onOpenPartner={() => setIsPartnerOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenPickup={() => setIsPickupOpen(true)}
            onOpenPartner={() => setIsPartnerOpen(true)}
          />
        )}

        {currentPage === 'warehousing' && (
          <WarehousingPage
            onOpenPartner={() => setIsPartnerOpen(true)}
            onOpenPickup={() => setIsPickupOpen(true)}
          />
        )}

        {currentPage === 'merchant-portal' && (
          <MerchantPortalPage
            onOpenPartner={() => setIsPartnerOpen(true)}
            onOpenPickup={() => setIsPickupOpen(true)}
            onTrackWaybill={handleOpenTracking}
          />
        )}

        {currentPage === 'coverage' && (
          <CoveragePage
            onOpenPickup={() => setIsPickupOpen(true)}
            onOpenPartner={() => setIsPartnerOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenPartner={() => setIsPartnerOpen(true)}
            onOpenPickup={() => setIsPickupOpen(true)}
          />
        )}

        {currentPage === 'tracking' && (
          <TrackingPage
            initialWaybill={activeTrackingWaybill}
            onOpenPickup={() => setIsPickupOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer with Site-wide Multi-page Navigation */}
      <Footer
        onSelectSection={navigateToPage}
        onOpenPickup={() => setIsPickupOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenTracking={() => handleOpenTracking()}
      />

      {/* Floating Lebanese WhatsApp Dispatch Widget */}
      <FloatingWhatsApp
        onOpenTracking={() => handleOpenTracking()}
        onOpenPickup={() => setIsPickupOpen(true)}
      />

      {/* Quick Modals */}
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
