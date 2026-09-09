import React from 'react';
import { 
  Truck, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Linkedin, 
  Facebook,
  MessageSquare
} from 'lucide-react';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
  onOpenPickup: () => void;
  onOpenPartner: () => void;
  onOpenTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenPickup,
  onOpenPartner,
  onOpenTracking,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/rt-logo-white.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://rtdeliveries.net/wp-content/uploads/2024/02/new-logo-white.png') {
                    target.src = 'https://rtdeliveries.net/wp-content/uploads/2024/02/new-logo-white.png';
                  }
                }}
                alt="RT Deliveries - Road Train Deliveries SARL"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lebanon&apos;s smart courier and fulfillment service tailored for e-commerce companies and independent sellers. Real-time GPS tracking, guaranteed dual-currency COD remittance, and secure central Beirut warehousing.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <span>COD Settlement Rate:</span>
              <strong className="text-white">1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP</strong>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/96171892411" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('hero')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home &amp; Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  E-Commerce Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('rate-calculator')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Rate Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('about-gallery')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us &amp; Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('warehousing')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Warehousing &amp; Storage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('merchant-portal')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Merchant Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('coverage')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Lebanon Coverage Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('faq')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ &amp; Help Center
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Logistics Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Door-to-Door Courier Delivery</li>
              <li>Cash on Delivery (USD &amp; LBP)</li>
              <li>Central Beirut Warehousing</li>
              <li>Pick &amp; Pack Order Fulfillment</li>
              <li>Doorstep Size &amp; Model Exchanges</li>
              <li>B2B Corporate Legal Dispatch</li>
              <li>Shopify &amp; WooCommerce API Sync</li>
              <li>Thermal Waybill Label Printing</li>
            </ul>
          </div>

          {/* Contact & Beirut Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Headquarters &amp; Dispatch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Corniche El Nahr, Near Sin El Fil Bridge, Logistics Zone, Beirut, Lebanon
                </span>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+9611480220" className="hover:text-white font-semibold">
                  +961 1 480 220
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/96171892411" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  +961 71 892 411 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:dispatch@rtdeliveries.net" className="hover:text-white">
                  dispatch@rtdeliveries.net
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 8:00 AM - 8:00 PM<br />
                  Sunday: Emergency Dispatch &amp; Cold Storage Only
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} RT Deliveries S.A.L. All rights reserved. Registered Lebanese Logistics Operator.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Insured COD &amp; Goods In Transit
            </span>
            <span>•</span>
            <button onClick={onOpenTracking} className="hover:text-white underline cursor-pointer">
              Track Waybill
            </button>
            <span>•</span>
            <button onClick={onOpenPartner} className="hover:text-white underline cursor-pointer">
              Merchant Login
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
