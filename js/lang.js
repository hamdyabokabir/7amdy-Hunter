// Language translations
const translations = {
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_services: "خدماتي",
        nav_portfolio: "أعمالي",
        nav_contact: "تواصل معي",
        lang_toggle: "EN",
        
        // Hero Section
        hero_greeting: "مرحباً، أنا",
        hero_subtitle: "مصمم ومطور ومسوق رقمي",
        hero_description: "أحول أفكارك إلى تجارب رقمية مبهرة. تصميم، برمجة، تسويق رقمي وإدارة وسائل التواصل الاجتماعي.",
        hero_btn_work: "شاهد أعمالي",
        hero_btn_whatsapp: "تواصل معي",
        scroll_hint: "مرر للأسفل",
        
        // Services
        services_title: "خدماتي المميزة",
        service_design_title: "التصميم الجرافيكي",
        service_design_desc: "تصميم هويات بصرية، لوجوهات، منشورات، وكل ما يخص التصميم الاحترافي",
        service_dev_title: "البرمجة والتطوير",
        service_dev_desc: "تطوير مواقع ويب وتطبيقات احترافية بأحدث التقنيات والمعايير",
        service_social_title: "إدارة وسائل التواصل",
        service_social_desc: "إدارة حسابات التواصل الاجتماعي، كتابة المحتوى، والتسويق الرقمي",
        service_digital_title: "الخدمات الرقمية",
        service_digital_desc: "استشارات تقنية، تحسين محركات البحث، والحلول الرقمية المتكاملة",
        
        // Featured Work
        featured_title: "أعمال مميزة",
        work1_title: "متجر إلكتروني احترافي",
        work1_desc: "تصميم وبرمجة متجر إلكتروني متكامل",
        work2_title: "هوية بصرية متكاملة",
        work2_desc: "تصميم هوية بصرية لشركة تقنية",
        work3_title: "تطبيق موبايل",
        work3_desc: "تطبيق جوال لإدارة المهام",
        work4_title: "حملة تسويقية",
        work4_desc: "حملة تسويق رقمي ناجحة",
        work_view: "شاهد التفاصيل",
        view_all_work: "شاهد جميع الأعمال",
        
        // Stats
        stat_projects: "مشروع مكتمل",
        stat_experience: "سنوات خبرة",
        stat_clients: "عميل راضي",
        stat_support: "دعم فني",
        
        // Testimonials
        testimonials_title: "آراء العملاء",
        testimonial1_text: "عمل احترافي ممتاز، حمدي طور لنا موقع رائع وفاق توقعاتنا بكثير. أنصح بالتعامل معه بشدة.",
        testimonial1_author: "أحمد محمود",
        testimonial1_role: "مدير شركة تقنية",
        testimonial2_text: "تصميماته مبدعة وخدماته في التسويق الرقمي ساعدتنا نصل لجمهور أكبر. شكراً HUNTER!",
        testimonial2_author: "فاطمة علي",
        testimonial2_role: "صاحبة مشروع",
        
        // CTA
        cta_title: "جاهز نبدأ مشروعك؟",
        cta_description: "تواصل معي الآن ولنحول فكرتك إلى واقع رقمي مبهر",
        cta_whatsapp: "تواصل واتساب",
        cta_form: "املأ النموذج",
        
        // About Page
        about_title: "من أنا",
        about_subtitle: "تعرف على قصتي ورحلتي في عالم التكنولوجيا",
        about_intro_title: "أهلاً، أنا حمدي محمد",
        about_intro_text: "مصمم ومطور ومسوق رقمي من مصر، أحمل اسم HUNTER في عالم التكنولوجيا. أتخصص في تحويل الأفكار إلى تجارب رقمية مبهرة من خلال التصميم الإبداعي والبرمجة المتطورة والتسويق الذكي.",
        about_intro_text2: "بدأت رحلتي منذ أكثر من 5 سنوات، وخلال هذه الفترة ساعدت أكثر من 100 عميل في تحقيق أهدافهم الرقمية. أؤمن بأن كل مشروع له قصة فريدة تستحق أن تُحكى بطريقة مبدعة ومؤثرة.",
        about_cta: "تعرف على خدماتي",
        
        // Timeline
        timeline_title: "رحلتي المهنية",
        timeline1_title: "البداية",
        timeline1_desc: "بدأت رحلتي في التصميم الجرافيكي والتعلم الذاتي",
        timeline2_title: "التطوير",
        timeline2_desc: "دخولي عالم البرمجة وتطوير المواقع",
        timeline3_title: "التوسع",
        timeline3_desc: "إضافة التسويق الرقمي وإدارة وسائل التواصل",
        timeline4_title: "الاحتراف",
        timeline4_desc: "تأسيس علامة HUNTER وتقديم خدمات متكاملة",
        timeline5_title: "الحاضر",
        timeline5_desc: "أكثر من 150 مشروع ناجح وطموح لتحقيق المزيد",
        
        // Skills
        skills_title: "مهاراتي وخبراتي",
        skills_design_title: "التصميم",
        skills_dev_title: "البرمجة",
        skills_marketing_title: "التسويق",
        skill_social: "إدارة وسائل التواصل",
        skill_content: "كتابة المحتوى",
        skill_seo: "تحسين محركات البحث",
        
        // Services Page
        services_page_title: "خدماتي المتخصصة",
        services_page_subtitle: "حلول رقمية شاملة لنمو عملك وتميزه",
        service_includes: "يشمل:",
        order_now: "اطلب الآن",
        
        // Service Features
        design_feature1: "تصميم الهويات البصرية والشعارات",
        design_feature2: "تصميم منشورات وسائل التواصل الاجتماعي",
        design_feature3: "تصميم بروشور وكتالوجات",
        design_feature4: "تصميم واجهات المستخدم (UI/UX)",
        design_price: "يبدأ من 500 جنيه",
        
        dev_feature1: "تطوير مواقع ويب تفاعلية",
        dev_feature2: "تطوير متاجر إلكترونية",
        dev_feature3: "تطوير تطبيقات الويب",
        dev_feature4: "صيانة ودعم تقني",
        dev_price: "يبدأ من 2000 جنيه",
        
        social_feature1: "إدارة حسابات فيسبوك وإنستجرام",
        social_feature2: "كتابة محتوى جذاب ومؤثر",
        social_feature3: "تصميم منشورات احترافية",
        social_feature4: "إعداد وإدارة الحملات الإعلانية",
        social_price: "يبدأ من 1200 جنيه/شهر",
        
        digital_feature1: "استشارات تقنية متخصصة",
        digital_feature2: "تحسين محركات البحث (SEO)",
        digital_feature3: "تحليل الأداء والإحصائيات",
        digital_feature4: "استراتيجيات التسويق الرقمي",
        digital_price: "يبدأ من 800 جنيه",
        
        // Pricing
        pricing_title: "باقات الخدمات",
        pricing_basic_title: "الباقة الأساسية",
        pricing_basic_price: "1500",
        pricing_standard_title: "الباقة المتوسطة",
        pricing_standard_price: "3500",
        pricing_premium_title: "الباقة الشاملة",
        pricing_premium_price: "6000",
        currency: "جنيه",
        most_popular: "الأكثر طلباً",
        choose_package: "اختر الباقة",
        
        // Pricing Features
        basic_feature1: "تصميم شعار احترافي",
        basic_feature2: "تصميم 10 منشورات",
        basic_feature3: "دعم فني لمدة شهر",
        
        standard_feature1: "هوية بصرية كاملة",
        standard_feature2: "موقع ويب احترافي",
        standard_feature3: "إدارة شهر مجاني",
        standard_feature4: "دعم فني 3 شهور",
        
        premium_feature1: "حلول رقمية متكاملة",
        premium_feature2: "موقع + متجر إلكتروني",
        premium_feature3: "حملة تسويقية شاملة",
        premium_feature4: "دعم فني 6 شهور",
        premium_feature5: "استشارات مجانية",
        
        // Portfolio Page
        portfolio_page_title: "معرض أعمالي",
        portfolio_page_subtitle: "مشاريع نفخر بإنجازها وعملاء نعتز بثقتهم",
        filter_all: "الكل",
        filter_design: "تصميم",
        filter_web: "مواقع ويب",
        filter_social: "وسائل تواصل",
        filter_mobile: "تطبيقات",
        view_details: "عرض التفاصيل",
        
        // Portfolio Items
        portfolio_item1_title: "هوية بصرية لمتجر إلكتروني",
        portfolio_item1_desc: "تصميم شعار وهوية بصرية كاملة",
        portfolio_item2_title: "موقع مطعم تفاعلي",
        portfolio_item2_desc: "موقع ويب احترافي مع نظام حجز",
        portfolio_item3_title: "حملة تسويق رقمي",
        portfolio_item3_desc: "حملة شاملة لزيادة المبيعات",
        portfolio_item4_title: "تطبيق إدارة المهام",
        portfolio_item4_desc: "تطبيق جوال لتنظيم المهام اليومية",
        portfolio_item5_title: "هوية شركة تقنية",
        portfolio_item5_desc: "تصميم هوية متكاملة لشركة ناشئة",
        portfolio_item6_title: "موقع شركة",
        portfolio_item6_desc: "موقع شركة احترافي مع لوحة إدارة",
        
        // Contact Page
        contact_page_title: "تواصل معي",
        contact_page_subtitle: "لنناقش مشروعك القادم ونحوله إلى حقيقة",
        contact_info_title: "معلومات التواصل",
        contact_whatsapp: "واتساب",
        contact_whatsapp_btn: "تواصل الآن",
        contact_email: "البريد الإلكتروني",
        contact_location: "الموقع",
        contact_address: "المنيا - ديرمواس - تل بني عمران",
        follow_me: "تابعني",
        
        // Contact Form
        contact_form_title: "أرسل رسالة",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_service: "نوع الخدمة المطلوبة",
        form_service_placeholder: "اختر الخدمة",
        form_message: "تفاصيل المشروع",
        form_submit: "إرسال الرسالة",
        
        // Footer
        footer_description: "حمدي محمد أبو كبير - مصمم ومطور ومسوق رقمي",
        footer_links_title: "روابط سريعة",
        footer_contact_title: "معلومات التواصل",
        footer_location: "المنيا - ديرمواس - تل بني عمران",
        footer_rights: "جميع الحقوق محفوظة."
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        lang_toggle: "ع",
        
        // Hero Section
        hero_greeting: "Hello, I'm",
        hero_subtitle: "Designer, Developer & Digital Marketer",
        hero_description: "I transform your ideas into stunning digital experiences. Design, development, digital marketing, and social media management.",
        hero_btn_work: "View My Work",
        hero_btn_whatsapp: "Contact Me",
        scroll_hint: "Scroll Down",
        
        // Services
        services_title: "My Premium Services",
        service_design_title: "Graphic Design",
        service_design_desc: "Visual identities, logos, social media posts, and all professional design needs",
        service_dev_title: "Programming & Development",
        service_dev_desc: "Professional website and application development with latest technologies",
        service_social_title: "Social Media Management",
        service_social_desc: "Social media account management, content creation, and digital marketing",
        service_digital_title: "Digital Services",
        service_digital_desc: "Technical consulting, SEO optimization, and comprehensive digital solutions",
        
        // Featured Work
        featured_title: "Featured Work",
        work1_title: "Professional E-commerce",
        work1_desc: "Complete e-commerce website design and development",
        work2_title: "Complete Brand Identity",
        work2_desc: "Visual identity design for tech company",
        work3_title: "Mobile App",
        work3_desc: "Task management mobile application",
        work4_title: "Marketing Campaign",
        work4_desc: "Successful digital marketing campaign",
        work_view: "View Details",
        view_all_work: "View All Work",
        
        // Stats
        stat_projects: "Completed Projects",
        stat_experience: "Years Experience",
        stat_clients: "Happy Clients",
        stat_support: "24/7 Support",
        
        // Testimonials
        testimonials_title: "Client Testimonials",
        testimonial1_text: "Excellent professional work, Hamdy developed an amazing website that exceeded our expectations. Highly recommend working with him.",
        testimonial1_author: "Ahmed Mahmoud",
        testimonial1_role: "Tech Company Manager",
        testimonial2_text: "His designs are creative and his digital marketing services helped us reach a larger audience. Thanks HUNTER!",
        testimonial2_author: "Fatima Ali",
        testimonial2_role: "Project Owner",
        
        // CTA
        cta_title: "Ready to Start Your Project?",
        cta_description: "Contact me now and let's turn your idea into an impressive digital reality",
        cta_whatsapp: "WhatsApp Contact",
        cta_form: "Fill the Form",
        
        // About Page
        about_title: "About Me",
        about_subtitle: "Learn about my story and journey in the technology world",
        about_intro_title: "Hello, I'm Hamdy Mohamed",
        about_intro_text: "A designer, developer, and digital marketer from Egypt, known as HUNTER in the technology world. I specialize in transforming ideas into stunning digital experiences through creative design, advanced programming, and smart marketing.",
        about_intro_text2: "I started my journey over 5 years ago, and during this time I've helped more than 100 clients achieve their digital goals. I believe every project has a unique story that deserves to be told creatively and impactfully.",
        about_cta: "Learn About My Services",
        
        // Timeline
        timeline_title: "My Professional Journey",
        timeline1_title: "The Beginning",
        timeline1_desc: "Started my journey in graphic design and self-learning",
        timeline2_title: "Development",
        timeline2_desc: "Entered the world of programming and web development",
        timeline3_title: "Expansion",
        timeline3_desc: "Added digital marketing and social media management",
        timeline4_title: "Professionalism",
        timeline4_desc: "Founded HUNTER brand and offered integrated services",
        timeline5_title: "Present",
        timeline5_desc: "Over 150 successful projects and ambition for more",
        
        // Skills
        skills_title: "My Skills & Expertise",
        skills_design_title: "Design",
        skills_dev_title: "Development",
        skills_marketing_title: "Marketing",
        skill_social: "Social Media Management",
        skill_content: "Content Writing",
        skill_seo: "Search Engine Optimization",
        
        // Services Page
        services_page_title: "My Specialized Services",
        services_page_subtitle: "Comprehensive digital solutions for your business growth",
        service_includes: "Includes:",
        order_now: "Order Now",
        
        // Service Features
        design_feature1: "Visual identity and logo design",
        design_feature2: "Social media posts design",
        design_feature3: "Brochure and catalog design",
        design_feature4: "User interface design (UI/UX)",
        design_price: "Starting from 500 EGP",
        
        dev_feature1: "Interactive website development",
        dev_feature2: "E-commerce store development",
        dev_feature3: "Web application development",
        dev_feature4: "Maintenance and technical support",
        dev_price: "Starting from 2000 EGP",
        
        social_feature1: "Facebook and Instagram management",
        social_feature2: "Engaging and impactful content writing",
        social_feature3: "Professional post design",
        social_feature4: "Ad campaign setup and management",
        social_price: "Starting from 1200 EGP/month",
        
        digital_feature1: "Specialized technical consulting",
        digital_feature2: "Search engine optimization (SEO)",
        digital_feature3: "Performance analysis and statistics",
        digital_feature4: "Digital marketing strategies",
        digital_price: "Starting from 800 EGP",
        
        // Pricing
        pricing_title: "Service Packages",
        pricing_basic_title: "Basic Package",
        pricing_basic_price: "1500",
        pricing_standard_title: "Standard Package",
        pricing_standard_price: "3500",
        pricing_premium_title: "Premium Package",
        pricing_premium_price: "6000",
        currency: "EGP",
        most_popular: "Most Popular",
        choose_package: "Choose Package",
        
        // Pricing Features
        basic_feature1: "Professional logo design",
        basic_feature2: "Design 10 social posts",
        basic_feature3: "1-month technical support",
        
        standard_feature1: "Complete visual identity",
        standard_feature2: "Professional website",
        standard_feature3: "Free 1-month management",
        standard_feature4: "3-month technical support",
        
        premium_feature1: "Integrated digital solutions",
        premium_feature2: "Website + E-commerce store",
        premium_feature3: "Comprehensive marketing campaign",
        premium_feature4: "6-month technical support",
        premium_feature5: "Free consultations",
        
        // Portfolio Page
        portfolio_page_title: "My Work Gallery",
        portfolio_page_subtitle: "Projects we're proud of and clients we cherish their trust",
        filter_all: "All",
        filter_design: "Design",
        filter_web: "Websites",
        filter_social: "Social Media",
        filter_mobile: "Apps",
        view_details: "View Details",
        
        // Portfolio Items
        portfolio_item1_title: "E-commerce Visual Identity",
        portfolio_item1_desc: "Logo and complete visual identity design",
        portfolio_item2_title: "Interactive Restaurant Website",
        portfolio_item2_desc: "Professional website with booking system",
        portfolio_item3_title: "Digital Marketing Campaign",
        portfolio_item3_desc: "Comprehensive campaign to increase sales",
        portfolio_item4_title: "Task Management App",
        portfolio_item4_desc: "Mobile app for daily task organization",
        portfolio_item5_title: "Tech Company Identity",
        portfolio_item5_desc: "Complete identity design for startup",
        portfolio_item6_title: "Corporate Website",
        portfolio_item6_desc: "Professional company website with admin panel",
        
        // Contact Page
        contact_page_title: "Contact Me",
        contact_page_subtitle: "Let's discuss your next project and turn it into reality",
        contact_info_title: "Contact Information",
        contact_whatsapp: "WhatsApp",
        contact_whatsapp_btn: "Contact Now",
        contact_email: "Email",
        contact_location: "Location",
        contact_address: "Minya - Dermawas - Tel Bani Omran",
        follow_me: "Follow Me",
        
        // Contact Form
        contact_form_title: "Send a Message",
        form_name: "Full Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_service: "Required Service Type",
        form_service_placeholder: "Choose Service",
        form_message: "Project Details",
        form_submit: "Send Message",
        
        // Footer
        footer_description: "Hamdy Mohamed Abokabir - Designer, Developer & Digital Marketer",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact Information",
        footer_location: "Minya - Dermawas - Tel Bani Omran",
        footer_rights: "All rights reserved."
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('hunter-language') || 'ar';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLang);
        this.bindEvents();
    }
    
    bindEvents() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.updateLanguage(this.currentLang);
        localStorage.setItem('hunter-language', this.currentLang);
    }
    
    updateLanguage(lang) {
        const body = document.body;
        const html = document.documentElement;
        
        // Update document attributes
        body.setAttribute('data-lang', lang);
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[lang][key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update lang toggle button text
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.textContent = lang === 'ar' ? 'EN' : 'ع';
        }
        
        // Update page title
        this.updatePageTitle(lang);
    }
    
    updatePageTitle(lang) {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            if (lang === 'en') {
                if (currentTitle.includes('الرئيسية')) {
                    titleElement.textContent = 'HUNTER - Hamdy Mohamed Abokabir | Portfolio';
                } else if (currentTitle.includes('من أنا')) {
                    titleElement.textContent = 'About Me - HUNTER Portfolio';
                } else if (currentTitle.includes('خدماتي')) {
                    titleElement.textContent = 'My Services - HUNTER Portfolio';
                } else if (currentTitle.includes('أعمالي')) {
                    titleElement.textContent = 'My Work - HUNTER Portfolio';
                } else if (currentTitle.includes('تواصل معي')) {
                    titleElement.textContent = 'Contact Me - HUNTER Portfolio';
                }
            } else {
                if (currentTitle.includes('Portfolio') && !currentTitle.includes('أعمالي')) {
                    titleElement.textContent = 'HUNTER - حمدي محمد أبو كبير | Portfolio';
                } else if (currentTitle.includes('About Me')) {
                    titleElement.textContent = 'من أنا - HUNTER Portfolio';
                } else if (currentTitle.includes('My Services')) {
                    titleElement.textContent = 'خدماتي - HUNTER Portfolio';
                } else if (currentTitle.includes('My Work')) {
                    titleElement.textContent = 'أعمالي - HUNTER Portfolio';
                } else if (currentTitle.includes('Contact Me')) {
                    titleElement.textContent = 'تواصل معي - HUNTER Portfolio';
                }
            }
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Initialize language manager
window.languageManager = new LanguageManager();