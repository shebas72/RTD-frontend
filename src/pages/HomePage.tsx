import React from 'react';
import { 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Warehouse, 
  Sparkles, 
  Calendar, 
  Layers, 
  Clock,
  ExternalLink,
  MessageSquare,
  Building2,
  ChevronRight,
  TrendingUp,
  Package,
  RotateCcw,
  Bike
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ImageSlider, SlideItem } from '../components/ImageSlider';
import { PricingInfographic } from '../components/infographics/PricingInfographic';
import { DeliveryWorkflowInfographic } from '../components/infographics/DeliveryWorkflowInfographic';
import { CodCashFlowInfographic } from '../components/infographics/CodCashFlowInfographic';
import { LinehaulNetworkInfographic } from '../components/infographics/LinehaulNetworkInfographic';
import { ServicesOverview } from '../components/ServicesOverview';
import { CURRENT_USD_LBP_RATE } from '../data/lebanonLocations';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenTracking: (waybill?: string) => void;
  onOpenPickup: () => void;
  onOpenPartner: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTracking,
  onOpenPickup,
  onOpenPartner,
}) => {
  const { t, isRTL } = useLanguage();

  const servicesSlides: SlideItem[] = [
    {
      id: 'slide-express-delivery',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'توصيل الطرود بالسيارات والشاحنات' : 'Nationwide Fleet Courier',
      badge: isRTL ? '٣$ بيروت / ٤$ لبنان' : '$3 Beirut / $4 Lebanon',
      title: isRTL ? 'أسطول متكامل لخدمة كافة الأقضية والمحافظات الـ ٨' : 'Fixed Flat-Rate Courier Across All 26 Districts',
      subtitle: isRTL 
        ? 'تسليم سريع ومضمون خلال ٢٤ إلى ٤٨ ساعة مع سائقين مدربين وتتبع حي مباشر لكل طرد.'
        : 'Guaranteed 24 to 48-hour delivery with company-owned vans, uniformed drivers, and real-time live GPS tracking.',
      ctaText: isRTL ? 'عرض جدول التغطية' : 'View Coverage Directory',
      onCtaClick: () => onNavigate('coverage'),
    },
    {
      id: 'slide-moto-dispatch',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'توصيل دراجات سريع لبيروت' : 'Express Moto Dispatch',
      badge: isRTL ? 'خلال ٢-٤ ساعات' : '2-4 Hour Rush Service',
      title: isRTL ? 'تجاوز أزمات السير الخانقة في بيروت وضواحيها' : 'Urban Moto Courier: Rapid Congestion Bypass',
      subtitle: isRTL
        ? 'فريق متخصص من الدراجات النارية في الأشرفية، الحمرا، فردان وضواحي بيروت لتوصيل وتعديل المقاسات الفوري.'
        : 'High-mobility motorcycle squad navigating peak traffic in Achrafieh, Hamra, and Verdun for doorstep size exchanges.',
      ctaText: isRTL ? 'طلب استلام فوري' : 'Schedule Rapid Pickup',
      onCtaClick: onOpenPickup,
    },
    {
      id: 'slide-cod-management',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'إدارة وتحصيل الدفع عند الاستلام' : 'Cash On Delivery (COD)',
      badge: isRTL ? 'دولار وليرة يومياً' : '100% Dual-Currency',
      title: isRTL ? 'تحصيل كامل للدفعات بالدولار والليرة مع تسوية يومية' : 'Zero-Deduction Dual Currency COD Remittance',
      subtitle: isRTL
        ? 'استلم أموال مبيعاتك نقداً بظرف مختوم أو عبر تطبيق Whish Money يومياً بدون أي اقتطاعات خفية.'
        : 'Receive collected cash daily in sealed envelopes at your store or directly via Whish Money with transparent statements.',
      ctaText: isRTL ? 'فتح حساب تاجر' : 'Open Merchant Account',
      onCtaClick: onOpenPartner,
    },
    {
      id: 'slide-warehousing-hub',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'مستودعات وتجهيز الطرود' : 'Hub Storage & Fulfillment',
      badge: isRTL ? '١,٥٠٠ م² كورنيش النهر' : '1,500 m² Beirut Hub',
      title: isRTL ? 'تخزين آمن للبضائع والتغليف الفوري من كورنيش النهر' : 'Secure Warehousing, Pick, Pack & Inventory Management',
      subtitle: isRTL
        ? 'وفّر تكلفة المولدات وإيجار المخازن. نقوم باستلام بضائعك وتخزينها وتجهيز الطلبات للشحن خلال دقائق.'
        : 'Eliminate expensive private generator costs and stockroom rent. Barcode scanning, CCTV surveillance, and same-day packaging.',
      ctaText: isRTL ? 'استكشف التخزين' : 'Explore Warehousing',
      onCtaClick: () => onNavigate('warehousing'),
    },
    {
      id: 'slide-open-package',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'فحص الطرد قبل الدفع' : 'Open Package On Delivery',
      badge: isRTL ? 'ثقة ومبيعات أعلى' : 'Zero Risk for Buyers',
      title: isRTL ? 'خدمة فحص وتجربة القياس عند الباب قبل السداد' : 'Let Customers Inspect & Try Sizes Before Paying',
      subtitle: isRTL
        ? 'ارفع نسبة إتمام الطلبات ورضا الزبائن بالسماح لهم بمعاينة البضاعة مع إمكانية التبديل الفوري.'
        : 'Dramatically reduce returns and boost trust by allowing buyers to verify items or swap sizes at their doorstep.',
      ctaText: isRTL ? 'تفاصيل الخدمات' : 'View Service Details',
      onCtaClick: () => onNavigate('services'),
    },
    {
      id: 'slide-linehaul-network',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
      tag: isRTL ? 'رحلات الربط بين المحافظات' : 'Inter-City Linehauls',
      badge: isRTL ? 'رحلات يومية منتظمة' : 'Twice-Daily Departures',
      title: isRTL ? 'خطوط نقل مجدولة تربط بيروت بالشمال والجنوب والبقاع' : 'Scheduled Trunk Routes Connecting Beirut to All Lebanon',
      subtitle: isRTL
        ? 'رحلات شحن سريعة لربط مستودع بيروت الرئيسي مع طرابلس، صيدا، صور، كسروان، زحلة وعكار.'
        : 'Daily scheduled shuttles linking our central Beirut hub with Tripoli, Saida, Tyre, Jounieh, Zahle, and Akkar.',
      ctaText: isRTL ? 'رادار الشحن' : 'Explore Route Network',
      onCtaClick: () => onNavigate('coverage'),
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO WITH REAL-TIME DISPATCH COCKPIT */}
      <Hero
        onTrackWaybill={(waybill) => onOpenTracking(waybill)}
        onOpenPickupModal={onOpenPickup}
        onOpenPartnerModal={onOpenPartner}
        onSelectSection={(sec) => onNavigate(sec)}
      />

      {/* 2. SERVICES SHOWCASE IMAGE SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-orange-400 font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>{isRTL ? 'خدمات التوصيل والحلول اللوجستية' : 'Comprehensive Logistics Services'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
              {isRTL ? 'خدمات مصممة خصيصاً لمتاجر التجارة الإلكترونية في لبنان' : "Lebanon's Most Complete E-Commerce Delivery Services"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              {isRTL 
                ? 'من التوصيل بالدراجات النارية والسيارات إلى تحصيل الأموال والتخزين المركزي في كورنيش النهر، بيروت.'
                : 'From rapid moto couriers and van delivery to dual-currency COD management and 1,500 m² secure warehousing in Corniche El Nahr.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-mono-tech text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>{isRTL ? 'عرض تفاصيل جميع الخدمات' : 'View All Service Details'}</span>
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <ImageSlider
          slides={servicesSlides}
          autoPlayInterval={5500}
          aspectRatio="hero"
          showThumbnails={true}
        />
      </section>

      {/* 3. TRANSPARENT FLAT-RATE PRICING INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingInfographic
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
        />
      </section>

      {/* 4. 5-STAGE PRECISION DISPATCH PIPELINE INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeliveryWorkflowInfographic onSchedulePickup={onOpenPickup} />
      </section>

      {/* 5. DUAL-CURRENCY COD REMITTANCE ENGINE INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CodCashFlowInfographic />
      </section>

      {/* 6. LEBANON LINEHAUL NETWORK INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LinehaulNetworkInfographic />
      </section>

      {/* 7. CORE SERVICES & INTEGRATION BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 text-orange-400 border border-orange-500/20 text-xs font-mono-tech font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'حلول لوجستية متكاملة' : 'Integrated Logistics Solutions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            {isRTL ? 'مصممة للعلامات التجارية والتجار المستقلين في لبنان' : 'Built for Lebanese Brands & Independent Merchants'}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {isRTL
              ? 'من متاجر الموضة عبر وسائل التواصل إلى كبرى شركات التوزيع، خدماتنا مصممة لتواكب نمو مبيعاتك.'
              : 'From social media fashion boutiques to high-volume FMCG distributors, our modular services scale with your order volume.'}
          </p>
        </div>

        <ServicesOverview
          onSchedulePickup={onOpenPickup}
          onPartnerClick={onOpenPartner}
          onSelectSection={(sec) => onNavigate(sec)}
        />
      </section>

      {/* 8. HIGH-IMPACT CONVERSION COMMAND BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-600 via-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className={`space-y-4 max-w-2xl relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-white text-xs font-mono-tech font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>{isRTL ? 'بدون رسوم تسجيل • بدء العمل الفوري بنفس اليوم' : 'Zero Setup Fees • Instant Same-Day Onboarding'}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
              {isRTL ? 'جاهز لترقية معايير التوصيل لمتجرك؟' : 'Ready to Upgrade Your Delivery Standard?'}
            </h3>

            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              {isRTL
                ? 'احجز موعد استلام طرود الآن، أو اربط متجرك الإلكتروني في ٦٠ ثانية، أو تفضل بزيارة مستودعنا في كورنيش النهر. لا رسوم وقود إضافية مخفية، وضمان تحصيل أموالك بالدولار والليرة.'
                : 'Book a courier pickup right now, connect your Shopify or WooCommerce store in 60 seconds, or tour our Corniche El Nahr fulfillment hub. Zero hidden fuel surcharges, guaranteed USD/LBP cash collection.'}
            </p>

            <div className={`pt-2 flex items-center gap-6 text-xs text-orange-100 font-mono-tech ${isRTL ? 'justify-start' : 'justify-start'}`}>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">{isRTL ? '٣$ ثابت' : '$3 Flat'}</span>
                <span>{isRTL ? 'نطاق بيروت' : 'Beirut Metro'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">{isRTL ? '٤$ ثابت' : '$4 Flat'}</span>
                <span>{isRTL ? 'كافة لبنان' : 'All Lebanon'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">100%</span>
                <span>{isRTL ? 'تسليم نقدي مضمون' : 'Cash Remittance'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <button
              onClick={onOpenPartner}
              className="px-6 py-4 bg-slate-950 hover:bg-slate-900 active:bg-black text-white font-bold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{isRTL ? 'فتح حساب تاجر جديد' : 'Apply for Merchant Account'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
            </button>

            <button
              onClick={onOpenPickup}
              className="px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-sm rounded-2xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>{isRTL ? 'طلب موعد استلام مجاني' : 'Schedule Free Pickup'}</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
