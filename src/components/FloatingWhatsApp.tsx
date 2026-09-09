import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, Truck, Calendar, Phone } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenTracking: () => void;
  onOpenPickup: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenTracking,
  onOpenPickup,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold">RT Deliveries Dispatch</div>
                <div className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Online • Beirut Central Hub</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs bg-slate-50">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">
                Ahlan! Welcome to RT Deliveries Lebanon.
              </p>
              <p className="text-[11px] text-slate-600">
                How can our Beirut dispatch team assist you today?
              </p>
            </div>

            <div className="space-y-1.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTracking();
                }}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-colors flex items-center justify-between text-slate-800 font-semibold cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-600" />
                  <span>Track my order status</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPickup();
                }}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-colors flex items-center justify-between text-slate-800 font-semibold cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  <span>Book a courier pickup</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
              </button>

              <a
                href="https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20have%20an%20urgent%20inquiry%20about%20a%20delivery"
                target="_blank"
                rel="noreferrer"
                className="w-full text-left p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Live WhatsApp Chat</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Open WhatsApp live dispatch chat"
      >
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline">Dispatch WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
      </button>
    </div>
  );
};
