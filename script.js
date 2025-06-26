/*
  Comentários de Otimização JavaScript:
  - Código duplicado para o botão de áudio foi removido.
  - O código do botão de áudio foi comentado, pois não há um elemento de áudio ou botão correspondente no HTML fornecido.
  - O script de avaliação de estrelas, que estava inline no HTML, foi movido para cá.
*/

console.log("Site IPTV carregado com sucesso.");

// Código para o botão de áudio (comentado, pois não há elementos correspondentes no HTML fornecido)
/*
const audio = document.getElementById("audio-heist");
const btn = document.getElementById("btn-play-audio");
let tocando = false;

if (btn && audio) { // Verifica se os elementos existem antes de adicionar o listener
  btn.addEventListener("click", () => {
    if (!tocando) {
      audio.play();
      tocando = true;
      btn.textContent = "🔇";
    } else {
      audio.pause();
      tocando = false;
      btn.textContent = "🔊";
    }
  });
} else {
  console.warn("Elementos de áudio ou botão de áudio não encontrados no HTML.");
}
*/

// Contador de visitantes usando localStorage
document.addEventListener("DOMContentLoaded", function () {
  let count = localStorage.getItem("visitCount");
  // Converte para número e incrementa, ou inicia em 1 se for a primeira visita
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("visitCount", count);
  
  const visitCountElement = document.getElementById("visit-count");
  if (visitCountElement) {
    visitCountElement.textContent = count;
  } else {
    console.warn("Elemento 'visit-count' não encontrado no HTML.");
  }
});

// Lógica para o sistema de avaliação por estrelas
document.addEventListener("DOMContentLoaded", function () {
  const estrelas = document.querySelectorAll('#avaliacao-compacta .estrela');
  const barra = document.getElementById('barra-avaliacao');
  const status = document.getElementById('status-avaliacao');

  if (estrelas.length > 0 && barra && status) { // Verifica se os elementos existem
    estrelas.forEach(estrela => {
      estrela.addEventListener('click', () => {
        const valor = parseInt(estrela.getAttribute('data-value'));

        // Limpa seleção
        estrelas.forEach(e => e.style.color = 'gray');
        // Aplica seleção
        for (let i = 0; i < valor; i++) {
          estrelas[i].style.color = '#FFD700'; // amarelo ouro
        }

        // Atualiza barra e status
        const porcentagem = (valor / 5) * 100;
        barra.style.width = porcentagem + "%";

        let texto = '';
        if (valor <= 1) texto = 'Ruim 😞';
        else if (valor === 2) texto = 'Regular 😐';
        else if (valor === 3) texto = 'Bom 🙂';
        else if (valor === 4) texto = 'Ótimo 😃';
        else texto = 'Excelente 🤩';

        status.textContent = texto;
      });
    });
  } else {
    console.warn("Elementos de avaliação (estrelas, barra ou status) não encontrados no HTML.");
  }
});
