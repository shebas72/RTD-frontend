import React from 'react';
import { 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Warehouse, 
  Sparkles, 
  Calendar, 
  Layers, 
  Clock,
  ExternalLink,
  MessageSquare,
  Building2,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ImageSlider, SlideItem } from '../components/ImageSlider';
import { PricingInfographic } from '../components/infographics/PricingInfographic';
import { DeliveryWorkflowInfographic } from '../components/infographics/DeliveryWorkflowInfographic';
import { CodCashFlowInfographic } from '../components/infographics/CodCashFlowInfographic';
import { LinehaulNetworkInfographic } from '../components/infographics/LinehaulNetworkInfographic';
import { ServicesOverview } from '../components/ServicesOverview';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenTracking: (waybill?: string) => void;
  onOpenPickup: () => void;
  onOpenPartner: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTracking,
  onOpenPickup,
  onOpenPartner,
}) => {
  const operationsSlides: SlideItem[] = [
    {
      id: 'slide-fleet',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=80',
      tag: 'Dedicated Delivery Fleet',
      badge: 'All 8 Governorates',
      title: 'Company-Owned Vans & Controlled Last-Mile Routes',
      subtitle: 'Uniformed drivers, GPS tracking on all delivery cargo, and guaranteed next-day delivery across all 26 Lebanese districts.',
      ctaText: 'View 26 Districts Directory',
      onCtaClick: () => onNavigate('coverage'),
    },
    {
      id: 'slide-express',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80',
      tag: 'Rapid Moto Dispatch',
      badge: 'Beirut Metro Core',
      title: 'Motorized Urban Squad for Beirut Congestion Bypass',
      subtitle: 'Navigating Achrafieh, Hamra, and Verdun in peak traffic hours. Rapid 2-4 hour point-to-point dispatches and doorstep size exchanges.',
      ctaText: 'Book Rapid Pickup',
      onCtaClick: onOpenPickup,
    },
    {
      id: 'slide-warehouse',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
      tag: 'Central Beirut Facility',
      badge: '1,500 m² Facility',
      title: 'Corniche El Nahr Central Storage & Pick-and-Pack',
      subtitle: 'Eliminate expensive private generator bills and crowded stockrooms. Store your inventory safely with barcode tracking, CCTV, and same-day packaging.',
      ctaText: 'Explore Warehousing',
      onCtaClick: () => onNavigate('warehousing'),
    },
    {
      id: 'slide-sorting',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80',
      tag: 'Automated Hub Intake',
      badge: 'High-Speed Barcode Scanners',
      title: 'Morning Intake Scans & Scheduled Linehaul Departures',
      subtitle: 'Daily departures connecting Beirut with Keserwan, North Lebanon, Saida, Tyre, and the Bekaa Valley with complete parcel accountability.',
      ctaText: 'See Linehaul Radar',
      onCtaClick: () => onNavigate('coverage'),
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO WITH REAL-TIME DISPATCH COCKPIT */}
      <Hero
        onTrackWaybill={(waybill) => onOpenTracking(waybill)}
        onOpenPickupModal={onOpenPickup}
        onOpenPartnerModal={onOpenPartner}
        onSelectSection={(sec) => onNavigate(sec)}
      />

      {/* 2. CINEMATIC OPERATIONS HUD SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-orange-400 font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Ground Operations &amp; Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
              Lebanon&apos;s Most Reliable Logistics Fleet
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Equipped with company-owned vans, high-mobility motorcycle couriers, and our 1,500 m² central sorting facility in Corniche El Nahr, Beirut.
            </p>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="text-xs font-mono-tech text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>View Full Facility Gallery</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <ImageSlider
          slides={operationsSlides}
          autoPlayInterval={5500}
          aspectRatio="hero"
          showThumbnails={true}
        />
      </section>

      {/* 3. TRANSPARENT FLAT-RATE PRICING INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingInfographic
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* 4. 5-STAGE PRECISION DISPATCH PIPELINE INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeliveryWorkflowInfographic onSchedulePickup={onOpenPickup} />
      </section>

      {/* 5. DUAL-CURRENCY COD REMITTANCE ENGINE INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CodCashFlowInfographic />
      </section>

      {/* 6. LEBANON LINEHAUL NETWORK INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LinehaulNetworkInfographic />
      </section>

      {/* 7. CORE SERVICES & INTEGRATION BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated Logistics Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Built for Lebanese Brands &amp; Independent Merchants
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            From social media fashion boutiques to high-volume FMCG distributors, our modular services scale with your order volume.
          </p>
        </div>

        <ServicesOverview
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
          onSelectSection={(sec) => onNavigate(sec)}
        />
      </section>

      {/* 8. HIGH-IMPACT CONVERSION COMMAND BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-600 via-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-white text-xs font-mono-tech font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Zero Setup Fees • Instant Same-Day Onboarding</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
              Ready to Upgrade Your Delivery Standard?
            </h3>

            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              Book a courier pickup right now, connect your Shopify or WooCommerce store in 60 seconds, or tour our Corniche El Nahr fulfillment hub. Zero hidden fuel surcharges, guaranteed USD/LBP cash collection.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-orange-100 font-mono-tech">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">$3 Flat</span>
                <span>Beirut Metro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">$4 Flat</span>
                <span>All Lebanon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">100%</span>
                <span>Cash Remittance</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <button
              onClick={onOpenPartner}
              className="px-6 py-4 bg-slate-950 hover:bg-slate-900 active:bg-black text-white font-bold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Apply for Merchant Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPickup}
              className="px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-sm rounded-2xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Schedule Free Pickup</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
