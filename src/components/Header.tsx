import React, { useState } from 'react';
import { 
  Truck, 
  Search, 
  Calendar, 
  PhoneCall, 
  MessageSquare, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';

interface HeaderProps {
  onOpenTracking: (waybill?: string) => void;
  onOpenPickup: () => void;
  onOpenPartner: () => void;
  onSelectSection: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTracking,
  onOpenPickup,
  onOpenPartner,
  onSelectSection,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchWaybill, setQuickSearchWaybill] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchWaybill.trim()) {
      onOpenTracking(quickSearchWaybill.trim().toUpperCase());
      setQuickSearchWaybill('');
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'rate-calculator', label: 'Rate Calculator' },
    { id: 'about-gallery', label: 'About & Gallery' },
    { id: 'warehousing', label: 'Warehousing & Storage' },
    { id: 'merchant-portal', label: 'Merchant Portal' },
    { id: 'coverage', label: 'Lebanon Coverage' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Bar - Lebanese Logistics & Exchange Indicator */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>COD Rate:</span>
              <strong className="text-white">1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP</strong>
            </span>
            <span className="text-slate-500">•</span>
            <span className="inline-flex items-center gap-1.5 font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 text-[11px]">
              <span>Fixed Rates: $3 Beirut • $4 Outside Beirut</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-orange-400" />
              Cut-off: <strong className="text-white">4:30 PM</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+9611480220" 
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-orange-400" />
              <span className="font-semibold">+961 1 480 220</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20need%20information%20about%20local%20delivery%20and%20COD%20services"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 text-left group focus:outline-hidden py-1"
              aria-label="RT Deliveries Home"
            >
              <img
                src="/brand/rt-logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://rtdeliveries.net/wp-content/uploads/2024/05/logo-final-live.png') {
                    target.src = 'https://rtdeliveries.net/wp-content/uploads/2024/05/logo-final-live.png';
                  }
                }}
                alt="RT Deliveries - Road Train Deliveries SARL"
                className="h-10 sm:h-12 w-auto max-w-[190px] sm:max-w-[220px] object-contain group-hover:opacity-95 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Tracking Button */}
            <button
              onClick={() => onOpenTracking()}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 text-slate-700 text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <Search className="w-4 h-4 text-orange-600" />
              <span>Track Order</span>
            </button>

            {/* Merchant Portal Demo Link */}
            <button
              onClick={() => handleNavClick('merchant-portal')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 text-slate-500" />
              <span>Merchant Login</span>
            </button>

            {/* Primary Action - Schedule Pickup */}
            <button
              onClick={onOpenPickup}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-sm font-bold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Pickup</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenTracking()}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Track Shipment"
            >
              <Search className="w-5 h-5 text-orange-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {/* Quick Tracking Search in Mobile Menu */}
          <form onSubmit={handleQuickSearch} className="relative">
            <input
              type="text"
              placeholder="Enter waybill (e.g. RT-8942-BEY)"
              value={quickSearchWaybill}
              onChange={(e) => setQuickSearchWaybill(e.target.value)}
              className="w-full pl-10 pr-24 py-2.5 text-sm bg-slate-100 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-orange-500 font-mono"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg"
            >
              Track
            </button>
          </form>

          <div className="flex flex-col space-y-1 divide-y divide-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between py-2.5 text-left text-sm font-semibold text-slate-700 hover:text-orange-600"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPickup();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-orange-600 text-white font-bold rounded-xl shadow-sm text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Pickup</span>
            </button>

            <button
              onClick={() => {
                onOpenPartner();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm"
            >
              <span>Partner With Us (E-Commerce)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
