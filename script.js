/* 
    9KPRO TV - Premium IPTV Scripts
    Enhanced: Drawer System + Floating WhatsApp + Advanced Animations
*/

// Server Data for Drawer
const serverData = {
    everest: {
        name: 'Everest',
        logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/everest-logo.png',
        description: 'اشتراك ايفرست (Everest IPTV) يجمع بين القوة، الثبات الخارق، والتنوع. الاشتراك الأفضل لمشاهدة المباريات بدون تقطيع مع أكبر مكتبة أفلام ومسلسلات.',
        features: [
            'أقوى اشتراك مباريات بدون تقطيع',
            'أكبر مكتبة أفلام ومسلسلات',
            'جودة وثبات خارق',
            'متوافق مع جميع الأجهزة الذكية',
            'تحديث يومي ومستمر'
        ],
        pricing: [
            { duration: '3 أشهر', price: '120 ريال' },
            { duration: '6 أشهر', price: '180 ريال' },
            { duration: 'سنة واحدة', price: '280 ريال' }
        ]
    },
    hulk: {
        name: 'Hulk',
        logo: 'logos/hulk-logo.svg',
        description: 'اشتراك هولك الألماني يجمع بين القوة، الثبات، والتنوع بدون تقطيع. خيارك الأول والأقوى في السوق حاليًا.',
        features: [
            'أقوى اشتراك مباريات',
            'بنية تحتية ألمانية قوية',
            'أكبر مكتبة مسلسلات وأفلام',
            'ثبات ألماني عالي',
            'متوافق مع جميع الأجهزة الذكية'
        ],
        pricing: [
            { duration: '3 أشهر', price: '100 ريال' },
            { duration: '6 أشهر', price: '150 ريال' },
            { duration: 'سنة واحدة', price: '250 ريال' }
        ]
    },
    strong: {
        name: 'Strong 4K',
        logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/strong-logo.png',
        description: 'اشتراك سترونق 4K/8K يجمع بين الدقة الخارقة، الثبات، والتنوع. أعلى دقة ممكنة لمشاهدة المباريات والأفلام.',
        features: [
            'أقوى اشتراك مباريات بدقة فائقة',
            'جودة 4K و 8K الحقيقية',
            'ثبات تام أثناء القمم الكروية',
            'أكبر مكتبة أفلام سينمائية',
            'متوافق مع جميع الأجهزة الذكية'
        ],
        pricing: [
            { duration: '3 أشهر', price: '140 ريال' },
            { duration: '6 أشهر', price: '210 ريال' },
            { duration: 'سنة واحدة', price: '320 ريال' }
        ]
    },
    falcon: {
        name: 'Falcon',
        logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/44d0a66f-ce07-4a1c-b5a9-65ccd196676c.png',
        description: 'اشتراك فالكون الاصلي يجمع بين الشهرة، الثبات، والتنوع. خيارك الأول والأقوى في السوق حاليًا.',
        features: [
            'أقوى اشتراك مباريات',
            'سيرفرات فالكون الأصلية المعروفة',
            'استقرار عالي جداً منذ سنوات',
            'أكبر مكتبة أفلام ومسلسلات',
            'متوافق مع جميع الأجهزة الذكية'
        ],
        pricing: [
            { duration: '3 أشهر', price: '130 ريال' },
            { duration: '6 أشهر', price: '200 ريال' },
            { duration: 'سنة واحدة', price: '300 ريال' }
        ]
    },
    vulture: {
        name: 'Vulture',
        logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/9af8dd15-5cc0-42bb-9684-2477416105ed.png',
        description: 'اشتراك فلوتشر يجمع بين المتعة الترفيهية، الثبات، والتنوع. اشتراك ترفيهي من الطراز الأول.',
        features: [
            'أقوى اشتراك مباريات',
            'أفضل اشتراك ترفيهي',
            'مكتبة ضخمة من الأفلام والمسلسلات',
            'ثبات ممتاز أثناء المتابعة',
            'متوافق مع جميع الأجهزة الذكية'
        ],
        pricing: [
            { duration: '3 أشهر', price: '110 ريال' },
            { duration: '6 أشهر', price: '160 ريال' },
            { duration: 'سنة واحدة', price: '260 ريال' }
        ]
    },
    smarters: {
        name: 'IPTV Smarters',
        logo: 'https://media.zid.store/cdn-cgi/image/w=auto,q=100,f=auto/https://media.zid.store/05d0953b-b7e2-47c6-af1b-eb46a948c8df/d94288e8-52f1-4eb5-b24f-5dfd8fee6d4d.png',
        description: 'اشتراك سمارترز يجمع بين الشهرة العالمية، السعر الاقتصادي، والثبات. خيارك الأسهل للتوفير والمتعة.',
        features: [
            'أفضل اشتراك مباريات',
            'السعر الاقتصادي الأفضل',
            'واجهة تشغيل الأسهل والأكثر استقراراً',
            'مكتبة ضخمة من الأفلام والمسلسلات',
            'متوافق مع جميع الأجهزة الذكية'
        ],
        pricing: [
            { duration: '6 أشهر', price: '99 ريال' },
            { duration: 'سنة واحدة', price: '150 ريال' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Advanced Loader
    const loader = document.querySelector('.loader-wrapper');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) {
                loader.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    if (typeof AOS !== 'undefined') {
                        AOS.init({
                            duration: 900,
                            once: true,
                            offset: 50,
                            easing: 'ease-out-cubic',
                        });
                    }
                }, 800);
            }
        }, 1200);
    });

    // 2. Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // 4. Service Tabs Filter
    const tabBtns = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.price-card-premium');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.tab;
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else {
                    const match = card.dataset.category === filter;
                    card.style.display = match ? 'flex' : 'none';
                }
            });
        });
    });

    // 5. Dropdown Mobile Support
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = btn.nextElementSibling;
                if (content) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });

    // 6. Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // 7. Card Hover 3D Effect (Desktop only)
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // 8. Product Detail Drawer System
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const drawerContainer = document.querySelector('.drawer-container');
    const drawerClose = document.querySelector('.drawer-close');

    function openDrawer(serverId) {
        const server = serverData[serverId];
        if (!server) return;

        // Populate drawer content
        const drawerContent = document.querySelector('.drawer-content');
        drawerContent.innerHTML = `
            <img src="${server.logo}" alt="${server.name}" class="drawer-logo">
            <h2 class="drawer-title">${server.name}</h2>
            <p class="drawer-description">${server.description}</p>
            
            <div class="drawer-features">
                <h4>المميزات الرئيسية:</h4>
                <ul>
                    ${server.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div class="drawer-pricing">
                <h4>الأسعار:</h4>
                ${server.pricing.map(p => `
                    <div class="price-option">
                        <span class="price-option-duration">${p.duration}</span>
                        <span class="price-option-amount">${p.price}</span>
                    </div>
                `).join('')}
            </div>

            <div class="drawer-actions">
                <a href="https://wa.me/966592360612?text=أريد الاشتراك في ${server.name}" class="btn btn-gold-main">
                    <i class="fab fa-whatsapp"></i> اطلب الآن عبر واتساب
                </a>
            </div>
        `;

        drawerOverlay.classList.add('active');
        drawerContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawerOverlay.classList.remove('active');
        drawerContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Open drawer on card click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serverId = card.dataset.server || card.querySelector('.server-title').textContent.toLowerCase().replace('سيرفر ', '');
            openDrawer(serverId);
        });
    });

    // Close drawer
    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', (e) => {
            if (e.target === drawerOverlay) {
                closeDrawer();
            }
        });
    }

    // Close drawer on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDrawer();
        }
    });

    // 9. Floating WhatsApp Button
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', () => {
            window.open('https://wa.me/966592360612', '_blank');
        });
    }

});
