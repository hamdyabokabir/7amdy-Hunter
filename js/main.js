// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('hunter-theme') || 'dark';
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }
    
    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('hunter-theme', this.currentTheme);
    }
    
    applyTheme(theme) {
        document.body.className = document.body.className.replace(/light-theme|dark-theme/g, '');
        document.body.classList.add(`${theme}-theme`);
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateActiveLink();
    }
    
    bindEvents() {
        // Mobile menu toggle
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.navToggle.classList.toggle('active');
            });
        }
        
        // Close menu when clicking links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu?.classList.remove('active');
                this.navToggle?.classList.remove('active');
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }
        });
    }
    
    updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.createStars();
        this.bindScrollAnimations();
        this.initTypingEffect();
        this.initCounters();
        this.initTestimonialSlider();
    }
    
    createStars() {
        const starsContainers = document.querySelectorAll('.stars-container');
        starsContainers.forEach(container => {
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 4 + 's';
                star.style.animationDuration = (2 + Math.random() * 3) + 's';
                container.appendChild(star);
            }
        });
    }
    
    bindScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger counter animation
                    if (entry.target.hasAttribute('data-aos') && entry.target.getAttribute('data-aos') === 'count-up') {
                        this.animateCounter(entry.target.querySelector('.stat-number'));
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements with data-aos attribute
        const animatedElements = document.querySelectorAll('[data-aos]');
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
    
    initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-text');
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.width = '0';
            
            setTimeout(() => {
                element.style.width = '100%';
                let i = 0;
                const typeInterval = setInterval(() => {
                    element.textContent = text.slice(0, i + 1);
                    i++;
                    if (i === text.length) {
                        clearInterval(typeInterval);
                        element.style.borderRight = '3px solid transparent';
                    }
                }, 100);
            }, 1500);
        });
    }
    
    animateCounter(element) {
        if (!element || element.classList.contains('animated')) return;
        
        element.classList.add('animated');
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                return;
            }
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        };
        
        requestAnimationFrame(updateCounter);
    }
    
    initCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const count = stat.textContent;
            stat.setAttribute('data-count', count);
            stat.textContent = '0';
        });
    }
    
    initTestimonialSlider() {
        const testimonials = document.querySelectorAll('.testimonial-item');
        let currentTestimonial = 0;
        
        if (testimonials.length > 1) {
            setInterval(() => {
                testimonials[currentTestimonial].classList.remove('active');
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                testimonials[currentTestimonial].classList.add('active');
            }, 5000);
        }
    }
}

// Portfolio Manager
class PortfolioManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindFilterEvents();
    }
    
    bindFilterEvents() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Portfolio Modal Manager
class ModalManager {
    constructor() {
        this.modal = document.getElementById('portfolioModal');
        this.modalBody = document.getElementById('modalBody');
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Close modal on overlay click
        const overlay = document.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const projectData = this.getProjectData(projectId);
        if (projectData && this.modalBody) {
            this.modalBody.innerHTML = this.createModalContent(projectData);
            this.modal?.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal() {
        this.modal?.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    getProjectData(id) {
        const projects = {
            1: {
                title: { ar: "هوية بصرية لمتجر إلكتروني", en: "E-commerce Visual Identity" },
                description: { ar: "تصميم شعار وهوية بصرية كاملة لمتجر إلكتروني متخصص في بيع الإلكترونيات", en: "Logo and complete visual identity design for an electronics e-commerce store" },
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["Photoshop", "Illustrator", "Figma"],
                category: "design"
            },
            2: {
                title: { ar: "موقع مطعم تفاعلي", en: "Interactive Restaurant Website" },
                description: { ar: "موقع ويب احترافي لمطعم مع نظام حجز الطاولات وقائمة طعام تفاعلية", en: "Professional restaurant website with table booking system and interactive menu" },
                image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["HTML", "CSS", "JavaScript", "PHP"],
                category: "web"
            },
            3: {
                title: { ar: "حملة تسويق رقمي", en: "Digital Marketing Campaign" },
                description: { ar: "حملة تسويقية شاملة أدت إلى زيادة المبيعات بنسبة 300% خلال 3 شهور", en: "Comprehensive marketing campaign that increased sales by 300% in 3 months" },
                image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["Facebook Ads", "Instagram", "Google Ads", "Analytics"],
                category: "social"
            },
            4: {
                title: { ar: "تطبيق إدارة المهام", en: "Task Management App" },
                description: { ar: "تطبيق جوال لتنظيم المهام اليومية مع إشعارات ذكية وواجهة مستخدم بديهية", en: "Mobile app for daily task organization with smart notifications and intuitive UI" },
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["React Native", "Node.js", "MongoDB"],
                category: "mobile"
            },
            5: {
                title: { ar: "هوية شركة تقنية", en: "Tech Company Identity" },
                description: { ar: "تصميم هوية بصرية متكاملة لشركة تقنية ناشئة تشمل الشعار والألوان والخطوط", en: "Complete visual identity design for a tech startup including logo, colors, and typography" },
                image: "https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["Illustrator", "Photoshop", "InDesign"],
                category: "design"
            },
            6: {
                title: { ar: "موقع شركة", en: "Corporate Website" },
                description: { ar: "موقع شركة احترافي مع لوحة إدارة لإدارة المحتوى والموظفين", en: "Professional corporate website with admin panel for content and staff management" },
                image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
                technologies: ["React", "Node.js", "MySQL", "Admin Panel"],
                category: "web"
            }
        };
        
        return projects[id];
    }
    
    createModalContent(project) {
        const currentLang = window.languageManager.getCurrentLanguage();
        const title = project.title[currentLang];
        const description = project.description[currentLang];
        
        return `
            <div class="modal-project">
                <img src="${project.image}" alt="${title}" class="modal-image">
                <div class="modal-info">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <div class="project-technologies">
                        <h4>${currentLang === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies Used:'}</h4>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-actions">
                        <a href="https://wa.me/201029448695" class="btn btn-primary" target="_blank">
                            ${currentLang === 'ar' ? 'اطلب مشروع مماثل' : 'Request Similar Project'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }
    
    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }
        
        // Simulate form submission
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.showSuccess();
            this.form.reset();
        }, 2000);
    }
    
    validateForm(data) {
        const requiredFields = ['name', 'email', 'service', 'message'];
        const currentLang = window.languageManager.getCurrentLanguage();
        
        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                const message = currentLang === 'ar' 
                    ? `يرجى ملء حقل ${this.getFieldName(field, 'ar')}`
                    : `Please fill the ${this.getFieldName(field, 'en')} field`;
                this.showError(message);
                return false;
            }
        }
        
        // Validate email
        if (!this.isValidEmail(data.email)) {
            const message = currentLang === 'ar' 
                ? 'يرجى إدخال بريد إلكتروني صحيح'
                : 'Please enter a valid email address';
            this.showError(message);
            return false;
        }
        
        return true;
    }
    
    getFieldName(field, lang) {
        const fieldNames = {
            name: { ar: 'الاسم', en: 'name' },
            email: { ar: 'البريد الإلكتروني', en: 'email' },
            service: { ar: 'نوع الخدمة', en: 'service type' },
            message: { ar: 'الرسالة', en: 'message' }
        };
        return fieldNames[field][lang];
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showError(message) {
        this.showNotification(message, 'error');
    }
    
    showSuccess() {
        const currentLang = window.languageManager.getCurrentLanguage();
        const message = currentLang === 'ar' 
            ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.'
            : 'Your message has been sent successfully! I will contact you soon.';
        this.showNotification(message, 'success');
    }
    
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#dc3545' : '#28a745'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 3000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    showLoading() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = '<div class="spinner"></div>';
            submitBtn.disabled = true;
        }
    }
    
    hideLoading() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const currentLang = window.languageManager.getCurrentLanguage();
            submitBtn.textContent = currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message';
            submitBtn.disabled = false;
        }
    }
}

// Smooth Scrolling Manager
class ScrollManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindScrollEvents();
    }
    
    bindScrollEvents() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core managers
    window.themeManager = new ThemeManager();
    window.navigationManager = new NavigationManager();
    window.animationManager = new AnimationManager();
    window.scrollManager = new ScrollManager();
    
    // Initialize page-specific managers
    if (document.getElementById('contactForm')) {
        window.contactFormManager = new ContactFormManager();
    }
    
    if (document.querySelector('.portfolio-item')) {
        window.portfolioManager = new PortfolioManager();
    }
    
    if (document.getElementById('portfolioModal')) {
        window.modalManager = new ModalManager();
    }
});

// Global functions for portfolio modal
function openPortfolioModal(projectId) {
    if (window.modalManager) {
        window.modalManager.openModal(projectId);
    }
}

function closePortfolioModal() {
    if (window.modalManager) {
        window.modalManager.closeModal();
    }
}

// Service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Can be implemented later for offline functionality
    });
}

// Performance optimization
window.addEventListener('load', () => {
    // Preload critical images
    const criticalImages = [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=500'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});