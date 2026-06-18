/* 
    Prime Gold - Premium IPTV Scripts
    Updated: 7 Services + Slider + Tabs
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Advanced Loader
    const loader = document.querySelector('.loader-wrapper');
    window.addEventListener('load', () => {
        setTimeout(() => {
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
        }, 1200);
    });

    // 2. Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
                    card.style.opacity = '1';
                } else {
                    const match = card.dataset.category === filter;
                    card.style.display = match ? 'flex' : 'none';
                    card.style.opacity = match ? '1' : '0';
                }
            });

            // Rebuild dots after filter
            if (window.innerWidth <= 768) {
                setTimeout(buildSliderDots, 100);
            }
        });
    });

    // 5. Mobile Slider Dots
    const pricingGrid = document.getElementById('pricingGrid');
    const sliderDotsContainer = document.getElementById('sliderDots');

    function buildSliderDots() {
        if (!sliderDotsContainer || window.innerWidth > 768) return;

        const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
        sliderDotsContainer.innerHTML = '';

        visibleCards.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                const card = visibleCards[i];
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            });
            sliderDotsContainer.appendChild(dot);
        });
    }

    // Update active dot on scroll
    if (pricingGrid) {
        pricingGrid.addEventListener('scroll', () => {
            if (window.innerWidth > 768) return;
            const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
            const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
            const scrollLeft = pricingGrid.scrollLeft;
            const cardWidth = visibleCards[0]?.offsetWidth + 16 || 296;
            const activeIndex = Math.round(scrollLeft / cardWidth);

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        });
    }

    // Build dots on load
    if (window.innerWidth <= 768) {
        buildSliderDots();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            buildSliderDots();
        } else {
            sliderDotsContainer.innerHTML = '';
        }
    });

    // 6. Card Hover 3D Effect (Desktop only)
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

    // 7. Logo glow pulse on hover
    const logoImgs = document.querySelectorAll('.service-logo-img');
    logoImgs.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.filter = 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.9))';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.filter = 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.5))';
        });
    });

    // 8. Swipe hint animation on mobile
    if (window.innerWidth <= 768 && pricingGrid) {
        setTimeout(() => {
            pricingGrid.scrollTo({ left: 40, behavior: 'smooth' });
            setTimeout(() => {
                pricingGrid.scrollTo({ left: 0, behavior: 'smooth' });
            }, 600);
        }, 2500);
    }

});
