import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  RotateCw, 
  Copy, 
  Check, 
  Truck, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { SAMPLE_WAYBILLS } from '../data/mockShipments';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface TrackingPageProps {
  initialWaybill?: string;
  onOpenPickup: () => void;
}

export const TrackingPage: React.FC<TrackingPageProps> = ({
  initialWaybill = 'RT-8942-BEY',
  onOpenPickup,
}) => {
  const [waybillInput, setWaybillInput] = useState<string>(initialWaybill);
  const [activeWaybill, setActiveWaybill] = useState<string>(initialWaybill);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const trackingEndpoint = `https://app.rtdeliveries.net/tracking?tracking_id=${encodeURIComponent(activeWaybill.trim())}`;

  const currentShipment = SAMPLE_WAYBILLS.find(
    (s) => s.waybill.toLowerCase() === activeWaybill.trim().toLowerCase()
  ) || SAMPLE_WAYBILLS[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (waybillInput.trim()) {
      setActiveWaybill(waybillInput.trim());
      setIframeKey((prev) => prev + 1);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(trackingEndpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-10 sm:space-y-14 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Search className="w-3.5 h-3.5" />
            <span>REAL-TIME WAYBILL TRACKING ENGINE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Live Parcel Track &amp; Trace
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Direct real-time integration with the RT Deliveries Laravel dispatch platform (<code className="font-mono-tech text-orange-400 font-bold">app.rtdeliveries.net</code>).
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 pt-2">
            <input
              type="text"
              value={waybillInput}
              onChange={(e) => setWaybillInput(e.target.value)}
              placeholder="Enter Waybill Number (e.g. RT-8942-BEY)"
              className="flex-1 px-5 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-sm font-mono-tech font-bold text-white placeholder:text-slate-500 focus:outline-hidden focus:border-orange-500 shadow-xl uppercase"
            />
            <button
              type="submit"
              className="px-7 py-4 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-sm font-bold rounded-2xl transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </form>

          {/* Preset Quick Waybills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono-tech text-slate-400 pt-1">
            <span className="font-semibold">Test Real Presets:</span>
            {['RT-8942-BEY', 'RT-5120-MN', 'RT-2041-TRP'].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  setWaybillInput(num);
                  setActiveWaybill(num);
                  setIframeKey((k) => k + 1);
                }}
                className={`px-3 py-1 rounded-lg font-mono-tech font-bold transition-all cursor-pointer ${
                  activeWaybill === num
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Live Laravel Tracking Frame Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b101e] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Browser Bar Header */}
          <div className="bg-[#070a14] px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 font-bold ml-2 truncate max-w-xs sm:max-w-md">
                app.rtdeliveries.net/tracking?tracking_id={activeWaybill}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer border border-slate-800"
                title="Reload Tracking Frame"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer font-bold border border-slate-800"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy URL'}</span>
              </button>

              <a
                href={trackingEndpoint}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-orange-600/30"
              >
                <span>Open in Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Iframe View */}
          <div className="relative w-full h-[580px] bg-slate-950">
            <iframe
              key={iframeKey}
              src={trackingEndpoint}
              title={`RT Deliveries Live Tracking - ${activeWaybill}`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

          {/* Iframe Bottom Banner */}
          <div className="bg-[#070a14] px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono-tech">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct telemetry feed from Corniche El Nahr Beirut sorting hub.</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <a
                href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20need%20assistance%20tracking%20my%20order"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Dispatch on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Status Timeline Overview Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b101e] rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                WAYBILL MANIFEST RECORD
              </span>
              <h3 className="text-xl font-black text-white font-display mt-0.5">
                {currentShipment.waybill}
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono-tech">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                {currentShipment.statusLabel}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold">
                COD: {currentShipment.codCurrency === 'USD' ? `$${currentShipment.codAmount} USD` : `${currentShipment.codAmount.toLocaleString()} LBP`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono-tech">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 block font-semibold">Recipient:</span>
              <span className="font-bold text-white text-sm mt-0.5 block font-sans">{currentShipment.recipientName}</span>
              <span className="text-slate-400 mt-1 block">{currentShipment.recipientPhone}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 block font-semibold">Destination:</span>
              <span className="font-bold text-white text-sm mt-0.5 block font-sans">{currentShipment.city}, {currentShipment.governorate}</span>
              <span className="text-slate-400 mt-1 block truncate font-sans">{currentShipment.recipientAddress}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 block font-semibold">Assigned Driver:</span>
              <span className="font-bold text-white text-sm mt-0.5 block font-sans">{currentShipment.courierName}</span>
              <span className="text-emerald-400 font-bold mt-1 block">{currentShipment.courierPhone}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 block font-semibold">Delivery Fee:</span>
              <span className="font-bold text-orange-400 text-sm mt-0.5 block font-sans">
                {currentShipment.city === 'Beirut' ? '$3.00 Flat' : '$4.00 Flat'}
              </span>
              <span className="text-slate-400 mt-1 block">Zero hidden fuel charges</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
