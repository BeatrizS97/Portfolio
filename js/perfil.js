// perfil.js — padronizado com main.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) {
        // Se algum elemento não existir, sair silenciosamente (evita erro em páginas desktop)
        if (!hamburger) console.warn('Hamburger element not found (#hamburger).');
        if (!navMenu) console.warn('Nav menu element not found (#nav-menu).');
        return;
    }

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');

        // Acessibilidade básica: atualizar aria-expanded
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
    });

    // Fecha o menu quando um link do menu for clicado
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});
