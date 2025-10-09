window.onload = function () {
    const logo = document.getElementById('netflixLogo');
    const curtainEffect = document.getElementById('curtainEffect');
    const audio = new Audio('./audio/netflix-tudum.mp3');

    function playTudumSequence() {
        const tudumTimes = [0, 0.6, 1.2, 1.8, 2.4];
        audio.play().catch(error => console.log('Erro ao reproduzir áudio:', error));

        tudumTimes.forEach((t, index) => {
            setTimeout(() => {
                if (index === 1) {
                    logo.style.animation = 'netflixIntro 2s ease-in-out forwards';
                }
                if (index === tudumTimes.length - 1) {
                    setTimeout(() => {
                        curtainEffect.style.opacity = 1;
                        const bars = curtainEffect.getElementsByClassName('curtain-bar');
                        for (let bar of bars) {
                            bar.style.animationPlayState = 'running';
                        }
                        setTimeout(() => {
                            logo.classList.add('fade-out');
                            setTimeout(() => {
                                window.location.href = 'pages/perfil.html';
                            }, 800);
                        }, 800);
                    }, 1000);
                }
            }, t * 1000);
        });
    }

    playTudumSequence();
};

