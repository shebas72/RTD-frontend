import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface ComparisonSectionProps {
  onPartnerClick: () => void;
  onSchedulePickup: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  onPartnerClick,
  onSchedulePickup,
}) => {
  const comparisonRows = [
    {
      feature: 'Pricing Transparency',
      rtDeliveries: 'Fixed flat rates: $3 inside Beirut, $4 everywhere else in Lebanon',
      traditional: 'Fluctuating, unpredictable rates and arbitrary fuel surcharges',
      highlight: true,
    },
    {
      feature: 'COD Remittance Speed',
      rtDeliveries: 'Strict 48h or weekly payouts via Fresh Cash, Whish, or Bank',
      traditional: 'Days or weeks of chasing drivers for your cash',
      highlight: true,
    },
    {
      feature: 'Dual-Currency USD & LBP Handling',
      rtDeliveries: 'Transparent daily exchange peg with zero margin skimming',
      traditional: 'Arbitrary black-market rate deductions and currency disputes',
      highlight: true,
    },
    {
      feature: 'Real-Time Customer GPS Tracking',
      rtDeliveries: 'Automated Laravel live tracking link & driver name sent to recipient',
      traditional: 'Frantic phone calls asking "Wein sar el driver?"',
      highlight: false,
    },
    {
      feature: 'Packaging Flyer Bags & Barcodes',
      rtDeliveries: 'Complimentary high-density flyer bags with thermal barcode labels',
      traditional: 'Flimsy grocery plastic bags or merchant-supplied tape',
      highlight: false,
    },
    {
      feature: 'Central Warehouse & Inventory Storage',
      rtDeliveries: 'Central Corniche El Nahr hub with 24/7 power, pick, pack & shelf space',
      traditional: 'No storage; packages piled up in merchant living room',
      highlight: true,
    },
    {
      feature: 'Lost & Damaged Item Guarantee',
      rtDeliveries: '100% financial reimbursement for verified lost parcels',
      traditional: 'No liability; driver ignores WhatsApp calls',
      highlight: true,
    },
    {
      feature: 'Doorstep Size & Item Exchanges',
      rtDeliveries: 'Driver inspects returned item at doorstep before handing over',
      traditional: 'Merchant loses original item or gets worn/damaged goods',
      highlight: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#070b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL RIGOR COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Engineered for Modern E-Commerce, Not Improvised Taxi Runs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            See how modern logistics infrastructure transforms your customer satisfaction, repeat purchases, and cash flow.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-800 rounded-3xl shadow-2xl bg-[#0b101e]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-[#070a14]">
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider w-1/3">
                  Logistics Standard
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider w-1/3 border-x border-slate-800 bg-orange-950/20">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-[10px]">
                      RT
                    </div>
                    <span>RT Deliveries (Lebanon)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-slate-500 uppercase tracking-wider w-1/3">
                  Traditional Couriers / Shared Taxis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? 'bg-orange-950/10' : 'bg-transparent'}>
                  <td className="p-4 sm:p-5 font-bold text-white">
                    {row.feature}
                  </td>

                  {/* RT Deliveries Column */}
                  <td className="p-4 sm:p-5 bg-orange-950/20 border-x border-slate-800 text-slate-200 font-semibold">
                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.rtDeliveries}</span>
                    </div>
                  </td>

                  {/* Traditional Couriers */}
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Bar underneath */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-[#0b101e] border border-slate-800 rounded-3xl gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white font-display">
                Ready to upgrade your delivery infrastructure?
              </div>
              <div className="text-xs text-slate-400">
                Onboard your store in less than 2 hours with zero setup fees.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onPartnerClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
            >
              Sign Up as Merchant Partner
            </button>
            <button
              onClick={onSchedulePickup}
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              Book One-Time Delivery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
