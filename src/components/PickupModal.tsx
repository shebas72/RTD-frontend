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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Schedule a Courier Pickup
              </h3>
              <p className="text-xs text-slate-400">
                Doorstep collection anywhere in Lebanon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">
                  Pickup Confirmed!
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Reference: <strong className="font-mono text-orange-600 font-bold">{bookingRef}</strong>
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Merchant:</span>
                  <span className="font-bold text-slate-800">{formData.businessName || formData.senderName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Date:</span>
                  <span className="font-bold text-slate-800">{formData.pickupDate} ({formData.timeWindow.split(' ')[0]})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Packages:</span>
                  <span className="font-bold text-slate-800">{formData.packageCount} Package(s)</span>
                </div>
              </div>

              <p className="text-xs text-slate-600">
                An RT dispatch courier will contact you 30 minutes before arrival at your address.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20just%20scheduled%20pickup%20ref%20${bookingRef}%20for%20${encodeURIComponent(formData.businessName || formData.senderName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Confirmation to Dispatch WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Business / Brand Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Store / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Beirut Apparel / Jad Shop"
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Lebanese Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+961 70 123 456"
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* District Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Pickup City / District
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                >
                  {LEBANESE_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.governorate}: {d.name.split('(')[0]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Detailed Street Address */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Full Street, Building &amp; Floor Landmark
                </label>
                <input
                  type="text"
                  required
                  value={formData.detailedAddress}
                  onChange={(e) => setFormData({ ...formData, detailedAddress: e.target.value })}
                  placeholder="e.g. Mar Mikhael, Armenia St, Facing Manar Bldg, 2nd Fl"
                  className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full py-2 px-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900"
                  />
                </div>

                {/* Time Window */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value as any })}
                    className="w-full py-2 px-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900"
                  >
                    <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                {/* Packages Count */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Packages
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={formData.packageCount}
                    onChange={(e) => setFormData({ ...formData, packageCount: e.target.value })}
                    className="w-full py-2 px-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Flyer bags checkbox */}
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.requiresFlyerBags}
                  onChange={(e) => setFormData({ ...formData, requiresFlyerBags: e.target.checked })}
                  className="rounded-sm text-orange-600 accent-orange-600 focus:ring-orange-500 w-4 h-4"
                />
                <span className="font-semibold">
                  Bring complimentary RT courier flyer bags (Standard packaging)
                </span>
              </label>

              {/* Courier notes */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Notes for Courier (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Fragile glassware inside, or call before ring"
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Courier Dispatch</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
