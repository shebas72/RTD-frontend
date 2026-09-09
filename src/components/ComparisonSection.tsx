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
      rtDeliveries: 'Strict 48h or weekly payouts via Cash, Whish, or Bank',
      traditional: 'Days or weeks of chasing drivers for your cash',
      highlight: true,
    },
    {
      feature: 'Dual-Currency USD & LBP Handling',
      rtDeliveries: 'Transparent market exchange rates with zero margin skimming',
      traditional: 'Arbitrary black-market rate deductions and currency disputes',
      highlight: true,
    },
    {
      feature: 'Customer SMS & WhatsApp Live Tracking',
      rtDeliveries: 'Automated GPS tracking link & driver name sent to recipient',
      traditional: 'Frantic phone calls asking "Wein sar el driver?"',
      highlight: false,
    },
    {
      feature: 'Packaging Flyer Bags & Barcodes',
      rtDeliveries: 'Complimentary high-density flyer bags with thermal A6 labels',
      traditional: 'Flimsy grocery plastic bags or merchant-supplied tape',
      highlight: false,
    },
    {
      feature: 'Warehouse & Inventory Storage',
      rtDeliveries: 'Central Beirut hub with 24/7 power, pick, pack & shelf space',
      traditional: 'No storage, packages piled up in merchant living room',
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
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Lebanese Sellers Choose RT Deliveries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built for e-commerce, not improvised taxi runs
          </h2>
          <p className="text-slate-600 text-base">
            See how modern logistics infrastructure transforms your customer satisfaction, repeat purchases, and cash flow.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-4 sm:p-5 bg-slate-50 text-xs font-black text-slate-800 uppercase tracking-wider w-1/3">
                  Logistics Standard
                </th>
                <th className="p-4 sm:p-5 bg-orange-50/80 text-xs font-black text-orange-950 uppercase tracking-wider w-1/3 border-x border-orange-200">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-[10px]">
                      RT
                    </div>
                    <span>RT Deliveries (Lebanon)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 bg-slate-50 text-xs font-black text-slate-500 uppercase tracking-wider w-1/3">
                  Traditional Couriers / Shared Taxis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? 'bg-orange-50/20' : 'bg-white'}>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">
                    {row.feature}
                  </td>

                  {/* RT Deliveries Column */}
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-200 text-slate-900 font-semibold">
                    <div className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.rtDeliveries}</span>
                    </div>
                  </td>

                  {/* Traditional Couriers */}
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-red-100 text-red-600 shrink-0 mt-0.5">
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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Ready to upgrade your delivery experience?
              </div>
              <div className="text-xs text-slate-500">
                Onboard your store in less than 2 hours with zero setup fees.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onPartnerClick}
              className="w-full sm:w-auto px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Sign Up as Merchant Partner
            </button>
            <button
              onClick={onSchedulePickup}
              className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              Book One-Time Delivery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
