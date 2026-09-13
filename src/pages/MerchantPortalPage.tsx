import React from 'react';
import { 
  Laptop, 
  ExternalLink, 
  FileSpreadsheet, 
  ShoppingBag, 
  Code, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Database,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import { MerchantDashboardPreview } from '../components/MerchantDashboardPreview';

interface MerchantPortalPageProps {
  onOpenPartner: () => void;
  onOpenPickup: () => void;
  onTrackWaybill: (waybill: string) => void;
}

export const MerchantPortalPage: React.FC<MerchantPortalPageProps> = ({
  onOpenPartner,
  onOpenPickup,
  onTrackWaybill,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Laptop className="w-3.5 h-3.5" />
            <span>DEDICATED LARAVEL SAAS MERCHANT PLATFORM</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Logistics Software That Moves as Fast as You Sell
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Command your complete Lebanese delivery operation from one terminal: live package waybill statuses, instant thermal barcode printing, dual-currency COD ledger balances, and automated Shopify syncing.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.rtdeliveries.net/login"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2"
            >
              <span>Log In to Live Portal (app.rtdeliveries.net)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenPartner}
              className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              Request Merchant Account
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE SAAS DASHBOARD DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MerchantDashboardPreview
          onTrackWaybill={onTrackWaybill}
          onOpenPickupModal={onOpenPickup}
          onOpenPartnerModal={onOpenPartner}
        />
      </section>

      {/* SECTION 2: SOFTWARE CAPABILITIES & WORKFLOW INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b101e] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
              SMART DISPATCH INTEGRATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Three Ways to Log Orders in Seconds
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Whether you ship 5 parcels or 500 packages per day, our platform adapts to your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Method 1: Store Integration */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">1. Shopify &amp; WooCommerce</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect your store API keys once. Unfulfilled orders import automatically, generate waybills with customer Lebanese addresses, and push tracking numbers back to Shopify.
              </p>
              <span className="text-[11px] font-mono-tech text-emerald-400 font-semibold block pt-2 border-t border-slate-800">
                1-Click Store Auto-Sync
              </span>
            </div>

            {/* Method 2: Excel / CSV */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">2. Bulk Excel Upload</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Selling on Instagram or WhatsApp? Download our simple Excel template, paste 100+ recipient names, Lebanese mobile numbers, and COD values, and upload to generate all waybills in 3 seconds.
              </p>
              <span className="text-[11px] font-mono-tech text-emerald-400 font-semibold block pt-2 border-t border-slate-800">
                Bulk Print 100+ Labels
              </span>
            </div>

            {/* Method 3: REST API */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">3. Direct REST Developer API</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                For custom Lebanese ERPs, mobile apps, or headless platforms. Secure token-based API to generate waybills, receive webhook dispatch updates, and query real-time driver coordinates.
              </p>
              <span className="text-[11px] font-mono-tech text-emerald-400 font-semibold block pt-2 border-t border-slate-800">
                Webhooks &amp; JSON APIs
              </span>
            </div>

          </div>

          {/* Developer Code Preview Box */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono-tech text-slate-400 font-bold ml-2">POST /api/v1/shipments/create</span>
              </div>
              <span className="text-[11px] font-mono-tech text-slate-500">Authorization: Bearer RT_TOKEN</span>
            </div>

            <pre className="p-4 bg-slate-900/90 rounded-xl text-[11px] font-mono-tech text-emerald-400 overflow-x-auto leading-relaxed border border-slate-800">
{`{
  "recipient_name": "Karim Haddad",
  "phone": "+961 70 123456",
  "governorate": "Mount Lebanon",
  "district": "Metn",
  "city": "Antelias",
  "address_details": "Main Road, Facing St. Elie Church, 3rd Floor",
  "cod_amount_usd": 65.00,
  "cod_amount_lbp": 0,
  "delivery_fee_usd": 4.00,
  "pieces": 1,
  "service_type": "standard_doorstep",
  "allow_open_package": true
}`}
            </pre>
          </div>

        </div>
      </section>

    </div>
  );
};
