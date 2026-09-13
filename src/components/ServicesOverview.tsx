import React, { useState } from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  Warehouse, 
  RotateCcw, 
  LayoutDashboard, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Sparkles,
  Zap,
  TrendingUp,
  Boxes,
  SlidersHorizontal,
  Grid
} from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useLanguage } from '../context/LanguageContext';

interface ServicesOverviewProps {
  onSchedulePickup: () => void;
  onPartnerClick: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSchedulePickup,
  onPartnerClick,
  onSelectSection,
}) => {
  const { t, isRTL } = useLanguage();
  const [viewMode, setViewMode] = useState<'slider' | 'both'>('both');

  return (
    <section id="services" className={`py-12 sm:py-16 relative overflow-hidden text-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/15 text-orange-400 text-xs font-mono-tech font-bold border border-orange-500/30">
              <Truck className="w-3.5 h-3.5" />
              <span>{isRTL ? 'بنية لوجستية لبنانية متكاملة' : 'FULL-STACK LEBANESE LOGISTICS INFRASTRUCTURE'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-[1.15]">
              {isRTL 
                ? 'خدمات توصيل وتخزين مصممة خصيصاً للتجار في لبنان'
                : 'Tailored courier & storage services for growing Lebanese merchants'}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {isRTL
                ? 'من متاجر الأزياء على إنستغرام إلى كبرى الشركات التجارية، نوفر بنية التوصيل والتخزين الموثوقة التي تحتاجها لتوسيع أعمالك في لبنان.'
                : 'From individual Instagram fashion boutiques to high-volume FMCG e-commerce brands, we provide the dependable delivery and storage infrastructure you need to scale in Lebanon.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono-tech">
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{isRTL ? 'عرض الشرائح' : 'Slider View'}</span>
              </button>
              <button
                onClick={() => setViewMode('both')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'both'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{isRTL ? 'كافة التفاصيل' : 'All Specs'}</span>
              </button>
            </div>

            <button
              onClick={onPartnerClick}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/25 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isRTL ? 'كن شريكاً معنا' : 'Partner With Us'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* 1. DEDICATED SERVICES IMAGE SLIDER (REQUESTED BY USER) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-mono-tech uppercase font-bold text-orange-400 tracking-wider">
                {isRTL ? 'معرض تفاعلي للخدمات والعمليات' : 'Interactive Services Showcase & Telemetry'}
              </span>
            </div>
            <span className="text-xs font-mono-tech text-slate-500">
              {isRTL ? 'تبديل تلقائي • انقر للتنقل' : 'Auto-advances • Click tabs to jump'}
            </span>
          </div>

          <ServicesSlider
            onSchedulePickup={onSchedulePickup}
            onPartnerClick={onPartnerClick}
            onNavigateSection={onSelectSection}
          />
        </div>

        {/* 2. DETAILED BENTO GRID SPECIFICATIONS (Shown when viewMode === 'both') */}
        {viewMode === 'both' && (
          <div className="space-y-6 pt-6 border-t border-slate-800/80 animate-in fade-in duration-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono-tech uppercase font-bold text-slate-400 tracking-wider">
                {isRTL ? 'المواصفات الشاملة ومستويات الخدمة (SLA)' : 'Full Service Specifications & SLA Breakdown'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* BENTO CARD 1: E-Commerce Delivery (Large 8 cols) */}
              <div className="lg:col-span-8 bg-[#0b101e] rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-xl hover:border-orange-500/50 transition-all flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <ShoppingBag className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex items-center gap-2 font-mono-tech">
                      <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30 text-xs font-bold">
                        {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                        {isRTL ? '٣$ بيروت • ٤$ باقي لبنان' : '$3 Beirut • $4 Lebanon'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white font-display group-hover:text-orange-400 transition-colors">
                      {isRTL ? 'توصيل طلبات التجارة والمتاجر الإلكترونية' : 'E-Commerce & Online Merchant Delivery'}
                    </h3>
                    <p className="text-xs font-mono-tech font-bold text-orange-400 mt-1">
                      {isRTL 
                        ? 'شحن سريع وموثوق من الباب إلى الباب يشمل كافة أقضية لبنان الـ ٢٦.'
                        : 'Fast, dependable door-to-door shipping across all 26 Lebanese districts.'}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                    {isRTL
                      ? 'مخصص لمتاجر الإنستغرام ومتاجر شوبيفاي وتجار التجزئة في لبنان. توصيل في نفس اليوم أو اليوم التالي مع إرسال روابط تتبع آلية عبر SMS وواتساب وموقع السائق المباشر.'
                      : 'Tailored specifically for Lebanese Instagram boutiques, Shopify brands, and local retailers. Next-day and same-day delivery with automated SMS and WhatsApp tracking links sent to your buyers with driver geolocation.'}
                  </p>

                  {/* Feature Checklist Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'أسعار ثابتة شفافة: ٣$ بيروت، ٤$ لكافة المناطق' : 'Fixed transparent pricing: $3 flat Beirut, $4 flat nationwide'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'توصيل من الباب للباب يغطي ١٠٠٪ من الأراضي اللبنانية' : 'Door-to-door delivery covering 100% of Lebanese territory'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'خيارات اليوم التالي وخدمة سريعة خلال ساعتين إلى ٤ ساعات' : 'Next-Day Standard & 4-Hour Same-Day Express options'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'تواصل هاتفي أو عبر واتساب مع المستلم بأسلوب لبق ومهني' : 'Direct phone/WhatsApp recipient communication by courteous couriers'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300 sm:col-span-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'أكياس شحن متينة مجاناً مع ملصقات باركود حرارية' : 'Complimentary branded flyer bags & thermal barcode waybill labels'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={onSchedulePickup}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform font-mono-tech"
                  >
                    <span>{isRTL ? 'حجز موعد استلام تجريبي' : 'Schedule a test pickup'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono-tech">
                    {isRTL ? 'آخر موعد لطلب الاستلام اليومي: ٣:٣٠ عصراً' : 'Daily pickup cut-off: 3:30 PM'}
                  </span>
                </div>
              </div>

              {/* BENTO CARD 2: Guaranteed Dual-Currency COD (4 cols) */}
              <div className="lg:col-span-4 bg-[#0b101e] rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <DollarSign className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono-tech font-bold">
                      {isRTL ? 'صفر مخاطرة' : 'Zero Risk'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-emerald-400 transition-colors">
                      {isRTL ? 'إدارة وتحصيل الدفع عند الاستلام (COD)' : 'Guaranteed Cash on Delivery (COD) Management'}
                    </h3>
                    <p className="text-xs font-mono-tech font-bold text-emerald-400 mt-1">
                      {isRTL ? 'تحصيل موثوق بالدولار والليرة اللبنانية مع تحويل خلال ٤٨ ساعة.' : 'Reliable cash collection in USD & LBP with prompt 48h payouts.'}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRTL
                      ? 'تخلص من قلق ضياع الأموال أو النزاع حول أسعار الصرف. نجمع الأموال بالدولار النظيف أو الليرة وفق سعر مرجعي شفاف، مع تحويل أسبوعي أو خلال ٤٨ ساعة.'
                      : 'Eliminate the stress of lost cash or disputed exchange rates. Our couriers collect cash in clean USD or LBP at daily transparent market rates, with weekly or 48-hour remittances straight to your bank or in cash.'}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'تحصيل بالعملتين في أكياس ودائع مغلقة ومؤمنة' : 'Dual-currency collection with locked cash bags'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'دورة تسوية مالية سريعة كل ٤٨ ساعة أو أسبوعياً' : 'Prompt 48-hour or weekly cash settlement cycle'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'كشوف حساب تفصيلية بصيغة PDF و Excel' : 'Detailed PDF & Excel remittance reports'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'دفع عبر Fresh Cash، Whish Money، OMT أو البنك' : 'Payouts via Cash, Whish Money, OMT, or Bank'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800">
                  <button
                    onClick={onPartnerClick}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform font-mono-tech"
                  >
                    <span>{isRTL ? 'عرض شروط التسوية المالية' : 'View Settlement Terms'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* BENTO CARD 3: Warehousing & Pick-and-Pack (4 cols) */}
              <div className="lg:col-span-4 bg-[#0b101e] rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Warehouse className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs font-mono-tech font-bold">
                      {isRTL ? 'التخزين والتجهيز' : 'Fulfillment'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                      {isRTL ? 'المستودعات، التخزين والتجهيز (Pick-and-Pack)' : 'Warehousing, Storage & Pick-and-Pack'}
                    </h3>
                    <p className="text-xs font-mono-tech font-bold text-blue-400 mt-1">
                      {isRTL ? 'خزّن بضائعك في مركزنا اللوجستي وسط بيروت.' : 'Store your inventory in our central Beirut logistics hub.'}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRTL
                      ? 'توقف عن تكديس الصناديق في غرفتك أو دفع فواتير اشتراك المولدات المرتفعة. خزن بضائعك في مستودعنا المؤمن. عند ورود أي طلب نقوم بالفرز والتغليف والإرسال فوراً.'
                      : 'Stop storing boxes in your bedroom or paying exorbitant private generator bills. Store your inventory in our secure facility. When an order arrives, we pick, pack, label, and dispatch immediately.'}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'مستودع في كورنيش النهر مع كهرباء ٢٤/٧ وكاميرات مراقبة' : 'Central Beirut facility with 24/7 power & CCTV'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'إدارة دقيقة للمخزون بالباركود وتنبيهات عند نفاد الكميات' : 'SKU-level inventory management & low-stock alerts'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'تغليف وتجهيز احترافي للطلبات وفق تعليماتك' : 'Professional pick-and-pack fulfillment'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'بدون عقود إيجار ثابتة: تدفع فقط مقابل المساحة المستعملة' : 'Zero fixed leases: Pay strictly for space used'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectSection('warehousing')}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform font-mono-tech"
                  >
                    <span>{isRTL ? 'استكشف خطط التخزين في بيروت' : 'Explore Beirut Hub Storage'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* BENTO CARD 4: Automated Logistics Dashboard (4 cols) */}
              <div className="lg:col-span-4 bg-[#0b101e] rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-xl hover:border-purple-500/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <LayoutDashboard className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-mono-tech font-bold">
                      {isRTL ? 'تقنية ذكية' : 'Smart Tech'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-400 transition-colors">
                      {isRTL ? 'لوحة تحكم ذكية وربط مع المتاجر' : 'Automated Logistics Dashboard & Store Sync'}
                    </h3>
                    <p className="text-xs font-mono-tech font-bold text-purple-400 mt-1">
                      {isRTL ? 'رؤية كاملة لجميع شحناتك في لبنان.' : 'Complete visibility into all your Lebanese shipments.'}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRTL
                      ? 'أدر عملياتك اللوجستية بالكامل عبر منصة ويب واحدة. ارفع الطلبات عبر ملف CSV أو الربط المباشر مع شوبيفاي، وتتبع حركة الطرود، واطبع بوالص الشحن وراقب مستحقاتك المالية.'
                      : 'Manage your entire logistics pipeline from a single web portal. Upload orders via CSV or Shopify, track real-time courier progress, print batch shipping labels, and monitor incoming cash balances.'}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'ربط بنقرة واحدة مع Shopify و WooCommerce و Instagram' : 'One-click Shopify, WooCommerce & Instagram sync'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'طباعة مجمعة لبوالص الشحن الحرارية A6' : 'Bulk A6 thermal shipping label printing'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'موقع جغرافي فوري للسائق وتأكيد الاستلام' : 'Real-time courier geolocation & confirmation'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{isRTL ? 'روابط تتبع تلقائية ترسل للزبائن عبر الرسائل وواتساب' : 'Automated customer SMS & WhatsApp tracking links'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectSection('merchant-portal')}
                    className="text-xs font-bold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform font-mono-tech"
                  >
                    <span>{isRTL ? 'معاينة بوابة التجار' : 'Preview Merchant Portal'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* BENTO CARD 5 & 6: Doorstep Exchanges & Corporate (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Exchanges Card */}
                <div className="bg-[#0b101e] rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-amber-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {isRTL ? 'صديق للمتاجر' : 'Retail Friendly'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    {isRTL ? 'تبديل المقاسات والسلع عند الباب' : 'Doorstep Exchanges & Return Logistics'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isRTL
                      ? 'احمِ أرباحك بتبديل المقاسات بأمان. يسلم سائقنا المقاس الجديد، ويفحص القطعة المسترجعة عند الباب، ويحصل أي فرق سعر.'
                      : 'Protect your margins with safe size swaps. Our courier delivers the new size, inspects the returned item on the spot, and collects any price difference.'}
                  </p>
                </div>

                {/* Corporate B2B Dispatch */}
                <div className="bg-[#0b101e] rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-slate-600 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {isRTL ? 'شركات' : 'Corporate'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                    {isRTL ? 'شحن فوري ومجدول للشركات والمكاتب' : 'Corporate & Urgent B2B Dispatch'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {isRTL
                      ? 'رحلات مجدولة ودراجات عند الطلب لمكاتب المحاماة، العيادات، الوكالات والشركات مع إثبات استلام وتوقيع ورقي وإلكتروني.'
                      : 'Scheduled runs or on-demand motorbikes for Lebanese law firms, clinics, agencies, and offices with signed physical proof-of-delivery (POD).'}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Feature highlight banner */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0b101e] to-slate-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 text-xs font-mono-tech font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isRTL ? 'جدولة توصيل موثوقة لمتاجر لبنان' : 'RELIABLE COURIER SCHEDULING FOR LEBANESE MERCHANTS'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
              {isRTL ? 'هل أنت مستعد لأتمتة توصيل طلباتك اليوم؟' : 'Ready to automate your delivery pipeline today?'}
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {isRTL
                ? 'يستلم سائقونا الطلبات مباشرة من باب متجرك أو منزلك، ونزودك بأكياس شحن مجانية، مع توصيل لكل لبنان وضمان تحويل أموالك.'
                : 'Our couriers pick up orders directly from your doorstep, supply complimentary flyer bags, and deliver nationwide with guaranteed cash remittance.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={onSchedulePickup}
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/25 transition-all cursor-pointer text-center"
            >
              {isRTL ? 'حجز استلام تجريبي' : 'Schedule a Test Pickup'}
            </button>
            <button
              onClick={onPartnerClick}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all cursor-pointer text-center"
            >
              {isRTL ? 'فتح حساب تاجر' : 'Open Merchant Account'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

