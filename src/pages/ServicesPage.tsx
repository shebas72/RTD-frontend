import React from 'react';
import { 
  Calculator, 
  DollarSign, 
  Package, 
  Truck, 
  RefreshCw, 
  Boxes, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Layers,
  Zap,
  Tag
} from 'lucide-react';
import { RateCalculator } from '../components/RateCalculator';
import { CodCashFlowInfographic } from '../components/infographics/CodCashFlowInfographic';
import { PricingInfographic } from '../components/infographics/PricingInfographic';
import { ComparisonSection } from '../components/ComparisonSection';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface ServicesPageProps {
  onOpenPickup: () => void;
  onOpenPartner: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenPickup,
  onOpenPartner,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <DollarSign className="w-3.5 h-3.5" />
            <span>TRANSPARENT FLAT RATE STANDARD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            $3 Flat Inside Beirut. $4 Flat Across Lebanon.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate fluctuating courier estimates, arbitrary fuel penalties, and distance taxes. Honest flat pricing with complimentary poly flyer bags and dual-currency COD management.
          </p>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE RATE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RateCalculator
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* SECTION 2: COD CASH FLOW INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CodCashFlowInfographic />
      </section>

      {/* SECTION 3: PRICING ECONOMICS & SAVINGS INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingInfographic
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* SECTION 4: DETAILED E-COMMERCE SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
            Specialized Service Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Built Specifically for High-Growth E-Commerce
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything your store requires to fulfill customer expectations with total professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              Doorstep Size &amp; Model Exchanges
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Essential for Lebanese apparel, footwear, and accessory stores. Courier brings the replacement size, inspects the returned item at doorstep, verifies tags, and collects/refunds price differences.
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-orange-400 flex items-center gap-1">
              <span>Standard $3/$4 rate + $1 exchange fee</span>
            </div>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              Complimentary Poly Flyer Bags &amp; Labels
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We equip active merchants with high-density, tamper-evident RT flyer bags (S, M, L) and thermal A6 shipping labels. Give your customers an unboxing experience that matches top global retail brands.
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-emerald-400 flex items-center gap-1">
              <span>Included free with active dispatch accounts</span>
            </div>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              Fragile Goods &amp; Heavy Bulky Parcels
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Custom van routing for delicate glass cosmetics, electronics, home decor, and heavy bulk boxes up to 25 kg. Protected with double bubble wrap and full damage insurance guarantees.
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-blue-400 flex items-center gap-1">
              <span>100% loss/theft reimbursement guarantee</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: COMPARISON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonSection
          onPartnerClick={onOpenPartner}
          onSchedulePickup={onOpenPickup}
        />
      </section>

    </div>
  );
};
