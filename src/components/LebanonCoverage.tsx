import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Truck, 
  Navigation, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';
import { RT_LOGISTICS_HUBS } from '../data/lebanonLocations';

interface LebanonCoverageProps {
  onSchedulePickup: () => void;
  onPartnerClick: () => void;
}

export const LebanonCoverage: React.FC<LebanonCoverageProps> = ({
  onSchedulePickup,
  onPartnerClick,
}) => {
  const [selectedHubId, setSelectedHubId] = useState(RT_LOGISTICS_HUBS[0].id);
  const selectedHub = RT_LOGISTICS_HUBS.find((h) => h.id === selectedHubId) || RT_LOGISTICS_HUBS[0];

  const coverageZones = [
    {
      region: 'Greater Beirut Area',
      speed: 'Same-Day (2-4h) & Next-Day',
      areas: 'Achrafieh, Hamra, Verdun, Badaro, Mar Mikhael, Downtown, Mazraa, Raouche, Jnah, UNESCO',
      status: 'Daily Multiple Van & Motorbike Runs',
      highlight: true,
    },
    {
      region: 'Mount Lebanon - Metn Coast & Heights',
      speed: '24 Hours Doorstep',
      areas: 'Sin El Fil, Dekwaneh, Jdeideh, Antelias, Dbayeh, Mansourieh, Broummana, Bikfaya, Beit Mery',
      status: 'Daily Morning & Afternoon Dispatch',
      highlight: true,
    },
    {
      region: 'Mount Lebanon - Keserwan & Jbeil',
      speed: '24 Hours Doorstep',
      areas: 'Zouk Mosbeh, Zouk Mikael, Kaslik, Jounieh, Sarba, Tabarja, Ghazir, Byblos (Jbeil)',
      status: 'Daily Dedicated Coastal Van',
      highlight: false,
    },
    {
      region: 'North Lebanon (Tripoli & Koura)',
      speed: '24 to 48 Hours',
      areas: 'Tripoli City, Al Mina, Batroun, Chekka, Koura, Zgharta, Ehden',
      status: 'Daily Evening Inter-Hub Shuttle',
      highlight: false,
    },
    {
      region: 'South Lebanon (Saida, Tyre, Nabatieh)',
      speed: '24 to 48 Hours',
      areas: 'Saida, Ghazieh, Maghdouche, Tyre (Sour), Qana, Nabatieh, Jezzine',
      status: 'Daily Southern Highway Dispatch Line',
      highlight: false,
    },
    {
      region: 'Bekaa Valley (Zahle, Chtaura, Baalbek)',
      speed: '24 to 48 Hours',
      areas: 'Chtaura, Zahle, Saadnayel, Bar Elias, West Bekaa (Joub Jannine), Baalbek',
      status: 'Daily Mountain Line Express Run',
      highlight: false,
    },
  ];

  return (
    <section id="coverage" className="py-16 lg:py-24 bg-[#070b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Navigation className="w-3.5 h-3.5" />
            <span>NATIONWIDE DISPATCH MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Connecting Merchants to Customers Across Every Lebanese City &amp; Village
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From bustling Beirut quarters to high Mount Lebanon peaks, Tripoli coastlines, and Bekaa valleys. Our drivers know every street, building landmark, and alley.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Coverage Zones Cards */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xs font-mono-tech font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Truck className="w-4 h-4 text-orange-400" />
              <span>Lebanon Delivery Zones &amp; Transit Schedules</span>
            </h3>

            <div className="space-y-3">
              {coverageZones.map((zone, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    zone.highlight
                      ? 'bg-[#0b101e] border-orange-500/40 shadow-xl'
                      : 'bg-[#0b101e] border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{zone.region}</span>
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold self-start sm:self-auto">
                      {zone.speed}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                    <strong className="text-slate-300">Key Areas: </strong>
                    {zone.areas}
                  </p>

                  <div className="text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{zone.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Regional Hub Directory */}
          <div className="lg:col-span-5 bg-[#0b101e] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                FACILITY NETWORK
              </span>
              <h3 className="text-xl font-black text-white font-display mt-1">
                RT Regional Hubs &amp; Drop-Off Centers
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Drop off packages in person, collect weekly COD cash, or pick up complimentary flyer bags.
              </p>
            </div>

            {/* Hub Selector Pills */}
            <div className="flex flex-wrap gap-1.5">
              {RT_LOGISTICS_HUBS.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHubId(hub.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                    selectedHubId === hub.id
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {hub.governorate}
                </button>
              ))}
            </div>

            {/* Selected Hub Details Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div>
                <span className="text-[11px] font-mono-tech font-bold text-orange-400 uppercase">
                  {selectedHub.type}
                </span>
                <h4 className="text-base font-black text-white font-display mt-0.5">
                  {selectedHub.name}
                </h4>
                <div className="flex items-start gap-2 text-xs text-slate-400 mt-2">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{selectedHub.address}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono-tech pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Working Hours:</span>
                  </span>
                  <span className="font-bold text-white">{selectedHub.hours}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Hub Direct Line:</span>
                  </span>
                  <a href={`tel:${selectedHub.phone}`} className="font-bold text-orange-400 hover:underline">
                    {selectedHub.phone}
                  </a>
                </div>
              </div>

              {/* Facilities Checklist */}
              <div className="pt-3 border-t border-slate-800 font-mono-tech">
                <span className="text-[11px] font-bold text-slate-400 block mb-2">
                  On-Site Merchant Services:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                  {selectedHub.facilities.map((fac, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hub WhatsApp Button */}
              <a
                href={`https://wa.me/${selectedHub.mobileWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedHub.name)},%20I%20have%20an%20inquiry%20regarding%20package%20dispatch`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact {selectedHub.governorate} Hub on WhatsApp</span>
              </a>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <button
                onClick={onSchedulePickup}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Pickup from Any Lebanese Region</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
