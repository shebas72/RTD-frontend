import React, { useState } from 'react';
import { 
  Warehouse, 
  Boxes, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Scan, 
  Package, 
  Layers,
  ThermometerSnowflake
} from 'lucide-react';

export const WarehouseFulfillmentInfographic: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<number>(0);

  const stations = [
    {
      id: 0,
      title: 'Inbound Receiving & SKU Barcoding',
      icon: Scan,
      badge: 'Arrival Stage',
      summary: 'Merchant brings stock or sends bulk boxes to our Beirut hub in Corniche El Nahr.',
      specs: [
        'Each SKU verified against merchant manifest',
        'Unique internal barcode applied to item packaging',
        'Real-time inventory levels uploaded to merchant portal',
      ],
      equipment: 'High-speed 2D Barcode Scanners + Thermal Labelers',
    },
    {
      id: 1,
      title: 'High-Density Shelving & Pallet Racks',
      icon: Warehouse,
      badge: 'Storage Stage',
      summary: 'Items stored in numbered bin locations optimized for rapid pick times.',
      specs: [
        'Numbered aisle, bay, and bin tracking system',
        'Constant climate control against heat & humidity',
        'Pallet racking for bulk merchandise & carton reserves',
      ],
      equipment: 'Heavy-Duty Industrial Steel Racks (Up to 4 Tiers)',
    },
    {
      id: 2,
      title: '24/7 Redundant Power & Generator Array',
      icon: Zap,
      badge: 'Facility Safeguards',
      summary: 'Zero downtime guaranteed through dual commercial generators and solar backup.',
      specs: [
        'Dual automatic transfer switch (ATS) power redundancy',
        'Clean power for servers, scanners, and CCTV systems',
        'Fire suppression, smoke detectors, and surge protection',
      ],
      equipment: 'Commercial Perkins 150kVA Generator + Solar Array',
    },
    {
      id: 3,
      title: 'Pick, Pack & Bubble-Wrap Station',
      icon: Package,
      badge: 'Outbound Stage',
      summary: 'When an order arrives via Shopify/IG, our staff prepares the customer package in under 4 minutes.',
      specs: [
        'Heavy-duty tamper-proof RT poly flyer bags provided free',
        'Double-layer bubble wrap protection for fragile goods',
        'Thermal A6 waybill printed and securely adhered',
      ],
      equipment: 'Ergonomic Packing Tables + Heat Sealers',
    },
  ];

  const current = stations[selectedStation];

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold mb-3">
            <Warehouse className="w-3.5 h-3.5" />
            <span>Beirut Central Hub Infrastructure</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Warehouse &amp; Fulfillment Architecture
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            A look inside our Corniche El Nahr logistics hub: secure storage, 24/7 backup power, precision barcode picking, and rapid flyer packaging.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800 text-xs shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-200 font-semibold">100% Insured Storage Facility</span>
        </div>
      </div>

      {/* 4 Station Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stations.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = selectedStation === idx;
          return (
            <button
              key={st.id}
              onClick={() => setSelectedStation(idx)}
              className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 border-blue-500 ring-2 ring-blue-500/30 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  Stage 0{st.id + 1}
                </span>
                <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
              </div>

              <div>
                <h4 className={`text-xs font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {st.title}
                </h4>
                <span className="text-[10px] text-blue-400 font-semibold block">
                  {st.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Station Detailed View */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              {current.badge}
            </span>
            <h4 className="text-xl font-black text-white mt-0.5">
              {current.title}
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            {current.equipment}
          </span>
        </div>

        <p className="text-sm text-slate-300">
          {current.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {current.specs.map((item, i) => (
            <div key={i} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Specs Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
        <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-base font-black text-white block">24/7 Power</span>
          <span className="text-[11px] text-slate-400">Zero Blackout Guarantee</span>
        </div>
        <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-base font-black text-emerald-400 block">&lt; 4 Minutes</span>
          <span className="text-[11px] text-slate-400">Avg Pick &amp; Pack Time</span>
        </div>
        <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-base font-black text-blue-400 block">CCTV Audited</span>
          <span className="text-[11px] text-slate-400">Full Coverage Vault</span>
        </div>
        <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-base font-black text-orange-400 block">Free Flyer Bags</span>
          <span className="text-[11px] text-slate-400">Complimentary Supplies</span>
        </div>
      </div>

    </div>
  );
};
