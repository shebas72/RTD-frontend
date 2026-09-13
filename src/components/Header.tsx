import React, { useState, useEffect } from 'react';
import { 
  Search, 
  PhoneCall, 
  MessageSquare, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Radio,
  Boxes,
  Zap,
  MapPin,
  Laptop
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
  const [quickWaybill, setQuickWaybill] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickWaybill.trim()) {
      onOpenTracking(quickWaybill.trim().toUpperCase());
      setQuickWaybill('');
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', badge: null },
    { id: 'services', label: 'Pricing & Services', badge: '$3 / $4' },
    { id: 'warehousing', label: 'Warehousing', badge: null },
    { id: 'merchant-portal', label: 'Merchant Platform', badge: 'Laravel' },
    { id: 'coverage', label: 'Lebanon Coverage', badge: '100%' },
    { id: 'about', label: 'About & Gallery', badge: null },
    { id: 'tracking', label: 'Live Tracking', badge: 'Live' },
    { id: 'contact', label: 'Contact & FAQ', badge: null },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Operations Telemetry Bar */}
      <div className="bg-[#070a12] text-slate-300 border-b border-slate-800/80 text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono-tech">
          
          {/* Left: Hub Telemetry & Rate Pin */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-bold tracking-wider">BEIRUT SORTING HUB: ONLINE</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400 border-l border-slate-800 pl-3">
              <MapPin className="w-3 h-3 text-orange-400" />
              <span>Corniche El Nahr, Beirut</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 border-l border-slate-800 pl-3 text-emerald-400">
              <span className="bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded font-bold">FLAT RATES</span>
              <span className="text-white font-bold">$3 Beirut</span>
              <span className="text-slate-500">•</span>
              <span className="text-white font-bold">$4 All Lebanon</span>
            </div>
          </div>

          {/* Right: Dual Currency Reference & WhatsApp Hotline */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-0.5 rounded-md border border-slate-800 text-slate-300">
              <span className="text-slate-400">USD/LBP:</span>
              <span className="text-amber-400 font-bold">{CURRENT_USD_LBP_RATE.toLocaleString()}</span>
            </div>

            <a
              href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20would%20like%20to%20inquire%20about%20delivery%20services"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>+961 71 892 411</span>
            </a>

            <a
              href="https://app.rtdeliveries.net/login"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold transition-colors border-l border-slate-800 pl-3"
            >
              <Laptop className="w-3 h-3" />
              <span>app.rtdeliveries.net</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Dynamic Island Header */}
      <div className={`px-3 sm:px-6 py-2 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-slate-800/80' : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Brand Mark */}
          <button
            onClick={() => onSelectSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden py-1 cursor-pointer"
            aria-label="RT Deliveries Home"
          >
            <div className="relative p-1 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-orange-500/50 transition-colors shadow-inner">
              <img
                src="/brand/rt-logo.png"
                alt="RT Deliveries Lebanon"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://rtdeliveries.net/wp-content/uploads/2025/10/3-768x456.jpeg';
                }}
              />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg text-white tracking-tight leading-none group-hover:text-orange-400 transition-colors">
                  ROAD TRAIN
                </span>
                <span className="px-1.5 py-0.2 rounded bg-orange-600 text-white text-[9px] font-mono-tech font-bold uppercase">
                  SARL
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider block font-mono-tech mt-0.5">
                LEBANON EXPRESS COURIER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800/80 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono-tech uppercase font-bold ${
                      isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-orange-400 border border-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2.5">
            {/* Quick Track Input Pill */}
            <form onSubmit={handleQuickTrack} className="hidden md:flex items-center relative">
              <input
                type="text"
                value={quickWaybill}
                onChange={(e) => setQuickWaybill(e.target.value)}
                placeholder="Track Waybill..."
                className="w-36 lg:w-44 pl-8 pr-3 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 font-mono-tech focus:outline-hidden focus:border-orange-500 focus:w-48 transition-all shadow-inner uppercase"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              <button
                type="submit"
                className="sr-only"
                aria-label="Submit Tracking"
              >
                Track
              </button>
            </form>

            {/* Quick Track Action Button */}
            <button
              onClick={() => onOpenTracking()}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Open Track & Trace"
            >
              <Search className="w-3.5 h-3.5 text-orange-400" />
              <span className="hidden sm:inline">Track</span>
            </button>

            {/* Schedule Pickup CTA */}
            <button
              onClick={onOpenPickup}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Book Pickup</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Track Input */}
          <form onSubmit={handleQuickTrack} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={quickWaybill}
                onChange={(e) => setQuickWaybill(e.target.value)}
                placeholder="Enter Waybill (e.g. RT-8942-BEY)"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 font-mono-tech uppercase focus:outline-hidden focus:border-orange-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-orange-600 text-white font-bold text-xs rounded-xl"
            >
              Track
            </button>
          </form>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-orange-400 font-mono-tech">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenPickup();
                setMobileMenuOpen(false);
              }}
              className="py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Schedule Pickup</span>
            </button>
            <button
              onClick={() => {
                onOpenPartner();
                setMobileMenuOpen(false);
              }}
              className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs text-center"
            >
              Partner With Us
            </button>
          </div>

          {/* Laravel Direct Link Banner */}
          <a
            href="https://app.rtdeliveries.net/login"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
          >
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-orange-400" />
              <span>Merchant Portal (app.rtdeliveries.net)</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      )}
    </header>
  );
};
