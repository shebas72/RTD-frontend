import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';
import { FaqSection } from '../components/FaqSection';
import { RT_LOGISTICS_HUBS } from '../data/lebanonLocations';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    email: '',
    governorate: 'Beirut',
    monthlyVolume: '50-150 orders',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>DISPATCH &amp; MERCHANT SUPPORT CHANNELS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            We’re Here to Support Your Lebanese Deliveries
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Reach our central Beirut operations headquarters, connect directly with our dispatch supervisors on WhatsApp, or visit any of our regional hubs.
          </p>
        </div>
      </section>

      {/* SECTION 1: CONTACT CHANNELS & INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#0b101e] text-white rounded-3xl p-7 border border-slate-800 shadow-2xl space-y-5">
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                CENTRAL OPERATIONS HEADQUARTERS
              </span>
              <h3 className="text-xl font-black text-white font-display">
                Road Train Deliveries S.A.R.L.
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Logistics Central Hub:</span>
                    <span className="text-slate-400 leading-relaxed">Corniche El Nahr, Logistics District, Near Sin El Fil Bridge, Beirut, Lebanon</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct WhatsApp Dispatch:</span>
                    <a href="https://wa.me/96171892411" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono-tech font-bold text-sm">
                      +961 71 892 411
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Landline Office:</span>
                    <a href="tel:+9611480220" className="text-white hover:text-orange-400 font-mono-tech font-bold text-sm">
                      +961 1 480 220
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Merchant Operations Email:</span>
                    <a href="mailto:dispatch@rtdeliveries.net" className="text-slate-400 hover:text-white font-mono-tech">
                      dispatch@rtdeliveries.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Dispatch Hours:</span>
                    <span className="text-slate-400 font-mono-tech leading-relaxed">
                      Monday – Saturday: 8:00 AM – 8:00 PM<br />
                      Sunday: Emergency Shuttles &amp; Warehouse Only
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Regional Hub WhatsApp Links */}
            <div className="bg-[#0b101e] rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3">
              <h4 className="text-sm font-bold text-white font-display">
                Regional Hub WhatsApp Hotlines:
              </h4>
              <div className="space-y-2">
                {RT_LOGISTICS_HUBS.map((hub) => (
                  <a
                    key={hub.id}
                    href={`https://wa.me/${hub.mobileWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(hub.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-emerald-950/30 border border-slate-800 hover:border-emerald-500/40 text-xs transition-colors"
                  >
                    <div>
                      <span className="font-bold text-white block">{hub.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono-tech">{hub.address}</span>
                    </div>
                    <span className="font-mono-tech font-bold text-emerald-400 shrink-0 ml-2">
                      WhatsApp &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Message & Partnership Form */}
          <div className="lg:col-span-7 bg-[#0b101e] rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                DIRECT INQUIRY FORM
              </span>
              <h3 className="text-2xl font-black text-white font-display mt-1">
                Send a Dispatch Inquiry
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Looking to onboard your Lebanese brand, reserve shelf space, or request custom B2B rates?
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-white font-display">Inquiry Transmitted!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Our Beirut dispatch manager has received your message and will reply via WhatsApp or phone call within 1 hour.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer hover:bg-slate-800 border border-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-tech">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Khoury"
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Store / Brand Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      placeholder="e.g. Beirut Streetwear"
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Lebanese Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+961 70 123456"
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-mono-tech"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@store.com"
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Store / Pickup Governorate</label>
                    <select
                      value={formData.governorate}
                      onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    >
                      <option value="Beirut">Beirut (Capital)</option>
                      <option value="Mount Lebanon">Mount Lebanon (Metn / Keserwan / Baabda)</option>
                      <option value="North">North (Tripoli / Koura / Batroun)</option>
                      <option value="South">South (Saida / Tyre)</option>
                      <option value="Bekaa">Bekaa (Zahle / Chtaura)</option>
                      <option value="Nabatieh">Nabatieh</option>
                      <option value="Akkar">Akkar</option>
                      <option value="Baalbek-Hermel">Baalbek-Hermel</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Estimated Monthly Parcel Volume</label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    >
                      <option value="1-50 orders">1 - 50 parcels / month</option>
                      <option value="50-150 orders">50 - 150 parcels / month</option>
                      <option value="150-500 orders">150 - 500 parcels / month</option>
                      <option value="500+ orders">500+ parcels / month (High-volume B2B)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Message / Inquiries</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your products, storage requirements, or specific pickup schedules..."
                    className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Dispatch</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 2: FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>

    </div>
  );
};
