/**
 * Homepage mirrored from webskitters.com (design + assets),
 * with ZeeShad branding swaps where specified.
 */

const WS = 'https://www.webskitters.com/wp-content';
const TH = `${WS}/themes/webskitters/images`;
const UP = `${WS}/uploads`;

export const ASSETS = {
  heroGrid: `${TH}/home-banner-grid.webp`,
  heroMask: `${TH}/home-banner-mask-one.webp`,
  heroHalf: `${TH}/home-banner-half-left-shp.webp`,
  heroGlow: `${TH}/banner-glow.png`,
  heroTopGrad: `${TH}/banner-topgradiant-bg.webp`,
  star: `${TH}/review-yellow-start.svg`,
  btnArrow: `${TH}/btn-up-arrow.svg`,
  orangeCheck: `${TH}/orange-check.svg`,
  statsBg: `${TH}/our-stats-bg.webp`,
  statsOval: `${TH}/oval-shape-marketing.png`,
  statsBlur: `${TH}/stats-blur.png`,
  statsDot: `${TH}/dot-img.svg`,
  servTop: `${TH}/serv-top-net.webp`,
  servRight: `${TH}/serv-right-mdl-net.webp`,
  servGlow: `${TH}/serv-right-glow.png`,
  servBtm: `${TH}/serv-btm-net.webp`,
  servBtmGlow: `${TH}/serv-btm-glow.webp`,
  aiCustomer: `${TH}/lets-talk-ai-customar-img.webp`,
  aiRound: `${TH}/lets-talk-ai-round-shp.svg`,
  aiMain: `${UP}/2025/10/leta-talk-ai-img.webp`,
  aiSmall: `${UP}/2025/10/lets-talk-ai-small-img.webp`,
  aiGlow: `${TH}/lets-talk-ai-glow.webp`,
  aiBlueDot: `${TH}/blue-dot.svg`,
  aiBlueMerge: `${TH}/blue-marge-dot.svg`,
  caseBtm: `${TH}/case-study-btm-shp.webp`,
  quote: `${TH}/testimonials-quote-icon.svg`,
  testimonialGlow: `${TH}/testmonials-left-glow.png`,
  testimonialRound: `${TH}/testimonials-round-shp.svg`,
  arrowLeft: `${TH}/left-arrow.svg`,
  arrowRight: `${TH}/right-arrow.svg`,
  roiBg: `${TH}/our-intelligence-bg.webp`,
  ceoPhoto: '/images/founder.png',
  ceoShape1: `${TH}/ceo-shape1.svg`,
  ceoShape2: `${TH}/ceo-shape2.webp`,
  ceoBlur: `${TH}/ceoblurimg2.png`,
  ceoDot: `${TH}/ceodot-img.svg`,
  ceoSign: `${UP}/2025/10/ceo-signature.webp`,
  faqBg: `${TH}/faqshapebackimg.webp`,
  faqArrow: `${TH}/faq-downarw.svg`,
  contactLeft: `${TH}/getstart-leftbackimg.webp`,
  dot: `${TH}/dot-img.svg`,
} as const;

export const INSPIRED_NAV = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'solutions', label: 'Solutions', href: '/approach' },
  { id: 'case-studies', label: 'Case Studies', href: '/#portfolio' },
  { id: 'blog', label: 'Blog', href: '/resources' },
] as const;

export const INSPIRED_NAV_CTA = { label: 'Hire Us', href: '/contact' } as const;

export const INSPIRED_ANNOUNCE = [
  { line: 'ZeeShad — Done-for-you digital marketing for US businesses', href: '/contact' },
  { line: 'Book a scoping call — one-page scope within three business days', href: '/contact' },
] as const;

export const INSPIRED_HERO = {
  h1: 'Transforming Ideas Into Cutting-Edge',
  h1Accent: 'Digital Solutions',
  body: 'Creating innovative, high-impact web-design and digital solutions that accelerate growth and redefine your business online',
  cta: { label: 'Schedule a Call', href: '/contact' },
  youtubeId: 'Jf1BB4EN36g',
} as const;

export const INSPIRED_STATS = {
  eyebrow: 'Our Stats',
  title: 'Expertise to transform business with Technology',
  titleAccent: 'And Marketing',
  body: 'We move beyond maintenance, giving businesses sharp insights, useful data, and real momentum to stay ahead in a constantly shifting digital world.',
  cards: [
    { value: '25+', label: 'Clients Worldwide' },
    { value: '+10', label: 'Professionals' },
    { value: '98.5%', label: 'Retention Rate' },
    { value: '+40', label: 'Projects Executed' },
  ],
  awardLogos: [
    `${UP}/2025/11/forbes-v3.png`,
    `${UP}/2025/11/del.png`,
    `${UP}/2025/11/allica-bank-new-logoo.png`,
    `${UP}/2025/12/KDG-2025.png`,
    `${UP}/2025/11/1.svg`,
    `${UP}/2025/11/2.svg`,
    `${UP}/2025/11/3.svg`,
    `${UP}/2025/11/5.svg`,
    `${UP}/2025/11/6.svg`,
    `${UP}/2025/11/12.svg`,
  ],
} as const;

export const INSPIRED_SERVICES = {
  eyebrow: 'Our Services',
  title: 'Our Services to Grow Your Brand',
  cta: { label: 'View All Services', href: '/services' },
  items: [
    {
      title: 'Digital Marketing',
      body: 'As a results-driven digital marketing agency, we help your business gain visibility and drive targeted traffic.',
      href: '/services',
      image: `${UP}/2025/10/digital-mark-img.png`,
    },
    {
      title: 'Website Development',
      body: 'We deliver scalable and robust website development services tailored to your business goals.',
      href: '/services',
      image: `${UP}/2025/10/web-development-img.webp`,
    },
    {
      title: 'Mobile App Development',
      body: 'Our mobile applications are optimized for flawless performance and superior user experiences.',
      href: '/services',
      image: `${UP}/2025/10/mobile-app-dev.webp`,
    },
  ],
} as const;

export const INSPIRED_CLIENTS = {
  eyebrow: 'Clients We Have Worked With',
  title: 'Driving Digital Transformation for Global Leaders',
  logos: [
    `${UP}/2026/05/Group-1707492159.png`,
    `${UP}/2026/05/newlogosmaller-1.png`,
    `${UP}/2026/05/SRX-Logo-1.png`,
    `${UP}/2026/05/Group-1707492160.png`,
    `${UP}/2026/05/tmp88viuzep-1.png`,
    `${UP}/2025/11/client1.png`,
    `${UP}/2025/11/client2.png`,
    `${UP}/2025/11/client3.png`,
    `${UP}/2025/11/client5.png`,
    `${UP}/2025/11/client6.png`,
    `${UP}/2025/11/client7.png`,
    `${UP}/2025/11/client9.png`,
    `${UP}/2025/11/client12.png`,
    `${UP}/2025/11/client-logo10-2.png`,
    `${UP}/2025/11/client-logo14-2.png`,
    `${UP}/2025/11/esteemed-client-img2.png`,
    `${UP}/2025/11/esteemed-client-img4.png`,
    `${UP}/2025/11/esteemed-client-img6.png`,
    `${UP}/2025/11/esteemed-client-img8.png`,
    `${UP}/2026/05/Lumion-1.png`,
    `${UP}/2025/11/new-logo1.png`,
    `${UP}/2026/05/mainLogo-1.png`,
    `${UP}/2026/05/headerlogo1-1.png`,
    `${UP}/2026/05/Asset2-1.png`,
  ],
} as const;

export const INSPIRED_AI = {
  eyebrow: "let's Talk AI",
  title: 'Future-proof Your Business With Our Intelligent AI Tech',
  body: 'Take advantage of our complete range of AI services, AI Consulting, built to drive tangible business impact. Our robust AI systems are designed using industry best practices to streamline your business operations, strengthen customer loyalty, unlock new capabilities, and create opportunities in untapped markets.',
  bullets: [
    'AI service solutions',
    'AI development',
    'AI chatbot development',
    'Generative AI consulting',
  ],
  cta: { label: 'Explore AI Tech With Us', href: '/contact' },
  watermark: 'ZEESHAD',
  projectsNote: '20+ Successful Projects',
} as const;

export const INSPIRED_CASES = {
  eyebrow: 'case studies',
  title: 'Dive into ZeeShad Remarkable Portfolio',
  cta: { label: 'View All Case Studies', href: '/resources' },
  items: [
    {
      title: "Driving Brand's Growth with a Powerful Web & Mobile Presence",
      image: `${UP}/2026/02/studio11thumbnail-1024x562.png`,
    },
    {
      title: 'Data-Driven Local SEO Solved Low Footfall, Boosting Bangalore Salon Visits by 55%',
      image: `${UP}/2025/11/ganesh-2.jpg`,
    },
    {
      title: 'Australia-Based Business Experienced High-Intent Traffic Through PPC for E-Commerce',
      image: `${UP}/2026/01/fimage-1024x443.jpg`,
    },
    {
      title: 'A Dynamic Pay-Per-Click Marketing Campaign for a UK-based Waste Management Company',
      image: `${UP}/2025/12/dnewcase-1024x443.jpg`,
    },
    {
      title: 'A High-Performance Fashion PPC Strategy Crafted By ZeeShad',
      image: `${UP}/2025/11/image-869.png`,
    },
    {
      title: 'Revolutionizing Mental Healthcare Through Seamless Digital Transformation',
      image: `${UP}/2025/11/mishaa.jpg`,
    },
    {
      title: 'Embrace the Extraordinary Automotive Website Design for Mercedes with ZeeShad',
      image: `${UP}/2025/11/Mercedes-1024x564.jpg`,
    },
    {
      title: "Elevating LuvLap's Ecommerce Presence With Strategic Shopify Development",
      image: `${UP}/2025/11/LuvLap-1-1024x564.jpg`,
    },
    {
      title: 'Revamping Liori Diamonds: Elevating E-commerce Success with Shopify',
      image: `${UP}/2025/11/liori-diamond-banner-bg-e1751439433629-1024x468.jpg`,
    },
    {
      title: 'Elevating Golf Precision With An Innovative Mobile App Experience',
      image: `${UP}/2025/10/Radgolf-list-page-image-1-1024x818.jpg`,
    },
    {
      title: 'Crafting A Dynamic Digital Platform To Boost Sales For An FMCG Brand',
      image: `${UP}/2025/11/alocozy-1.jpg`,
    },
    {
      title: 'Maximizing Real Estate Leads with Cost-Effective PPC Strategies',
      image: `${UP}/2025/11/burj-banner-bg-1024x427.webp`,
    },
    {
      title: 'Fueling Fundraising Success With Data-driven, High-impact SEO Tactics',
      image: `${UP}/2025/11/mid.jpg`,
    },
    {
      title: 'Boosting Organic Growth for a Pet Brand with Smart SEO Strategies',
      image: `${UP}/2025/11/dogistry-bnr-mobile-1.webp`,
    },
    {
      title: "Strategic Website Revamp Empowering FazWaz's Real Estate Visions",
      image: `${UP}/2025/10/farwaz-case-studies-banner-bg.jpg-1-1024x427.jpeg`,
    },
    {
      title: 'Boosting Online Sales for a Fashion Brand with Smart PPC Campaigns',
      image: `${UP}/2025/10/bloom-bnnr-img-1-1024x427.webp`,
    },
    {
      title: "Swing, Score, Scale: BlueTees Golf's Mobile App Journey with ZeeShad",
      image: `${UP}/2025/10/about-blue-tees-golf-img-1.jpg`,
    },
    {
      title: "Elevating Rad Golf's Mobile App: A Success Story by ZeeShad",
      image: `${UP}/2025/10/Radgolf-list-page-image-1-1024x818.jpg`,
    },
  ],
} as const;

export const INSPIRED_TESTIMONIALS = {
  eyebrow: 'Client Testimonials',
  title: 'What Our Client Say About ZeeShad',
  body: 'We go beyond maintaining operations we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape.',
  items: [
    {
      quote: 'ZeeShad boosted traffic, engagement, and sales with a user-friendly, appealing website design.',
      name: 'Pinki Patel',
      role: 'President, Vasanti Cosmetics',
      image: `${UP}/2025/10/Pinki-Patel.webp`,
    },
    {
      quote: 'Their focus on data security and client privacy was paramount throughout the project.',
      name: 'Ilaria Russo',
      role: 'Director, Unigestion',
      image: `${UP}/2025/10/Ilaria-Russo.webp`,
    },
    {
      quote: 'They knew their stuff, and it was refreshing to be involved with such a good company.',
      name: 'Kel Dickson',
      role: 'Owner, The Big Giraffe',
      image: `${UP}/2025/10/Kel-Dickson.webp`,
    },
    {
      quote: 'The final result is elegant, professional, and exactly what I envisioned. I highly recommend them!',
      name: 'Arjun Vijeth',
      role: 'Peak Performance Coach',
      image: `${UP}/2025/10/Arjun-Vijeth.jpg`,
    },
    {
      quote: 'Their industry expertise, hands-on approach, and dedication to excellence set them apart.',
      name: 'Andrew Ranck',
      role: 'IT Developer, Professional Staffing Careers',
      image: `${UP}/2025/10/Andrew-Ranck.webp`,
    },
    {
      quote: 'ZeeShad delivered everything we requested, remaining accommodating across the entire project.',
      name: 'Wondwossen Gebreyes',
      role: 'Founder, One Health Global Alliance',
      image: `${UP}/2025/10/Wondwossen-Gebreyes.webp`,
    },
    {
      quote: 'They got work done quickly and efficiently. The team adhered to weekly deadlines and was responsive to needs.',
      name: 'Uri Burger',
      role: 'Managing Partner, SRA Screening',
      image: `${UP}/2025/10/Uri-Webskitters-Client.jpg`,
    },
    {
      quote: 'The team did well, and I was very pleased with how fast and efficient they were.',
      name: 'Biju Pandit',
      role: 'Owner, Abrohn Creative',
      image: `${UP}/2025/10/Biju-Pandit.jpeg`,
    },
    {
      quote: "The quality of ZeeShad's work was top-notch. ZeeShad ensured every detail met the client's expectations.",
      name: 'Stathis Konstantinidis',
      role: 'CEO, 5opm',
      image: `${UP}/2025/10/Stathis-Konstantinidis.jpeg`,
    },
    {
      quote: "Thanks to ZeeShad's team, our conversion rate doubled within a week of launching the new site.",
      name: 'Sarah Liu',
      role: 'CMO, TOPL ltd',
      image: `${UP}/2025/10/Sarah-Liu.jpeg`,
    },
    {
      quote: 'Their response time was a perfect 10/10, and they were consistently available whenever we needed.',
      name: 'Malcolm Riley',
      role: 'Founder & CEO, The Golfers App',
      image: `${UP}/2025/10/Malcolm-Riley.webp`,
    },
    {
      quote: 'ZeeShad successfully completed design and build, migrated data, and delivered a fully functional backend.',
      name: 'Adam Hiner',
      role: 'Owner, Acrolove',
      image: `${UP}/2025/10/Adam-Hiner.webp`,
    },
  ],
} as const;

export const INSPIRED_ROI = {
  eyebrow: 'Our Intelligence',
  title: 'The ROI of Digital Transformation',
  items: [
    {
      eyebrow: 'Efficiency',
      title: 'Automating Processes',
      body: 'We help you cut repetitive tasks, streamline systems, and run operations effortlessly.',
      icon: `${UP}/2025/10/our-intelligence-icon1.svg`,
    },
    {
      eyebrow: 'Growth',
      title: 'Fortifying Business Performance',
      body: 'You can scale with confidence as we align the latest technology with your business goals.',
      icon: `${UP}/2025/10/our-intelligence-icon2.svg`,
    },
    {
      eyebrow: 'Innovation',
      title: 'Crafting Future-Ready Solutions',
      body: 'Our specialized teams design intelligent systems that keep you ahead in an ever-evolving market.',
      icon: `${UP}/2025/10/our-intelligence-icon3.svg`,
    },
  ],
  cta: { label: 'Talk To Our Expert', href: '/contact' },
} as const;

export const INSPIRED_CEO = {
  eyebrow: 'A Word From Our CEO',
  title: 'A brief message from our Founder & CEO',
  paragraphs: [
    'At ZeeShad, we believe in your ideas and leverage our extensive knowledge to bring them to life. Our success is not defined only by numbers or projects, but by the impact we create.',
    'As digital marketing company in Karachi we are transforming ideas into digital power, helping businesses adapt, grow, and thrive in this rapidly changing world. Each step forward is built on the dedication, creativity, and passion of our incredible team.',
    'The future holds immense opportunities, and we are ready to embrace them with confidence. Together, we will continue to innovate, lead, and shape a brighter tomorrow.',
  ],
} as const;

export const INSPIRED_TECH = {
  eyebrow: 'Technology',
  title: 'Our tech Capabilities',
  items: [
    { name: 'WordPress', icon: `${UP}/2025/10/wordpres-icon.webp` },
    { name: 'React', icon: `${UP}/2025/10/reactimg.webp` },
    { name: 'Angular', icon: `${UP}/2025/10/angulericon.webp` },
    { name: 'Node', icon: `${UP}/2025/10/nodeicon.webp` },
    { name: 'Woo Commerce', icon: `${UP}/2025/10/wocmerceicon.webp` },
    { name: 'Webflow', icon: `${UP}/2025/10/webflowicon.webp` },
    { name: 'Shopify', icon: `${UP}/2025/10/shopifyicon.webp` },
    { name: 'React Native', icon: `${UP}/2025/10/reactnativeicon.webp` },
    { name: 'PHP', icon: `${UP}/2025/10/phpicon.webp` },
    { name: 'Squarespace', icon: `${UP}/2025/10/squarespaceicon.webp` },
    { name: 'Python', icon: `${UP}/2025/10/pythonicon.webp` },
    { name: 'Magento', icon: `${UP}/2025/10/magentoicon.webp` },
    { name: 'GoHighLevel', icon: `${UP}/2025/10/goheight-levelicon.webp` },
    { name: 'Hubspot', icon: `${UP}/2025/10/hubspoticon.webp` },
    { name: 'Laravel', icon: `${UP}/2025/10/laravelicon.webp` },
    { name: 'Flutter', icon: `${UP}/2025/10/fluttericon.webp` },
  ],
} as const;

export const INSPIRED_FAQ = {
  eyebrow: 'FAQs',
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'What industries do ZeeShad serve?',
      a: 'At ZeeShad, we are committed to serving various industries, including healthcare, ride-sharing, e-commerce, gaming, fitness, and more. Here, you can access a complete digital transformation from experts to lead long-term success and growth.',
    },
    {
      q: 'What makes ZeeShad different from other agencies?',
      a: 'ZeeShad is widely recognized for its standard of excellence in everything we do. Our expert team combines the perfect blend of creativity, modern technology, and a customer-first approach to deliver a unique digital experience. We aim to fulfill your business goals and demands with the right strategies and digital solutions.',
    },
    {
      q: 'How do you ensure project quality?',
      a: 'At ZeeShad, we are dedicated to our comprehensive and committed work approach. We follow rigorous quality control, which includes testing, feedback loops, and continuous improvements, to deliver flawless outcomes.',
    },
    {
      q: 'What kind of support do you offer after project completion?',
      a: 'At ZeeShad, an award-winning digital marketing company, we ensure extensive post-launch support. For instance, we offer comprehensive maintenance, updates, and troubleshooting to ensure your digital solutions remain effective.',
    },
    {
      q: 'What software development services do you offer?',
      a: 'We provide comprehensive software development services. Some of our services include web and mobile app development, enterprise software, SaaS platforms, and AI-driven solutions. We make sure that each project is tailored to your specific business requirements and long-term goals.',
    },
    {
      q: 'Does ZeeShad provide web development services?',
      a: 'Yes, we do specialise in end-to-end web development. Our services cover everything from design, front-end and back-end development, CMS integration, and performance optimisation. Basically, our goal is to create secure, scalable websites that support your business growth.',
    },
  ],
} as const;

export const INSPIRED_CONTACT = {
  title: "Let's Build Something Extraordinary Together!",
  body: 'Get a wide range of expert services from web development, software solutions, and digital strategies that drive measurable business growth.',
  stats: [
    { value: '30+', label: 'In house Experts', icon: `${UP}/2025/10/house-exprticon.svg` },
    { value: '25+', label: 'Awards Across the Globe', icon: `${UP}/2025/10/awardicon.svg` },
    { value: '35+', label: 'Customers Worldwide', icon: `${UP}/2025/10/worldwideicon.svg` },
    { value: '4500+', label: '5 Star Reviews', icon: `${UP}/2025/10/revw-icon.svg` },
  ],
  note: "What's Next? Our Consultants will reply back to you within 7 hours or less",
  ready: "Ready to get started? Share your goals, and we'll help you design the right digital path.",
} as const;
