import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  Warehouse, 
  Home, 
  Banknote, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface DeliveryWorkflowInfographicProps {
  onSchedulePickup?: () => void;
}

export const DeliveryWorkflowInfographic: React.FC<DeliveryWorkflowInfographicProps> = ({
  onSchedulePickup,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Order Registration & Waybill',
      timing: 'Instant (24/7)',
      icon: ShoppingBag,
      color: 'from-blue-600 to-indigo-600',
      tag: 'Step 1: Inbound',
      summary: 'Merchant logs order on web portal, Shopify plugin, or Excel upload.',
      details: [
        'Automatic thermal barcode label generated immediately',
        'Customer receives tracking link via WhatsApp/SMS',
        'Package flagged for driver pickup in your merchant portal',
      ],
      actor: 'Lebanese Merchant',
      badge: 'Shopify / Excel Sync',
    },
    {
      step: '02',
      title: 'Doorstep Courier Collection',
      timing: 'Same-Day (Cut-off 4:30 PM)',
      icon: Truck,
      color: 'from-orange-500 to-amber-600',
      tag: 'Step 2: Pickup',
      summary: 'RT Courier arrives at your store, residence, or warehouse in Beirut/Lebanon.',
      details: [
        'Complimentary RT tamper-evident flyer packaging bags provided',
        'Barcode scan confirms handoff to driver in real time',
        'Zero pickup fee for 3+ parcels per dispatch run',
      ],
      actor: 'RT Fleet Courier',
      badge: 'Free Daily Pickups',
    },
    {
      step: '03',
      title: 'Beirut Hub Scan & Sorting',
      timing: 'Overnight (8:00 PM - 5:00 AM)',
      icon: Warehouse,
      color: 'from-purple-600 to-pink-600',
      tag: 'Step 3: Hub Processing',
      summary: 'Orders gathered at Corniche El Nahr facility for automated barcode sorting.',
      details: [
        'Sorted into 8 regional linehaul shuttles across Lebanon',
        'Security screening & 24/7 generator climate protection',
        'Delivery route optimized via GPS navigation for drivers',
      ],
      actor: 'Beirut Hub Team',
      badge: 'CCTV Verified',
    },
    {
      step: '04',
      title: 'Customer Doorstep Delivery & COD',
      timing: '24 Hours ($3 Beirut / $4 Lebanon)',
      icon: Home,
      color: 'from-emerald-500 to-teal-600',
      tag: 'Step 4: Doorstep Drop',
      summary: 'Courier delivers parcel directly to customer and collects cash in USD or LBP.',
      details: [
        'Driver calls recipient before arrival to confirm location',
        'Size / model exchanges handled on the spot if requested',
        'Digital signature & instant delivery confirmation SMS',
      ],
      actor: 'Destination Courier',
      badge: '98.4% Success Rate',
    },
    {
      step: '05',
      title: 'Guaranteed 48h COD Remittance',
      timing: 'Every 48h or Thursdays',
      icon: Banknote,
      color: 'from-amber-500 to-emerald-600',
      tag: 'Step 5: Merchant Cash',
      summary: 'Merchant receives 100% of collected funds minus the flat courier fee.',
      details: [
        'Payout via Cash at hub, Whish Money, OMT, or Bank Transfer',
        'Full itemized Excel & PDF financial remittance report',
        'Zero hidden deductions, zero black-market rate skimming',
      ],
      actor: 'Finance & Remittance',
      badge: 'Fresh USD & LBP',
    },
  ];

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Logistics Infographic</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            How RT Deliveries Works in Lebanon
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Click any phase in the 5-stage pipeline below to see how parcels travel from your store to customer hands with guaranteed cash remittance.
          </p>
        </div>

        {onSchedulePickup && (
          <button
            onClick={onSchedulePickup}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-orange-600/20 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book First Pickup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Interactive Horizontal Pipeline Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800 border-orange-500 ring-2 ring-orange-500/30 shadow-lg'
                  : 'bg-slate-950/70 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.step}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-slate-500'}`} />
              </div>

              <div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                  {item.timing}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Panel (Infographic Focal Card) */}
      <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left: Step visual representation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold border border-slate-700">
                {steps[activeStep].tag}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{steps[activeStep].timing}</span>
              </span>
            </div>

            <h4 className="text-2xl font-black text-white">
              {steps[activeStep].title}
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed">
              {steps[activeStep].summary}
            </p>

            <div className="flex items-center gap-2 text-xs pt-2">
              <span className="text-slate-500">Responsible Entity:</span>
              <span className="font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                {steps[activeStep].actor}
              </span>
            </div>
          </div>

          {/* Right: Technical Features & Guarantees */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Phase Features &amp; Guarantees:
            </span>

            <div className="space-y-2.5">
              {steps[activeStep].details.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-normal">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Standard RT Logistics Protocol</span>
              </span>
              <span className="text-orange-400 font-bold">
                {steps[activeStep].badge}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Trust metric ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-center text-xs">
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-orange-500 block font-mono">$3.00 Flat</span>
          <span className="text-slate-400 text-[11px]">Inside Beirut Doorstep</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-emerald-400 block font-mono">$4.00 Flat</span>
          <span className="text-slate-400 text-[11px]">Outside Beirut (Nationwide)</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-white block font-mono">48 Hours</span>
          <span className="text-slate-400 text-[11px]">Max Cash Remittance Cycle</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-blue-400 block font-mono">100% Insured</span>
          <span className="text-slate-400 text-[11px]">Goods in Transit Guarantee</span>
        </div>
      </div>

    </div>
  );
};
