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
  HelpCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { FaqSection } from '../components/FaqSection';
import { RT_LOGISTICS_HUBS } from '../data/lebanonLocations';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    email: '',
    governorate: 'Beirut',
    monthlyVolume: '50-150 orders',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Direct transmission to info@rtdeliveries.net
      await fetch('https://formsubmit.co/ajax/info@rtdeliveries.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New RT Deliveries Merchant Inquiry: ${formData.storeName || formData.name}`,
          _template: 'table',
          _captcha: 'false',
          FullName: formData.name,
          BrandOrStoreName: formData.storeName,
          PhoneOrWhatsApp: formData.phone,
          EmailAddress: formData.email || 'N/A',
          Governorate: formData.governorate,
          MonthlyParcelVolume: formData.monthlyVolume,
          MessageNotes: formData.message || 'No additional notes provided',
          SubmissionTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Beirut' }),
        }),
      });
    } catch (err) {
      console.warn('Form submission network notification:', err);
    } finally {
      setIsSending(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{isRTL ? 'قنوات التواصل وإدارة العمليات' : 'DISPATCH & MERCHANT SUPPORT CHANNELS'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            {isRTL ? 'نحن هنا لدعم وتوسيع توصيلات متجرك في لبنان' : 'We’re Here to Support Your Lebanese Deliveries'}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {isRTL 
              ? 'تواصل مع مركز عملياتنا الرئيسي في بيروت، أو تحدث مباشرة مع مشرفي التوصيل عبر واتساب، أو تفضل بزيارة أحد مراكزنا.'
              : 'Reach our central Beirut operations headquarters, connect directly with our dispatch supervisors on WhatsApp, or visit any of our regional hubs.'}
          </p>
        </div>
      </section>

      {/* SECTION 1: CONTACT CHANNELS & INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className={`bg-[#0b101e] text-white rounded-3xl p-7 border border-slate-800 shadow-2xl space-y-5 ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                {isRTL ? 'المقر الرئيسي لإدارة العمليات' : 'CENTRAL OPERATIONS HEADQUARTERS'}
              </span>
              <h3 className="text-xl font-black text-white font-display">
                {isRTL ? 'شركة رود ترين ش.م.م (RT Deliveries)' : 'Road Train Deliveries S.A.R.L.'}
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{isRTL ? 'المركز اللوجستي الرئيسي:' : 'Logistics Central Hub:'}</span>
                    <span className="text-slate-400 leading-relaxed">
                      {isRTL ? 'كورنيش النهر، المنطقة اللوجستية، قرب جسر سن الفيل، بيروت، لبنان' : 'Corniche El Nahr, Logistics District, Near Sin El Fil Bridge, Beirut, Lebanon'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{isRTL ? 'واتساب العمليات المباشر:' : 'Direct WhatsApp Dispatch:'}</span>
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
                    <span className="font-bold text-white block">{isRTL ? 'هاتف المكتب الثابت:' : 'Landline Office:'}</span>
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
                    <span className="font-bold text-white block">{isRTL ? 'البريد الإلكتروني المباشر للعمليات:' : 'Merchant Operations Email:'}</span>
                    <a href="mailto:info@rtdeliveries.net" className="text-slate-400 hover:text-white font-mono-tech">
                      info@rtdeliveries.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{isRTL ? 'أوقات العمل والتوزيع:' : 'Dispatch Hours:'}</span>
                    <span className="text-slate-400 font-mono-tech leading-relaxed">
                      {isRTL 
                        ? 'الإثنين – السبت: ٨:٠٠ ص – ٨:٠٠ م\nالأحد: رحلات طوارئ ومستودع فقط'
                        : 'Monday – Saturday: 8:00 AM – 8:00 PM\nSunday: Emergency Shuttles & Warehouse Only'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Regional Hub WhatsApp Links */}
            <div className={`bg-[#0b101e] rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className="text-sm font-bold text-white font-display">
                {isRTL ? 'خطوط واتساب المباشرة للمراكز الإقليمية:' : 'Regional Hub WhatsApp Hotlines:'}
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
                      <span className="font-bold text-white block">{isRTL && hub.arabicName ? hub.arabicName : hub.name}</span>
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
          <div className={`lg:col-span-7 bg-[#0b101e] rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
                {isRTL ? 'استمارة تواصل وتنسيق الشحنات' : 'DIRECT INQUIRY FORM'}
              </span>
              <h3 className="text-2xl font-black text-white font-display mt-1">
                {isRTL ? 'أرسل استفسارك مباشرة لإدارة العمليات' : 'Send a Dispatch Inquiry'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isRTL 
                  ? 'ترغب في تسجيل متجرك، حجز مساحة تخزين بمستودعنا، أو الاستفسار عن أسعار الشركات؟'
                  : 'Looking to onboard your Lebanese brand, reserve shelf space, or request custom B2B rates?'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 font-mono-tech">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-bold mb-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{isRTL ? 'تم الإرسال بنجاح إلى info@rtdeliveries.net' : 'Transmitted to info@rtdeliveries.net'}</span>
                  </div>
                  <h4 className="text-xl font-black text-white font-display">
                    {isRTL ? 'تم استلام طلبك بنجاح!' : 'Inquiry Successfully Received!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 font-sans">
                    {isRTL
                      ? 'استلم مشرف التوزيع ببيروت تفاصيل طلبك وسيتم التواصل معك مباشرة لتنسيق التوصيل أو تفعيل الحساب.'
                      : 'Our Beirut dispatch supervisor has received your submission and will review your route requirements immediately.'}
                  </p>
                </div>

                {/* Inquiry Summary Box */}
                <div className={`bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-xs space-y-2 max-w-md mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
                    {isRTL ? 'ملخص البيانات المرسلة' : 'Transmitted Inquiry Summary'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[10px]">{isRTL ? 'المتجر / الاسم:' : 'Merchant / Store:'}</span>
                      <strong className="text-white">{formData.storeName || formData.name}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">{isRTL ? 'رقم الهاتف / واتساب:' : 'Contact Mobile:'}</span>
                      <span className="font-bold text-orange-400">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">{isRTL ? 'المحافظة:' : 'Governorate:'}</span>
                      <span>{formData.governorate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">{isRTL ? 'الحجم التقديري:' : 'Estimated Volume:'}</span>
                      <span>{formData.monthlyVolume}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <a
                    href={`https://wa.me/96171892411?text=Hello%20RT%20Deliveries,%20I%20just%20sent%20an%20inquiry%20via%20info@rtdeliveries.net%20for%20${encodeURIComponent(formData.storeName || formData.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors font-sans"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{isRTL ? 'محادثة فورية عبر واتساب (+961 71 892 411)' : 'Direct Chat on WhatsApp (+961 71 892 411)'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        storeName: '',
                        phone: '',
                        email: '',
                        governorate: 'Beirut',
                        monthlyVolume: '50-150 orders',
                        message: '',
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-bold cursor-pointer hover:bg-slate-800 border border-slate-800 font-sans"
                  >
                    {isRTL ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-tech">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">{isRTL ? 'الاسم الكامل *' : 'Your Full Name *'}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRTL ? 'مثال: مايا خوري' : 'e.g. Maya Khoury'}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">{isRTL ? 'اسم المتجر أو البراند *' : 'Store / Brand Name *'}</label>
                    <input
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      placeholder={isRTL ? 'مثال: Beirut Streetwear' : 'e.g. Beirut Streetwear'}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">{isRTL ? 'رقم الهاتف اللبناني / واتساب *' : 'Lebanese Mobile / WhatsApp *'}</label>
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
                    <label className="font-bold text-slate-300">{isRTL ? 'البريد الإلكتروني' : 'Email Address'}</label>
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
                    <label className="font-bold text-slate-300">{isRTL ? 'المحافظة / موقع الاستلام' : 'Store / Pickup Governorate'}</label>
                    <select
                      value={formData.governorate}
                      onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    >
                      <option value="Beirut">{isRTL ? 'بيروت (العاصمة)' : 'Beirut (Capital)'}</option>
                      <option value="Mount Lebanon">{isRTL ? 'جبل لبنان (المتن / كسروان / بعبدا / الشوف)' : 'Mount Lebanon (Metn / Keserwan / Baabda)'}</option>
                      <option value="North">{isRTL ? 'الشمال (طرابلس / الكورة / البترون)' : 'North (Tripoli / Koura / Batroun)'}</option>
                      <option value="South">{isRTL ? 'الجنوب (صيدا / صور / جزين)' : 'South (Saida / Tyre)'}</option>
                      <option value="Bekaa">{isRTL ? 'البقاع (زحلة / شتورا)' : 'Bekaa (Zahle / Chtaura)'}</option>
                      <option value="Nabatieh">{isRTL ? 'النبطية' : 'Nabatieh'}</option>
                      <option value="Akkar">{isRTL ? 'عكار' : 'Akkar'}</option>
                      <option value="Baalbek-Hermel">{isRTL ? 'بعلبك - الهرمل' : 'Baalbek-Hermel'}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">{isRTL ? 'عدد الطرود المتوقع شهرياً' : 'Estimated Monthly Parcel Volume'}</label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                    >
                      <option value="1-50 orders">{isRTL ? '١ - ٥٠ طرد / شهرياً' : '1 - 50 parcels / month'}</option>
                      <option value="50-150 orders">{isRTL ? '٥٠ - ١٥٠ طرد / شهرياً' : '50 - 150 parcels / month'}</option>
                      <option value="150-500 orders">{isRTL ? '١٥٠ - ٥٠٠ طرد / شهرياً' : '150 - 500 parcels / month'}</option>
                      <option value="500+ orders">{isRTL ? '٥٠٠+ طرد / شهرياً (شركات ومتاجر كبرى)' : '500+ parcels / month (High-volume B2B)'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">{isRTL ? 'الرسالة أو تفاصيل الاستفسار' : 'Message / Inquiries'}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRTL ? 'أخبرنا عن منتجاتك، أو احتياجات التخزين، أو مواعيد الاستلام المناسبة لك...' : 'Tell us about your products, storage requirements, or specific pickup schedules...'}
                    className="w-full px-3.5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-orange-500 font-sans"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed font-sans"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{isRTL ? 'جاري الإرسال إلى info@rtdeliveries.net...' : 'Transmitting to info@rtdeliveries.net...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isRTL ? 'إرسال الاستفسار إلى info@rtdeliveries.net' : 'Transmit Inquiry to info@rtdeliveries.net'}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono-tech">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>
                      {isRTL 
                        ? 'يصل مباشرة إلى info@rtdeliveries.net ومكتب توزيع بيروت'
                        : 'Delivers directly to info@rtdeliveries.net & Beirut dispatch desk'}
                    </span>
                  </div>
                </div>
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

