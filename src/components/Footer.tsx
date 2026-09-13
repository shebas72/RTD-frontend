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
  MessageSquare,
  ExternalLink,
  ArrowUp,
  Boxes,
  Zap,
  Radio,
  FileText,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-300 border-t border-slate-850 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* TOP STATUS TICKER RIBBON */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white tracking-wider">
              {isRTL ? 'حالة الشبكة: كافة المحافظات الـ ٨ تعمل بشكل كامل' : 'NETWORK STATUS: ALL 8 GOVERNORATES OPERATIONAL'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">{isRTL ? 'رحلات بيروت اليومية:' : 'Daily Beirut Linehaul:'}</span>
              <span className="text-emerald-400 font-bold">{isRTL ? 'منتظمة وفي الموعد' : 'On Schedule'}</span>
            </div>

            <div className={`flex items-center gap-1.5 ${isRTL ? 'border-r pr-4' : 'border-l pl-4'} border-slate-800`}>
              <span className="text-slate-500">{isRTL ? 'أسعار موحدة:' : 'Fixed Flat Rates:'}</span>
              <span className="text-white font-bold">{isRTL ? '٣$ بيروت / ٤$ لكل لبنان' : '$3 Beirut / $4 Lebanon'}</span>
            </div>

            <div className={`flex items-center gap-1.5 ${isRTL ? 'border-r pr-4' : 'border-l pl-4'} border-slate-800`}>
              <span className="text-slate-500">{isRTL ? 'سعر تحصيل الأموال:' : 'COD Settlement:'}</span>
              <span className="text-amber-400 font-bold">1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP</span>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & SARL Identity (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/brand/rt-logo.png"
                alt="RT Deliveries - Road Train Deliveries SARL"
                className="h-11 w-auto object-contain p-1 rounded-xl bg-slate-900 border border-slate-800"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = 'https://rtdeliveries.net/wp-content/uploads/2024/02/new-logo-white.png';
                }}
              />
              <div>
                <span className="font-display font-black text-lg text-white tracking-tight block">
                  ROAD TRAIN DELIVERIES
                </span>
                <span className="text-[10px] text-slate-400 font-mono-tech tracking-wider uppercase block">
                  {isRTL ? 'شركة رود ترين ش.م.م للخدمات اللوجستية' : 'S.A.R.L. Logistics Operator'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer.about_text', "RT Deliveries (Road Train SARL) is Lebanon's premier tech-enabled delivery and warehousing partner for online merchants, fashion boutiques, and enterprise e-commerce brands across all 8 governorates.")}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenPickup}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{t('action.book_pickup', 'Schedule Pickup')}</span>
              </button>

              <button
                onClick={onOpenTracking}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t('action.track', 'Track Waybill')}</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3 text-slate-400 text-xs">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-600/20 hover:text-orange-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-600/20 hover:text-orange-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-600/20 hover:text-orange-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Logistics Solutions (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-orange-400 block">
              {isRTL ? 'الخدمات والأسعار' : 'Logistics & Rates'}
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  <span>{isRTL ? 'أسعار موحدة: ٣$ بيروت | ٤$ لكل لبنان' : 'Flat Rates: $3 Beirut | $4 Lebanon'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{isRTL ? 'تحصيل وإدارة الأموال عند التسليم (COD)' : 'Doorstep COD Cash Management'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('warehousing')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{isRTL ? 'مستودعات وتخزين كورنيش النهر' : 'Corniche El Nahr Warehousing'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('coverage')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{isRTL ? 'دليل تغطية الـ ٢٦ قضاء' : '26 Districts Coverage Directory'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{isRTL ? 'توصيل سريع بالدراجات النارية' : 'Express Moto Dispatch Squad'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{isRTL ? 'معرض مرافق الشركة والأسطول' : 'Fleet & Hub Operations Gallery'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology & Portal (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-orange-400 block">
              {isRTL ? 'تقنية التجار' : 'Merchant Tech'}
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://app.rtdeliveries.net/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>{isRTL ? 'بوابة التجار Laravel' : 'Laravel Merchant OS'}</span>
                  <ExternalLink className="w-3 h-3 text-orange-400" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('tracking')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {isRTL ? 'تتبع الشحنات المباشر' : 'Live Iframe Tracking'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('merchant-portal')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {isRTL ? 'ربط متاجر شوبيفاي وووكومرس' : 'Shopify & WooCommerce Sync'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('merchant-portal')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {isRTL ? 'رفع بوالص مجمّع عبر إكسل' : '1-Click Excel Bulk Upload'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('merchant-portal')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {isRTL ? 'واجهة برمجة التطبيقات REST API' : 'Direct REST Logistics API'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {isRTL ? 'مركز المساعدة والأسئلة الشائعة' : 'Help Center & FAQ'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Central Operations Center (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-orange-400 block">
              {isRTL ? 'مركز العمليات في بيروت' : 'Beirut Operations Center'}
            </span>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{isRTL ? 'مجمع كورنيش النهر اللوجستي، مقابل جسر سن الفيل، بيروت، لبنان' : 'Corniche El Nahr Logistics Hub, Facing Sin El Fil Bridge, Beirut, Lebanon'}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">{isRTL ? 'واتساب العمليات:' : 'WhatsApp Dispatch:'}</span>
                  <a
                    href="https://wa.me/96171892411"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-tech font-bold text-emerald-400 hover:underline"
                  >
                    +961 71 892 411
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">{isRTL ? 'هاتف المكتب الثابت:' : 'Office Landline:'}</span>
                  <a href="tel:+9611480220" className="font-mono-tech font-bold text-white hover:text-orange-400">
                    +961 1 480 220
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">{isRTL ? 'البريد الإلكتروني للعمليات:' : 'Operations Email:'}</span>
                  <a href="mailto:info@rtdeliveries.net" className="text-white hover:underline font-mono-tech">
                    info@rtdeliveries.net
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & LEGAL BAR */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Road Train Deliveries S.A.R.L.</span>
            <span>•</span>
            <span>{isRTL ? 'سجل تجاري لبناني رقم ٢٠٥٦١٩٣' : 'Lebanese Commercial Registry No. 2056193'}</span>
            <span>•</span>
            <span className="text-slate-400">{isRTL ? 'كورنيش النهر، بيروت' : 'Corniche El Nahr, Beirut'}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isRTL ? 'بضائع مرخصة ومؤمّن عليها' : 'Licensed & Insured Cargo'}</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800 flex items-center gap-1"
              title={isRTL ? 'إلى الأعلى' : 'Back to Top'}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">{isRTL ? 'أعلى' : 'TOP'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
