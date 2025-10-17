function scrollCarousel(carouselId, amount) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += amount;
}

const items = document.querySelectorAll('.carousel-item');
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
});

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
});
// Função para esconder botões se não precisar rolar
function hideButtonsIfNoScroll() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const container = carousel.parentElement; // O .relative que envolve o carousel
        const leftBtn = container.querySelector('.carousel-btn.left');
        const rightBtn = container.querySelector('.carousel-btn.right');

        if (carousel.scrollWidth <= carousel.clientWidth) {
            // Não transborda: esconde os botões
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        } else {
            // Transborda: mostra os botões
            leftBtn.style.display = 'block';
            rightBtn.style.display = 'block';
        }
    });
}

// Simples lazy load para backgrounds
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.backgroundImage = entry.target.dataset.bg || entry.target.style.backgroundImage;
                observer.unobserve(entry.target);
            }
        });
    });
    images.forEach(img => {
        img.dataset.bg = img.style.backgroundImage;
        img.style.backgroundImage = 'none'; // Placeholder vazio
        observer.observe(img);
    });
    // Checa e esconde botões se necessário (roda após o lazy load)
    hideButtonsIfNoScroll();
});
