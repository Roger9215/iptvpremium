/* Arquivo: script.js */
document.addEventListener('DOMContentLoaded', () => {

    // --- CARROSSEL DE FILMES E SÉRIES (NOVO) ---
    const carrosselFilmesContainer = document.querySelector('.carrossel-container');
    const carrosselFilmes = document.querySelector('.carrossel-filmes');
    const filmes = [
        'img/avatar.jpg',
        'img/caos.jpg',
        'img/Branca_neves.jpg',
        'img/capitao america.jpg',
        'img/compadecida.jpg',
        'img/G_sol.jpg',
        'img/Sobrenatural.jpg',
        'img/premonicao.jpg',
        'img/ultimo mergulho.jpg',
        'img/roda do tempo.jpg',
    ];

    function criarCarrosselInfinitoFilmes() {
        if (!carrosselFilmes) return;
    
        // Remove os botões de navegação, pois a rolagem agora é automática
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn) prevBtn.remove();
        if (nextBtn) nextBtn.remove();
    
        // Duplica a lista de filmes para criar um loop visualmente infinito
        const filmesDuplicados = [...filmes, ...filmes];
    
        filmesDuplicados.forEach(src => {
            const div = document.createElement('div');
            div.classList.add('cartaz-filme');
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Cartaz de filme';
            div.appendChild(img);
            carrosselFilmes.appendChild(div);
        });
    
        // Aplica a animação via CSS
        carrosselFilmes.style.animation = 'scroll-filmes-infinito 50s linear infinite';
    }

    if (carrosselFilmes) {
        criarCarrosselInfinitoFilmes();
    }


    // --- CARROSSEL DE APPS ---
    const appLogosCarousel = document.querySelector('.app-logos-carousel');
    const appLogos = [
        'img/logo-app-kodi.png',
        'img/logo-app-iptv-smarters.png',
        'img/logo-app-ssiptv.png',
        'img/logo-app-duplex.png',
        'img/logo-app-tivi-mate.png',
        'img/logo-app-gse.png',
        'img/logo-app-ott-player.png',
        'img/logo-app-perfect-player.png',
    ];

    function criarLogosApps() {
        if (!appLogosCarousel) return;

        // Duplica a lista de logos para criar um loop infinito
        const logosComDuplicacao = [...appLogos, ...appLogos];

        logosComDuplicacao.forEach(src => {
            const div = document.createElement('div');
            div.classList.add('app-logo');
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Logo do aplicativo IPTV';
            div.appendChild(img);
            appLogosCarousel.appendChild(div);
        });
    }
    
    if (appLogosCarousel) {
        criarLogosApps();
    }


    // --- Interatividade para o formulário de avaliação ---
    const avaliacaoItems = document.querySelectorAll('.avaliacao-item');

    avaliacaoItems.forEach(item => {
        item.addEventListener('click', () => {
            // Exibe uma mensagem de agradecimento ao usuário
            alert('Obrigado pela sua avaliação! Sua opinião é muito importante para nós.');
        });
    });
});