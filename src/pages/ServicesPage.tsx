import React from 'react';
import { 
  Calculator, 
  DollarSign, 
  Package, 
  Truck, 
  RefreshCw, 
  Boxes, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Layers,
  Zap,
  Tag
} from 'lucide-react';
import { RateCalculator } from '../components/RateCalculator';
import { ServicesSlider } from '../components/ServicesSlider';
import { CodCashFlowInfographic } from '../components/infographics/CodCashFlowInfographic';
import { PricingInfographic } from '../components/infographics/PricingInfographic';
import { ComparisonSection } from '../components/ComparisonSection';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
  onOpenPickup: () => void;
  onOpenPartner: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenPickup,
  onOpenPartner,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`space-y-16 sm:space-y-24 py-10 pb-20 bg-[#070b14] text-white ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{isRTL ? 'معيار السعر الثابت والشفاف' : 'TRANSPARENT FLAT RATE STANDARD'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            {isRTL ? '٣$ ثابت داخل بيروت. ٤$ ثابت في كل لبنان.' : '$3 Flat Inside Beirut. $4 Flat Across Lebanon.'}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {isRTL
              ? 'تخلص من تسعيرات السائقين المتقلبة وفروقات البنزين المفاجئة وبدل المسافات. أسعار واضحة وثابتة مع أكياس شحن مجانية وتسوية منتظمة للدفع عند الاستلام بالدولار والليرة.'
              : 'Eliminate fluctuating courier estimates, arbitrary fuel penalties, and distance taxes. Honest flat pricing with complimentary poly flyer bags and dual-currency COD management.'}
          </p>
        </div>
      </section>

      {/* DEDICATED SERVICES IMAGE SLIDER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-xs font-mono-tech uppercase font-bold text-orange-400 tracking-wider">
            {isRTL ? 'معرض الخدمات والأسطول اللوجستي المصور' : 'Visual Services Portfolio & Equipment'}
          </span>
        </div>
        <ServicesSlider
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* SECTION 1: INTERACTIVE RATE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RateCalculator
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* SECTION 2: COD CASH FLOW INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CodCashFlowInfographic />
      </section>

      {/* SECTION 3: PRICING ECONOMICS & SAVINGS INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingInfographic
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* SECTION 4: DETAILED E-COMMERCE SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono-tech font-bold text-orange-400 uppercase tracking-wider block">
            {isRTL ? 'خدمات متخصصة ومصممة للشركات' : 'Specialized Service Deliverables'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            {isRTL ? 'مصممة خصيصاً لمتاجر التجارة الإلكترونية سريعة النمو' : 'Built Specifically for High-Growth E-Commerce'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {isRTL ? 'كل ما يحتاجه متجرك لتلبية توقعات الزبائن بأعلى مستويات الاحترافية والموثوقية.' : 'Everything your store requires to fulfill customer expectations with total professionalism.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              {isRTL ? 'تبديل المقاسات والموديلات عند الباب' : 'Doorstep Size & Model Exchanges'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isRTL
                ? 'حل أساسي لمتاجر الألبسة والأحذية في لبنان. يحضر السائق المقاس البديل ويفحص القطعة المسترجعة عند باب الزبون ويتأكد من البطاقات ويحصل أو يرد فرق السعر.'
                : 'Essential for Lebanese apparel, footwear, and accessory stores. Courier brings the replacement size, inspects the returned item at doorstep, verifies tags, and collects/refunds price differences.'}
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-orange-400 flex items-center gap-1">
              <span>{isRTL ? 'الأجرة الثابتة ٣$/٤$ + رسوم تبديل ١$ فقط' : 'Standard $3/$4 rate + $1 exchange fee'}</span>
            </div>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              {isRTL ? 'أكياس شحن متينة وبوالص باركود مجاناً' : 'Complimentary Poly Flyer Bags & Labels'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isRTL
                ? 'نزود المتاجر النشطة بأكياس شحن عالية الكثافة ذات إغلاق أمان محكم (S, M, L) وبوالص باركود حرارية، لتمنح زبونك تجربة استلام أنيقة تضاهي كبرى الماركات العالمية.'
                : 'We equip active merchants with high-density, tamper-evident RT flyer bags (S, M, L) and thermal A6 shipping labels. Give your customers an unboxing experience that matches top global retail brands.'}
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-emerald-400 flex items-center gap-1">
              <span>{isRTL ? 'مشمولة مجاناً مع الحسابات النشطة' : 'Included free with active dispatch accounts'}</span>
            </div>
          </div>

          <div className="bg-[#0b101e] rounded-3xl p-7 border border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white font-display">
              {isRTL ? 'السلع القابلة للكسر والطرود الثقيلة' : 'Fragile Goods & Heavy Bulky Parcels'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isRTL
                ? 'مسارات فانات مخصصة لمستحضرات التجميل الزجاجية، الإلكترونيات، الديكور المنزلي والكراتين الثقيلة حتى ٢٥ كغ، مع حماية بطبقات فقاعات هوائية وضمان كامل ضد الضرر.'
                : 'Custom van routing for delicate glass cosmetics, electronics, home decor, and heavy bulk boxes up to 25 kg. Protected with double bubble wrap and full damage insurance guarantees.'}
            </p>
            <div className="pt-3 border-t border-slate-800 text-xs font-mono-tech font-bold text-blue-400 flex items-center gap-1">
              <span>{isRTL ? 'ضمان تعويض ١٠٠٪ في حال الفقدان أو الكسر' : '100% loss/theft reimbursement guarantee'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: COMPARISON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonSection
          onPartnerClick={onOpenPartner}
          onSchedulePickup={onOpenPickup}
        />
      </section>

    </div>
  );
};
