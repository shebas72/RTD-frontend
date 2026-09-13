import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Warehouse, 
  Sparkles, 
  Zap, 
  DollarSign, 
  RefreshCw, 
  Package, 
  Layers, 
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

export interface ServiceSlide {
  id: string;
  category: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  fallbackImage: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  ctaLabel: string;
  onCtaClick?: () => void;
  pricingSummary: string;
}

interface ServicesSliderProps {
  onSchedulePickup: () => void;
  onPartnerClick: () => void;
  onNavigateSection?: (sectionId: string) => void;
  className?: string;
}

export const ServicesSlider: React.FC<ServicesSliderProps> = ({
  onSchedulePickup,
  onPartnerClick,
  onNavigateSection,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const services: ServiceSlide[] = [
    {
      id: 'cod-delivery',
      category: 'LAST-MILE LOGISTICS',
      badge: '$3 Beirut • $4 Lebanon',
      title: 'Door-to-Door Delivery & Dual-Currency COD',
      tagline: 'Nationwide coverage with guaranteed 48h cash remittance',
      description: 'The backbone of Lebanese e-commerce. Fast door-to-door distribution covering all 26 districts in Lebanon. We collect Cash on Delivery in clean USD or Lebanese Pounds at transparent daily rates and remit directly to your ledger.',
      image: '/gallery/gallery-2.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/2-768x456.jpeg',
      icon: DollarSign,
      highlights: [
        'Flat $3 inside Beirut and $4 across all other 7 governorates',
        'Dual-currency collection in tamper-evident security deposit bags',
        'Direct phone/WhatsApp recipient confirmation before arrival',
        'Weekly or 48-hour cash remittances via cash, Whish, or bank'
      ],
      ctaLabel: 'Book Courier Pickup',
      onCtaClick: onSchedulePickup,
      pricingSummary: 'Starting at $3.00 Flat / Parcel'
    },
    {
      id: 'express-moto',
      category: 'RAPID URBAN COURIER',
      badge: '2 - 4 Hour SLA',
      title: 'Beirut Traffic Bypass & Express Moto Dispatch',
      tagline: 'High-agility urban fleet for rapid intra-city deliveries',
      description: 'Beat the heavy Beirut congestion in Achrafieh, Hamra, Verdun, Badaro, Hazmieh, and Jdeideh. Our motorized courier squad provides same-day rapid dispatches for urgent orders, documents, and time-critical deliveries.',
      image: '/gallery/gallery-7.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/7-768x456.jpeg',
      icon: Zap,
      highlights: [
        '2 to 4 hour delivery window within Greater Beirut Metro',
        'Bypasses peak morning & afternoon coastal highway traffic',
        'Real-time courier GPS tracking and SMS alerts to recipients',
        'Instant digital proof-of-delivery with customer signature'
      ],
      ctaLabel: 'Book Urgent Express Moto',
      onCtaClick: onSchedulePickup,
      pricingSummary: 'Express Intra-Beirut Rate'
    },
    {
      id: 'warehousing-fulfillment',
      category: 'FULFILLMENT & STORAGE',
      badge: '1,500 m² Beirut Hub',
      title: 'Corniche El Nahr Warehousing & Pick-and-Pack',
      tagline: 'Eliminate private generator costs and stockroom clutter',
      description: 'Store your inventory in our central Beirut logistics center with 24/7 generator power, CCTV security, climate control, and barcode SKU tracking. When an order lands on your Shopify or Instagram, we pick, pack, and ship immediately.',
      image: '/gallery/gallery-3.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/3-768x456.jpeg',
      icon: Warehouse,
      highlights: [
        'Central Beirut location with 24/7 power & full security',
        'Barcode intake, inventory management, and automated stock alerts',
        'Shopify & WooCommerce direct API sync for zero-touch dispatch',
        'Complimentary pickup from your workshop or supplier to warehouse'
      ],
      ctaLabel: 'Explore Warehousing Plans',
      onCtaClick: () => onNavigateSection ? onNavigateSection('warehousing') : onPartnerClick(),
      pricingSummary: 'Flexible Cubic-Shelf Storage'
    },
    {
      id: 'doorstep-exchanges',
      category: 'REVERSE LOGISTICS',
      badge: 'Apparel & Footwear Specialist',
      title: 'Doorstep Garment & Size Exchanges',
      tagline: 'Seamless reverse logistics that boosts customer loyalty',
      description: 'The number one headache for Lebanese fashion merchants solved. Our couriers bring the alternative size to the customer, inspect the returned garment for unworn condition and intact tags at the door, and swap on the spot.',
      image: '/gallery/gallery-5.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/5-768x456.jpeg',
      icon: RefreshCw,
      highlights: [
        'Immediate size swap at customer doorstep with zero friction',
        'Rigorous physical inspection of garment tags and condition',
        'Automated COD price adjustment for upgrades or partial refunds',
        'Returned merchandise returned to your store the very next day'
      ],
      ctaLabel: 'Partner for Exchanges',
      onCtaClick: onPartnerClick,
      pricingSummary: 'Standard Rate + $1 Exchange Fee'
    },
    {
      id: 'packaging-supplies',
      category: 'MERCHANT PACKAGING',
      badge: 'Free with Account',
      title: 'Complimentary Flyer Bags & Thermal Barcode Labels',
      tagline: 'Enterprise unboxing presentation for every local brand',
      description: 'Upgrade your brand image. We equip our active dispatch merchants with high-density, tamper-evident RT flyer bags in Small, Medium, and Large sizes, plus thermal A6 barcode shipping waybills free of charge.',
      image: '/gallery/gallery-6.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/6-768x456.jpeg',
      icon: Package,
      highlights: [
        'Heavy-duty, waterproof poly flyers with tamper-evident seal',
        'Complimentary weekly supply replenishment for active accounts',
        'Thermal barcode waybill labels scanned at every checkpoint',
        'Protects customer confidentiality and prevents en-route tampering'
      ],
      ctaLabel: 'Claim Merchant Starter Pack',
      onCtaClick: onPartnerClick,
      pricingSummary: 'Included 100% Free'
    },
    {
      id: 'linehaul-shuttles',
      category: 'INTER-CITY NETWORK',
      badge: 'Daily Scheduled Runs',
      title: 'Scheduled Regional Linehaul Shuttles',
      tagline: 'Connecting Beirut to North, South, and the Bekaa Valley',
      description: 'Company-owned high-capacity cargo transport shuttling between central Beirut and regional distribution terminals in Tripoli, Saida, Zahle, and Keserwan twice daily to guarantee next-day delivery across Lebanon.',
      image: '/gallery/gallery-8.jpeg',
      fallbackImage: 'https://rtdeliveries.net/wp-content/uploads/2025/10/8-768x456.jpeg',
      icon: Truck,
      highlights: [
        'Scheduled daily linehaul runs with GPS real-time tracking',
        'Bulk B2B pallet and multi-carton transfer capabilities',
        'Strict chain of custody with barcode scan at each hub gate',
        'Zero remote-area fuel penalties for merchant accounts'
      ],
      ctaLabel: 'View Lebanon Network',
      onCtaClick: () => onNavigateSection ? onNavigateSection('coverage') : onSchedulePickup(),
      pricingSummary: 'Nationwide Flat Rate Structure'
    },
  ];

  // Auto-advance timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, services.length, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const active = services[currentIndex];
  const Icon = active.icon;

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* 1. Interactive Service Category Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono-tech text-xs">
        {services.map((service, idx) => {
          const isSelected = currentIndex === idx;
          const ServiceIcon = service.icon;
          return (
            <button
              key={service.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/30'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
              }`}
            >
              <ServiceIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-orange-400'}`} />
              <span>{service.category}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Main High-Tech Service Image Slider Card */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0a0f1d] border border-slate-800 shadow-2xl">
        
        {/* Animated Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 p-2 bg-gradient-to-b from-black/80 to-transparent">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 transition-all cursor-pointer"
              title={`Switch to service ${idx + 1}`}
            >
              <div
                className={`h-full bg-orange-500 transition-all ${
                  idx === currentIndex
                    ? 'w-full'
                    : idx < currentIndex
                    ? 'w-full opacity-60'
                    : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Two-Column Cinematic Layout: Image & Telemetry Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left / Top: Photographic Visual Stage (Col 7) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[300px] overflow-hidden bg-slate-950">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-500"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = active.fallbackImage;
              }}
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-black/30 to-black/60 lg:bg-gradient-to-r lg:from-transparent lg:via-black/40 lg:to-[#0a0f1d]" />

            {/* Over-Image Telemetry Badges */}
            <div className="absolute top-8 left-5 right-5 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono-tech text-orange-400 font-bold">
                <Icon className="w-3.5 h-3.5 text-orange-400" />
                <span>{active.category}</span>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-mono-tech font-bold">
                {active.badge}
              </div>
            </div>

            {/* Image Bottom Floating Caption */}
            <div className="absolute bottom-4 left-5 right-5 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono-tech text-slate-300 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Field Operation • Corniche El Nahr Hub Fleet</span>
              </div>
            </div>

            {/* Navigation Arrow Overlays on Image */}
            <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-2.5 rounded-xl bg-black/60 hover:bg-orange-600 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-2.5 rounded-xl bg-black/60 hover:bg-orange-600 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Service Telemetry, Features & Actions (Col 5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0a0f1d] text-white">
            
            <div className="space-y-4">
              {/* Header tags */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider">
                  SERVICE #{currentIndex + 1} OF {services.length}
                </span>

                <div className="flex items-center gap-1.5 font-mono-tech text-xs">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                    title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-slate-500 text-[11px]">
                    {currentIndex + 1} / {services.length}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-tight">
                  {active.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-orange-400 font-mono-tech">
                  {active.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {active.description}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono-tech font-bold text-slate-400 uppercase tracking-wider block">
                  Service Deliverables &amp; Guarantees:
                </span>
                {active.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Pricing & Action Section */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-slate-400">Classification:</span>
                <span className="font-bold text-emerald-400">{active.pricingSummary}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={active.onCtaClick}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{active.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onPartnerClick}
                  className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-slate-700/80 transition-colors cursor-pointer text-center font-sans"
                >
                  Partner Terms
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
