export type Lang = 'ar' | 'en';

const base = {
  ar: {
    dir: 'rtl', arrow: '←', switchLabel: 'English', cta: 'تواصل معنا',
    nav: [{ href: '#services', label: 'خدماتنا' }, { href: '#industries', label: 'من نخدم' }, { href: '#how', label: 'كيف نعمل' }, { href: '#why', label: 'لماذا سوتريك' }, { href: '#contact', label: 'تواصل معنا' }],
    hero: { badge: 'إدارة الطاقة · الطاقة الشمسية · المولدات', title1: 'نبتكر حلول إدارة', title2: 'الطاقة', lead: 'أجهزة ومنصات تساعد الشركات والمنازل على مراقبة الطاقة والتحكم بها وإدارتها بكفاءة أكبر — من الشبكة والطاقة الشمسية والمولدات.', primary: 'خدماتنا', secondary: 'تواصل معنا', live: 'مراقبة لحظية لكل المصادر', panelTitle: 'مصادر الطاقة', panelFoot: 'إدارة موحدة لكل المصادر من منصة واحدة',
      sources: [{ label: 'الشبكة العامة', status: 'متاحة' }, { label: 'الطاقة الشمسية', status: 'تعمل' }, { label: 'المولدات', status: 'احتياطي' }, { label: 'البطاريات', status: 'تشحن' }] },
    marquee: ['للشركات والمنازل', 'مصممة لظروف السودان والمنطقة', 'إدارة الشبكة والطاقة الشمسية والمولدات', 'خفض تكاليف الوقود والتشغيل', 'مراقبة عن بعد', 'استشارات متخصصة', 'حلول مخصصة'],
    about: { eyebrow: 'من نحن', title: 'خبراء في حلول إدارة الطاقة', text: 'سوتريك للتقنيات المتقدمة متخصصة في حلول إدارة الطاقة. نفهم واقع التشغيل في السودان والمنطقة — عدم استقرار الشبكة، والاعتماد على المولدات، والتوسع في الطاقة الشمسية — ونبني حلولاً تدير هذه المصادر معاً بكفاءة وبأقل تكلفة.', items: ['أجهزة إلكترونية', 'برمجيات ومنصات', 'استشارات هندسية'], visionLabel: 'رؤيتنا', vision: 'مساعدة المؤسسات والمنازل على إدارة الطاقة بذكاء أكبر عبر أجهزة موثوقة، ومنصات برمجية عملية، ورؤية تشغيلية مبنية على البيانات.', quote: 'الإدارة الأفضل للطاقة تبدأ ببيانات دقيقة، وأجهزة موثوقة، وأنظمة مصممة للتشغيل الفعلي.' },
    caps: { eyebrow: 'قدراتنا', title: 'حلول عملية لإدارة الطاقة', imgAlt: 'لوحة إدارة الطاقة تعرض المراقبة اللحظية وحالة الأجهزة وتحليلات الاستهلاك',
      items: [{ title: 'الأجهزة', text: 'أجهزة قياس ومراقبة وتحكم مصممة لتطبيقات الطاقة في الصناعة والمرافق.' }, { title: 'البرمجيات المدمجة', text: 'برمجيات تشغيل موثوقة في الميدان، باتصال آمن وصيانة طويلة الأمد.' }, { title: 'المنصات', text: 'لوحات تحكم وأنظمة خلفية تعطي رؤية واضحة للاستهلاك وحالة الأجهزة وبيانات التشغيل.' }, { title: 'التكامل', text: 'التكامل مع منصات إنترنت الأشياء والأنظمة الصناعية، بما يتوافق مع إجراءات العمل لدى العملاء.' }] },
    ind: { eyebrow: 'من نخدم', title: 'من المنازل إلى المنشآت الكبرى', soon: 'قريباً',
      items: [{ title: 'المنازل والأفراد', text: 'حلول لإدارة أنظمة الطاقة الشمسية المنزلية ومتابعة الإنتاج والاستهلاك والبطاريات بسهولة.', soon: true }, { title: 'الطاقة والمرافق', text: 'حلول قياس ومراقبة وإدارة تدعم تشغيل المرافق والبنية الميدانية.' }, { title: 'المنشآت الصناعية', text: 'تساعد المصانع والمواقع الصناعية على مراقبة الاستهلاك وإدارته بوضوح.' }, { title: 'المباني والبنية التحتية', text: 'أنظمة متصلة للمباني والمجمعات والمرافق العامة حيث البيانات الموثوقة ضرورية.' }, { title: 'الشركات متعددة المواقع', text: 'إدارة موحدة للطاقة في الفروع والمواقع المختلفة من منصة واحدة.' }] },
    services: { eyebrow: 'خدماتنا', title: 'ما نقدمه للشركات والأفراد',
      s1: { tag: 'جاهزة للتشغيل', title: 'حلول جاهزة لإدارة الطاقة', text: 'منظومات جاهزة للشركات والمؤسسات والمنازل تسهّل مراقبة الاستهلاك وإدارة مصادر الطاقة المتعددة من منصة واحدة.', points: ['مراقبة الاستهلاك لحظياً', 'إدارة الشبكة والطاقة الشمسية والمولدات', 'تقارير وتنبيهات تلقائية', 'إدارة مواقع متعددة'] },
      s2: { title: 'الاستشارات', text: 'نقيّم احتياجاتكم ونخطط معكم منظومة الطاقة الأنسب — من اختيار المصادر إلى تحسين الاستهلاك وخفض التكاليف.' },
      s3: { title: 'تطوير حلول مخصصة', text: 'نصمم ونطوّر الأجهزة والبرمجيات حسب متطلبات مشروعكم عندما تحتاجون أكثر من حل جاهز.' } },
    how: { eyebrow: 'كيف نعمل', title: 'من الفهم إلى التشغيل', worksWith: 'مصادر نديرها', brands: ['الشبكة العامة', 'الطاقة الشمسية', 'المولدات', 'البطاريات'],
      steps: [{ title: 'التقييم', text: 'ندرس مواقعكم ومصادر الطاقة المتاحة وأنماط الاستهلاك.' }, { title: 'التصميم', text: 'نقترح الحل الجاهز المناسب أو نطوّر حلاً مخصصاً.' }, { title: 'التشغيل والدعم', text: 'نركّب ونشغّل ونتابع الأداء باستمرار.' }] },
    why: { eyebrow: 'لماذا سوتريك', title: 'حلول تناسب واقع التشغيل في المنطقة', items: ['مصممة لظروف السودان والمنطقة', 'تدير مصادر طاقة متعددة', 'تخفض تكاليف الوقود والتشغيل', 'للشركات والمنازل على حد سواء'] },
    contact: { title: 'لنصمّم منظومة الطاقة المناسبة لمنزلك أو أعمالك', lead: 'تبحثون عن حل لإدارة الطاقة لمنزلكم أو منشأتكم؟ فريقنا جاهز للمساعدة في الأجهزة والبرمجيات والمنصات والاستشارات.', button: 'راسلنا الآن', email: 'البريد الإلكتروني', business: 'استفسارات الأعمال', office: 'المكتب', address: '1/63 الدبة، الولاية الشمالية، السودان', website: 'الموقع', phone: 'الهاتف' },
    footer: 'سوتريك للتقنيات المتقدمة المحدودة',
  },
  en: {
    dir: 'ltr', arrow: '→', switchLabel: 'العربية', cta: 'Contact us',
    nav: [{ href: '#services', label: 'Services' }, { href: '#industries', label: 'Who we serve' }, { href: '#how', label: 'How we work' }, { href: '#why', label: 'Why Sutric' }, { href: '#contact', label: 'Contact' }],
    hero: { badge: 'Energy Management · Solar · Generators', title1: 'We Innovate Energy Management', title2: 'Solutions', lead: 'Devices and platforms that help businesses and homes monitor, control and manage energy more effectively — across grid, solar and generators.', primary: 'Explore services', secondary: 'Contact us', live: 'Live monitoring of every source', panelTitle: 'Energy sources', panelFoot: 'Every source, managed from one platform',
      sources: [{ label: 'Grid', status: 'Available' }, { label: 'Solar', status: 'Running' }, { label: 'Generators', status: 'Standby' }, { label: 'Batteries', status: 'Charging' }] },
    marquee: ['For businesses and homes', 'Built for Sudan and the region', 'Managing grid, solar and generators', 'Lower fuel and operating costs', 'Remote monitoring', 'Expert consulting', 'Custom solutions'],
    about: { eyebrow: 'About us', title: 'Experts in energy management solutions', text: 'Sutric Advanced Technologies specialises in energy management. We understand operating realities in Sudan and the region — unstable grids, reliance on generators, growing solar adoption — and build solutions that manage these sources together, efficiently and at the lowest cost.', items: ['Electronics', 'Software & platforms', 'Engineering consulting'], visionLabel: 'Our vision', vision: 'To help organisations and homes manage energy more intelligently through reliable devices, practical software platforms and data-driven operational visibility.', quote: 'Better energy management starts with accurate data, reliable devices, and systems designed for real-world operation.' },
    caps: { eyebrow: 'Capabilities', title: 'Built for practical energy operations', imgAlt: 'Energy management dashboard showing live monitoring, device status and usage analytics',
      items: [{ title: 'Devices', text: 'Metering, monitoring and control devices designed for industrial and utility energy applications.' }, { title: 'Firmware', text: 'Embedded software for reliable field operation, secure communication and long-term maintainability.' }, { title: 'Platforms', text: 'Dashboards and backend systems that give visibility into energy usage, device status and operational data.' }, { title: 'Integration', text: 'Connectivity with IoT platforms, industrial systems and customer workflows.' }] },
    ind: { eyebrow: 'Who we serve', title: 'From homes to large facilities', soon: 'Coming soon',
      items: [{ title: 'Homes & Individuals', text: 'Solutions to manage home solar systems and easily track production, consumption and batteries.', soon: true }, { title: 'Energy & Utilities', text: 'Metering, monitoring and management solutions that support utility operations and field infrastructure.' }, { title: 'Industrial Facilities', text: 'Help factories and industrial sites monitor consumption and manage energy with clear visibility.' }, { title: 'Buildings & Infrastructure', text: 'Connected systems for buildings, campuses and public facilities where reliable energy data is essential.' }, { title: 'Multi-site Businesses', text: 'Unified energy management across branches and sites from one platform.' }] },
    services: { eyebrow: 'Services', title: 'What we offer businesses and individuals',
      s1: { tag: 'Ready to deploy', title: 'Ready energy management solutions', text: 'Ready-made systems for companies, institutions and homes that make it easy to monitor consumption and manage multiple energy sources from one platform.', points: ['Real-time consumption monitoring', 'Grid, solar and generator management', 'Automatic reports and alerts', 'Multi-site management'] },
      s2: { title: 'Consulting', text: 'We assess your needs and plan the right energy setup with you — from choosing sources to optimising consumption and cutting costs.' },
      s3: { title: 'Custom solution development', text: 'We design and build hardware and software to your project requirements when you need more than a ready solution.' } },
    how: { eyebrow: 'How we work', title: 'From understanding to operation', worksWith: 'Sources we manage', brands: ['Grid', 'Solar', 'Generators', 'Batteries'],
      steps: [{ title: 'Assess', text: 'We study your sites, available energy sources and consumption patterns.' }, { title: 'Design', text: 'We propose the right ready solution or develop a custom one.' }, { title: 'Operate & support', text: 'We install, commission and monitor performance continuously.' }] },
    why: { eyebrow: 'Why Sutric', title: 'Solutions that fit how the region actually runs', items: ['Built for Sudan and the region', 'Manages multiple energy sources', 'Lowers fuel and operating costs', 'For businesses and homes alike'] },
    contact: { title: "Let's build the right energy system for your home or business", lead: 'Looking for an energy management solution for your home or facility? Our team can help with devices, software, platforms and consulting.', button: 'Email us now', email: 'Email', business: 'Business inquiries', office: 'Office', address: '1/63 AlDabba, Northern State, Sudan', website: 'Website', phone: 'Phone' },
    footer: 'Sutric Advanced Technologies Ltd.',
  },
} as const;

export const WHY_ICONS = [
  'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  'M13 2 4 14h7l-1 8 9-12h-7z',
  'M3 7l6 6 4-4 8 8 M21 11v6h-6',
  'M3 21V11l6-5 6 5v10 M2 21h20 M15 21V8h6v13 M8 21v-5h2v5',
];

const extra = {
  ar: { home: '/', switchHref: '/en/', switchLang: 'en', meta: { title: 'سوتريك للتقنيات المتقدمة', description: 'حلول إدارة الطاقة للشركات والمنازل في السودان والمنطقة — الشبكة والطاقة الشمسية والمولدات.' } },
  en: { home: '/en/', switchHref: '/', switchLang: 'ar', meta: { title: 'Sutric Advanced Technologies', description: 'Energy management solutions for businesses and homes in Sudan and the region — grid, solar and generators.' } },
};

export const contact = { email: 'contact@sutric.co', phones: ['0113565462', '0918270929'] };

export function t(lang: Lang) {
  const c = { ...base[lang], ...extra[lang] };
  const nav = c.nav.map((n) => ({ ...n }));
  return { ...c, nav };
}
