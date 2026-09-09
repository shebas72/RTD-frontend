import React from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  Warehouse, 
  RotateCcw, 
  LayoutDashboard, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building2
} from 'lucide-react';

interface ServicesOverviewProps {
  onSchedulePickup: () => void;
  onPartnerClick: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSchedulePickup,
  onPartnerClick,
  onSelectSection,
}) => {
  const services = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'E-Commerce & Online Merchant Delivery',
      tagline: 'Fast, dependable door-to-door shipping across all of Lebanon.',
      description:
        'Designed specifically for Lebanese Instagram boutiques, Shopify brands, and online retailers. Next-day and same-day delivery with real-time tracking links sent to your buyers via SMS & WhatsApp.',
      features: [
        'Fixed transparent pricing: $3 flat inside Beirut, $4 flat all over Lebanon',
        'Door-to-door delivery covering 100% of Lebanese territory',
        'Next-Day Standard & 4-Hour Same-Day Express options',
        'Direct phone/WhatsApp recipient communication by courteous couriers',
        'Branded flyer bags & thermal barcode waybill labels',
      ],
      badge: 'Most Popular',
      badgeColor: 'bg-orange-100 text-orange-700',
    },
    {
      id: 'cod',
      icon: DollarSign,
      title: 'Guaranteed Cash on Delivery (COD) Management',
      tagline: 'Reliable cash collection in USD & LBP with prompt 48h payouts.',
      description:
        'Eliminate the stress of lost cash or disputed exchange rates. Our drivers collect cash in clean USD or LBP at daily transparent market rates, with weekly or 48-hour remittances straight to your bank or in cash.',
      features: [
        'Dual-currency collection (USD & LBP) with locked cash bags',
        'Prompt 48-hour or weekly cash settlement cycle',
        'Detailed PDF & Excel remittance reports with zero hidden cuts',
        'Payout options: Cash at Hub, Whish Money, OMT, or Bank Transfer',
      ],
      badge: 'Zero Risk',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 'warehousing',
      icon: Warehouse,
      title: 'Warehousing, Storage & Pick-and-Pack',
      tagline: 'Store your inventory in our central Beirut logistics hub.',
      description:
        'Stop storing boxes in your bedroom or paying exorbitant private generator bills. Store your inventory in our secure facility. When an order arrives, we pick, pack, label, and dispatch immediately.',
      features: [
        'Central Beirut facility with 24/7 power, climate control & CCTV',
        'SKU-level inventory management & low-stock alerts',
        'Professional pick-and-pack fulfillment with protective bubble wrap',
        'Zero fixed leases: Pay only for the shelf or pallet space you use',
      ],
      badge: 'Fulfillment',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      title: 'Automated Logistics Dashboard & Store Sync',
      tagline: 'Complete visibility into all your Lebanese shipments.',
      description:
        'Manage your entire logistics pipeline from a single web portal. Upload orders via CSV or Shopify, track real-time courier progress, print batch shipping labels, and track your incoming cash balances.',
      features: [
        'One-click Shopify, WooCommerce, & Instagram order sync',
        'Bulk A6 thermal shipping label printing',
        'Real-time courier geolocation & delivery confirmation receipts',
        'Automated customer SMS alerts with custom tracking link',
      ],
      badge: 'Smart Tech',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'exchanges',
      icon: RotateCcw,
      title: 'Doorstep Exchanges & Return Logistics',
      tagline: 'Protect your margins with safe garment & size swaps.',
      description:
        'Fashion and shoe merchants face high return rates in Lebanon. We offer doorstep size exchange, where our courier delivers the new size, inspects the returned item on the spot, and collects any price difference.',
      features: [
        'On-the-spot size & item swap at recipient doorstep',
        'Inspection check before accepting the return package',
        'Instant return logging to your merchant dashboard',
        'Drastically reduces dead inventory and customer complaints',
      ],
      badge: 'Retail Friendly',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'b2b',
      icon: Building2,
      title: 'Corporate & Urgent B2B Dispatch',
      tagline: 'Dedicated couriers for legal documents, bank checks, and parcels.',
      description:
        'Scheduled daily runs or on-demand motorbikes for Lebanese law firms, medical clinics, advertising agencies, and corporate offices needing confidential, secure hand-to-hand delivery.',
      features: [
        'Signed proof-of-delivery (POD) with physical receiver signature',
        'Secure pouch for confidential contracts & legal deeds',
        'Monthly corporate invoicing & dedicated account manager',
        'Scheduled recurring morning and afternoon dispatch runs',
      ],
      badge: 'Corporate',
      badgeColor: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
              <Truck className="w-3.5 h-3.5" />
              <span>Full-Stack Lebanese Logistics Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Tailored services for growing businesses &amp; online merchants
            </h2>
            <p className="text-slate-600 text-base">
              From individual Instagram shops to established retail brands, we provide the dependable delivery and storage infrastructure you need to thrive in Lebanon.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPartnerClick}
              className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-700 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (service.id === 'warehousing') {
                        onSelectSection('warehousing');
                      } else if (service.id === 'dashboard') {
                        onSelectSection('merchant-portal');
                      } else {
                        onSchedulePickup();
                      }
                    }}
                    className="text-xs font-bold text-slate-800 hover:text-orange-600 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Learn details &amp; rates</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature highlight banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reliable Courier Scheduling for Lebanese Merchants</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Ready to automate your delivery pipeline today?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our couriers pick up orders directly from your doorstep, supply complimentary flyer bags, and deliver nationwide with guaranteed cash remittance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onSchedulePickup}
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer text-center"
            >
              Schedule a Test Pickup
            </button>
            <button
              onClick={onPartnerClick}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all cursor-pointer text-center"
            >
              Open Merchant Account
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
