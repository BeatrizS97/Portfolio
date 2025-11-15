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
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
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