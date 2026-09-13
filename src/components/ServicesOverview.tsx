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
  ShieldCheck,
  Building2,
  Sparkles,
  Zap,
  TrendingUp,
  Boxes
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
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 text-orange-900 text-xs font-bold border border-orange-200/80">
              <Truck className="w-3.5 h-3.5 text-orange-600" />
              <span>Full-Stack Lebanese Logistics Solutions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Tailored services for growing businesses &amp; online merchants
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              From individual Instagram shops to established retail brands, we provide the dependable delivery and storage infrastructure you need to thrive in Lebanon.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPartnerClick}
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* BENTO CARD 1: E-Commerce Delivery (Large 8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-2xs">
                  <ShoppingBag className="w-7 h-7 stroke-[2]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                    Most Popular
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    $3 Beirut • $4 Lebanon
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  E-Commerce &amp; Online Merchant Delivery
                </h3>
                <p className="text-sm font-semibold text-orange-600 mt-1">
                  Fast, dependable door-to-door shipping across all of Lebanon.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                Designed specifically for Lebanese Instagram boutiques, Shopify brands, and online retailers. Next-day and same-day delivery with real-time tracking links sent to your buyers via SMS &amp; WhatsApp.
              </p>

              {/* Feature Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fixed transparent pricing: $3 flat inside Beirut, $4 flat all over Lebanon</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Door-to-door delivery covering 100% of Lebanese territory</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Next-Day Standard &amp; 4-Hour Same-Day Express options</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct phone/WhatsApp recipient communication by courteous couriers</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Branded flyer bags &amp; thermal barcode waybill labels</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onSchedulePickup}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                <span>Schedule a delivery test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 font-medium">Daily pickup cut-off: 3:30 PM</span>
            </div>
          </div>

          {/* BENTO CARD 2: Guaranteed Dual-Currency COD (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-2xs">
                  <DollarSign className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Zero Risk
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Guaranteed Cash on Delivery (COD) Management
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1">
                  Reliable cash collection in USD &amp; LBP with prompt 48h payouts.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate the stress of lost cash or disputed exchange rates. Our drivers collect cash in clean USD or LBP at daily transparent market rates, with weekly or 48-hour remittances straight to your bank or in cash.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dual-currency collection (USD &amp; LBP) with locked cash bags</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prompt 48-hour or weekly cash settlement cycle</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Detailed PDF &amp; Excel remittance reports</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Payouts via Cash, Whish Money, OMT, or Bank</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <button
                onClick={onPartnerClick}
                className="text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                <span>View Settlement Terms</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* BENTO CARD 3: Warehousing & Pick-and-Pack (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                  <Warehouse className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                  Fulfillment
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Warehousing, Storage &amp; Pick-and-Pack
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">
                  Store your inventory in our central Beirut logistics hub.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Stop storing boxes in your bedroom or paying exorbitant private generator bills. Store your inventory in our secure facility. When an order arrives, we pick, pack, label, and dispatch immediately.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Central Beirut facility with 24/7 power &amp; CCTV</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SKU-level inventory management &amp; low-stock alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Professional pick-and-pack fulfillment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero fixed leases: Pay for space used</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectSection('warehousing')}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Beirut Hub Storage</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </button>
            </div>
          </div>

          {/* BENTO CARD 4: Automated Logistics Dashboard (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-2xs">
                  <LayoutDashboard className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                  Smart Tech
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Automated Logistics Dashboard &amp; Store Sync
                </h3>
                <p className="text-xs font-semibold text-purple-600 mt-1">
                  Complete visibility into all your Lebanese shipments.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Manage your entire logistics pipeline from a single web portal. Upload orders via CSV or Shopify, track real-time courier progress, print batch shipping labels, and track your incoming cash balances.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>One-click Shopify, WooCommerce &amp; Instagram sync</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bulk A6 thermal shipping label printing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Real-time courier geolocation &amp; confirmation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Automated customer SMS &amp; WhatsApp tracking links</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectSection('merchant-portal')}
                className="text-xs font-bold text-slate-900 hover:text-purple-600 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                <span>Preview Merchant Portal</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              </button>
            </div>
          </div>

          {/* BENTO CARD 5 & 6 COMBINED (4 cols): Doorstep Exchanges & Corporate */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Exchanges Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Retail Friendly
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                Doorstep Exchanges &amp; Return Logistics
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Protect your margins with safe size swaps. Our courier delivers the new size, inspects the returned item on the spot, and collects any price difference.
              </p>
            </div>

            {/* Corporate B2B Dispatch */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-400 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                  Corporate
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                Corporate &amp; Urgent B2B Dispatch
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Scheduled runs or on-demand motorbikes for Lebanese law firms, clinics, agencies, and offices with signed physical proof-of-delivery (POD).
              </p>
            </div>

          </div>

        </div>

        {/* Feature highlight banner */}
        <div className="mt-14 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Reliable Courier Scheduling for Lebanese Merchants</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to automate your delivery pipeline today?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our couriers pick up orders directly from your doorstep, supply complimentary flyer bags, and deliver nationwide with guaranteed cash remittance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={onSchedulePickup}
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer text-center"
            >
              Schedule a Test Pickup
            </button>
            <button
              onClick={onPartnerClick}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all cursor-pointer text-center"
            >
              Open Merchant Account
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
