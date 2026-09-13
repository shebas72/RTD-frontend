import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  Warehouse, 
  Home, 
  Banknote, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Info 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DeliveryWorkflowInfographicProps {
  onSchedulePickup?: () => void;
}

export const DeliveryWorkflowInfographic: React.FC<DeliveryWorkflowInfographicProps> = ({
  onSchedulePickup,
}) => {
  const { t, isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: isRTL ? 'تسجيل الطلب وطباعة البوليصة' : 'Order Registration & Waybill',
      timing: isRTL ? 'فوري (٢٤/٧)' : 'Instant (24/7)',
      icon: ShoppingBag,
      color: 'from-blue-600 to-indigo-600',
      tag: isRTL ? 'المرحلة ١: تسجيل الطلب' : 'Step 1: Inbound',
      summary: isRTL 
        ? 'يسجل التاجر الطلب عبر البوابة الإلكترونية، تطبيق Shopify، أو رفع ملف إكسل بنقرة واحدة.'
        : 'Merchant logs order on web portal, Shopify plugin, or Excel upload.',
      details: isRTL ? [
        'توليد تلقائي فوري لملصق الباركود الحراري للطرد',
        'استلام الزبون لرابط التتبع الحي عبر واتساب أو الرسائل القصيرة',
        'ظهور الطرد فوراً في نظام السائقين لتحديد موعد الاستلام',
      ] : [
        'Automatic thermal barcode label generated immediately',
        'Customer receives tracking link via WhatsApp/SMS',
        'Package flagged for driver pickup in your merchant portal',
      ],
      actor: isRTL ? 'التاجر في لبنان' : 'Lebanese Merchant',
      badge: isRTL ? 'ربط شوبيفاي / إكسل' : 'Shopify / Excel Sync',
    },
    {
      step: '02',
      title: isRTL ? 'استلام الطرود من موقع التاجر' : 'Doorstep Courier Collection',
      timing: isRTL ? 'بنفس اليوم (قبل ٤:٣٠ م)' : 'Same-Day (Cut-off 4:30 PM)',
      icon: Truck,
      color: 'from-orange-500 to-amber-600',
      tag: isRTL ? 'المرحلة ٢: الاستلام' : 'Step 2: Pickup',
      summary: isRTL 
        ? 'يصل سائق رود ترين إلى متجرك أو منزلك أو مستودعك في بيروت أو أي منطقة في لبنان.'
        : 'RT Courier arrives at your store, residence, or warehouse in Beirut/Lebanon.',
      details: isRTL ? [
        'أكياس شحن وتغليف مجانية آمنة محكمة الإغلاق',
        'مسح باركود فوري عند الاستلام لتأكيد استلام الطرود مباشرة بالنظام',
        'استلام مجاني يومي عند شحن ٣ طرود فأكثر',
      ] : [
        'Complimentary RT tamper-evident flyer packaging bags provided',
        'Barcode scan confirms handoff to driver in real time',
        'Zero pickup fee for 3+ parcels per dispatch run',
      ],
      actor: isRTL ? 'سائق أسطول رود ترين' : 'RT Fleet Courier',
      badge: isRTL ? 'استلام يومي مجاني' : 'Free Daily Pickups',
    },
    {
      step: '03',
      title: isRTL ? 'مسح وفرز مركزي في مستودع بيروت' : 'Beirut Hub Scan & Sorting',
      timing: isRTL ? 'ليلاً (٨:٠٠ م - ٥:٠٠ ص)' : 'Overnight (8:00 PM - 5:00 AM)',
      icon: Warehouse,
      color: 'from-purple-600 to-pink-600',
      tag: isRTL ? 'المرحلة ٣: معالجة المستودع' : 'Step 3: Hub Processing',
      summary: isRTL 
        ? 'تصل الشحنات إلى مركز كورنيش النهر للفرز الآلي السريع وتوجيهها حسب المحافظات.'
        : 'Orders gathered at Corniche El Nahr facility for automated barcode sorting.',
      details: isRTL ? [
        'فرز فوري وتوزيع على ٨ خطوط شحن بين المحافظات اللبنانية',
        'حماية أمنية على مدار الساعة مع كهرباء ومولدات مستمرة لحماية البضائع',
        'تخطيط مسارات ذكية عبر الـ GPS لتسريع تسليم السائقين',
      ] : [
        'Sorted into 8 regional linehaul shuttles across Lebanon',
        'Security screening & 24/7 generator climate protection',
        'Delivery route optimized via GPS navigation for drivers',
      ],
      actor: isRTL ? 'فريق مستودع بيروت المركزي' : 'Beirut Hub Team',
      badge: isRTL ? 'مراقبة بالكاميرات CCTV' : 'CCTV Verified',
    },
    {
      step: '04',
      title: isRTL ? 'التسليم عند الباب وتحصيل النقود' : 'Customer Doorstep Delivery & COD',
      timing: isRTL ? 'خلال ٢٤ ساعة (٣$ بيروت / ٤$ لبنان)' : '24 Hours ($3 Beirut / $4 Lebanon)',
      icon: Home,
      color: 'from-emerald-500 to-teal-600',
      tag: isRTL ? 'المرحلة ٤: تسليم الزبون' : 'Step 4: Doorstep Drop',
      summary: isRTL 
        ? 'يسلم السائق الطرد ليد الزبون ويقوم بتحصيل المبلغ نقداً بالدولار أو الليرة.'
        : 'Courier delivers parcel directly to customer and collects cash in USD or LBP.',
      details: isRTL ? [
        'اتصال مسبق بالزبون قبل الوصول لتأكيد العنوان والموقع الدقيق',
        'إمكانية فحص البضاعة وتجربة القياس الفوري عند الباب',
        'إشعار وتأكيد تسليم فوري وتوقيع إلكتروني',
      ] : [
        'Driver calls recipient before arrival to confirm location',
        'Size / model exchanges handled on the spot if requested',
        'Digital signature & instant delivery confirmation SMS',
      ],
      actor: isRTL ? 'مندوب التوصيل النهائي' : 'Destination Courier',
      badge: isRTL ? '٩٨.٤٪ نسبة نجاح التسليم' : '98.4% Success Rate',
    },
    {
      step: '05',
      title: isRTL ? 'تسوية الأموال وتحويل الكاش' : 'Guaranteed 48h COD Remittance',
      timing: isRTL ? 'كل ٤٨ ساعة أو أسبوعياً' : 'Every 48h or Thursdays',
      icon: Banknote,
      color: 'from-amber-500 to-emerald-600',
      tag: isRTL ? 'المرحلة ٥: استلام الأرباح' : 'Step 5: Merchant Cash',
      summary: isRTL 
        ? 'يستلم التاجر ١٠٠٪ من أموال مبيعاته المحصلة دون أي اقتطاعات سوى أجرة التوصيل الثابتة.'
        : 'Merchant receives 100% of collected funds minus the flat courier fee.',
      details: isRTL ? [
        'دفع نقدي فوري باليد أو عبر Whish Money أو OMT أو تحويل مصرفي',
        'كشف حساب مالي تفصيلي ومفند بصيغة Excel و PDF لكل بوليصة',
        'شفافية تامة بدون تلاعب بأسعار الصرف أو عمولات خفية',
      ] : [
        'Payout via Cash at hub, Whish Money, OMT, or Bank Transfer',
        'Full itemized Excel & PDF financial remittance report',
        'Zero hidden deductions, zero black-market rate skimming',
      ],
      actor: isRTL ? 'قسم المالية والتحصيل' : 'Finance & Remittance',
      badge: isRTL ? 'دولار وليرة نقداً' : 'Fresh USD & LBP',
    },
  ];

  return (
    <div className={`w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{isRTL ? 'دورة العمل واللوجستيات التفاعلية' : 'Interactive Logistics Infographic'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isRTL ? 'كيف تعمل خدمة رود ترين في لبنان' : 'How RT Deliveries Works in Lebanon'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            {isRTL
              ? 'اضغط على أي مرحلة من المراحل الـ ٥ أدناه لتشاهد رحلة الطرد من متجرك وحتى يد الزبون مع ضمان تحويل أموالك.'
              : 'Click any phase in the 5-stage pipeline below to see how parcels travel from your store to customer hands with guaranteed cash remittance.'}
          </p>
        </div>

        {onSchedulePickup && (
          <button
            onClick={onSchedulePickup}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-orange-600/20 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>{isRTL ? 'حجز أول استلام طرود' : 'Book First Pickup'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {/* Interactive Horizontal Pipeline Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isRTL ? 'text-right' : 'text-left'
              } ${
                isSelected
                  ? 'bg-slate-800 border-orange-500 ring-2 ring-orange-500/30 shadow-lg'
                  : 'bg-slate-950/70 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.step}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-slate-500'}`} />
              </div>

              <div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                  {item.timing}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Panel (Infographic Focal Card) */}
      <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left: Step visual representation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold border border-slate-700">
                {steps[activeStep].tag}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{steps[activeStep].timing}</span>
              </span>
            </div>

            <h4 className="text-2xl font-black text-white">
              {steps[activeStep].title}
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed">
              {steps[activeStep].summary}
            </p>

            <div className="flex items-center gap-2 text-xs pt-2">
              <span className="text-slate-500">{isRTL ? 'الجهة المسؤولة:' : 'Responsible Entity:'}</span>
              <span className="font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                {steps[activeStep].actor}
              </span>
            </div>
          </div>

          {/* Right: Technical Features & Guarantees */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {isRTL ? 'ميزات وضمانات هذه المرحلة:' : 'Phase Features & Guarantees:'}
            </span>

            <div className="space-y-2.5">
              {steps[activeStep].details.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-normal">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>{isRTL ? 'بروتوكول معتمد من رود ترين' : 'Standard RT Logistics Protocol'}</span>
              </span>
              <span className="text-orange-400 font-bold">
                {steps[activeStep].badge}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Trust metric ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-center text-xs">
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-orange-500 block font-mono">{isRTL ? '٣.٠٠$ ثابت' : '$3.00 Flat'}</span>
          <span className="text-slate-400 text-[11px]">{isRTL ? 'داخل بيروت الكبرى' : 'Inside Beirut Doorstep'}</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-emerald-400 block font-mono">{isRTL ? '٤.٠٠$ ثابت' : '$4.00 Flat'}</span>
          <span className="text-slate-400 text-[11px]">{isRTL ? 'خارج بيروت (كافة لبنان)' : 'Outside Beirut (Nationwide)'}</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-white block font-mono">{isRTL ? '٤٨ ساعة' : '48 Hours'}</span>
          <span className="text-slate-400 text-[11px]">{isRTL ? 'أقصى مدة لتحويل الكاش' : 'Max Cash Remittance Cycle'}</span>
        </div>
        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <span className="text-base font-black text-blue-400 block font-mono">{isRTL ? '١٠٠٪ مؤمّن' : '100% Insured'}</span>
          <span className="text-slate-400 text-[11px]">{isRTL ? 'ضمان البضائع أثناء النقل' : 'Goods in Transit Guarantee'}</span>
        </div>
      </div>

    </div>
  );
};
