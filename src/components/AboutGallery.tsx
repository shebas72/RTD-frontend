import React, { useState } from 'react';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Truck, 
  Warehouse, 
  Package, 
  Building2,
  ExternalLink
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'fleet' | 'warehouse' | 'hub' | 'team';
  categoryLabel: string;
  localSrc: string;
  remoteSrc: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-2',
    title: 'RT Deliveries Commercial Fleet',
    category: 'fleet',
    categoryLabel: 'Fleet & Vans',
    localSrc: '/gallery/gallery-2.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/2-768x456.jpeg',
    description: 'Our dedicated fleet of branded commercial delivery vans ready for nationwide distribution across all Lebanese governorates.',
  },
  {
    id: 'gallery-7',
    title: 'Rapid Motorcycle Dispatch Squad',
    category: 'fleet',
    categoryLabel: 'Fleet & Vans',
    localSrc: '/gallery/gallery-7.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/7-768x456.jpeg',
    description: 'Motorized courier squad navigating Greater Beirut traffic for same-day 4-hour express dispatches.',
  },
  {
    id: 'gallery-3',
    title: 'Central Inventory Warehouse Racks',
    category: 'warehouse',
    categoryLabel: 'Warehouse & Storage',
    localSrc: '/gallery/gallery-3.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/3-768x456.jpeg',
    description: 'High-density shelving and pallet storage in Corniche El Nahr, Beirut, equipped with 24/7 generator power and climate control.',
  },
  {
    id: 'gallery-1',
    title: 'Central Beirut Sorting Hub',
    category: 'hub',
    categoryLabel: 'Sorting & Operations',
    localSrc: '/gallery/gallery-1.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-6.41.54-PM-768x456.jpeg',
    description: 'Corniche El Nahr main intake terminal where packages are scanned, barcoded, and routed onto delivery vans.',
  },
  {
    id: 'gallery-5',
    title: 'Protective Packaging & Labeling Line',
    category: 'warehouse',
    categoryLabel: 'Warehouse & Storage',
    localSrc: '/gallery/gallery-5.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/5-768x456.jpeg',
    description: 'Pick, pack, bubble-wrap and thermal label station for e-commerce stores using our fulfillment storage.',
  },
  {
    id: 'gallery-6',
    title: 'Outbound Dispatch Cargo Floor',
    category: 'hub',
    categoryLabel: 'Sorting & Operations',
    localSrc: '/gallery/gallery-6.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/6-768x456.jpeg',
    description: 'Parcels staged by Lebanese district for immediate morning van departures.',
  },
  {
    id: 'gallery-8',
    title: 'Regional Linehaul Transit Shuttles',
    category: 'fleet',
    categoryLabel: 'Fleet & Vans',
    localSrc: '/gallery/gallery-8.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/8-768x456.jpeg',
    description: 'High-capacity transit vans running nightly between Beirut, Tripoli, Saida, and Zahle logistics hubs.',
  },
  {
    id: 'gallery-9',
    title: 'Driver Loading Bay & Staging Area',
    category: 'hub',
    categoryLabel: 'Sorting & Operations',
    localSrc: '/gallery/gallery-9.jpeg',
    remoteSrc: 'https://rtdeliveries.net/wp-content/uploads/2025/10/9-768x456.jpeg',
    description: 'Drivers loading assigned regional parcels into custom-fitted shelving vans before heading out on doorstep runs.',
  },
];

export const AboutGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="about-gallery" className="py-16 lg:py-24 bg-[#070b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>FACILITY TELEMETRY &amp; REAL OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Road Train Deliveries S.A.R.L.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Lebanon&apos;s leading contract logistics provider. Explore real photos from our central Beirut warehouse, dedicated courier vans, and daily dispatch operations.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-6 bg-[#0b101e] border border-slate-800 rounded-2xl p-4 shrink-0 font-mono-tech shadow-xl">
            <div>
              <span className="block text-xl font-black text-orange-400">8 / 8</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Governorates</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="block text-xl font-black text-white">48h</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">COD Payouts</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="block text-xl font-black text-emerald-400">100%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Insured</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono-tech font-bold">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-[#0b101e] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Operations ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('fleet')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'fleet'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-[#0b101e] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Vans &amp; Motorbikes</span>
          </button>
          <button
            onClick={() => setSelectedCategory('warehouse')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'warehouse'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-[#0b101e] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Warehouse className="w-3.5 h-3.5" />
            <span>Warehouse &amp; Storage</span>
          </button>
          <button
            onClick={() => setSelectedCategory('hub')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'hub'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-[#0b101e] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Sorting &amp; Operations Floor</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-[#0b101e] border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-orange-500/50 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden bg-slate-950 relative">
                <img
                  src={item.localSrc}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== item.remoteSrc) {
                      target.src = item.remoteSrc;
                    }
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono-tech font-bold uppercase tracking-wider border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 bg-[#0b101e] rounded-b-3xl flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors font-display line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono-tech font-bold text-orange-400">
                  <span>View High-Res Photo</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-[#0b101e] rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-white font-mono-tech">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    {filteredItems[lightboxIndex].categoryLabel}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">
                    Photo {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative aspect-16/10 bg-black flex items-center justify-center">
                <img
                  src={filteredItems[lightboxIndex].localSrc}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== filteredItems[lightboxIndex].remoteSrc) {
                      target.src = filteredItems[lightboxIndex].remoteSrc;
                    }
                  }}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-full object-contain"
                />

                {/* Left/Right Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image Description Footer */}
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://rtdeliveries.net/about-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono-tech font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Original About Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
