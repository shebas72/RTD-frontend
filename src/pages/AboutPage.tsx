import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Truck, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  FileCheck 
} from 'lucide-react';
import { ImageSlider, SlideItem } from '../components/ImageSlider';
import { AboutGallery } from '../components/AboutGallery';

interface AboutPageProps {
  onOpenPartner: () => void;
  onOpenPickup: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenPartner,
  onOpenPickup,
}) => {
  const operationsSlides: SlideItem[] = [
    {
      id: 'op-fleet',
      image: '/gallery/gallery-2.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/2-768x456.jpeg',
      tag: 'Commercial Fleet',
      badge: 'Modern Fleet',
      title: 'High-Roof Commercial Cargo Vans',
      subtitle: 'Modern delivery vans equipped with internal shelving, security partitions, and real-time GPS fleet telemetry.',
      ctaText: 'Become a Partner',
      onCtaClick: onOpenPartner,
    },
    {
      id: 'op-motos',
      image: '/gallery/gallery-7.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/7-768x456.jpeg',
      tag: 'Motorcycle Dispatch Squad',
      badge: 'Urban Express',
      title: 'Beirut Traffic-Bypassing Moto Couriers',
      subtitle: 'Trained couriers carrying insulated delivery boxes for same-day express dispatches across Greater Beirut.',
      ctaText: 'Book Courier Pickup',
      onCtaClick: onOpenPickup,
    },
    {
      id: 'op-sorting',
      image: '/gallery/gallery-1.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-6.41.54-PM-768x456.jpeg',
      tag: 'Central Sorting Hub',
      badge: 'Corniche El Nahr',
      title: 'Automated Barcode Intake & Dispatch',
      subtitle: 'Where parcels are sorted overnight into regional delivery zones across the 8 Lebanese governorates.',
      ctaText: 'Tour Facility',
      onCtaClick: onOpenPartner,
    },
    {
      id: 'op-linehaul',
      image: '/gallery/gallery-8.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/8-768x456.jpeg',
      tag: 'Linehaul Logistics',
      badge: 'Scheduled Shuttles',
      title: 'Daily Inter-Hub Shuttles to Tripoli, Saida & Bekaa',
      subtitle: 'Scheduled linehaul vans ensuring next-day delivery arrives on time regardless of weather or regional conditions.',
      ctaText: 'View Network',
      onCtaClick: onOpenPickup,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>ABOUT ROAD TRAIN DELIVERIES S.A.R.L.</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Logistics Built on Integrity, Speed &amp; Strict Accountability
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Founded to solve the persistent challenges of Lebanese e-commerce: uncollected COD cash, fluctuating taxi rates, and missing packages. Today, we power hundreds of Lebanese merchants.
          </p>
        </div>
      </section>

      {/* SECTION 1: OPERATIONS IMAGE SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageSlider 
          slides={operationsSlides} 
          autoPlayInterval={5500} 
          aspectRatio="hero"
        />
      </section>

      {/* SECTION 2: COMPANY ETHOS & STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              100% Financial Accountability
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We understand that COD cash is the lifeblood of your Lebanese business. Every dollar and lira collected is protected under video surveillance and remitted strictly on schedule without currency deductions.
            </p>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              Company-Owned Modern Fleet
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unlike gig platforms that rely on random, unidentified taxi drivers, RT Deliveries operates a dedicated branded fleet with vetted, uniformed full-time Lebanese drivers who treat your customers with respect.
            </p>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              Licensed Lebanese Operator
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Road Train Deliveries S.A.R.L. is a registered Lebanese logistics entity compliant with local commercial law, providing official commercial invoices, tax receipts, and corporate B2B contracts.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL OPERATIONS PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutGallery />
      </section>

    </div>
  );
};
