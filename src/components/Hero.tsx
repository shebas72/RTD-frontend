import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Package, 
  Calculator, 
  Calendar, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  DollarSign,
  Boxes,
  PhoneCall
} from 'lucide-react';
import { LEBANESE_DISTRICTS, CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface HeroProps {
  onTrackWaybill: (waybill: string) => void;
  onOpenPickupModal: () => void;
  onOpenPartnerModal: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onTrackWaybill,
  onOpenPickupModal,
  onOpenPartnerModal,
  onSelectSection,
}) => {
  const [activeTab, setActiveTab] = useState<'track' | 'calculate' | 'pickup'>('track');
  const [inputWaybill, setInputWaybill] = useState('');
  
  // Rate preview state inside hero card
  const [origin, setOrigin] = useState('bey_central');
  const [destination, setDestination] = useState('bey_central');
  const [weightKg, setWeightKg] = useState('1');

  const sampleWaybills = [
    { code: 'RT-8942-BEY', label: 'Beirut Delivery (Active)' },
    { code: 'RT-2104-MNT', label: 'Keserwan Express (Delivered)' },
    { code: 'RT-7731-NTH', label: 'Tripoli Shuttle (In Transit)' },
  ];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputWaybill.trim()) {
      onTrackWaybill(inputWaybill.trim());
    }
  };

  // Quick rate calculation: $3 flat inside Beirut, $4 flat outside Beirut
  const destDistrict = LEBANESE_DISTRICTS.find((d) => d.id === destination) || LEBANESE_DISTRICTS[0];
  const isInsideBeirut = destDistrict.governorate === 'Beirut';
  const calculatedUsd = isInsideBeirut ? 3.0 : 4.0;
  const calculatedLbp = isInsideBeirut ? 270000 : 360000;

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle Background Logistics Grid Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-200/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Value Proposition & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              <span>Lebanon&apos;s Dedicated Courier &amp; Fulfillment Network</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Grow your e-commerce in Lebanon with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                frictionless delivery.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Tailored specifically for Lebanese online sellers and independent merchants. Real-time GPS order tracking, reliable COD recovery in USD &amp; LBP, secure central warehouse storage, and automated partner dashboards.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-base shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Partner With RT Deliveries</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenPickupModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300/80 shadow-xs hover:border-slate-400 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-orange-600" />
                <span>Schedule a Pickup</span>
              </button>
            </div>

            {/* Key Lebanese Merchant Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Weekly COD Remittance</div>
                  <div className="text-[11px] text-slate-500">In fresh USD or official LBP</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">All 8 Governorates</div>
                  <div className="text-[11px] text-slate-500">100% Lebanon door-to-door</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Boxes className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Beirut Storage Hub</div>
                  <div className="text-[11px] text-slate-500">Pick, pack &amp; automated dispatch</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Wakilni-Style Quick Action Console */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 overflow-hidden">
              
              {/* Card Header & Navigation Tabs */}
              <div className="bg-slate-900 p-2 flex gap-1 rounded-t-2xl">
                <button
                  onClick={() => setActiveTab('track')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'track'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Track Order</span>
                </button>

                <button
                  onClick={() => setActiveTab('calculate')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'calculate'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Quick Rate</span>
                </button>

                <button
                  onClick={() => setActiveTab('pickup')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'pickup'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Dispatch Courier</span>
                </button>
              </div>

              {/* Tab 1: Live Waybill Tracking */}
              {activeTab === 'track' && (
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        Real-Time Order Tracking
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct live embed linked to app.rtdeliveries.net
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      Live Portal
                    </span>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={inputWaybill}
                        onChange={(e) => setInputWaybill(e.target.value)}
                        placeholder="e.g. RT-8942-BEY"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono font-semibold text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all uppercase placeholder:normal-case placeholder:font-sans placeholder:text-slate-400"
                      />
                      <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer"
                    >
                      <span>Track Shipment Status</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Sample Live Presets for One-Click Testing */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-600 mb-2 flex items-center justify-between">
                      <span>Click to test sample Lebanese waybills:</span>
                      <span className="text-emerald-600 font-bold">● Live Demo</span>
                    </div>
                    <div className="space-y-1.5">
                      {sampleWaybills.map((item) => (
                        <button
                          key={item.code}
                          onClick={() => onTrackWaybill(item.code)}
                          className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 text-left transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-800 group-hover:text-orange-700">
                              {item.code}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              • {item.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-orange-600 font-bold group-hover:translate-x-0.5 transition-transform">
                            View &rarr;
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Quick Shipping Cost & ETA Estimate */}
              {activeTab === 'calculate' && (
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-base font-bold text-slate-900">
                        Instant Lebanon Shipping Estimate
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                        Fixed Flat Rates
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      $3.00 flat inside Beirut • $4.00 flat everywhere else across Lebanon.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pickup Location (Merchant Hub)
                      </label>
                      <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="bey_central">Greater Beirut / Metn Hub</option>
                        <option value="ksr_coast">Keserwan Hub (Zouk Mosbeh / Jounieh)</option>
                        <option value="north_tripoli">North Hub (Tripoli)</option>
                        <option value="south_saida">South Hub (Saida)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Destination District
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                      >
                        {LEBANESE_DISTRICTS.map((dist) => (
                          <option key={dist.id} value={dist.id}>
                            {dist.governorate}: {dist.name.split('(')[0]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Weight (kg)
                        </label>
                        <select
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800"
                        >
                          <option value="1">Up to 1.5 kg (Flyer)</option>
                          <option value="3">3 kg (Box)</option>
                          <option value="5">5 kg (Medium Box)</option>
                          <option value="10">10 kg (Bulk Parcel)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Delivery Speed
                        </label>
                        <div className="py-2 px-3 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-between">
                          <span>{destDistrict.standardEtaHours}h Doorstep</span>
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Price Box */}
                  <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <span>Fixed Delivery Fee</span>
                        <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                          isInsideBeirut ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {isInsideBeirut ? 'Inside Beirut ($3 Flat)' : 'Outside Beirut ($4 Flat)'}
                        </span>
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-black text-orange-600">
                          ${calculatedUsd.toFixed(2)}
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          or {calculatedLbp.toLocaleString()} LBP
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onSelectSection('rate-calculator')}
                      className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
                    >
                      Full Details
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Quick Courier Dispatch */}
              {activeTab === 'pickup' && (
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Book a Courier Pickup
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Need a courier at your shop, home office, or warehouse today?
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Same-day pickup for orders registered before 3:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Complimentary RT flyer packaging bags provided upon request</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Immediate digital barcode receipt upon courier handover</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenPickupModal}
                    className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Open Pickup Scheduling Form</span>
                  </button>

                  <a
                    href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20want%20to%20dispatch%20a%20courier%20now"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Or WhatsApp Urgent Dispatch (+961 71 892 411)</span>
                  </a>
                </div>
              )}

              {/* Card Footer Live Verification */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Lebanese Merchant Protection Protocol
                </span>
                <button
                  onClick={onOpenPartnerModal}
                  className="font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
                >
                  Open Free Merchant Account &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Row below hero */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">120,000+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Lebanese Orders Delivered</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-orange-600">99.2%</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Successful COD Recovery</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">48 Hours</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">COD Remittance Cycle</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Lebanon Cities &amp; Villages</div>
          </div>
        </div>

      </div>
    </section>
  );
};
