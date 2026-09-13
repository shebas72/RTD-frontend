import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonSectionProps {
  onPartnerClick: () => void;
  onSchedulePickup: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  onPartnerClick,
  onSchedulePickup,
}) => {
  const { t, isRTL } = useLanguage();

  const comparisonRows = [
    {
      feature: isRTL ? 'وضوح وشفافية الأسعار' : 'Pricing Transparency',
      rtDeliveries: isRTL ? 'أسعار ثابتة واضحة: ٣$ في بيروت، ٤$ في باقي لبنان' : 'Fixed flat rates: $3 inside Beirut, $4 everywhere else in Lebanon',
      traditional: isRTL ? 'أسعار متقلبة غير متوقعة ورسوم بنزين إضافية مفاجئة' : 'Fluctuating, unpredictable rates and arbitrary fuel surcharges',
      highlight: true,
    },
    {
      feature: isRTL ? 'سرعة تحويل أموال الدفع عند الاستلام (COD)' : 'COD Remittance Speed',
      rtDeliveries: isRTL ? 'تسوية صارمة كل ٤٨ ساعة أو أسبوعياً نقداً أو Whish أو بنك' : 'Strict 48h or weekly payouts via Fresh Cash, Whish, or Bank',
      traditional: isRTL ? 'أيام وأسابيع من الملاحقة الهاتفية لتحصيل أموالك من السائقين' : 'Days or weeks of chasing drivers for your cash',
      highlight: true,
    },
    {
      feature: isRTL ? 'التعامل بالدولار والليرة اللبنانية' : 'Dual-Currency USD & LBP Handling',
      rtDeliveries: isRTL ? 'سعر صرف مرجعي يومي شفاف بدون أي تلاعب أو سمسرة' : 'Transparent daily exchange peg with zero margin skimming',
      traditional: isRTL ? 'اقتطاعات عشوائية بسعر الصرف الموازي ونزاعات مالية مستمرة' : 'Arbitrary black-market rate deductions and currency disputes',
      highlight: true,
    },
    {
      feature: isRTL ? 'تتبع الزبون للشحنة عبر GPS' : 'Real-Time Customer GPS Tracking',
      rtDeliveries: isRTL ? 'رابط تتبع حي تلقائي واسم ورقم السائق يُرسل للزبون' : 'Automated Laravel live tracking link & driver name sent to recipient',
      traditional: isRTL ? 'اتصالات وقلق مستمر وسؤال: "وين صار الدريفر؟"' : 'Frantic phone calls asking "Wein sar el driver?"',
      highlight: false,
    },
    {
      feature: isRTL ? 'أكياس التغليف وبوالص الباركود' : 'Packaging Flyer Bags & Barcodes',
      rtDeliveries: isRTL ? 'أكياس شحن متينة آمنة مجاناً مع ملصقات باركود حرارية' : 'Complimentary high-density flyer bags with thermal barcode labels',
      traditional: isRTL ? 'أكياس نايلون خفيفة أو إجبار التاجر على الشراء والتغليف' : 'Flimsy grocery plastic bags or merchant-supplied tape',
      highlight: false,
    },
    {
      feature: isRTL ? 'المستودع والتخزين المركزي للبضائع' : 'Central Warehouse & Inventory Storage',
      rtDeliveries: isRTL ? 'مركز كورنيش النهر مع كهرباء مستمرة ٢٤/٧ وخدمات تجهيز وتغليف' : 'Central Corniche El Nahr hub with 24/7 power, pick, pack & shelf space',
      traditional: isRTL ? 'لا يوجد مستودع؛ تكديس البضائع في منازل ومحلات التجار' : 'No storage; packages piled up in merchant living room',
      highlight: true,
    },
    {
      feature: isRTL ? 'ضمان الطرود المفقودة أو المتضررة' : 'Lost & Damaged Item Guarantee',
      rtDeliveries: isRTL ? 'تعويض مالي ١٠٠٪ فوري لأي طرد يثبت فقده أثناء النقل' : '100% financial reimbursement for verified lost parcels',
      traditional: isRTL ? 'تهرب من المسؤولية وتجاهل اتصالات الواتساب' : 'No liability; driver ignores WhatsApp calls',
      highlight: true,
    },
    {
      feature: isRTL ? 'تبديل المقاسات والسلع عند الباب' : 'Doorstep Size & Item Exchanges',
      rtDeliveries: isRTL ? 'فحص السلعة المرتجعة وبطاقتها عند الباب قبل تسليم البديل' : 'Driver inspects returned item at doorstep before handing over',
      traditional: isRTL ? 'ضياع القطعة الأصلية أو استلام بضاعة ملبوسة وتالفة' : 'Merchant loses original item or gets worn/damaged goods',
      highlight: false,
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-[#070b14] text-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRTL ? 'مقارنة المعايير التشغيلية والاحترافية' : 'OPERATIONAL RIGOR COMPARISON'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            {isRTL 
              ? 'بنية تحتية مصممة للتجارة الحديثة، وليست مشاوير سرفيس عشوائية'
              : 'Engineered for Modern E-Commerce, Not Improvised Taxi Runs'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isRTL
              ? 'اكتشف كيف ترفع البنية اللوجستية الحديثة رضا عملائك ومعدل تكرار الشراء وتدفق السيولة المالية لمتجرك.'
              : 'See how modern logistics infrastructure transforms your customer satisfaction, repeat purchases, and cash flow.'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-800 rounded-3xl shadow-2xl bg-[#0b101e]">
          <table className={`w-full border-collapse ${isRTL ? 'text-right' : 'text-left'}`}>
            <thead>
              <tr className="border-b border-slate-800 bg-[#070a14]">
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider w-1/3">
                  {isRTL ? 'المعيار اللوجستي' : 'Logistics Standard'}
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider w-1/3 border-x border-slate-800 bg-orange-950/20">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-[10px]">
                      RT
                    </div>
                    <span>{isRTL ? 'رود ترين دليفري (لبنان)' : 'RT Deliveries (Lebanon)'}</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono-tech font-bold text-slate-500 uppercase tracking-wider w-1/3">
                  {isRTL ? 'الشركات التقليدية / النقل العشوائي' : 'Traditional Couriers / Shared Taxis'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? 'bg-orange-950/10' : 'bg-transparent'}>
                  <td className="p-4 sm:p-5 font-bold text-white">
                    {row.feature}
                  </td>

                  {/* RT Deliveries Column */}
                  <td className="p-4 sm:p-5 bg-orange-950/20 border-x border-slate-800 text-slate-200 font-semibold">
                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.rtDeliveries}</span>
                    </div>
                  </td>

                  {/* Traditional Couriers */}
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Bar underneath */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-[#0b101e] border border-slate-800 rounded-3xl gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white font-display">
                {isRTL ? 'هل أنت مستعد لترقية خدمات التوصيل في متجرك؟' : 'Ready to upgrade your delivery infrastructure?'}
              </div>
              <div className="text-xs text-slate-400">
                {isRTL ? 'تفعيل حساب متجرك خلال أقل من ساعتين وبدون أي رسوم تأسيس.' : 'Onboard your store in less than 2 hours with zero setup fees.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onPartnerClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
            >
              {isRTL ? 'التسجيل كشريك تاجر' : 'Sign Up as Merchant Partner'}
            </button>
            <button
              onClick={onSchedulePickup}
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              {isRTL ? 'حجز شحنة تجريبية' : 'Book One-Time Delivery'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
