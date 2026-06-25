/* 
    9KPRO TV - Premium IPTV Scripts
    Updated: Dropdown + Card Logos + Slider + Tabs
*/

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

});
