import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Search, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Share2, 
  Printer, 
  ArrowRight,
  ExternalLink,
  RotateCw,
  Globe,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { SAMPLE_WAYBILLS } from '../data/mockShipments';
import { ShipmentDetails, TrackingStep } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWaybill?: string;
  onSchedulePickup: () => void;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialWaybill = '',
  onSchedulePickup,
}) => {
  const [waybillInput, setWaybillInput] = useState(initialWaybill);
  const [activeWaybill, setActiveWaybill] = useState(initialWaybill || 'RT-8942-BEY');
  const [currentShipment, setCurrentShipment] = useState<ShipmentDetails | null>(null);
  const [activeView, setActiveView] = useState<'iframe' | 'details'>('iframe');
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const baseTrackingUrl = 'https://app.rtdeliveries.net/tracking?tracking_id=';
  const fullIframeUrl = `${baseTrackingUrl}${encodeURIComponent(activeWaybill.trim())}`;

  useEffect(() => {
    if (initialWaybill) {
      setWaybillInput(initialWaybill);
      setActiveWaybill(initialWaybill);
      performSearch(initialWaybill);
    } else {
      setWaybillInput(SAMPLE_WAYBILLS[0].waybill);
      setActiveWaybill(SAMPLE_WAYBILLS[0].waybill);
      setCurrentShipment(SAMPLE_WAYBILLS[0]);
    }
  }, [initialWaybill, isOpen]);

  const performSearch = (code: string) => {
    const query = code.trim().toUpperCase();
    if (!query) return;

    setActiveWaybill(query);
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);

    const found = SAMPLE_WAYBILLS.find(
      (s) => s.waybill.toUpperCase() === query || s.orderNumber.toUpperCase() === query
    );

    if (found) {
      setCurrentShipment(found);
    } else {
      const generated: ShipmentDetails = {
        waybill: query,
        orderNumber: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        senderName: 'Lebanon E-Commerce Merchant',
        senderPhone: '+961 1 500 200',
        recipientName: 'Valued Customer',
        recipientPhone: '+961 70 *** ***',
        recipientAddress: 'Beirut & Mount Lebanon Delivery Zone',
        city: 'Beirut',
        governorate: 'Beirut',
        currentStatus: 'out_for_delivery',
        statusLabel: 'Out for Delivery (On Route)',
        estimatedDelivery: 'Today by 5:00 PM',
        codAmount: 42,
        codCurrency: 'USD',
        serviceType: 'Next-Day Standard',
        weightKg: 1.5,
        packageCount: 1,
        courierName: 'Charbel K. (RT Fleet)',
        courierPhone: '+961 71 892 411',
        timeline: [
          {
            status: 'order_created',
            title: 'Waybill Generated',
            description: 'Order registered via RT Laravel Logistics Portal.',
            timestamp: 'Yesterday 3:30 PM',
            location: 'Merchant Facility',
            completed: true,
          },
          {
            status: 'picked_up',
            title: 'Picked Up by RT Courier',
            description: 'Package received and barcoded for central hub sorting.',
            timestamp: 'Yesterday 6:00 PM',
            location: 'Beirut Central Hub',
            completed: true,
          },
          {
            status: 'in_transit',
            title: 'Sorting & Dispatch Scan',
            description: 'Assigned to driver delivery vehicle route.',
            timestamp: 'Today 8:30 AM',
            location: 'Regional Sorting Bay',
            completed: true,
          },
          {
            status: 'out_for_delivery',
            title: 'Out for Customer Delivery',
            description: 'Courier contacted recipient via WhatsApp/call.',
            timestamp: 'Today 11:15 AM',
            location: 'Driver Route Active',
            completed: true,
          },
          {
            status: 'delivered',
            title: 'Doorstep Delivery & Cash Collection',
            description: 'Pending customer signature and cash remittance.',
            timestamp: 'Estimated 5:00 PM',
            location: 'Customer Address',
            completed: false,
          },
        ],
      };
      setCurrentShipment(generated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waybillInput.trim()) {
      performSearch(waybillInput.trim());
    }
  };

  const handleRefreshIframe = () => {
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullIframeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Modal Top Header Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold shadow-md shadow-orange-600/30">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg text-white">
                  RT Live Track &amp; Trace
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  Direct Laravel System
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Connected directly to app.rtdeliveries.net
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={fullIframeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Open full page in new tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close tracking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Action Bar Inside Modal */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <input
                type="text"
                value={waybillInput}
                onChange={(e) => setWaybillInput(e.target.value)}
                placeholder="Enter Tracking ID (e.g. RT-8942-BEY)"
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-mono font-bold text-slate-900 uppercase focus:outline-hidden focus:ring-2 focus:ring-orange-500 shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
            
            <button
              type="submit"
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Track Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Preset Chips & View Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-200/80 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-500 font-medium">Quick Demo:</span>
              {SAMPLE_WAYBILLS.map((item) => (
                <button
                  key={item.waybill}
                  onClick={() => {
                    setWaybillInput(item.waybill);
                    performSearch(item.waybill);
                  }}
                  className={`px-2.5 py-1 rounded-lg border font-mono font-semibold transition-all cursor-pointer ${
                    activeWaybill === item.waybill
                      ? 'bg-orange-600 text-white border-orange-600 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-orange-50 hover:border-orange-300'
                  }`}
                >
                  {item.waybill}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="inline-flex rounded-xl bg-slate-200/80 p-0.5 self-start sm:self-auto">
              <button
                onClick={() => setActiveView('iframe')}
                className={`px-3 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === 'iframe'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-orange-600" />
                <span>Live Embedded Portal</span>
              </button>
              <button
                onClick={() => setActiveView('details')}
                className={`px-3 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === 'details'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Summary Breakdown</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 overflow-y-auto bg-slate-100 p-3 sm:p-6">
          {activeView === 'iframe' ? (
            <div className="space-y-3">
              {/* Iframe Browser Chrome Bar */}
              <div className="bg-slate-900 text-slate-300 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs border border-slate-800">
                <div className="flex items-center gap-2 overflow-hidden mr-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-slate-400 font-mono truncate text-[11px]">
                    {fullIframeUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleRefreshIframe}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Reload tracking page"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-medium text-[11px] transition-colors cursor-pointer"
                  >
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              {/* Direct Iframe Container */}
              <div className="relative w-full h-[580px] bg-white rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
                {isIframeLoading && (
                  <div className="absolute inset-0 z-10 bg-slate-50/90 flex flex-col items-center justify-center gap-3 text-slate-600">
                    <div className="w-8 h-8 border-3 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-semibold text-slate-700">
                      Loading live tracking from app.rtdeliveries.net...
                    </span>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  src={fullIframeUrl}
                  title="RT Deliveries Tracking Platform"
                  onLoad={() => setIsIframeLoading(false)}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                />
              </div>

              {/* Support footnote */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 text-[11px] text-slate-500">
                <span>Direct integration with RT Deliveries Laravel core platform.</span>
                <a
                  href={fullIframeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-600 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Having trouble viewing? Open full-screen portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            /* Summary Breakdown View */
            <div className="space-y-6">
              {currentShipment && (
                <div className="space-y-6">
                  {/* Waybill Status Banner */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm font-bold text-slate-500">Waybill:</span>
                        <span className="font-mono text-xl font-black text-slate-900">{currentShipment.waybill}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                          {currentShipment.serviceType}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Destination: <strong>{currentShipment.city}, {currentShipment.governorate}</strong> • Estimated Delivery: <strong>{currentShipment.estimatedDelivery}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[11px] text-slate-500 uppercase font-bold block">COD Amount to Collect</span>
                        <span className="text-2xl font-black text-emerald-600">
                          ${currentShipment.codAmount.toFixed(2)} {currentShipment.codCurrency}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
                      Shipment Route &amp; Milestones
                    </h3>
                    <div className="space-y-6">
                      {currentShipment.timeline.map((step: TrackingStep, idx: number) => (
                        <div key={idx} className="flex gap-4 relative">
                          {idx !== currentShipment.timeline.length - 1 && (
                            <div className={`absolute left-4 top-8 bottom-0 w-0.5 -ml-px ${
                              step.completed ? 'bg-orange-500' : 'bg-slate-200'
                            }`} />
                          )}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                            step.completed
                              ? 'bg-orange-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-400 border border-slate-300'
                          }`}>
                            {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                          </div>
                          <div className="flex-1 pb-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                              <span className="text-xs font-medium text-slate-500">{step.timestamp}</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-0.5">{step.description}</p>
                            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                              <MapPin className="w-3 h-3" />
                              <span>{step.location}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Need urgent delivery support? Call Beirut dispatch at <strong>+961 1 480 220</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSchedulePickup}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Book New Pickup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
