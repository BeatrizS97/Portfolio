// Função para rolar o carousel
function scrollCarousel(carouselId, amount) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += amount;
}

// Adiciona interatividade aos itens do carousel
const items = document.querySelectorAll('.carousel-item');
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        e.preventDefault();

        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});

// Menu hambúrguer para mobile
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        // Fecha o menu quando um link é clicado
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // Inicializa verificações
    hideButtonsIfNoScroll();
    initLazyLoad();
    initSectionReveal();
    initActiveMenuLink();
    initKeyboardAccessibleCards();
});

// Função para esconder botões se não precisar rolar
function hideButtonsIfNoScroll() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const container = carousel.parentElement;
        const leftBtn = container.querySelector('.carousel-btn.left');
        const rightBtn = container.querySelector('.carousel-btn.right');

        if (leftBtn && rightBtn) {
            if (carousel.scrollWidth <= carousel.clientWidth) {
                // Não transborda: esconde os botões
                leftBtn.style.display = 'none';
                rightBtn.style.display = 'none';
            } else {
                // Transborda: mostra os botões
                leftBtn.style.display = 'flex';
                rightBtn.style.display = 'flex';
            }
        }
    });
}

// Lazy load otimizado para imagens e GIFs
function initLazyLoad() {
    // Lazy load para backgrounds
    const bgItems = document.querySelectorAll('.carousel-item:not(.gif-item)');
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                if (item.dataset.bg) {
                    item.style.backgroundImage = item.dataset.bg;
                    bgObserver.unobserve(item);
                }
            }
        });
    }, { rootMargin: '50px' });

    bgItems.forEach(item => {
        const currentBg = item.style.backgroundImage;
        if (currentBg && currentBg !== 'none') {
            item.dataset.bg = currentBg;
            item.style.backgroundImage = 'none';
            bgObserver.observe(item);
        }
    });

    // Lazy load para imagens (GIFs)
    const images = document.querySelectorAll('.gif-item img');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imgObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });

    images.forEach(img => {
        // Se a imagem já tem src, não faz nada
        // Caso contrário, pode-se implementar data-src no HTML
        imgObserver.observe(img);
    });
}

// Recalcula botões ao redimensionar a janela
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        hideButtonsIfNoScroll();
    }, 250);
});

// Função para atualizar visibilidade dos botões baseado na posição do scroll
function updateCarouselButtons() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const container = carousel.parentElement;
        const leftBtn = container.querySelector('.carousel-btn.left');
        const rightBtn = container.querySelector('.carousel-btn.right');

        if (leftBtn && rightBtn) {
            // Verifica se está no início
            if (carousel.scrollLeft <= 0) {
                leftBtn.style.opacity = '0.3';
                leftBtn.style.cursor = 'default';
            } else {
                leftBtn.style.opacity = '1';
                leftBtn.style.cursor = 'pointer';
            }

            // Verifica se está no fim
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
                rightBtn.style.opacity = '0.3';
                rightBtn.style.cursor = 'default';
            } else {
                rightBtn.style.opacity = '1';
                rightBtn.style.cursor = 'pointer';
            }
        }
    });
}

// Adiciona listeners de scroll aos carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        carousel.addEventListener('scroll', updateCarouselButtons);
    });
    
    // Atualiza no carregamento inicial
    updateCarouselButtons();
});

function initSectionReveal() {
    const sections = document.querySelectorAll('.hero, .carousel-container');
    sections.forEach(section => section.classList.add('reveal-on-scroll'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    sections.forEach(section => observer.observe(section));
}

function initActiveMenuLink() {
    const navLinks = Array.from(document.querySelectorAll('#nav-menu a[href^="#"]'));
    const sections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!navLinks.length || !sections.length) {
        return;
    }

    const setActiveLink = () => {
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const scrollMarker = window.scrollY + navHeight + (window.innerHeight * 0.35);
        let currentSection = sections[0];

        const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 4);
        if (nearBottom) {
            currentSection = sections[sections.length - 1];
        }

        if (!nearBottom) {
            sections.forEach(section => {
                if (scrollMarker >= section.offsetTop) {
                    currentSection = section;
                }
            });
        }

        const currentId = `#${currentSection.id}`;
        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === currentId;
            link.classList.toggle('active-link', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();
}

function initKeyboardAccessibleCards() {
    const clickableCards = document.querySelectorAll('.carousel-item[onclick]');

    clickableCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');

        const overlayText = card.querySelector('.overlay')?.textContent?.trim();
        if (overlayText && !card.getAttribute('aria-label')) {
            card.setAttribute('aria-label', `Abrir ${overlayText}`);
        }

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                card.click();
            }
        });

        card.addEventListener('focus', () => card.classList.add('active'));
        card.addEventListener('blur', () => card.classList.remove('active'));
    });
}