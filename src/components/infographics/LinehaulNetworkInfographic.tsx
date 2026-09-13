import React, { useState } from 'react';
import { 
  Navigation, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { RT_LOGISTICS_HUBS } from '../../data/lebanonLocations';
import { useLanguage } from '../../context/LanguageContext';

export const LinehaulNetworkInfographic: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedRouteId, setSelectedRouteId] = useState<string>('bey');

  const routes = [
    {
      id: 'bey',
      name: isRTL ? 'المنطقة ١: نطاق بيروت وضواحيها' : 'Zone 1: Greater Beirut Core',
      fee: isRTL ? '٣.٠٠$ ثابت' : '$3.00 Flat',
      transit: isRTL ? 'بنفس اليوم (٢-٤ س) أو ٢٤ س' : 'Same-Day (2-4h) & 24h',
      departure: isRTL ? 'كل ساعتين (صباحاً وبعد الظهر)' : 'Every 2 Hours (Morning & Afternoon)',
      fleet: isRTL ? '١٢ فان تجاري + ١٨ دراجة نارية' : '12 Commercial Vans + 18 Motorbike Units',
      destinations: isRTL 
        ? 'الأشرفية، الحمرا، فردان، بدارو، وسط بيروت، مار مخايل، الجناح، المزرعة وضواحي العاصمة'
        : 'Achrafieh, Hamra, Verdun, Badaro, Downtown, Mar Mikhael, Jnah, Mazraa',
      description: isRTL
        ? 'تغطية مكثفة بأساطيل دراجات وفانات لتفادي الازدحام المروري في بيروت وضمان التسليم السريع.'
        : 'Ultra-dense courier coverage designed to avoid Beirut peak traffic bottlenecks.',
    },
    {
      id: 'metn',
      name: isRTL ? 'المنطقة ٢أ: ساحل المتن وكسروان' : 'Zone 2A: Metn Coast & Keserwan',
      fee: isRTL ? '٤.٠٠$ ثابت' : '$4.00 Flat',
      transit: isRTL ? 'اليوم التالي (انطلاق صباحي)' : 'Next-Day (Morning Dispatch)',
      departure: isRTL ? 'يومياً ٨:٣٠ ص و ١:٠٠ م' : 'Daily 8:30 AM & 1:00 PM',
      fleet: isRTL ? '٨ فانات خطوط مخصصة' : '8 Dedicated Linehaul Vans',
      destinations: isRTL
        ? 'سن الفيل، الجديدة، أنطلياس، الضبية، زوق مصبح، الكسليك، جونيه، جبيل'
        : 'Sin El Fil, Jdeideh, Antelias, Dbayeh, Zouk Mosbeh, Kaslik, Jounieh, Jbeil',
      description: isRTL
        ? 'خط الأوتوستراد الساحلي السريع الذي يغطي المراكز التجارية والضواحي السكنية الكثيفة.'
        : 'Continuous coastal highway route serving coastal commercial centers and residential hubs.',
    },
    {
      id: 'north',
      name: isRTL ? 'المنطقة ٢ب: شمال لبنان (مركز طرابلس)' : 'Zone 2B: North Lebanon (Tripoli Hub)',
      fee: isRTL ? '٤.٠٠$ ثابت' : '$4.00 Flat',
      transit: isRTL ? '٢٤ إلى ٤٨ ساعة' : '24 to 48 Hours',
      departure: isRTL ? 'شاحنات نقل ليلي ٧:٠٠ م' : 'Daily 7:00 PM Inter-Hub Shuttle',
      fleet: isRTL ? 'شاحنات نقل بين المراكز' : 'Heavy Linehaul Transit Shuttles',
      destinations: isRTL
        ? 'البترون، شكا، طرابلس، الميناء، الكورة، زغرتا، إهدن، عكار'
        : 'Batroun, Chekka, Tripoli City, Al Mina, Koura, Zgharta, Ehden',
      description: isRTL
        ? 'ربط ليلي مباشر بين مركز بيروت المركزي ومستودع التوزيع الإقليمي في طرابلس.'
        : 'Overnight linehaul connection between Beirut central hub and Tripoli regional depot.',
    },
    {
      id: 'south',
      name: isRTL ? 'المنطقة ٢ج: جنوب لبنان (مركز صيدا)' : 'Zone 2C: South Lebanon (Saida Hub)',
      fee: isRTL ? '٤.٠٠$ ثابت' : '$4.00 Flat',
      transit: isRTL ? '٢٤ إلى ٤٨ ساعة' : '24 to 48 Hours',
      departure: isRTL ? 'يومياً ٨:٠٠ ص و ٦:٠٠ م' : 'Daily 8:00 AM & 6:00 PM',
      fleet: isRTL ? 'فانات خط الجنوب' : 'Southern Highway Dispatch Vans',
      destinations: isRTL
        ? 'صيدا، الغازية، مغدوشة، صور، قانا، النبطية، جزين'
        : 'Saida, Ghazieh, Maghdouche, Tyre (Sour), Qana, Nabatieh, Jezzine',
      description: isRTL
        ? 'خط شحن جنوبي يضمن الوصول من الباب إلى الباب للمدن الساحلية والقرى والبلدات.'
        : 'Dedicated southern line providing door-to-door delivery across coastal and inland villages.',
    },
    {
      id: 'bekaa',
      name: isRTL ? 'المنطقة ٢د: البقاع (مركز زحلة)' : 'Zone 2D: Bekaa Valley (Zahle Hub)',
      fee: isRTL ? '٤.٠٠$ ثابت' : '$4.00 Flat',
      transit: isRTL ? '٢٤ إلى ٤٨ ساعة' : '24 to 48 Hours',
      departure: isRTL ? 'يومياً ٩:٠٠ ص عبر ضهر البيدر' : 'Daily 9:00 AM Dahr El Baidar Transit',
      fleet: isRTL ? 'فانات مجهزة للطرق الجبلية' : 'All-Weather Mountain Line Vans',
      destinations: isRTL
        ? 'شتورا، زحلة، سعدنايل، بر الياس، البقاع الغربي، بعلبك'
        : 'Chtaura, Zahle, Saadnayel, Bar Elias, West Bekaa, Baalbek',
      description: isRTL
        ? 'خط جبلي موثوق يربط بيروت بكافة أرجاء وادي البقاع التجاري والزراعي.'
        : 'Reliable mountain route connecting Beirut with the entire agricultural and commercial valley.',
    },
  ];

  const activeRoute = routes.find((r) => r.id === selectedRouteId) || routes[0];

  return (
    <div className={`w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>{isRTL ? 'خطوط الربط السريع بين المحافظات' : 'Lebanon Inter-City Shuttles'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isRTL ? 'شبكة النقل والخطوط الإقليمية في لبنان' : 'Hub & Spoke Linehaul Network'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            {isRTL
              ? 'ينسق مركزنا اللوجستي المركزي في بيروت (كورنيش النهر) رحلات يومية مجدولة تغطي كافة المحافظات اللبنانية الثماني.'
              : 'Our Central Beirut Logistics Hub at Corniche El Nahr coordinates scheduled daily shuttles reaching all 8 Lebanese governorates.'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 text-xs shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-300 font-semibold">
            {isRTL ? '٥ خطوط شحن إقليمية نشطة' : '5 Active Regional Corridors'}
          </span>
        </div>
      </div>

      {/* Interactive Central Hub Schematic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Route Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            {isRTL ? 'اختر خط الشحن الإقليمي:' : 'Select Lebanese Route Corridor:'}
          </span>

          {routes.map((route) => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  isSelected
                    ? 'bg-slate-800 border-orange-500 ring-2 ring-orange-500/30 shadow-md'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <h4 className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {route.name}
                  </h4>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {route.transit}
                  </span>
                </div>

                <div className="text-right shrink-0 mx-2">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-lg font-mono ${
                    route.fee.includes('$3') || route.fee.includes('٣') ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {route.fee}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Diagram */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                {isRTL ? 'تفاصيل الخط' : 'Corridor Breakdown'}
              </span>
              <h4 className="text-xl font-black text-white mt-0.5">
                {activeRoute.name}
              </h4>
            </div>
            <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-white font-mono font-bold text-sm rounded-xl">
              {activeRoute.fee}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeRoute.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[11px] block">{isRTL ? 'سرعة الوصول والتوصيل:' : 'Transit Speed:'}</span>
              <span className="font-bold text-white mt-1 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>{activeRoute.transit}</span>
              </span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[11px] block">{isRTL ? 'مواعيد الانطلاق اليومية:' : 'Departure Window:'}</span>
              <span className="font-bold text-white mt-1 block flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activeRoute.departure}</span>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {isRTL ? 'أبرز المدن والمناطق المغطاة:' : 'Key Covered Cities & Quarters:'}
            </span>
            <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-medium">
              {activeRoute.destinations}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 flex-wrap gap-2">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
              <span>{isRTL ? 'نقطة الانطلاق: مستودع بيروت المركزي (كورنيش النهر)' : 'Origin: Beirut Central Hub (Corniche El Nahr)'}</span>
            </span>
            <span className="text-emerald-400 font-semibold">
              {isRTL ? 'تتبع مباشر للأسطول' : 'Live Fleet Monitored'}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
