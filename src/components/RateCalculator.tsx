import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Scale, 
  Zap, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  HelpCircle,
  TrendingUp,
  ArrowRight
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

  // Fixed Flat Delivery Fee: $3 inside Beirut, $4 outside Beirut
  const isInsideBeirut = destDistrict.governorate === 'Beirut';
  const deliveryFeeUsd = isInsideBeirut ? 3.0 : 4.0;
  const deliveryFeeLbp = isInsideBeirut ? 270000 : 360000;

  // COD calculations
  const parsedCod = parseFloat(codAmount) || 0;
  const codAmountUsd = codCurrency === 'USD' ? parsedCod : parsedCod / CURRENT_USD_LBP_RATE;
  const codAmountLbp = codCurrency === 'LBP' ? parsedCod : Math.round(parsedCod * CURRENT_USD_LBP_RATE);

  // Net merchant payout (Cash collected minus fixed flat courier delivery fee)
  const netPayoutUsd = Math.max(0, codAmountUsd - deliveryFeeUsd);
  const netPayoutLbp = Math.max(0, codAmountLbp - deliveryFeeLbp);

  return (
    <section id="rate-calculator" className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Guaranteed Flat-Rate Lebanese Courier Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            $3 Flat inside Beirut. $4 Flat across Lebanon.
          </h2>
          <p className="text-slate-600 text-base">
            Fixed, transparent rates with zero fuel markups, zero weight tier surprises, and free Cash on Delivery (COD) collection.
          </p>
        </div>

        {/* 2-Pillar Flat Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          <div className={`p-4 rounded-2xl border transition-all ${
            isInsideBeirut 
              ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/20 shadow-xs' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Zone 1: Inside Beirut</span>
              <span className="text-xs font-black bg-blue-600 text-white px-2 py-0.5 rounded-md">$3.00 Flat</span>
            </div>
            <div className="text-2xl font-black text-slate-900">$3.00 <span className="text-xs font-semibold text-slate-500">/ 270,000 LBP</span></div>
            <p className="text-[11px] text-slate-600 mt-1">
              Achrafieh, Hamra, Verdun, Badaro, Downtown, Mar Mikhael, Gemmayze, Mazraa &amp; suburbs.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border transition-all ${
            !isInsideBeirut 
              ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xs' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Zone 2: Outside Beirut</span>
              <span className="text-xs font-black bg-emerald-600 text-white px-2 py-0.5 rounded-md">$4.00 Flat</span>
            </div>
            <div className="text-2xl font-black text-slate-900">$4.00 <span className="text-xs font-semibold text-slate-500">/ 360,000 LBP</span></div>
            <p className="text-[11px] text-slate-600 mt-1">
              Mount Lebanon, Metn, Keserwan, North Tripoli, South Saida &amp; Tyre, Bekaa &amp; Nabatieh.
            </p>
          </div>
        </div>

        {/* Main Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Origin District */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>Pickup City / District</span>
                </label>
                <select
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                  className="w-full py-3 px-3.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                >
                  {LEBANESE_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name.split('(')[0]}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Merchant store, hub, or residence
                </span>
              </div>

              {/* Destination District */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Destination Customer District</span>
                </label>
                <select
                  value={destId}
                  onChange={(e) => setDestId(e.target.value)}
                  className="w-full py-3 px-3.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                >
                  {LEBANESE_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.governorate}: {d.name.split('(')[0]}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  {destDistrict.zone}
                </span>
              </div>

            </div>

            {/* Weight Slider & Presets */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-orange-600" />
                  <span>Package Weight: {weightKg} kg</span>
                </label>
                <span className="text-xs font-medium text-slate-500">
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
                className="w-full accent-orange-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                <span>0.5 kg (Document / Shirt)</span>
                <span>2 kg (Base cap)</span>
                <span>5 kg (Shoes / Cosmetics)</span>
                <span>15 kg (Bulk)</span>
              </div>
            </div>

            {/* Speed Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Delivery Speed &amp; Priority</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpeed('standard')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    speed === 'standard'
                      ? 'border-orange-600 bg-orange-50/50 ring-2 ring-orange-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">Next-Day Standard</span>
                    <span className="text-[11px] font-bold text-slate-500">Regular</span>
                  </div>
                  <div className="text-[11px] text-slate-600">
                    24 to 48 hours doorstep dispatch across all Lebanese regions.
                  </div>
                </button>

                <button
                  type="button"
                  disabled={!destDistrict.expressAvailable}
                  onClick={() => destDistrict.expressAvailable && setSpeed('express')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    !destDistrict.expressAvailable
                      ? 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-100'
                      : speed === 'express'
                      ? 'border-orange-600 bg-orange-50/50 ring-2 ring-orange-500/20 cursor-pointer'
                      : 'border-slate-200 bg-white hover:border-slate-300 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>Same-Day Express</span>
                      <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                    </span>
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded-sm">
                      +$2.00
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600">
                    {destDistrict.expressAvailable
                      ? 'Guaranteed within 4 to 6 hours (Beirut & Metn zone)'
                      : 'Not available for remote zones'}
                  </div>
                </button>
              </div>
            </div>

            {/* Cash on Delivery (COD) Amount Input */}
            <div className="pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cash on Delivery (COD) to Collect</span>
                </label>

                {/* Currency Toggle */}
                <div className="flex rounded-lg border border-slate-300 overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => {
                      if (codCurrency !== 'USD') {
                        setCodCurrency('USD');
                        setCodAmount('50');
                      }
                    }}
                    className={`px-3 py-1 text-xs font-bold transition-colors ${
                      codCurrency === 'USD'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (codCurrency !== 'LBP') {
                        setCodCurrency('LBP');
                        setCodAmount('4500000');
                      }
                    }}
                    className={`px-3 py-1 text-xs font-bold transition-colors ${
                      codCurrency === 'LBP'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    LBP (ل.ل)
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  value={codAmount}
                  onChange={(e) => setCodAmount(e.target.value)}
                  placeholder={codCurrency === 'USD' ? '50' : '4500000'}
                  className="w-full pl-9 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                />
                <span className="absolute left-3.5 top-3.5 text-xs font-bold text-slate-400">
                  {codCurrency === 'USD' ? '$' : 'LL'}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Official exchange reference: 1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP
              </span>
            </div>

          </div>

          {/* Results & Breakdown Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
                Quote &amp; Remittance Breakdown
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                ${deliveryFeeUsd.toFixed(2)}{' '}
                <span className="text-base font-bold text-slate-400">
                  / {deliveryFeeLbp.toLocaleString()} LBP
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Estimated Delivery Fee for {originDistrict.name.split('(')[0]} &rarr; {destDistrict.name.split('(')[0]}
              </p>
            </div>

            {/* Detailed Line Items */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span>Fixed Courier Rate</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    isInsideBeirut ? 'bg-blue-900/60 text-blue-300' : 'bg-emerald-900/60 text-emerald-300'
                  }`}>
                    {isInsideBeirut ? 'Inside Beirut ($3 Flat)' : 'Outside Beirut ($4 Flat)'}
                  </span>
                </span>
                <span className="font-bold text-white">
                  ${deliveryFeeUsd.toFixed(2)} USD
                </span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Fuel Surcharge &amp; Distance Tax</span>
                <span className="font-bold text-emerald-400">NONE ($0.00)</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>COD Cash Collection &amp; Vault Handling</span>
                <span className="font-bold text-emerald-400">FREE ($0.00)</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Complimentary A6 Label &amp; RT Flyer Bag</span>
                <span className="font-bold text-emerald-400">INCLUDED</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Customer Delivery Window</span>
                <span className="font-bold text-white">
                  {destDistrict.standardEtaHours} Hours Doorstep
                </span>
              </div>
            </div>

            {/* Net Merchant Cash Payout Box */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">
                  Net Merchant Payout (COD):
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  Remitted Weekly
                </span>
              </div>
              <div className="text-xl font-black text-emerald-400">
                {codCurrency === 'USD' ? (
                  <>
                    ${netPayoutUsd.toFixed(2)} USD
                    <span className="text-xs font-medium text-slate-400 block mt-0.5">
                      (Or {netPayoutLbp.toLocaleString()} LBP)
                    </span>
                  </>
                ) : (
                  <>
                    {netPayoutLbp.toLocaleString()} LBP
                    <span className="text-xs font-medium text-slate-400 block mt-0.5">
                      (Or ${netPayoutUsd.toFixed(2)} USD)
                    </span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Collected by courier from your client and paid to you every 48 hours in fresh cash or direct transfer.
              </p>
            </div>

            {/* CTAs inside breakdown */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={onSchedulePickup}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Courier with This Rate</span>
              </button>

              <button
                onClick={onPartnerClick}
                className="w-full py-2.5 bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Ship over 50 orders/month? Request Volume Rates &rarr;</span>
              </button>
            </div>

            {/* Trust check */}
            <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-2 border-t border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complimentary RT barcode packaging flyers included for merchants.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
