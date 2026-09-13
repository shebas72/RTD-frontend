import React from 'react';
import { 
  Navigation, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LebanonCoverage } from '../components/LebanonCoverage';
import { LinehaulNetworkInfographic } from '../components/infographics/LinehaulNetworkInfographic';

interface CoveragePageProps {
  onOpenPickup: () => void;
  onOpenPartner: () => void;
}

export const CoveragePage: React.FC<CoveragePageProps> = ({
  onOpenPickup,
  onOpenPartner,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Navigation className="w-3.5 h-3.5" />
            <span>NATIONWIDE LOGISTICS NETWORK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            From Beirut Quarters to Lebanon’s Furthest Villages
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Our couriers navigate every steep mountain pass, coastal highway, and narrow quarter. Daily scheduled linehauls connecting Beirut with Mount Lebanon, North, South, and the Bekaa.
          </p>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE LINEHAUL INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LinehaulNetworkInfographic />
      </section>

      {/* SECTION 2: INTERACTIVE HUBS DIRECTORY & COVERAGE MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LebanonCoverage
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

    </div>
  );
};
