// Caso queira adicionar interações futuras, como popups ou sliders
console.log("Site IPTV carregado com sucesso.");
const audio = document.getElementById("audio-heist");
const btn = document.getElementById("btn-play-audio");
let tocando = false;
btn.addEventListener("click", () => {
  if (!tocando) { audio.play(); tocando = true; btn.textContent = "🔇"; }
  else { audio.pause(); tocando = false; btn.textContent = "🔊"; }
});
const audio = document.getElementById("audio-heist");
const btn = document.getElementById("btn-play-audio");
let tocando = false;
btn.addEventListener("click", () => {
  if (!tocando) { audio.play(); tocando = true; btn.textContent = "🔇"; }
  else { audio.pause(); tocando = false; btn.textContent = "🔊"; }
});
