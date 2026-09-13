import React, { useState } from 'react';
import { 
  Warehouse, 
  Boxes, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Flame, 
  Sparkles,
  Building2,
  Lock,
  MessageSquare
} from 'lucide-react';

interface WarehousingSectionProps {
  onPartnerClick: () => void;
  onOpenPickupModal: () => void;
}

export const WarehousingSection: React.FC<WarehousingSectionProps> = ({
  onPartnerClick,
  onOpenPickupModal,
}) => {
  const [skuCount, setSkuCount] = useState(25);
  const [monthlyOrders, setMonthlyOrders] = useState(150);

  const shelfStorageCostUsd = Math.round(40 + Math.max(0, skuCount - 30) * 1.2);
  const fulfillmentFeePerOrder = 0.85;
  const totalFulfillmentCostUsd = Math.round(monthlyOrders * fulfillmentFeePerOrder);
  const traditionalCostUsd = 750;
  const estimatedSavingsUsd = Math.max(120, traditionalCostUsd - (shelfStorageCostUsd + totalFulfillmentCostUsd));

  return (
    <section id="warehousing" className="py-16 lg:py-24 bg-[#070b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Warehouse className="w-3.5 h-3.5" />
            <span>BEIRUT FULFILLMENT &amp; STORAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Stop Turning Your Living Room Into a Warehouse. We Store, Pack, and Ship For You.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate high Beirut commercial rent, generator electricity subscriptions, and stressful packing marathons. Ship directly from Corniche El Nahr.
          </p>
        </div>

        {/* 3 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0b101e] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white font-display">
              24/7 Redundant Power &amp; Climate
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Equipped with dual generator backups and solar arrays. Your stock remains protected from Beirut summer heatwaves, humidity, dust, and electrical outages.
            </p>
          </div>

          <div className="bg-[#0b101e] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white font-display">
              Automated Pick &amp; Pack Fulfillment
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When an order logs on your Shopify, WooCommerce, or Instagram, our trained staff picks the SKU, bubble-wraps it, seals the RT flyer bag, and hands it directly to the outgoing courier.
            </p>
          </div>

          <div className="bg-[#0b101e] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-white font-display">
              CCTV Surveillance &amp; Barcode Audit
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every SKU is barcoded upon warehouse arrival. Receive automatic low-stock notifications in your merchant portal, backed by a 100% loss/theft insurance guarantee.
            </p>
          </div>

        </div>

        {/* Interactive Fulfillment & Storage Estimator */}
        <div className="bg-[#0b101e] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                  INTERACTIVE FULFILLMENT CALCULATOR
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  Estimate Your Monthly Storage Plan
                </h3>
                <p className="text-xs text-slate-400">
                  Pay only for what you store and ship. No fixed multi-year leases or surprise handling charges.
                </p>
              </div>

              {/* Slider 1: SKU count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="font-bold text-slate-300">
                    Active Product SKUs / Variations:
                  </span>
                  <span className="font-black text-orange-400 text-sm">
                    {skuCount} SKUs
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={skuCount}
                  onChange={(e) => setSkuCount(parseInt(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono-tech">
                  <span>5 SKUs (Boutique)</span>
                  <span>50 SKUs (Growing store)</span>
                  <span>150+ SKUs (Catalog)</span>
                </div>
              </div>

              {/* Slider 2: Monthly orders */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="font-bold text-slate-300">
                    Expected Monthly Orders in Lebanon:
                  </span>
                  <span className="font-black text-emerald-400 text-sm">
                    {monthlyOrders} Orders / month
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="20"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono-tech">
                  <span>20 orders (Starter)</span>
                  <span>300 orders</span>
                  <span>1,000+ orders (Scale)</span>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-3 border-t border-slate-800 font-mono-tech">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes branded RT flyer bags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thermal A6 barcode waybills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bubble wrap &amp; fragile protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time Shopify inventory sync</span>
                </div>
              </div>
            </div>

            {/* Right Results Card */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="text-center pb-4 border-b border-slate-800">
                <span className="text-xs font-mono-tech text-slate-400">
                  Estimated Total Fulfillment &amp; Storage
                </span>
                <div className="text-3xl font-black text-white font-mono-tech mt-1">
                  ${shelfStorageCostUsd + totalFulfillmentCostUsd}{' '}
                  <span className="text-sm font-normal text-slate-400">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono-tech mt-1">
                  Storage (${shelfStorageCostUsd}) + Pick &amp; Pack (${totalFulfillmentCostUsd})
                </div>
              </div>

              {/* Lebanese Savings Comparison */}
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300 font-bold">Estimated Monthly Savings:</span>
                  <span className="text-base font-black text-emerald-400 font-mono-tech">
                    ~${estimatedSavingsUsd} USD / mo
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200/80 leading-tight">
                  Compared to renting a space in Beirut, paying generator bills, and hiring packing staff.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={onPartnerClick}
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Storage Space &amp; Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20am%20interested%20in%20your%20Beirut%20warehousing%20and%20inventory%20storage%20services"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chat with Warehouse Manager on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
