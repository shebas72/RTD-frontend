import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  TrendingDown, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CURRENT_USD_LBP_RATE } from '../../data/lebanonLocations';

interface PricingInfographicProps {
  onSchedulePickup?: () => void;
  onPartnerClick?: () => void;
}

export const PricingInfographic: React.FC<PricingInfographicProps> = ({
  onSchedulePickup,
  onPartnerClick,
}) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(100);

  // Calculation comparison
  // RT Deliveries: Average 40% Beirut ($3), 60% Outside Beirut ($4)
  const rtAverageCost = 0.4 * 3.0 + 0.6 * 4.0; // $3.60 avg
  const rtTotal = Math.round(monthlyVolume * rtAverageCost);

  // Traditional Courier in Lebanon: $5.00 base + $1.50 fuel tax + 2% COD fee ($1) = ~$7.50 avg
  const tradAverageCost = 7.5;
  const tradTotal = Math.round(monthlyVolume * tradAverageCost);

  const monthlySavings = tradTotal - rtTotal;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Lebanese Logistics Economics</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Transparent Flat-Rate vs Traditional Couriers
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            See how $3 inside Beirut and $4 outside Beirut saves Lebanese merchants 35% to 50% every month with zero hidden fees.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 text-right shrink-0">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">
            Exchange Baseline
          </span>
          <span className="text-base font-black text-emerald-400 font-mono">
            1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP
          </span>
        </div>
      </div>

      {/* 2 Big Flat Rate Highlight Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Inside Beirut */}
        <div className="p-6 bg-gradient-to-br from-orange-950/60 to-slate-900 border border-orange-500/40 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Zone 1: Greater Beirut Core
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-mono font-bold text-xs">
              $3.00 Flat
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-white font-mono">$3.00</span>
            <span className="text-sm font-bold text-slate-400 font-mono">/ 270,000 LBP</span>
          </div>

          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Achrafieh, Hamra, Verdun, Badaro, Downtown, Mar Mikhael, Jnah, Mazraa &amp; suburbs. Same-day 2-4h available.
          </p>
        </div>

        {/* Outside Beirut */}
        <div className="p-6 bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Zone 2: Outside Beirut (Nationwide)
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono font-black text-xs">
              $4.00 Flat
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-white font-mono">$4.00</span>
            <span className="text-sm font-bold text-slate-400 font-mono">/ 360,000 LBP</span>
          </div>

          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Mount Lebanon, Metn, Keserwan, North Tripoli, South Saida &amp; Tyre, Bekaa Valley &amp; Nabatieh.
          </p>
        </div>

      </div>

      {/* Interactive Volume Savings Slider */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Calculate Your Store&apos;s Savings:
            </span>
            <h4 className="text-lg font-black text-white mt-0.5">
              Monthly Shipment Volume in Lebanon
            </h4>
          </div>
          <span className="text-2xl font-black text-orange-400 font-mono">
            {monthlyVolume} Orders / month
          </span>
        </div>

        <input
          type="range"
          min="20"
          max="800"
          step="20"
          value={monthlyVolume}
          onChange={(e) => setMonthlyVolume(parseInt(e.target.value))}
          className="w-full accent-orange-500 h-2.5 bg-slate-800 rounded-lg cursor-pointer"
        />

        <div className="flex justify-between text-[11px] text-slate-500">
          <span>20 Orders (Starter)</span>
          <span>200 Orders (Growing Brand)</span>
          <span>500 Orders (Established)</span>
          <span>800+ Orders (Enterprise)</span>
        </div>

        {/* Cost Comparison Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">RT Deliveries Flat Cost:</span>
            <div className="text-2xl font-black text-white font-mono mt-1">
              ${rtTotal.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ mo</span>
            </div>
            <span className="text-[10px] text-emerald-400 mt-1 block">
              $3 Beirut / $4 Lebanon Flat
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">Traditional Courier Cost:</span>
            <div className="text-2xl font-black text-slate-400 font-mono mt-1">
              ${tradTotal.toLocaleString()} <span className="text-xs font-normal text-slate-500">/ mo</span>
            </div>
            <span className="text-[10px] text-red-400 mt-1 block">
              With distance taxes &amp; COD fees
            </span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40">
            <span className="text-[11px] text-emerald-300 font-bold block flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              <span>Net Merchant Savings:</span>
            </span>
            <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
              +${monthlySavings.toLocaleString()} <span className="text-xs font-normal text-emerald-300">/ mo</span>
            </div>
            <span className="text-[10px] text-emerald-300/80 mt-1 block">
              ~${annualSavings.toLocaleString()} USD saved per year
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
