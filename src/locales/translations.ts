export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Top Telemetry Bar
  'hub.status': {
    en: 'BEIRUT SORTING HUB: ONLINE',
    ar: 'مركز الفرز في بيروت: متصل ونشط',
  },
  'hub.location': {
    en: 'Corniche El Nahr, Beirut',
    ar: 'كورنيش النهر، بيروت',
  },
  'hub.flat_rates': {
    en: 'FLAT RATES',
    ar: 'أسعار ثابتة',
  },
  'hub.rate_beirut': {
    en: '$3 Beirut',
    ar: '٣$ داخل بيروت',
  },
  'hub.rate_lebanon': {
    en: '$4 All Lebanon',
    ar: '٤$ كافة أنحاء لبنان',
  },
  'hub.rate_dual': {
    en: 'USD/LBP:',
    ar: 'سعر الصرف دولار/ليرة:',
  },
  'hub.portal_link': {
    en: 'app.rtdeliveries.net',
    ar: 'بوابة التجار الإلكترونية',
  },

  // Navigation Items
  'nav.home': {
    en: 'Home Cockpit',
    ar: 'الرئيسية اللوجستية',
  },
  'nav.home.sub': {
    en: 'Main overview & telemetry',
    ar: 'لوحة التحكم والمؤشرات الحية',
  },
  'nav.services': {
    en: 'Pricing & Services',
    ar: 'الأسعار والخدمات',
  },
  'nav.services.sub': {
    en: '$3 Beirut / $4 All Lebanon',
    ar: '٣$ بيروت / ٤$ سائر لبنان',
  },
  'nav.warehousing': {
    en: 'Warehousing & Storage',
    ar: 'التخزين والتجهيز',
  },
  'nav.warehousing.sub': {
    en: '1,500 m² Corniche El Nahr facility',
    ar: 'مستودع مركزي ١٥٠٠ م² بكورنيش النهر',
  },
  'nav.portal': {
    en: 'Merchant Platform',
    ar: 'بوابة التجار',
  },
  'nav.portal.sub': {
    en: 'Shopify sync & COD ledgers',
    ar: 'ربط شوبيفاي وكشوفات التحصيل',
  },
  'nav.coverage': {
    en: 'Lebanon Coverage',
    ar: 'تغطية المناطق',
  },
  'nav.coverage.sub': {
    en: 'All 8 Governorates & 26 Districts',
    ar: 'كافة المحافظات الـ ٨ والأقضية الـ ٢٦',
  },
  'nav.about': {
    en: 'Fleet & Facility Gallery',
    ar: 'معرض الأسطول والمرافق',
  },
  'nav.about.sub': {
    en: 'Vans, motos, and warehouse floor',
    ar: 'الفانات، الدراجات، والمستودع المركزي',
  },
  'nav.tracking': {
    en: 'Live Waybill Tracking',
    ar: 'تتبع الشحنات المباشر',
  },
  'nav.tracking.sub': {
    en: 'Real-time telemetry portal',
    ar: 'رادار التتبع الفوري للشحنات',
  },
  'nav.contact': {
    en: 'Contact & Lebanese FAQ',
    ar: 'التواصل والأسئلة الشائعة',
  },
  'nav.contact.sub': {
    en: 'Hotline, dispatch desk, and support',
    ar: 'الخط الساخن ومكتب العمليات والدعم',
  },

  // Actions & Controls
  'action.track': {
    en: 'Track',
    ar: 'تتبع',
  },
  'action.track_placeholder': {
    en: 'Track Waybill...',
    ar: 'رقم البوليصة...',
  },
  'action.book_pickup': {
    en: 'Book Pickup',
    ar: 'طلب استلام',
  },
  'action.book_pickup_short': {
    en: 'Book',
    ar: 'استلام',
  },
  'action.menu': {
    en: 'Menu',
    ar: 'القائمة',
  },
  'action.partner_onboard': {
    en: 'Become a Partner',
    ar: 'انضم كشريك تجاري',
  },
  'action.partner_cta': {
    en: 'Open Merchant Account',
    ar: 'افتح حساب تاجر',
  },
  'action.login_portal': {
    en: 'Merchant Portal Login',
    ar: 'تسجيل دخول بوابة التجار',
  },

  // Hero Section
  'hero.tag': {
    en: 'NEXT-DAY LEBANON LOGISTICS',
    ar: 'خدمات التوصيل السريع لليوم التالي في لبنان',
  },
  'hero.operational_chip': {
    en: 'NEXT-DAY LEBANON LOGISTICS',
    ar: 'خدمات التوصيل السريع لليوم التالي في لبنان',
  },
  'hero.hub_tag': {
    en: 'CORNICHE EL NAHR HUB',
    ar: 'مركز كورنيش النهر الرئيسي',
  },
  'hero.title': {
    en: 'Precision Logistics for Lebanon’s',
    ar: 'خدمات لوجستية دقيقة لمتاجر',
  },
  'hero.title_highlight': {
    en: 'Modern Brands.',
    ar: 'لبنان العصرية.',
  },
  'hero.h1_main': {
    en: 'Precision Logistics for Lebanon’s',
    ar: 'خدمات لوجستية دقيقة لمتاجر',
  },
  'hero.h1_highlight': {
    en: 'Modern Brands.',
    ar: 'لبنان العصرية.',
  },
  'hero.description': {
    en: 'Fixed $3 Beirut and $4 nationwide delivery across all 26 Lebanese districts. Reliable dual-currency Cash on Delivery remittance, centralized warehousing at Corniche El Nahr, and real-time live waybill tracking.',
    ar: 'توصيل بسعر ثابت ٣$ داخل بيروت و٤$ لسائر الأقضية اللبنانية الـ ٢٦. إدارة موثوقة وتحصيل فوري للأموال بالدولار والليرة، مستودعات مركزية في كورنيش النهر، وتتبع حي مباشر للبوالص.',
  },
  'hero.rate_beirut_title': {
    en: 'BEIRUT METRO',
    ar: 'نطاق بيروت',
  },
  'hero.rate_beirut_sub': {
    en: '270,000 LBP • Same/Next Day',
    ar: '٢٧٠,٠٠٠ ل.ل • نفس اليوم / اليوم التالي',
  },
  'hero.rate_lebanon_title': {
    en: 'ALL LEBANON',
    ar: 'كافة أنحاء لبنان',
  },
  'hero.rate_lebanon_sub': {
    en: '360,000 LBP • 26 Districts',
    ar: '٣٦٠,٠٠٠ ل.ل • كافة الأقضية الـ ٢٦',
  },
  'hero.rate_cod_title': {
    en: 'COD REMITTANCE',
    ar: 'تحصيل الأموال (COD)',
  },
  'hero.rate_cod_val': {
    en: 'USD & LBP',
    ar: 'بالدولار والليرة',
  },
  'hero.rate_cod_sub': {
    en: 'Daily cash envelopes or Whish',
    ar: 'تسليم نقدي يومي أو عبر Whish',
  },
  'hero.stat_beirut': {
    en: 'Flat $3 Inside Beirut',
    ar: '٣$ ثابتة داخل بيروت',
  },
  'hero.stat_lebanon': {
    en: 'Flat $4 All Other 7 Governorates',
    ar: '٤$ ثابتة لكافة المحافظات الـ ٧ الأخرى',
  },
  'hero.stat_cod': {
    en: 'Guaranteed 24-48h COD Payouts',
    ar: 'تسليم أموال التحصيل خلال ٢٤ إلى ٤٨ ساعة',
  },
  'hero.stat_fleet': {
    en: 'Dedicated Vans & Express Moto Squad',
    ar: 'أسطول فانات ودراجات نارية مخصص للشركة',
  },
  'hero.btn_pickup': {
    en: 'Book Merchant Pickup',
    ar: 'طلب موعد استلام للتاجر',
  },
  'hero.btn_pricing': {
    en: 'Rate & Pricing Details',
    ar: 'تفاصيل الأسعار والخدمات',
  },
  'hero.btn_rates': {
    en: 'Calculate Delivery Rate',
    ar: 'حاسبة أسعار التوصيل',
  },
  'hero.btn_partner': {
    en: 'Open Merchant Account →',
    ar: 'افتح حساب تاجر ←',
  },
  'hero.trust_fuel': {
    en: 'Zero Fuel Surcharges',
    ar: 'بدون أي رسوم محروقات إضافية',
  },
  'hero.trust_fleet': {
    en: 'Vetted Company Uniformed Fleet',
    ar: 'سائقون موثوقون بزي رسمي موحد',
  },
  'hero.trust_license': {
    en: 'Official Lebanese SARL License',
    ar: 'شركة لبنانية رسمية مرخصة (ش.م.م)',
  },

  // Cockpit Tabs
  'cockpit.title': {
    en: 'RT_DISPATCH_COCKPIT // V3.2',
    ar: 'لوحة التحكم اللوجستية // V3.2',
  },
  'cockpit.tab_track': {
    en: 'Track',
    ar: 'تتبع الشحنات',
  },
  'cockpit.tab_rates': {
    en: 'Rates',
    ar: 'حاسبة الأسعار',
  },
  'cockpit.tab_linehauls': {
    en: 'Linehauls',
    ar: 'رحلات الشحن',
  },
  'cockpit.track_badge': {
    en: 'DIRECT LARAVEL DISPATCH QUERY',
    ar: 'استعلام مباشر من نظام التوزيع',
  },
  'cockpit.track_title': {
    en: 'Enter Lebanese Waybill',
    ar: 'أدخل رقم البوليصة اللبنانية',
  },
  'cockpit.track_sub': {
    en: 'Direct query to',
    ar: 'استعلام مباشر عبر',
  },
  'cockpit.track_input_label': {
    en: 'ENTER WAYBILL / TRACKING NUMBER',
    ar: 'أدخل رقم البوليصة / التتبع',
  },
  'cockpit.track_input_placeholder': {
    en: 'e.g. RT-8942-BEY',
    ar: 'مثال: RT-8942-BEY',
  },
  'cockpit.track_submit': {
    en: 'Query Tracking Servers',
    ar: 'استعلام خوادم التتبع',
  },
  'cockpit.track_btn': {
    en: 'Query Waybill',
    ar: 'استعلام البوليصة',
  },
  'cockpit.sample_label': {
    en: 'Or test live tracking sample:',
    ar: 'أو جرّب أحد نماذج الشحنات الحية:',
  },
  'cockpit.track_sample_label': {
    en: 'Or test sample live waybill:',
    ar: 'أو جرّب نموذج شحنة حي:',
  },
  'cockpit.rates_badge': {
    en: 'GUARANTEED FIXED FLAT RATES',
    ar: 'أسعار ثابتة ومضمونة',
  },
  'cockpit.rates_title': {
    en: 'Check Delivery Fee',
    ar: 'حساب تكلفة التوصيل',
  },
  'cockpit.rates_sub': {
    en: 'Choose recipient destination anywhere in Lebanon.',
    ar: 'اختر قضاء الوجهة في أي مكان داخل لبنان.',
  },
  'cockpit.rates_label': {
    en: 'Select Delivery Destination:',
    ar: 'اختر وجهة التوصيل في لبنان:',
  },
  'cockpit.calc_select_label': {
    en: 'SELECT DESTINATION DISTRICT (26 LEBANESE DISTRICTS)',
    ar: 'اختر قضاء الوجهة (٢٦ قضاءً لبنانياً)',
  },
  'cockpit.calc_result_flat': {
    en: 'STANDARD FLAT COURIER RATE',
    ar: 'سعر التوصيل الثابت المعتمد',
  },
  'cockpit.calc_cod_included': {
    en: 'Cash collection, 3 delivery attempts & SMS updates included',
    ar: 'يشمل تحصيل الأموال، ٣ محاولات تسليم وتحديثات بالرسائل',
  },
  'cockpit.rates_sla': {
    en: 'Delivery SLA:',
    ar: 'مدة التسليم المتوقعة:',
  },
  'cockpit.rates_sla_beirut': {
    en: 'Same / Next Day',
    ar: 'نفس اليوم / اليوم التالي',
  },
  'cockpit.rates_sla_lebanon': {
    en: '24 - 48 Hours',
    ar: '٢٤ إلى ٤٨ ساعة',
  },
  'cockpit.rates_cod': {
    en: 'COD Cash Handling:',
    ar: 'إدارة تحصيل الأموال:',
  },
  'cockpit.rates_cod_val': {
    en: 'Included (Zero %)',
    ar: 'مشمولة مجاناً (بدون عمولة)',
  },
  'cockpit.rates_open': {
    en: 'Open Package Allowed:',
    ar: 'معاينة الطرد عند الباب:',
  },
  'cockpit.rates_open_val': {
    en: 'Upon Merchant Request',
    ar: 'متاحة حسب طلب التاجر',
  },
  'cockpit.rates_btn': {
    en: 'Book Delivery to',
    ar: 'طلب توصيل إلى',
  },
  'cockpit.calc_cta': {
    en: 'Dispatch Delivery to this District',
    ar: 'اطلب توصيلاً إلى هذا القضاء',
  },
  'cockpit.linehauls_badge': {
    en: 'CORNICHE EL NAHR DISPATCH HUB',
    ar: 'محطة انطلاق كورنيش النهر',
  },
  'cockpit.linehauls_title': {
    en: "Today's Linehaul Shuttles",
    ar: 'رحلات الشحن المجدولة اليوم',
  },
  'cockpit.linehauls_sub': {
    en: 'Scheduled regional vans departing from central Beirut.',
    ar: 'فانات نقل تنطلق بانتظام من محطة بيروت المركزية.',
  },
  'cockpit.linehauls_note': {
    en: 'Parcels received by 2:00 PM at Beirut hub dispatch same evening.',
    ar: 'الطرود المستلمة قبل ٢:٠٠ ظهراً بمستودع بيروت تُشحن في نفس المساء.',
  },
  'cockpit.districts_linked': {
    en: '26 Districts Linked',
    ar: '٢٦ قضاءً متصلاً بالشبكة',
  },
  'cockpit.full_radar': {
    en: 'Full Live Iframe',
    ar: 'فتح رادار التتبع الكامل',
  },

  // Telemetry Stats Strip
  'stats.sla_label': {
    en: 'FIRST ATTEMPT SLA',
    ar: 'نجاح التسليم من أول محاولة',
  },
  'stats.sla_sub': {
    en: 'Direct phone contact prior to visit',
    ar: 'اتصال هاتفي مسبق مع المستلم قبل الوصول',
  },
  'stats.beirut_label': {
    en: 'BEIRUT METRO RATE',
    ar: 'سعر التوصيل داخل بيروت',
  },
  'stats.beirut_sub': {
    en: 'Zero fuel surcharge guarantee',
    ar: 'ضمان عدم فرض أي رسوم محروقات إضافية',
  },
  'stats.reach_label': {
    en: 'NATIONWIDE REACH',
    ar: 'تغطية شاملة لكافة المناطق',
  },
  'stats.reach_sub': {
    en: 'All 8 Lebanese Governorates',
    ar: 'كافة المحافظات اللبنانية الـ ٨',
  },
  'stats.cod_label': {
    en: 'COD DISBURSEMENT',
    ar: 'تسليم أموال التحصيل',
  },
  'stats.cod_sub': {
    en: 'Zero currency deduction loss',
    ar: 'تحصيل بالدولار والليرة دون أي خصومات',
  },

  // Contact Page
  'contact.title': {
    en: 'Contact & Support Desk',
    ar: 'التواصل ومكتب الدعم والعمليات',
  },
  'contact.subtitle': {
    en: 'Corniche El Nahr Operations Hub, Beirut Dispatch Team & Merchant Support',
    ar: 'مركز عمليات كورنيش النهر، فريق التوزيع في بيروت ودعم التجار',
  },
  'contact.form_badge': {
    en: 'DIRECT INQUIRY FORM',
    ar: 'نموذج التواصل المباشر',
  },
  'contact.form_heading': {
    en: 'Send a Dispatch Inquiry',
    ar: 'أرسل استفسارك إلى مكتب العمليات',
  },
  'contact.form_desc': {
    en: 'Looking to onboard your Lebanese brand, reserve shelf space, or request custom B2B rates?',
    ar: 'ترغب في تسجيل علامتك التجارية، حجز مساحة تخزين، أو طلب أسعار خاصة بالجملة؟',
  },
  'contact.name': {
    en: 'Your Full Name *',
    ar: 'الاسم الكامل *',
  },
  'contact.brand': {
    en: 'Store / Brand Name *',
    ar: 'اسم المتجر / العلامة التجارية *',
  },
  'contact.phone': {
    en: 'Lebanese Mobile / WhatsApp *',
    ar: 'رقم الهاتف اللبناني / واتساب *',
  },
  'contact.email': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني',
  },
  'contact.gov': {
    en: 'Store / Pickup Governorate',
    ar: 'محافظة المتجر أو موقع الاستلام',
  },
  'contact.vol': {
    en: 'Estimated Monthly Parcel Volume',
    ar: 'حجم الطرود الشهري المتوقع',
  },
  'contact.msg': {
    en: 'Message / Inquiries',
    ar: 'الرسالة / تفاصيل الاستفسار',
  },
  'contact.btn_submit': {
    en: 'Transmit Inquiry to info@rtdeliveries.net',
    ar: 'إرسال الاستفسار إلى info@rtdeliveries.net',
  },
  'contact.success_title': {
    en: 'Inquiry Successfully Received!',
    ar: 'تم استلام استفسارك بنجاح!',
  },
  'contact.success_desc': {
    en: 'Our Beirut dispatch supervisor has received your submission and will review your route requirements immediately.',
    ar: 'استلم مشرف العمليات في بيروت طلبك وسيقوم بمراجعة متطلبات التوصيل والتواصل معك مباشرة.',
  },
  'contact.hubs_title': {
    en: 'Central Hubs & Contacts',
    ar: 'المراكز المركزية وأرقام التواصل',
  },
  'contact.hq_name': {
    en: 'Central Sorting & Warehousing Hub',
    ar: 'المركز الرئيسي للفرز والتخزين',
  },
  'contact.hq_addr': {
    en: 'Corniche El Nahr, Beirut, Lebanon',
    ar: 'كورنيش النهر، بيروت، لبنان',
  },
  'contact.ops_hours': {
    en: 'Mon - Sat: 8:00 AM – 7:00 PM',
    ar: 'الإثنين - السبت: ٨:٠٠ ص – ٧:٠٠ م',
  },
  'contact.whatsapp_direct': {
    en: 'Direct Chat on WhatsApp (+961 71 892 411)',
    ar: 'محادثة مباشرة عبر واتساب (+961 71 892 411)',
  },

  // Services Page & Slider
  'services.hero_badge': {
    en: 'ENTERPRISE COURIER INFRASTRUCTURE',
    ar: 'بنية تحتية متطورة لخدمات التوصيل والشحن',
  },
  'services.hero_title': {
    en: 'Transparent Pricing & Complete Last-Mile Operations',
    ar: 'أسعار واضحة وشاملة لكافة مراحل التوصيل',
  },
  'services.hero_subtitle': {
    en: 'Flat $3 Beirut, flat $4 nationwide delivery. Complete dual-currency COD remittance, rapid Beirut traffic bypass, and central fulfillment at Corniche El Nahr.',
    ar: 'سعر موحد ٣$ لبيروت، و٤$ لسائر لبنان. تحصيل كامل بالدولار والليرة، تفادي ازدحام بيروت بدراجات سريعة، ومستودعات في كورنيش النهر.',
  },

  // Footer
  'footer.about_text': {
    en: 'RT Deliveries (Road Train SARL) is Lebanon\'s premier tech-enabled delivery and warehousing partner for online merchants, fashion boutiques, and enterprise e-commerce brands across all 8 governorates.',
    ar: 'شركة آر تي ديليفريز (رود ترين ش.م.م) هي الشريك اللوجستي الرائد لخدمات التوصيل والتخزين للمتاجر الإلكترونية والعلامات التجارية في كافة المحافظات اللبنانية الـ ٨.',
  },
  'footer.quick_links': {
    en: 'Quick Navigation',
    ar: 'روابط سريعة',
  },
  'footer.services_links': {
    en: 'Core Services',
    ar: 'الخدمات الأساسية',
  },
  'footer.contact_info': {
    en: 'Dispatch & Operations',
    ar: 'إدارة العمليات والتوزيع',
  },
  'footer.copyright': {
    en: '© Road Train SARL. All rights reserved.',
    ar: '© شركة رود ترين ش.م.م. جميع الحقوق محفوظة.',
  },
  'footer.beirut_hq': {
    en: 'Corniche El Nahr, Beirut Logistics Hub, Lebanon',
    ar: 'كورنيش النهر، مركز العمليات اللوجستية، بيروت، لبنان',
  },
  'footer.hotline': {
    en: '+961 71 892 411 (WhatsApp & Calls)',
    ar: '+961 71 892 411 (واتساب واتصال)',
  },

  // Modals
  'modal.pickup_title': {
    en: 'Schedule Van / Moto Pickup',
    ar: 'طلب استلام بالسيارة أو الدراجة',
  },
  'modal.pickup_sub': {
    en: 'Our courier will collect packages directly from your warehouse or store in Lebanon.',
    ar: 'سيقوم مندوبنا باستلام الطرود مباشرة من متجرك أو مستودعك في لبنان.',
  },
  'modal.partner_title': {
    en: 'Merchant Partnership Application',
    ar: 'طلب فتح حساب تاجر شريك',
  },
  'modal.partner_sub': {
    en: 'Start shipping with flat $3 Beirut / $4 nationwide rates, 48h COD remittance, and free packaging.',
    ar: 'ابدأ الشحن بأسعار ثابتة ٣$ بيروت / ٤$ لكل لبنان، مع تحصيل الأموال وتغليف مجاني.',
  },
};
