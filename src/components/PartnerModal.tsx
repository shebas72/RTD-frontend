import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    socialOrWebsite: '',
    category: 'Fashion & Apparel',
    monthlyOrders: '50 - 200 orders',
    needsWarehousing: true,
    preferredCurrency: 'Both USD and LBP',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Partner with RT Deliveries
              </h3>
              <p className="text-xs text-slate-400">
                Merchant onboarding for Lebanese online shops &amp; sellers
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

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">
                  Welcome to RT Deliveries!
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Your merchant application for <strong>{formData.businessName}</strong> has been received.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Onboarding Checklist in Progress:</span>
                </div>
                <div className="text-slate-600 space-y-1 pl-6">
                  <div>✓ Merchant Dashboard credentials being generated</div>
                  <div>✓ Starter pack of 50 RT flyer bags prepared for pickup</div>
                  <div>✓ COD remittance account configured ({formData.preferredCurrency})</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Our merchant onboarding lead in Beirut will contact you via WhatsApp within 2 hours to deliver your initial packaging supplies.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20just%20submitted%20a%20merchant%20partnership%20application%20for%20${encodeURIComponent(formData.businessName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Fast-Track via Merchant WhatsApp</span>
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
                {/* Store Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Store / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Beirut Streetwear"
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>

                {/* Owner Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Owner / Manager Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Maya Haddad"
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Lebanese WhatsApp Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+961 71 234 567"
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>

                {/* Social or website */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Instagram or Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.socialOrWebsite}
                    onChange={(e) => setFormData({ ...formData, socialOrWebsite: e.target.value })}
                    placeholder="@your_store_lb or domain.com"
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Fashion & Apparel">Fashion &amp; Apparel</option>
                    <option value="Cosmetics & Skincare">Cosmetics &amp; Skincare</option>
                    <option value="Electronics & Tech">Electronics &amp; Tech</option>
                    <option value="Footwear & Bags">Footwear &amp; Bags</option>
                    <option value="Jewelry & Accessories">Jewelry &amp; Accessories</option>
                    <option value="Gourmet Food & Sweets">Gourmet Food &amp; Sweets</option>
                    <option value="Home & Decor">Home &amp; Decor</option>
                  </select>
                </div>

                {/* Volume */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Estimated Monthly Orders
                  </label>
                  <select
                    value={formData.monthlyOrders}
                    onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="10 - 50 orders">10 - 50 orders / mo</option>
                    <option value="50 - 200 orders">50 - 200 orders / mo (Volume rates)</option>
                    <option value="200 - 500 orders">200 - 500 orders / mo (Dedicated line)</option>
                    <option value="500+ orders">500+ orders / mo (Enterprise API)</option>
                  </select>
                </div>
              </div>

              {/* Warehousing check */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
                <label className="flex items-center gap-2 text-xs text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.needsWarehousing}
                    onChange={(e) => setFormData({ ...formData, needsWarehousing: e.target.checked })}
                    className="rounded-sm text-orange-600 accent-orange-600 focus:ring-orange-500 w-4 h-4"
                  />
                  <span className="font-bold">
                    Also interested in Beirut warehouse inventory storage &amp; pick-and-pack
                  </span>
                </label>
                <p className="text-[11px] text-slate-500 pl-6">
                  Store stock at our Corniche El Nahr facility to avoid high retail rent and private generator bills.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm rounded-xl shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Submit Partnership Application</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
