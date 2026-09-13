import React, { useState } from 'react';
import { 
  Navigation, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { RT_LOGISTICS_HUBS } from '../../data/lebanonLocations';

export const LinehaulNetworkInfographic: React.FC = () => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('bey');

  const routes = [
    {
      id: 'bey',
      name: 'Zone 1: Greater Beirut Core',
      fee: '$3.00 Flat',
      transit: 'Same-Day (2-4h) & 24h',
      departure: 'Every 2 Hours (Morning & Afternoon)',
      fleet: '12 Commercial Vans + 18 Motorbike Units',
      destinations: 'Achrafieh, Hamra, Verdun, Badaro, Downtown, Mar Mikhael, Jnah, Mazraa',
      description: 'Ultra-dense courier coverage designed to avoid Beirut peak traffic bottlenecks.',
    },
    {
      id: 'metn',
      name: 'Zone 2A: Metn Coast & Keserwan',
      fee: '$4.00 Flat',
      transit: 'Next-Day (Morning Dispatch)',
      departure: 'Daily 8:30 AM & 1:00 PM',
      fleet: '8 Dedicated Linehaul Vans',
      destinations: 'Sin El Fil, Jdeideh, Antelias, Dbayeh, Zouk Mosbeh, Kaslik, Jounieh, Jbeil',
      description: 'Continuous coastal highway route serving coastal commercial centers and residential hubs.',
    },
    {
      id: 'north',
      name: 'Zone 2B: North Lebanon (Tripoli Hub)',
      fee: '$4.00 Flat',
      transit: '24 to 48 Hours',
      departure: 'Daily 7:00 PM Inter-Hub Shuttle',
      fleet: 'Heavy Linehaul Transit Shuttles',
      destinations: 'Batroun, Chekka, Tripoli City, Al Mina, Koura, Zgharta, Ehden',
      description: 'Overnight linehaul connection between Beirut central hub and Tripoli regional depot.',
    },
    {
      id: 'south',
      name: 'Zone 2C: South Lebanon (Saida Hub)',
      fee: '$4.00 Flat',
      transit: '24 to 48 Hours',
      departure: 'Daily 8:00 AM & 6:00 PM',
      fleet: 'Southern Highway Dispatch Vans',
      destinations: 'Saida, Ghazieh, Maghdouche, Tyre (Sour), Qana, Nabatieh, Jezzine',
      description: 'Dedicated southern line providing door-to-door delivery across coastal and inland villages.',
    },
    {
      id: 'bekaa',
      name: 'Zone 2D: Bekaa Valley (Zahle Hub)',
      fee: '$4.00 Flat',
      transit: '24 to 48 Hours',
      departure: 'Daily 9:00 AM Dahr El Baidar Transit',
      fleet: 'All-Weather Mountain Line Vans',
      destinations: 'Chtaura, Zahle, Saadnayel, Bar Elias, West Bekaa, Baalbek',
      description: 'Reliable mountain route connecting Beirut with the entire agricultural and commercial valley.',
    },
  ];

  const activeRoute = routes.find((r) => r.id === selectedRouteId) || routes[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Lebanon Inter-City Shuttles</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Hub &amp; Spoke Linehaul Network
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Our Central Beirut Logistics Hub at Corniche El Nahr coordinates scheduled daily shuttles reaching all 8 Lebanese governorates.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 text-xs shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-300 font-semibold">5 Active Regional Corridors</span>
        </div>
      </div>

      {/* Interactive Central Hub Schematic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Route Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Select Lebanese Route Corridor:
          </span>

          {routes.map((route) => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-orange-500 ring-2 ring-orange-500/30 shadow-md'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <h4 className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {route.name}
                  </h4>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {route.transit}
                  </span>
                </div>

                <div className="text-right shrink-0 ml-2">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-lg font-mono ${
                    route.fee.includes('$3') ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {route.fee}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Diagram */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                Corridor Breakdown
              </span>
              <h4 className="text-xl font-black text-white mt-0.5">
                {activeRoute.name}
              </h4>
            </div>
            <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-white font-mono font-bold text-sm rounded-xl">
              {activeRoute.fee}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeRoute.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[11px] block">Transit Speed:</span>
              <span className="font-bold text-white mt-1 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>{activeRoute.transit}</span>
              </span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[11px] block">Departure Window:</span>
              <span className="font-bold text-white mt-1 block flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activeRoute.departure}</span>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Key Covered Cities &amp; Quarters:
            </span>
            <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-medium">
              {activeRoute.destinations}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Origin: Beirut Central Hub (Corniche El Nahr)</span>
            </span>
            <span className="text-emerald-400 font-semibold">
              Live Fleet Monitored
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
