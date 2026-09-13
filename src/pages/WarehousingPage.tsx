import React from 'react';
import { 
  Warehouse, 
  Boxes, 
  Zap, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  CheckCircle2,
  PackageCheck
} from 'lucide-react';
import { ImageSlider, SlideItem } from '../components/ImageSlider';
import { WarehouseFulfillmentInfographic } from '../components/infographics/WarehouseFulfillmentInfographic';
import { WarehousingSection } from '../components/WarehousingSection';

interface WarehousingPageProps {
  onOpenPartner: () => void;
  onOpenPickup: () => void;
}

export const WarehousingPage: React.FC<WarehousingPageProps> = ({
  onOpenPartner,
  onOpenPickup,
}) => {
  const warehouseSlides: SlideItem[] = [
    {
      id: 'wh-racks',
      image: '/gallery/gallery-3.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/3-768x456.jpeg',
      tag: 'Inventory Shelving',
      badge: 'SKU Bin System',
      title: 'High-Density Steel Racks in Corniche El Nahr',
      subtitle: 'Numbered bin locations mapped to your merchant dashboard for rapid, error-free pick and pack in under 4 minutes.',
      ctaText: 'Reserve Shelf Space',
      onCtaClick: onOpenPartner,
    },
    {
      id: 'wh-packaging',
      image: '/gallery/gallery-5.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/5-768x456.jpeg',
      tag: 'Packaging Operations',
      badge: 'Tamper-Evident Flyers',
      title: 'Protective Packaging & Thermal Waybill Labeling',
      subtitle: 'Our fulfillment staff inspects, bubble-wraps, and packages each order with your branded flyers and barcoded labels.',
      ctaText: 'Chat on WhatsApp',
      onCtaClick: () => {
        window.open('https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20am%20interested%20in%20warehouse%20storage%20and%20fulfillment%20services', '_blank');
      },
    },
    {
      id: 'wh-floor',
      image: '/gallery/gallery-6.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/6-768x456.jpeg',
      tag: 'Logistics Sorting Floor',
      badge: 'Central Beirut',
      title: 'Immediate Handoff to Outbound Delivery Vans',
      subtitle: 'Zero transit delay between warehouse shelving and delivery dispatch. Same-day Greater Beirut cutoff extended up to 2:00 PM.',
      ctaText: 'Request Facility Tour',
      onCtaClick: onOpenPartner,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Warehouse className="w-3.5 h-3.5" />
            <span>CENTRAL BEIRUT LOGISTICS FACILITY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Stop Storing Stock at Home. Fulfill from Central Beirut.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate living room inventory piles, pricey generator subscription fees, and packing headaches. Store your merchandise in our Corniche El Nahr facility with 24/7 backup power and instant van dispatch.
          </p>
        </div>
      </section>

      {/* SECTION 1: FACILITY IMAGE SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageSlider 
          slides={warehouseSlides} 
          autoPlayInterval={6000} 
          aspectRatio="hero"
        />
      </section>

      {/* SECTION 2: WAREHOUSE & FULFILLMENT INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WarehouseFulfillmentInfographic />
      </section>

      {/* SECTION 3: INTERACTIVE WAREHOUSING COST ESTIMATOR & STORAGE TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WarehousingSection
          onPartnerClick={onOpenPartner}
          onOpenPickupModal={onOpenPickup}
        />
      </section>

      {/* SECTION 4: LOCATION & POWER SAFEGUARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b101e] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Corniche El Nahr Logistics Hub, Beirut</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Why Location &amp; Power Infrastructure Matter in Lebanon
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Located adjacent to the Sin El Fil bridge and main Charles Helou coastal artery, our warehouse allows delivery couriers to avoid Beirut choke points while maintaining non-stop operations through high-output Perkins generators and solar arrays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono-tech">
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Perkins 150kVA Generator Array</span>
              </div>
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>HD Infrared CCTV &amp; Security Guards</span>
              </div>
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full Goods Insurance Against Damage &amp; Theft</span>
              </div>
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                <Boxes className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Integrated Shopify SKU Auto-Sync</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4 text-center">
            <h4 className="text-lg font-bold text-white font-display">
              Visit Our Beirut Warehouse
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Schedule a guided facility tour with our operations manager. Inspect our racks, packaging lines, and live dispatch floor.
            </p>
            <a
              href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20would%20like%20to%20schedule%20a%20warehouse%20facility%20tour%20in%20Beirut"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Schedule Tour on WhatsApp</span>
            </a>
            <span className="text-[11px] text-slate-500 font-mono-tech block">
              Monday – Friday: 9:00 AM – 5:00 PM
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
