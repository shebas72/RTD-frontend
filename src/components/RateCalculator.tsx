import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Scale, 
  Zap, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { LEBANESE_DISTRICTS, CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface RateCalculatorProps {
  onSchedulePickup: () => void;
  onPartnerClick: () => void;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({
  onSchedulePickup,
  onPartnerClick,
}) => {
  const [originId, setOriginId] = useState('bey_central');
  const [destId, setDestId] = useState('ksr_coast');
  const [weightKg, setWeightKg] = useState(1.5);
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard');
  const [codAmount, setCodAmount] = useState('50');
  const [codCurrency, setCodCurrency] = useState<'USD' | 'LBP'>('USD');

  const originDistrict = LEBANESE_DISTRICTS.find((d) => d.id === originId) || LEBANESE_DISTRICTS[0];
  const destDistrict = LEBANESE_DISTRICTS.find((d) => d.id === destId) || LEBANESE_DISTRICTS[1];

  const isInsideBeirut = destDistrict.governorate === 'Beirut';
  const deliveryFeeUsd = isInsideBeirut ? 3.0 : 4.0;
  const deliveryFeeLbp = isInsideBeirut ? 270000 : 360000;

  const parsedCod = parseFloat(codAmount) || 0;
  const codAmountUsd = codCurrency === 'USD' ? parsedCod : parsedCod / CURRENT_USD_LBP_RATE;
  const codAmountLbp = codCurrency === 'LBP' ? parsedCod : Math.round(parsedCod * CURRENT_USD_LBP_RATE);

  const netPayoutUsd = Math.max(0, codAmountUsd - deliveryFeeUsd);
  const netPayoutLbp = Math.max(0, codAmountLbp - deliveryFeeLbp);

  const popularDestinations = [
    { id: 'bey_central', name: 'Beirut (Hamra / Verdun)' },
    { id: 'ksr_coast', name: 'Jounieh (Keserwan)' },
    { id: 'metn_coast', name: 'Metn (Antelias)' },
    { id: 'north_tripoli', name: 'Tripoli (North)' },
    { id: 'south_saida', name: 'Saida (South)' },
    { id: 'bek_zahle', name: 'Zahle (Bekaa)' },
  ];

  return (
    <section id="rate-calculator" className="py-12 bg-[#070b14] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 text-xs font-mono-tech font-bold border border-orange-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>GUARANTEED LEBANESE FLAT RATE PRICING</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            $3 Flat Inside Beirut. $4 Flat Across Lebanon.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate unpredictable estimates, arbitrary fuel penalties, and destination surcharges. Real-time dual currency calculation.
          </p>
        </div>

        {/* 2-Pillar Flat Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          
          {/* Zone 1: Inside Beirut */}
          <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden ${
            isInsideBeirut 
              ? 'bg-orange-950/30 border-orange-500 ring-2 ring-orange-500/30 shadow-xl' 
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-orange-400">
                Zone 1: Inside Beirut
              </span>
              <span className="text-xs font-black bg-orange-600 text-white px-3 py-1 rounded-full shadow-md font-mono-tech">
                $3.00 Flat
              </span>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white font-mono-tech">$3.00</span>
              <span className="text-sm font-bold text-slate-400 font-mono-tech">/ 270,000 LBP</span>
            </div>

            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Achrafieh, Hamra, Verdun, Badaro, Downtown, Mar Mikhael, Gemmayze, Mazraa &amp; suburbs.
            </p>
          </div>

          {/* Zone 2: Outside Beirut */}
          <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden ${
            !isInsideBeirut 
              ? 'bg-emerald-950/30 border-emerald-500 ring-2 ring-emerald-500/30 shadow-xl' 
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-emerald-400">
                Zone 2: Outside Beirut (All Lebanon)
              </span>
              <span className="text-xs font-black bg-emerald-600 text-white px-3 py-1 rounded-full shadow-md font-mono-tech">
                $4.00 Flat
              </span>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white font-mono-tech">$4.00</span>
              <span className="text-sm font-bold text-slate-400 font-mono-tech">/ 360,000 LBP</span>
            </div>

            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Mount Lebanon, Metn, Keserwan, North Tripoli, South Saida &amp; Tyre, Bekaa &amp; Nabatieh.
            </p>
          </div>

        </div>

        {/* Main Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#0b101e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Quick Destination Select Chips */}
            <div>
              <label className="block text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider mb-2">
                Quick Destination Presets
              </label>
              <div className="flex flex-wrap gap-2">
                {popularDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setDestId(dest.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      destId === dest.id
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {dest.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Origin & Destination District Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Pickup City / District</span>
                </label>
                <select
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                  className="w-full py-3 px-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                >
                  {LEBANESE_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                      {d.name.split('(')[0]}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block font-mono-tech">
                  Merchant store, hub, or residence
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono-tech font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Destination District</span>
                </label>
                <select
                  value={destId}
                  onChange={(e) => setDestId(e.target.value)}
                  className="w-full py-3 px-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                >
                  {LEBANESE_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                      {d.governorate}: {d.name.split('(')[0]}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-emerald-400 mt-1 block font-mono-tech">
                  {destDistrict.zone}
                </span>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono-tech font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-orange-400" />
                  <span>Package Weight: {weightKg} kg</span>
                </label>
                <span className="text-xs font-mono-tech text-slate-400">
                  {weightKg <= 1.5 ? 'Standard E-Commerce Flyer' : 'Parcel / Box'}
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="15"
                step="0.5"
                value={weightKg}
                onChange={(e) => setWeightKg(parseFloat(e.target.value))}
                className="w-full accent-orange-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono-tech">
                <span>0.5 kg (Flyer)</span>
                <span>2 kg (Cap)</span>
                <span>5 kg (Box)</span>
                <span>15 kg (Bulk)</span>
              </div>
            </div>

            {/* COD Cash Collection Input */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono-tech font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cash-on-Delivery (COD) To Collect:</span>
                </label>
                <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-xs font-mono-tech">
                  <button
                    type="button"
                    onClick={() => setCodCurrency('USD')}
                    className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                      codCurrency === 'USD' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    USD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCodCurrency('LBP')}
                    className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                      codCurrency === 'LBP' ? 'bg-amber-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    LBP
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  value={codAmount}
                  onChange={(e) => setCodAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-4 pr-16 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono-tech font-bold text-white focus:outline-hidden focus:border-orange-500"
                />
                <span className="absolute right-4 top-3 text-xs font-mono-tech text-slate-400 font-bold">
                  {codCurrency}
                </span>
              </div>
            </div>

          </div>

          {/* Result Breakdown Card */}
          <div className="lg:col-span-5 bg-[#0b101e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono-tech font-bold text-orange-400 block">
                  INSTANT FEE BREAKDOWN
                </span>
                <h3 className="text-xl font-black text-white font-display">
                  Courier Delivery Fee
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-white font-mono-tech">
                  ${deliveryFeeUsd.toFixed(2)}
                </span>
                <span className="text-xs text-amber-400 font-mono-tech block">
                  {deliveryFeeLbp.toLocaleString()} LBP
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono-tech text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Destination:</span>
                <span className="font-bold text-white">{destDistrict.name} ({destDistrict.governorate})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Rate Classification:</span>
                <span className={isInsideBeirut ? 'text-orange-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {isInsideBeirut ? '$3.00 Beirut Flat' : '$4.00 All Lebanon Flat'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fuel Surcharge:</span>
                <span className="text-emerald-400 font-bold">$0.00 (Zero %)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Packaging Flyer:</span>
                <span className="text-emerald-400 font-bold">Free Provided</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Market Rate Peg:</span>
                <span className="text-amber-400">1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP</span>
              </div>
            </div>

            {/* Net COD Merchant Remittance */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-[11px] text-slate-400 font-mono-tech block">
                ESTIMATED NET MERCHANT REMITTANCE:
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-emerald-400 font-mono-tech">
                  ${netPayoutUsd.toFixed(2)} USD
                </span>
                <span className="text-xs font-mono-tech text-slate-300">
                  ≈ {netPayoutLbp.toLocaleString()} LBP
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono-tech block">
                100% of collected COD minus courier fee remitted within 48 hours.
              </span>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={onSchedulePickup}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Book Courier Pickup Now</span>
              </button>

              <button
                onClick={onPartnerClick}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs rounded-xl border border-slate-800 transition-colors cursor-pointer"
              >
                Apply for High-Volume Merchant Rates
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
