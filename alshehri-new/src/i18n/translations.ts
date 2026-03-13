export type Language = 'ar' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    testimonials: string;
    contact: string;
    callNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    bookBtn: string;
    servicesBtn: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    scroll: string;
  };
  about: {
    tag: string;
    title: string;
    titleAccent: string;
    lead: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    cta: string;
    expNumber: string;
    expText: string;
  };
  services: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      features: string[];
      featured?: boolean;
      featuredLabel?: string;
      icon: string;
    }[];
    more: string;
  };
  gallery: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    filterAll: string;
    filterService: string;
    filterRestoration: string;
    filterPerformance: string;
    items: {
      category: string;
      categoryLabel: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
  whyUs: {
    tag: string;
    title: string;
    titleAccent: string;
    lead: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
    floatingTitle: string;
    floatingDesc: string;
  };
  testimonials: {
    tag: string;
    title: string;
    titleAccent: string;
    cards: {
      text: string;
      name: string;
      role: string;
      avatar: string;
    }[];
  };
  cta: {
    title: string;
    titleAccent: string;
    description: string;
    bookBtn: string;
    callBtn: string;
  };
  contact: {
    tag: string;
    title: string;
    titleAccent: string;
    lead: string;
    addressTitle: string;
    addressText: string;
    phoneTitle: string;
    emailTitle: string;
    hoursTitle: string;
    hoursText: string;
    mapTitle: string;
    mapAddress: string;
    directions: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    ourServices: string;
    contactInfo: string;
    copyright: string;
    privacy: string;
    terms: string;
    serviceLinks: string[];
  };
  preloader: string;
}

const ar: Translations = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    gallery: 'معرض الأعمال',
    testimonials: 'آراء العملاء',
    contact: 'تواصل معنا',
    callNow: 'اتصل الآن',
  },
  hero: {
    badge: '⭐ خدمة متميزة منذ عام ٢٠٠٥',
    title1: 'دقة.',
    title2: 'أداء.',
    title3: 'إتقان.',
    subtitle: 'حيث تلتقي الفخامة بالخبرة. نقدم خدمات عالمية المستوى لأرقى السيارات في العالم.',
    bookBtn: 'احجز موعدك',
    servicesBtn: 'خدماتنا',
    stat1Number: '18',
    stat1Label: 'سنة خبرة',
    stat2Number: '5000',
    stat2Label: 'سيارة تم صيانتها',
    stat3Number: '100',
    stat3Label: 'رضا العملاء',
    scroll: 'تصفح',
  },
  about: {
    tag: 'من نحن',
    title: 'الحرفية تلتقي ',
    titleAccent: 'بالابتكار',
    lead: 'الشهري لصيانة السيارات الفاخرة هي الوجهة الأولى لعشاق السيارات الذين لا يقبلون إلا بالتميز.',
    description: 'تأسسنا في عام ٢٠٠٥، وبنينا سمعتنا على التزام لا يتزعزع بالجودة والدقة ورضا العملاء. مرافقنا المتطورة مجهزة بأحدث أدوات التشخيص والتقنيات، مما يضمن قدرتنا على صيانة أكثر السيارات تطوراً.',
    feature1Title: 'خبراء معتمدون',
    feature1Desc: 'فنيون مدربون في المصانع بشهادات متخصصة',
    feature2Title: 'قطع غيار أصلية',
    feature2Desc: 'نستخدم فقط قطع الغيار الأصلية والمعتمدة',
    feature3Title: 'ضمان شامل',
    feature3Desc: 'ضمان شامل على جميع الخدمات والقطع',
    cta: 'احجز زيارتك',
    expNumber: '+١٨',
    expText: 'عام من التميز',
  },
  services: {
    tag: 'خبراتنا',
    title: 'خدماتنا ',
    titleAccent: 'المتميزة',
    subtitle: 'رعاية شاملة لسيارتك الفاخرة، تُقدم بدقة وشغف',
    cards: [
      {
        title: 'الصيانة الدورية الشاملة',
        description: 'فحص شامل لصحة السيارة، تغيير الزيت، استبدال الفلاتر، وبرامج صيانة دورية مصممة خصيصاً لسيارتك.',
        features: ['زيت صناعي متميز', 'فحص متعدد النقاط', 'تعبئة جميع السوائل'],
        icon: 'fa-oil-can',
      },
      {
        title: 'التشخيص والإلكترونيات',
        description: 'تشخيص حاسوبي متقدم باستخدام أجهزة خاصة بكل علامة تجارية لتحديد وحل المشاكل الإلكترونية المعقدة.',
        features: ['برمجة وحدة التحكم', 'معايرة الحساسات', 'تحديث البرامج'],
        icon: 'fa-microchip',
        featured: true,
        featuredLabel: 'الأكثر طلباً',
      },
      {
        title: 'تعديلات الأداء',
        description: 'أطلق العنان لإمكانيات سيارتك الحقيقية مع ترقيات الأداء المتخصصة وخدمات الضبط الدقيق.',
        features: ['إعادة برمجة المحرك', 'أنظمة العادم', 'ضبط نظام التعليق'],
        icon: 'fa-tachometer-alt',
      },
      {
        title: 'الفرامل والتعليق',
        description: 'أنظمة فرامل متميزة ومكونات تعليق لضمان التحكم الأمثل والسلامة ومتعة القيادة.',
        features: ['خدمة الفرامل والأقراص', 'تركيب نوابض رياضية', 'خدمة ترصيص العجلات'],
        icon: 'fa-car-crash',
      },
      {
        title: 'التكييف والتبريد',
        description: 'خدمة وإصلاح متخصصة للتكييف للحفاظ على راحة المقصورة الفاخرة في جميع الأحوال الجوية.',
        features: ['شحن غاز التكييف', 'خدمة الضاغط', 'جودة هواء المقصورة'],
        icon: 'fa-snowflake',
      },
      {
        title: 'التلميع والحماية',
        description: 'خدمات تلميع احترافية وعلاجات حماية للحفاظ على المظهر الأنيق لسيارتك.',
        features: ['طلاء السيراميك', 'تصحيح الطلاء', 'ترميم المقصورة'],
        icon: 'fa-paint-brush',
      },
    ],
    more: 'المزيد',
  },
  gallery: {
    tag: 'أعمالنا',
    title: 'معرض ',
    titleAccent: 'الإنجازات',
    subtitle: 'لمحة عن عالمنا من الدقة والشغف',
    filterAll: 'الكل',
    filterService: 'الصيانة',
    filterRestoration: 'الترميم',
    filterPerformance: 'الأداء',
    items: [
      { category: 'service', categoryLabel: 'صيانة', title: 'بورش ٩١١ جي تي ٣', description: 'صيانة وفحص شامل', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80' },
      { category: 'restoration', categoryLabel: 'ترميم', title: 'فيراري كلاسيك', description: 'ترميم كامل للهيكل', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80' },
      { category: 'performance', categoryLabel: 'أداء', title: 'بي إم دبليو إم٤', description: 'تركيب باقة الأداء', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80' },
      { category: 'service', categoryLabel: 'صيانة', title: 'مرسيدس إيه إم جي جي تي', description: 'صيانة سنوية', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80' },
      { category: 'restoration', categoryLabel: 'ترميم', title: 'لامبورغيني هوراكان', description: 'تصحيح الطلاء وسيراميك', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80' },
      { category: 'performance', categoryLabel: 'أداء', title: 'أودي آر إس ٧', description: 'ضبط المرحلة الثانية', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  whyUs: {
    tag: 'لماذا نحن',
    title: 'تميز ',
    titleAccent: 'الشهري',
    lead: 'نحن لا نصلح السيارات فحسب - بل نعتني بتحف فنية على عجلات باحترام واهتمام يستحقونه.',
    items: [
      { number: '٠١', title: 'خبرة حصرية', description: 'فنيونا متخصصون مدربون في المصانع مع عقود من الخبرة المشتركة في السيارات الفاخرة والرياضية.' },
      { number: '٠٢', title: 'تقنية متطورة', description: 'نستثمر في أحدث معدات التشخيص والأدوات لضمان خدمة دقيقة وفعالة في كل مرة.' },
      { number: '٠٣', title: 'تواصل شفاف', description: 'ستتلقى شروحات مفصلة وتحديثات طوال عملية الخدمة، بدون رسوم خفية.' },
      { number: '٠٤', title: 'خدمة كونسيرج', description: 'استمتع بخدمة التوصيل والاستلام المجانية، سيارات بديلة، وتجربة صالة انتظار فاخرة.' },
    ],
    floatingTitle: 'حائز على جوائز',
    floatingDesc: 'أفضل خدمة فاخرة ٢٠٢٤',
  },
  testimonials: {
    tag: 'آراء العملاء',
    title: 'ماذا يقول ',
    titleAccent: 'عملاؤنا',
    cards: [
      { text: '"الشهري يصون سيارتي البورش منذ ثلاث سنوات. اهتمامهم بالتفاصيل استثنائي، وأنا دائماً واثق من ترك سيارتي في أيديهم."', name: 'عبدالله الراشد', role: 'مالك بورش ٩١١ تيربو إس', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { text: '"الفريق شخّص وأصلح مشكلة لم تستطع ورشتان أخريان تحديدها. محترفون حقيقيون يهتمون بحرفتهم."', name: 'خالد محمد', role: 'مالك مرسيدس إيه إم جي جي تي', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
      { text: '"من اللحظة التي تدخل فيها، تعرف أن هذا مكان متميز. الخدمة والتواصل والنتائج كلها من الدرجة الأولى. أنصح بهم بشدة!"', name: 'فيصل الدوسري', role: 'مالك بنتلي كونتيننتال', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
    ],
  },
  cta: {
    title: 'هل أنت مستعد لتجربة ',
    titleAccent: 'التميز؟',
    description: 'احجز موعدك اليوم واكتشف لماذا الشهري هو الخيار الموثوق لعشاق السيارات الفاخرة.',
    bookBtn: 'احجز موعدك',
    callBtn: 'اتصل بنا الآن',
  },
  contact: {
    tag: 'تواصل معنا',
    title: 'لنبقى ',
    titleAccent: 'على اتصال',
    lead: 'نحن هنا لمساعدتك في جميع احتياجات سيارتك الفاخرة. تواصل معنا عبر أي من القنوات التالية:',
    addressTitle: 'زيارة ورشتنا',
    addressText: '8543 3584 Balqis, Al Sina\'iyah\nالرياض 12872، المملكة العربية السعودية',
    phoneTitle: 'اتصل بنا',
    emailTitle: 'راسلنا',
    hoursTitle: 'ساعات العمل',
    hoursText: 'السبت - الخميس: ٨ص - ٨م\nالجمعة: مغلق',
    mapTitle: 'موقعنا',
    mapAddress: '8543 3584 Balqis, Al Sina\'iyah\nالرياض 12872، السعودية',
    directions: 'احصل على الاتجاهات',
  },
  footer: {
    description: 'حيث تلتقي الدقة بالشغف. سيارتك الفاخرة لا تستحق أقل من الأفضل.',
    quickLinks: 'روابط سريعة',
    ourServices: 'خدماتنا',
    contactInfo: 'معلومات التواصل',
    copyright: '© ٢٠٢٤ الشهري لصيانة السيارات الفاخرة. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    serviceLinks: ['الصيانة الشاملة', 'التشخيص', 'تعديلات الأداء', 'الفرامل والتعليق', 'التكييف', 'التلميع والحماية'],
  },
  preloader: 'الشهري',
};

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    testimonials: 'Testimonials',
    contact: 'Contact',
    callNow: 'Call Now',
  },
  hero: {
    badge: '⭐ Premium Service Since 2005',
    title1: 'Precision.',
    title2: 'Performance.',
    title3: 'Perfection.',
    subtitle: 'Where luxury meets expertise. We deliver world-class services for the finest automobiles.',
    bookBtn: 'Book Appointment',
    servicesBtn: 'Our Services',
    stat1Number: '18',
    stat1Label: 'Years Experience',
    stat2Number: '5000',
    stat2Label: 'Cars Serviced',
    stat3Number: '100',
    stat3Label: 'Client Satisfaction',
    scroll: 'Scroll',
  },
  about: {
    tag: 'About Us',
    title: 'Craftsmanship Meets ',
    titleAccent: 'Innovation',
    lead: 'Al-Shehri Luxury Car Maintenance is the premier destination for automotive enthusiasts who accept nothing less than excellence.',
    description: 'Founded in 2005, we built our reputation on an unwavering commitment to quality, precision, and customer satisfaction. Our state-of-the-art facility is equipped with the latest diagnostic tools and technology, ensuring we can service the most sophisticated vehicles.',
    feature1Title: 'Certified Experts',
    feature1Desc: 'Factory-trained technicians with specialized certifications',
    feature2Title: 'Genuine Parts',
    feature2Desc: 'We use only original and certified spare parts',
    feature3Title: 'Full Warranty',
    feature3Desc: 'Comprehensive warranty on all services and parts',
    cta: 'Book Your Visit',
    expNumber: '18+',
    expText: 'Years of Excellence',
  },
  services: {
    tag: 'Our Expertise',
    title: 'Our Premium ',
    titleAccent: 'Services',
    subtitle: 'Comprehensive care for your luxury vehicle, delivered with precision and passion',
    cards: [
      {
        title: 'Comprehensive Maintenance',
        description: 'Complete vehicle health inspection, oil change, filter replacement, and custom scheduled maintenance programs.',
        features: ['Premium synthetic oil', 'Multi-point inspection', 'All fluids top-up'],
        icon: 'fa-oil-can',
      },
      {
        title: 'Diagnostics & Electronics',
        description: 'Advanced computer diagnostics using brand-specific equipment to identify and resolve complex electronic issues.',
        features: ['ECU programming', 'Sensor calibration', 'Software updates'],
        icon: 'fa-microchip',
        featured: true,
        featuredLabel: 'Most Popular',
      },
      {
        title: 'Performance Upgrades',
        description: 'Unleash your car\'s true potential with specialized performance upgrades and precision tuning services.',
        features: ['Engine remapping', 'Exhaust systems', 'Suspension tuning'],
        icon: 'fa-tachometer-alt',
      },
      {
        title: 'Brakes & Suspension',
        description: 'Premium brake systems and suspension components ensuring optimal control, safety, and driving pleasure.',
        features: ['Brake & disc service', 'Sport spring install', 'Wheel balancing'],
        icon: 'fa-car-crash',
      },
      {
        title: 'AC & Cooling',
        description: 'Specialized air conditioning service and repair to maintain luxury cabin comfort in all weather conditions.',
        features: ['AC gas recharge', 'Compressor service', 'Cabin air quality'],
        icon: 'fa-snowflake',
      },
      {
        title: 'Detailing & Protection',
        description: 'Professional detailing services and protection treatments to preserve your car\'s elegant appearance.',
        features: ['Ceramic coating', 'Paint correction', 'Interior restoration'],
        icon: 'fa-paint-brush',
      },
    ],
    more: 'Learn More',
  },
  gallery: {
    tag: 'Our Work',
    title: 'Gallery of ',
    titleAccent: 'Achievements',
    subtitle: 'A glimpse into our world of precision and passion',
    filterAll: 'All',
    filterService: 'Service',
    filterRestoration: 'Restoration',
    filterPerformance: 'Performance',
    items: [
      { category: 'service', categoryLabel: 'Service', title: 'Porsche 911 GT3', description: 'Complete service & inspection', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80' },
      { category: 'restoration', categoryLabel: 'Restoration', title: 'Classic Ferrari', description: 'Full body restoration', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80' },
      { category: 'performance', categoryLabel: 'Performance', title: 'BMW M4', description: 'Performance package install', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80' },
      { category: 'service', categoryLabel: 'Service', title: 'Mercedes AMG GT', description: 'Annual maintenance', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80' },
      { category: 'restoration', categoryLabel: 'Restoration', title: 'Lamborghini Huracán', description: 'Paint correction & ceramic', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80' },
      { category: 'performance', categoryLabel: 'Performance', title: 'Audi RS7', description: 'Stage 2 tuning', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  whyUs: {
    tag: 'Why Choose Us',
    title: 'The Al-Shehri ',
    titleAccent: 'Difference',
    lead: 'We don\'t just fix cars — we care for automotive masterpieces on wheels with the respect and attention they deserve.',
    items: [
      { number: '01', title: 'Exclusive Expertise', description: 'Our specialized technicians are factory-trained with decades of combined luxury and sports car experience.' },
      { number: '02', title: 'Cutting-Edge Tech', description: 'We invest in the latest diagnostic equipment and tools to ensure precise and efficient service every time.' },
      { number: '03', title: 'Transparent Communication', description: 'You\'ll receive detailed explanations and updates throughout the service process, with no hidden fees.' },
      { number: '04', title: 'Concierge Service', description: 'Enjoy complimentary pick-up and drop-off, loaner vehicles, and a premium lounge experience.' },
    ],
    floatingTitle: 'Award Winning',
    floatingDesc: 'Best Luxury Service 2024',
  },
  testimonials: {
    tag: 'Client Reviews',
    title: 'What Our ',
    titleAccent: 'Clients Say',
    cards: [
      { text: '"Al-Shehri has been maintaining my Porsche for three years. Their attention to detail is exceptional, and I always feel confident leaving my car in their hands."', name: 'Abdullah Al-Rashed', role: 'Porsche 911 Turbo S Owner', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { text: '"The team diagnosed and fixed an issue that two other workshops couldn\'t identify. True professionals who care about their craft."', name: 'Khaled Mohammed', role: 'Mercedes AMG GT Owner', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
      { text: '"From the moment you walk in, you know this is a premium place. The service, communication, and results are all first-class. Highly recommended!"', name: 'Faisal Al-Dosari', role: 'Bentley Continental Owner', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
    ],
  },
  cta: {
    title: 'Ready to Experience ',
    titleAccent: 'Excellence?',
    description: 'Book your appointment today and discover why Al-Shehri is the trusted choice for luxury car enthusiasts.',
    bookBtn: 'Book Appointment',
    callBtn: 'Call Us Now',
  },
  contact: {
    tag: 'Get in Touch',
    title: 'Let\'s Stay ',
    titleAccent: 'Connected',
    lead: 'We\'re here to help with all your luxury car needs. Reach us through any of the following channels:',
    addressTitle: 'Visit Our Workshop',
    addressText: '8543 3584 Balqis, Al Sina\'iyah\nRiyadh 12872, Saudi Arabia',
    phoneTitle: 'Call Us',
    emailTitle: 'Email Us',
    hoursTitle: 'Working Hours',
    hoursText: 'Saturday - Thursday: 8AM - 8PM\nFriday: Closed',
    mapTitle: 'Our Location',
    mapAddress: '8543 3584 Balqis, Al Sina\'iyah\nRiyadh 12872, Saudi Arabia',
    directions: 'Get Directions',
  },
  footer: {
    description: 'Where precision meets passion. Your luxury car deserves nothing but the best.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    contactInfo: 'Contact Info',
    copyright: '© 2024 Al-Shehri Luxury Car Maintenance. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    serviceLinks: ['Comprehensive Maintenance', 'Diagnostics', 'Performance Upgrades', 'Brakes & Suspension', 'AC & Cooling', 'Detailing & Protection'],
  },
  preloader: 'AL-SHEHRI',
};

export const translations: Record<Language, Translations> = { ar, en };
