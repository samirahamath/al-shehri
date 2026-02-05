/* ==========================================================================
   الشهري لصيانة السيارات الفاخرة - جافاسكريبت
   AL-SHEHRI LUXURY CAR MECHANICS - JavaScript (Arabic)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================================================
    // التحميل
    // ==========================================================================
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.classList.add('hidden');
        }, 500);
    });

    // ==========================================================================
    // شريط التنقل
    // ==========================================================================
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // تأثير التمرير للشريط العلوي
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // تبديل القائمة للجوال
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // إغلاق قائمة الجوال عند النقر على رابط
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // تحديد الرابط النشط عند التمرير
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // ==========================================================================
    // زر العودة للأعلى
    // ==========================================================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================================================
    // تحريك عداد الإحصائيات
    // ==========================================================================
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let statsAnimated = false;

    // تحويل الأرقام إلى العربية
    function toArabicNumerals(num) {
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().replace(/[0-9]/g, function (d) {
            return arabicNumerals[parseInt(d)];
        });
    }

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = toArabicNumerals(Math.floor(current));
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = toArabicNumerals(target);
                }
            };

            updateCount();
        });
    }

    // مراقبة قسم الإحصائيات
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(heroStats);
    }

    // ==========================================================================
    // فلتر المعرض
    // ==========================================================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // تحديث الزر النشط
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ==========================================================================
    // تحريكات التمرير
    // ==========================================================================
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card, .why-item, .contact-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // ==========================================================================
    // التمرير السلس للروابط
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================================================
    // إرسال نموذج التواصل
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // الحصول على بيانات النموذج
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // التحقق البسيط
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!name || !phone || !email) {
                showNotification('الرجاء ملء جميع الحقول المطلوبة.', 'error');
                return;
            }

            // التحقق من البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('الرجاء إدخال بريد إلكتروني صحيح.', 'error');
                return;
            }

            // محاكاة إرسال النموذج
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showNotification('شكراً لك! تم إرسال طلب موعدك بنجاح. سنتواصل معك قريباً.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // دالة الإشعارات
    function showNotification(message, type) {
        // إزالة الإشعارات الموجودة
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        // إضافة الأنماط
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 20px;
            padding: 20px 25px;
            background: ${type === 'success' ? 'rgba(39, 174, 96, 0.95)' : 'rgba(231, 76, 60, 0.95)'};
            color: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(-120%);
            transition: transform 0.4s ease;
            direction: rtl;
        `;

        document.body.appendChild(notification);

        // تحريك الظهور
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // الإزالة بعد فترة
        setTimeout(() => {
            notification.style.transform = 'translateX(-120%)';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 4000);
    }

    // ==========================================================================
    // تحريك شعارات العلامات التجارية
    // ==========================================================================
    const brandsSlider = document.querySelector('.brands-slider');
    if (brandsSlider) {
        // استنساخ العناصر للتمرير اللانهائي
        const brandItems = brandsSlider.querySelectorAll('.brand-item');
        brandItems.forEach(item => {
            const clone = item.cloneNode(true);
            brandsSlider.appendChild(clone);
        });
    }

    // ==========================================================================
    // تأثير الباراﻻكس على القسم الرئيسي
    // ==========================================================================
    const heroBg = document.querySelector('.hero-bg img');

    if (heroBg) {
        window.addEventListener('scroll', function () {
            const scrolled = window.scrollY;
            const heroSection = document.querySelector('.hero');

            if (scrolled < heroSection.offsetHeight) {
                heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // ==========================================================================
    // التحميل الكسول للصور
    // ==========================================================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==========================================================================
    // تهيئة
    // ==========================================================================
    handleScroll();
    setActiveNavLink();

    console.log('تم تهيئة موقع الشهري بنجاح ✨');
});
