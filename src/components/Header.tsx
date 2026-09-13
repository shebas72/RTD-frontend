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
  Laptop,
  Home,
  Truck,
  Warehouse,
  Globe,
  Images,
  HelpCircle,
  Clock,
  DollarSign
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickWaybill, setQuickWaybill] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickWaybill.trim()) {
      onOpenTracking(quickWaybill.trim().toUpperCase());
      setQuickWaybill('');
      setMenuOpen(false);
    }
  };

  const navItems = [
    { 
      id: 'home', 
      label: 'Home Cockpit', 
      sublabel: 'Main overview & telemetry',
      icon: Home,
      badge: null 
    },
    { 
      id: 'services', 
      label: 'Pricing & Services', 
      sublabel: '$3 Beirut / $4 All Lebanon',
      icon: Truck,
      badge: '$3 / $4 Flat' 
    },
    { 
      id: 'warehousing', 
      label: 'Warehousing & Storage', 
      sublabel: '1,500 m² Corniche El Nahr facility',
      icon: Warehouse,
      badge: 'Fulfillment' 
    },
    { 
      id: 'merchant-portal', 
      label: 'Merchant Platform', 
      sublabel: 'Shopify sync & COD ledgers',
      icon: Laptop,
      badge: 'app.rtdeliveries.net' 
    },
    { 
      id: 'coverage', 
      label: 'Lebanon Coverage', 
      sublabel: 'All 8 Governorates & 26 Districts',
      icon: Globe,
      badge: '100% Reach' 
    },
    { 
      id: 'about', 
      label: 'Fleet & Facility Gallery', 
      sublabel: 'Vans, motos, and warehouse floor',
      icon: Images,
      badge: null 
    },
    { 
      id: 'tracking', 
      label: 'Live Waybill Tracking', 
      sublabel: 'Real-time telemetry portal',
      icon: Radio,
      badge: 'Live Radar' 
    },
    { 
      id: 'contact', 
      label: 'Contact & Lebanese FAQ', 
      sublabel: 'Hotline, dispatch desk, and support',
      icon: HelpCircle,
      badge: null 
    },
  ];

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setMenuOpen(false);
  };

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

      {/* Main Single-Line Header (NEVER wraps into two lines) */}
      <div className={`px-3 sm:px-6 py-2.5 transition-all duration-300 ${scrolled ? 'bg-[#070b14]/95 backdrop-blur-xl shadow-2xl border-b border-slate-800/90' : 'bg-[#070b14]/85 backdrop-blur-md border-b border-slate-800/60'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand Logo & Title */}
          <button
            onClick={() => onSelectSection('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-hidden py-1 cursor-pointer shrink-0"
            aria-label="RT Deliveries Home"
          >
            <div className="relative p-1.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-orange-500/50 transition-colors shadow-inner shrink-0">
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
          </button>

          {/* Quick Active Section Pill (Visible on md+ screens) */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800/80 text-xs font-mono-tech">
            <span className="text-slate-500 font-medium">VIEWING:</span>
            <span className="text-orange-400 font-bold uppercase">
              {navItems.find(n => n.id === activeSection)?.label || 'Home'}
            </span>
          </div>

          {/* Right Action Stack with Burger Menu ALWAYS VISIBLE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Quick Track Input Pill (Medium+ screens) */}
            <form onSubmit={handleQuickTrack} className="hidden md:flex items-center relative">
              <input
                type="text"
                value={quickWaybill}
                onChange={(e) => setQuickWaybill(e.target.value)}
                placeholder="Track Waybill..."
                className="w-32 lg:w-40 pl-8 pr-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 font-mono-tech focus:outline-hidden focus:border-orange-500 focus:w-48 transition-all shadow-inner uppercase"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            </form>

            {/* Quick Track Button (Mobile or as compact trigger) */}
            <button
              onClick={() => onOpenTracking()}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Track Waybill"
            >
              <Search className="w-4 h-4 text-orange-400" />
              <span className="hidden sm:inline font-mono-tech">Track</span>
            </button>

            {/* Schedule Pickup CTA Button */}
            <button
              onClick={onOpenPickup}
              className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Book Pickup</span>
              <span className="xs:hidden sm:hidden">Book</span>
            </button>

            {/* BURGER MENU BUTTON — ALWAYS ACTIVE ON ALL SCREEN SIZES */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-orange-500/60 transition-all cursor-pointer shadow-sm group focus:outline-hidden focus:ring-2 focus:ring-orange-500/50"
              aria-label="Open Navigation Drawer"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className="w-5 h-0.5 bg-orange-400 rounded-full group-hover:bg-white transition-colors" />
                <span className="w-3.5 h-0.5 bg-white rounded-full group-hover:w-5 transition-all" />
                <span className="w-5 h-0.5 bg-orange-400 rounded-full group-hover:bg-white transition-colors" />
              </div>
              <span className="font-bold text-xs font-mono-tech tracking-wider uppercase hidden sm:inline text-slate-200 group-hover:text-white">
                Menu
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* SLIDE-OVER NAVIGATION DRAWER (ACTIVE ON ALL SCREEN SIZES) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
          {/* Dark frosted backdrop */}
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#070b14] border-l border-slate-800 shadow-2xl flex flex-col text-white animate-in slide-in-from-right duration-200">
              
              {/* Drawer Top Header */}
              <div className="p-5 sm:p-6 bg-[#090e1a] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-xl bg-slate-900 border border-slate-800">
                    <img
                      src="/brand/rt-logo.png"
                      alt="RT Deliveries"
                      className="h-8 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://rtdeliveries.net/wp-content/uploads/2025/10/3-768x456.jpeg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-white tracking-tight">
                      RT Deliveries Menu
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono-tech">
                      Lebanon Logistics Command
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search inside Drawer */}
              <div className="p-4 sm:p-5 bg-slate-950/60 border-b border-slate-800">
                <form onSubmit={handleQuickTrack} className="flex gap-2 font-mono-tech">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={quickWaybill}
                      onChange={(e) => setQuickWaybill(e.target.value)}
                      placeholder="Waybill (e.g. RT-8942-BEY)"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 uppercase focus:outline-hidden focus:border-orange-500 shadow-inner"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer font-sans"
                  >
                    Track
                  </button>
                </form>
              </div>

              {/* Navigation Items List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1.5">
                <div className="text-[10px] font-mono-tech uppercase font-bold text-slate-500 tracking-wider px-3 pb-1">
                  Navigation Directory
                </div>

                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full p-3 rounded-2xl text-left transition-all flex items-center justify-between group cursor-pointer border ${
                        isActive
                          ? 'bg-orange-600/15 border-orange-500/50 text-white shadow-inner'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                            : 'bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-slate-700'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-sm text-white">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className={`text-[9px] px-2 py-0.2 rounded-full font-mono-tech font-bold uppercase ${
                                isActive 
                                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                                  : 'bg-slate-800 text-slate-400 border border-slate-700'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
                            {item.sublabel}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-orange-400 translate-x-0.5' : 'text-slate-600 group-hover:text-white group-hover:translate-x-0.5'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons & Hotline Footer */}
              <div className="p-4 sm:p-5 bg-[#090e1a] border-t border-slate-800 space-y-3 shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onOpenPickup();
                      setMenuOpen(false);
                    }}
                    className="py-3 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-lg shadow-orange-600/20"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Book Pickup</span>
                  </button>

                  <button
                    onClick={() => {
                      onOpenPartner();
                      setMenuOpen(false);
                    }}
                    className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors cursor-pointer text-center"
                  >
                    Merchant Partner
                  </button>
                </div>

                {/* External Portal Link */}
                <a
                  href="https://app.rtdeliveries.net/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-orange-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-orange-400" />
                    <span className="font-mono-tech">Merchant Portal (app.rtdeliveries.net)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* Dispatch Support Row */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Corniche El Nahr Hub</span>
                  </div>

                  <a
                    href="https://wa.me/96171892411"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>+961 71 892 411</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};

