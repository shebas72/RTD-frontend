import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Package, 
  Calculator, 
  Zap, 
  CheckCircle2, 
  DollarSign,
  ExternalLink,
  Clock,
  ChevronRight,
  TrendingUp,
  Boxes,
  Compass,
  Radio
} from 'lucide-react';
import { LEBANESE_DISTRICTS, CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';
import { useLanguage } from '../context/LanguageContext';

const GOVERNORATE_ARABIC: Record<string, string> = {
  'Beirut': 'بيروت',
  'Mount Lebanon': 'جبل لبنان',
  'North': 'الشمال',
  'South': 'الجنوب',
  'Bekaa': 'البقاع',
  'Nabatieh': 'النبطية',
  'Akkar': 'عكار',
  'Baalbek-Hermel': 'بعلبك - الهرمل',
};

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
  const { t, isRTL } = useLanguage();
  const [activeCockpitTab, setActiveCockpitTab] = useState<'track' | 'rates' | 'linehauls'>('track');
  const [inputWaybill, setInputWaybill] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState('bey_central');

  const selectedDistrict = LEBANESE_DISTRICTS.find((d) => d.id === selectedDistrictId) || LEBANESE_DISTRICTS[0];
  const isBeirut = selectedDistrict.governorate === 'Beirut';
  const deliveryFeeUsd = isBeirut ? 3.0 : 4.0;
  const deliveryFeeLbp = isBeirut ? 270000 : 360000;

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputWaybill.trim()) {
      onTrackWaybill(inputWaybill.trim().toUpperCase());
    }
  };

  const sampleWaybills = [
    { code: 'RT-8942-BEY', loc: 'Hamra, Beirut', status: isRTL ? 'قيد التوصيل' : 'Out for Delivery', time: '14:30' },
    { code: 'RT-5120-MN', loc: 'Antelias, Metn', status: isRTL ? 'في الطريق' : 'In Transit', time: '16:00' },
    { code: 'RT-2041-TRP', loc: 'Mina, Tripoli', status: isRTL ? 'في مركز الفرز' : 'Sorted at Hub', time: isRTL ? 'غداً' : 'Tomorrow' },
  ];

  const linehaulDepartures = [
    { dest: isRTL ? 'بيروت وضواحيها' : 'Greater Beirut Metro', time: isRTL ? 'كل 90 دقيقة' : 'Every 90 mins', status: isRTL ? 'نشط' : 'Active', badge: isRTL ? 'دراجات سريعة' : 'Express Motos' },
    { dest: isRTL ? 'جبل لبنان وكسروان' : 'Mount Lebanon & Keserwan', time: isRTL ? '10:00 ص و 2:30 م' : '10:00 AM & 2:30 PM', status: isRTL ? 'نشط' : 'Active', badge: isRTL ? 'فانات شحن' : 'Cargo Vans' },
    { dest: isRTL ? 'شمال لبنان (طرابلس / البترون)' : 'North Lebanon (Tripoli / Batroun)', time: isRTL ? '11:00 ص يومياً' : '11:00 AM Daily', status: isRTL ? 'في الطريق' : 'En Route', badge: isRTL ? 'رحلة خط' : 'Linehaul Shuttle' },
    { dest: isRTL ? 'جنوب لبنان (صيدا / صور)' : 'South Lebanon (Saida / Tyre)', time: isRTL ? '11:30 ص يومياً' : '11:30 AM Daily', status: isRTL ? 'نشط' : 'Active', badge: isRTL ? 'رحلة خط' : 'Linehaul Shuttle' },
    { dest: isRTL ? 'البقاع (زحلة / شتورا)' : 'Bekaa Valley (Zahle / Chtaura)', time: isRTL ? '12:00 م يومياً' : '12:00 PM Daily', status: isRTL ? 'قيد التحميل' : 'Loading', badge: isRTL ? 'رحلة خط' : 'Linehaul Shuttle' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070b14] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      
      {/* High-tech radial background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-600/15 via-orange-500/5 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dot-dark opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* HERO MAIN SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: PUNCHY HIGH-IMPACT NARRATIVE (Col 7) */}
          <div className={`lg:col-span-7 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            
            {/* Live Operational Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono-tech shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-400 font-bold">{t('hero.operational_chip', 'NEXT-DAY LEBANON LOGISTICS')}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{t('hero.hub_tag', 'CORNICHE EL NAHR HUB')}</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                {t('hero.title', 'Precision Logistics for Lebanon’s')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {t('hero.title_highlight', 'Modern Brands.')}
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Flat Rate Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>{t('hero.rate_beirut_title', 'BEIRUT METRO')}</span>
                  <span className="text-emerald-400 font-bold">FLAT</span>
                </div>
                <div className="text-2xl font-black text-white mt-1">
                  $3.00 <span className="text-xs font-normal text-slate-400 font-mono-tech">/ parcel</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">{t('hero.rate_beirut_sub', '270,000 LBP • Same/Next Day')}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>{t('hero.rate_lebanon_title', 'ALL LEBANON')}</span>
                  <span className="text-orange-400 font-bold">FLAT</span>
                </div>
                <div className="text-2xl font-black text-white mt-1">
                  $4.00 <span className="text-xs font-normal text-slate-400 font-mono-tech">/ parcel</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">{t('hero.rate_lebanon_sub', '360,000 LBP • 26 Districts')}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>{t('hero.rate_cod_title', 'COD REMITTANCE')}</span>
                  <span className="text-emerald-400 font-bold">0% FEE</span>
                </div>
                <div className="text-xl font-black text-emerald-400 mt-1">
                  {t('hero.rate_cod_val', 'USD & LBP')}
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">{t('hero.rate_cod_sub', 'Daily cash envelopes or Whish')}</span>
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenPickupModal}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>{t('hero.btn_pickup', 'Book Merchant Pickup')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </button>

              <button
                onClick={() => onSelectSection('services')}
                className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>{t('hero.btn_pricing', 'Rate & Pricing Details')}</span>
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="px-4 py-3.5 text-xs text-slate-400 hover:text-white font-bold transition-colors cursor-pointer"
              >
                {t('hero.btn_partner', 'Open Merchant Account →')}
              </button>
            </div>

            {/* Trust Checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('hero.trust_fuel', 'Zero Fuel Surcharges')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('hero.trust_fleet', 'Vetted Company Uniformed Fleet')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('hero.trust_license', 'Official Lebanese SARL License')}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE DISPATCH COCKPIT TERMINAL (Col 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b101e] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Cockpit Window Header */}
              <div className="bg-[#070b15] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono-tech text-[11px] text-slate-400 font-bold ml-2">
                    {t('cockpit.title', 'RT_DISPATCH_COCKPIT // V3.2')}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono-tech">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Segmented Cockpit Tabs */}
              <div className="p-2 bg-[#090e1c] border-b border-slate-800 grid grid-cols-3 gap-1.5 text-xs font-mono-tech">
                <button
                  onClick={() => setActiveCockpitTab('track')}
                  className={`py-2 px-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeCockpitTab === 'track'
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Search className="w-3 h-3" />
                  <span>{t('cockpit.tab_track', 'Track')}</span>
                </button>

                <button
                  onClick={() => setActiveCockpitTab('rates')}
                  className={`py-2 px-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeCockpitTab === 'rates'
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Calculator className="w-3 h-3" />
                  <span>{t('cockpit.tab_rates', 'Rates')}</span>
                </button>

                <button
                  onClick={() => setActiveCockpitTab('linehauls')}
                  className={`py-2 px-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeCockpitTab === 'linehauls'
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Radio className="w-3 h-3" />
                  <span>{t('cockpit.tab_linehauls', 'Linehauls')}</span>
                </button>
              </div>

              {/* Cockpit Tab Content */}
              <div className="p-6 space-y-5">
                
                {/* TAB 1: LIVE WAYBILL TRACKER */}
                {activeCockpitTab === 'track' && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs text-orange-400 font-mono-tech font-bold block">
                        {t('cockpit.track_badge', 'DIRECT LARAVEL DISPATCH QUERY')}
                      </span>
                      <h3 className="text-lg font-black text-white">
                        {t('cockpit.track_title', 'Enter Lebanese Waybill')}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {t('cockpit.track_sub', 'Direct query to')} <code className="text-slate-300 font-mono-tech">app.rtdeliveries.net</code>
                      </p>
                    </div>

                    <form onSubmit={handleTrackSubmit} className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={inputWaybill}
                          onChange={(e) => setInputWaybill(e.target.value)}
                          placeholder={t('cockpit.track_input_placeholder', 'e.g. RT-8942-BEY')}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3.5 bg-slate-950 border border-slate-700/80 rounded-2xl text-sm font-mono-tech font-bold text-white placeholder:text-slate-500 uppercase focus:outline-hidden focus:border-orange-500 shadow-inner`}
                        />
                        <Search className={`w-4 h-4 text-slate-400 absolute ${isRTL ? 'right-3.5' : 'left-3.5'} top-4`} />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Search className="w-4 h-4" />
                        <span>{t('cockpit.track_submit', 'Query Tracking Servers')}</span>
                      </button>
                    </form>

                    {/* Quick Preset Waybills */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-2">
                      <span className="text-[11px] text-slate-400 font-mono-tech block">
                        {t('cockpit.track_sample_label', 'Or test sample live waybill:')}
                      </span>
                      <div className="space-y-1.5">
                        {sampleWaybills.map((s) => (
                          <button
                            key={s.code}
                            type="button"
                            onClick={() => onTrackWaybill(s.code)}
                            className={`w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-orange-500/40 text-xs transition-all ${isRTL ? 'text-right' : 'text-left'} cursor-pointer group`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono-tech font-bold text-orange-400 group-hover:text-orange-300">
                                {s.code}
                              </span>
                              <span className="text-slate-400">• {s.loc}</span>
                            </div>
                            <span className="text-[10px] font-mono-tech text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 font-bold">
                              {s.status}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: INSTANT RATE CALCULATOR */}
                {activeCockpitTab === 'rates' && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs text-orange-400 font-mono-tech font-bold block">
                        {t('cockpit.rates_badge', 'GUARANTEED FIXED FLAT RATES')}
                      </span>
                      <h3 className="text-lg font-black text-white">
                        {t('cockpit.rates_title', 'Check Delivery Fee')}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {t('cockpit.rates_sub', 'Choose recipient destination anywhere in Lebanon.')}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono-tech text-slate-300 block">
                        {t('cockpit.rates_label', 'Select Delivery Destination:')}
                      </label>
                      <select
                        value={selectedDistrictId}
                        onChange={(e) => setSelectedDistrictId(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-xs font-bold text-white focus:outline-hidden focus:border-orange-500"
                      >
                        {LEBANESE_DISTRICTS.map((d) => (
                          <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                            {isRTL ? d.arabicName : d.name} ({isRTL ? (GOVERNORATE_ARABIC[d.governorate] || d.governorate) : d.governorate}) — {d.governorate === 'Beirut' ? '$3.00 Flat' : '$4.00 Flat'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Calculated Outcome */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-400 font-mono-tech block">
                            {isRTL ? selectedDistrict.arabicName : selectedDistrict.name} ({isRTL ? (GOVERNORATE_ARABIC[selectedDistrict.governorate] || selectedDistrict.governorate) : selectedDistrict.governorate})
                          </span>
                          <span className="text-2xl font-black text-white">
                            ${deliveryFeeUsd.toFixed(2)} USD
                          </span>
                        </div>
                        <div className={isRTL ? 'text-left' : 'text-right'}>
                          <span className="text-[10px] text-slate-400 font-mono-tech block">
                            {isRTL ? 'المعادل بالليرة اللبنانية' : 'LEBANESE POUND EQUIVALENT'}
                          </span>
                          <span className="text-sm font-mono-tech font-bold text-amber-400">
                            {deliveryFeeLbp.toLocaleString()} LBP
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                        <div className="flex justify-between">
                          <span>{t('cockpit.rates_sla', 'Delivery SLA:')}</span>
                          <strong className="text-emerald-400">{isBeirut ? t('cockpit.rates_sla_beirut', 'Same / Next Day') : t('cockpit.rates_sla_lebanon', '24 - 48 Hours')}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('cockpit.rates_cod', 'COD Cash Handling:')}</span>
                          <strong className="text-white">{t('cockpit.rates_cod_val', 'Included (Zero %)')}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('cockpit.rates_open', 'Open Package Allowed:')}</span>
                          <strong className="text-white">{t('cockpit.rates_open_val', 'Upon Merchant Request')}</strong>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onOpenPickupModal}
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      {t('cockpit.rates_btn', 'Book Delivery to')} {isRTL ? selectedDistrict.arabicName : selectedDistrict.name}
                    </button>
                  </div>
                )}

                {/* TAB 3: LIVE BEIRUT LINEHAUL BOARD */}
                {activeCockpitTab === 'linehauls' && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs text-orange-400 font-mono-tech font-bold block">
                        {t('cockpit.linehauls_badge', 'CORNICHE EL NAHR DISPATCH HUB')}
                      </span>
                      <h3 className="text-lg font-black text-white">
                        {t('cockpit.linehauls_title', 'Today\'s Linehaul Shuttles')}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {t('cockpit.linehauls_sub', 'Scheduled regional vans departing from central Beirut.')}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {linehaulDepartures.map((route, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs"
                        >
                          <div className={isRTL ? 'text-right' : 'text-left'}>
                            <span className="font-bold text-white block">{route.dest}</span>
                            <span className="text-[10px] text-slate-400 font-mono-tech">{route.time}</span>
                          </div>
                          <div className={isRTL ? 'text-left' : 'text-right'}>
                            <span className="text-[10px] font-mono-tech text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 font-bold block">
                              {route.status}
                            </span>
                            <span className="text-[9px] text-slate-500 font-mono-tech mt-0.5 block">
                              {route.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{t('cockpit.linehauls_note', 'Parcels received by 2:00 PM at Beirut hub dispatch same evening.')}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Cockpit Footer Bar */}
              <div className="bg-[#070b15] px-5 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono-tech">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{t('cockpit.districts_linked', '26 Districts Linked')}</span>
                </div>
                <button
                  onClick={() => onSelectSection('tracking')}
                  className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('cockpit.full_radar', 'Full Live Iframe')}</span>
                  <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM LIVE TELEMETRY COUNTER STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-850">
          <div className={`p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-400 text-xs font-mono-tech block">{t('stats.sla_label', 'FIRST ATTEMPT SLA')}</span>
            <span className="text-2xl sm:text-3xl font-black text-white font-display mt-0.5 block">
              99.2%
            </span>
            <span className="text-[11px] text-emerald-400 font-medium mt-0.5 block">
              {t('stats.sla_sub', 'Direct phone contact prior to visit')}
            </span>
          </div>

          <div className={`p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-400 text-xs font-mono-tech block">{t('stats.beirut_label', 'BEIRUT METRO RATE')}</span>
            <span className="text-2xl sm:text-3xl font-black text-orange-400 font-display mt-0.5 block">
              $3.00 <span className="text-xs text-slate-400 font-normal">FLAT</span>
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              {t('stats.beirut_sub', 'Zero fuel surcharge guarantee')}
            </span>
          </div>

          <div className={`p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-400 text-xs font-mono-tech block">{t('stats.reach_label', 'NATIONWIDE REACH')}</span>
            <span className="text-2xl sm:text-3xl font-black text-white font-display mt-0.5 block">
              $4.00 <span className="text-xs text-slate-400 font-normal">FLAT</span>
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              {t('stats.reach_sub', 'All 8 Lebanese Governorates')}
            </span>
          </div>

          <div className={`p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-slate-400 text-xs font-mono-tech block">{t('stats.cod_label', 'COD DISBURSEMENT')}</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-display mt-0.5 block">
              100% USD/LBP
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              {t('stats.cod_sub', 'Zero currency deduction loss')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
