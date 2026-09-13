import React, { useState } from 'react';
import { 
  DollarSign, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Wallet, 
  FileText,
  Clock,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { CURRENT_USD_LBP_RATE } from '../../data/lebanonLocations';
import { useLanguage } from '../../context/LanguageContext';

export const CodCashFlowInfographic: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'LBP'>('USD');
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 1,
      title: isRTL ? 'تحصيل الكاش عند باب الزبون' : 'Customer Doorstep Cash Collection',
      timing: isRTL ? 'اليوم الأول (عند الباب)' : 'Day 1 (At Doorstep)',
      description: isRTL
        ? 'يسلم السائق الطرد ويقبض القيمة نقداً بالدولار الفريش أو الليرة حسب رغبة الزبون وسعر الصرف اليومي المعتمد.'
        : 'Courier delivers package and collects exact amount in fresh USD or LBP at the daily market reference.',
      details: isRTL ? [
        'إيصال ورقي ورقمي مفصل ومطبوع يُسلّم للمشتري',
        'تحصيل مباشر بالعملتين بدون اقتطاعات أو خصومات على التاجر',
        'إمكانية معاينة محتويات الطرد قبل سداد المبلغ',
      ] : [
        'Recipient receives printed receipt with breakdown',
        'Direct cash collection in dual currency without merchant deduction',
        'Customer inspection permitted before cash handover',
      ],
      icon: Wallet,
    },
    {
      id: 2,
      title: isRTL ? 'إيداع الحقائب المحكمة في الخزنة' : 'Tamper-Evident Vault Bag Deposit',
      timing: isRTL ? 'نفس المساء (عودة السائق)' : 'Same Evening (Driver Return)',
      description: isRTL
        ? 'يضع السائق الأموال المحصلة في حقائب آمنة مرقمة برمز باركود خاص ومحكمة الإغلاق عند عودته لمركز بيروت.'
        : 'Driver seals collected money in numbered barcoded safe deposit bags upon return to Beirut Central Hub.',
      details: isRTL ? [
        'رمز باركود فريد لكل حقيبة مرتبط مباشرة برقم البوليصة',
        'مسح الحقائب تحت كاميرات مراقبة CCTV مستمرة على مدار الساعة',
        'مطابقة فورية وتصفية حساب السائق واستلام إشعار رقمي',
      ] : [
        'Each bag carries unique barcode linked to waybill',
        'Bags scanned under continuous CCTV cameras',
        'Driver reconciled on the spot with digital receipt',
      ],
      icon: Lock,
    },
    {
      id: 3,
      title: isRTL ? 'التدقيق المحاسبي ومطابقة البوالص' : 'Central Accounting & Waybill Audit',
      timing: isRTL ? 'ليلاً (قسم المحاسبة والمالية)' : 'Overnight (Finance Room)',
      description: isRTL
        ? 'فريق المحاسبة والتدقيق يطابق مبالغ البوالص مع الأوراق النقدية باستخدام كواشف العملات والأشعة فوق البنفسجية UV.'
        : 'Audit team matches waybill values against actual currency banknotes with UV banknote detection.',
      details: isRTL ? [
        'تحديث تلقائي وفوري لرصيد التاجر في لوحة التحكم الإلكترونية',
        'توليد كشوفات حساب تفصيلية بصيغة Excel و PDF لكل شحنة',
        'صفر عمولات أو تلاعب بفروقات أسعار الصرف',
      ] : [
        'Automatic ledger balance updated in merchant dashboard',
        'Full itemization in Excel & PDF generated',
        'Zero currency exchange markups or hidden fees',
      ],
      icon: FileText,
    },
    {
      id: 4,
      title: isRTL ? 'تحويل أرباح التاجر (كاش / ويش / بنك)' : 'Merchant Payout (Fresh Cash / Whish / Bank)',
      timing: isRTL ? 'كل ٤٨ ساعة أو أسبوعياً' : 'Every 48h or Thursdays 3:00 PM',
      description: isRTL
        ? 'يستلم التاجر ١٠٠٪ من أمواله المحصلة عبر القناة المالية المفضلة لديه في لبنان دون تأخير.'
        : 'Merchant receives 100% of collected net funds via their preferred Lebanese payout channel.',
      details: isRTL ? [
        'الخيار ١: استلام كاش بظرف مختوم من مركز بيروت أو طرابلس أو صيدا',
        'الخيار ٢: تحويل فوري مباشر عبر محفظة Whish Money الرقمية',
        'الخيار ٣: حوالة عبر OMT أو تحويل مصرفي مباشر لحساب التاجر',
      ] : [
        'Option 1: Cash pickup at Beirut / Tripoli / Saida Hubs',
        'Option 2: Instant Whish Money digital wallet transfer',
        'Option 3: OMT remittance or direct Lebanese bank transfer',
      ],
      icon: Building2,
    },
  ];

  return (
    <div className={`w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{isRTL ? 'النظام المالي ثنائي العملة في لبنان' : 'Dual-Currency Financial Architecture'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isRTL ? 'دورة تحصيل وتسوية الدفع عند الاستلام (COD)' : 'Lebanon Dual-Currency Cash on Delivery (COD) Flow'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            {isRTL
              ? 'كيف يتم تأمين الأموال المحصلة من الزبائن بحقائب آمنة مشفرة، وتدقيقها في بيروت، وتحويلها لحساب التاجر خلال ٤٨ ساعة.'
              : 'How cash collected at doorsteps is secured in tamper-proof bags, audited in our Beirut central vault, and remitted into merchant accounts within 48 hours.'}
          </p>
        </div>

        {/* Currency reference chip */}
        <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-3.5 shrink-0 ${isRTL ? 'text-right' : 'text-right'}`}>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">
            {isRTL ? 'سعر الصرف المعتمد للتحصيل' : 'Official Reference Exchange'}
          </span>
          <span className="text-base font-black text-amber-400 font-mono">
            1 USD = {CURRENT_USD_LBP_RATE.toLocaleString()} LBP
          </span>
          <span className="text-[10px] text-emerald-400 block font-semibold">
            {isRTL ? 'صفر اقتطاعات أو فروقات صرف' : 'Zero Currency Markup Skimming'}
          </span>
        </div>
      </div>

      {/* Interactive Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-slate-900 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                  isSelected ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                }`}>
                  0{stage.id}
                </span>
                <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
              </div>

              <h4 className={`text-sm font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {stage.title}
              </h4>
              <span className="text-[10px] text-emerald-400 font-semibold block mb-2">
                {stage.timing}
              </span>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {stage.description}
              </p>

              {/* Progress Connector Indicator */}
              {idx < stages.length - 1 && (
                <div className={`hidden md:flex absolute ${isRTL ? '-left-2.5 rotate-180' : '-right-2.5'} top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 items-center justify-center text-[10px]`}>
                  &rarr;
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Stage Expanded Insight Box */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              {isRTL ? `تفاصيل المرحلة 0${stages[activeStage].id}` : `Stage 0${stages[activeStage].id} In-Depth`}
            </span>
            <span className="text-xs text-slate-400">
              {stages[activeStage].timing}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-300">
            {isRTL ? 'اضغط على البطاقات بالأعلى لمعاينة تفاصيل كل خطوة' : 'Click other cards above to inspect each step'}
          </span>
        </div>

        <h4 className="text-xl font-black text-white">
          {stages[activeStage].title}
        </h4>
        <p className="text-sm text-slate-300">
          {stages[activeStage].description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800">
          {stages[activeStage].details.map((item, dIdx) => (
            <div key={dIdx} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Channels Banner */}
      <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">
              {isRTL ? 'أمان مالي كامل وضمان تحويل ١٠٠٪ من أموالك' : 'Guaranteed Cash Safety & 100% Remittance Guarantee'}
            </h5>
            <p className="text-xs text-slate-400">
              {isRTL
                ? 'نتحمل المسؤولية المالية الكاملة عن الأموال المحصلة من لحظة استلامها وحتى وصولها إليك دون أي تأخير.'
                : 'We assume full financial liability for collected cash from doorstep to payout. Zero payment delays.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 text-xs font-bold flex-wrap">
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Whish Money</span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">{isRTL ? 'كاش في المركز' : 'Hub Cash'}</span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">{isRTL ? 'OMT / تحويل مصرفي' : 'OMT / Bank'}</span>
        </div>
      </div>

    </div>
  );
};
