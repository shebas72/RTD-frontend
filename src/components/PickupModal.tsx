import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Package, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { LEBANESE_DISTRICTS } from '../data/lebanonLocations';

interface PickupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PickupModal: React.FC<PickupModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    businessName: '',
    senderName: '',
    phone: '',
    district: 'bey_central',
    detailedAddress: '',
    pickupDate: new Date().toISOString().split('T')[0],
    timeWindow: 'Afternoon (1 PM - 5 PM)',
    packageCount: '2',
    requiresFlyerBags: true,
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `PKP-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#0b101e] w-full max-w-xl rounded-3xl shadow-2xl border border-slate-800 overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="bg-[#070b14] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold shadow-md shadow-orange-600/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-display">
                Schedule a Courier Pickup
              </h3>
              <p className="text-xs text-slate-400 font-mono-tech">
                Doorstep collection anywhere in Lebanon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 font-mono-tech">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-white font-display">
                  Pickup Confirmed!
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Reference: <strong className="text-orange-400 font-bold">{bookingRef}</strong>
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Merchant:</span>
                  <span className="font-bold text-white">{formData.businessName || formData.senderName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">District:</span>
                  <span className="font-bold text-white">
                    {LEBANESE_DISTRICTS.find(d => d.id === formData.district)?.name || 'Selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date &amp; Window:</span>
                  <span className="font-bold text-white">{formData.pickupDate} ({formData.timeWindow})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Parcels:</span>
                  <span className="font-bold text-orange-400">{formData.packageCount} units</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 max-w-md mx-auto">
                A courier has been allocated to your area. Our dispatcher will confirm via WhatsApp prior to arrival.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20scheduled%20pickup%20ref%20${bookingRef}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Notify Dispatcher on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-tech">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Shop / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Beirut Apparel"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Contact Person Name</label>
                  <input
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="e.g. Hadi"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Lebanese Phone (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+961 70 123456"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Pickup District / Area *</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  >
                    {LEBANESE_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.governorate}) - ${d.baseDeliveryUsd}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Detailed Pickup Address *</label>
                <input
                  type="text"
                  required
                  value={formData.detailedAddress}
                  onChange={(e) => setFormData({ ...formData, detailedAddress: e.target.value })}
                  placeholder="Street name, building, floor, landmark (e.g. Near ABC Mall)"
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Pickup Date</label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Preferred Window</label>
                  <select
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  >
                    <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Total Parcels</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.packageCount}
                    onChange={(e) => setFormData({ ...formData, packageCount: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Complimentary supplies checkbox */}
              <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.requiresFlyerBags}
                  onChange={(e) => setFormData({ ...formData, requiresFlyerBags: e.target.checked })}
                  className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4"
                />
                <span className="text-xs text-slate-300 font-sans">
                  Bring complimentary RT Deliveries flyer packaging bags &amp; waybill sleeves
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Courier Pickup Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
