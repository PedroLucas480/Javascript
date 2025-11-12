let tempoInicial = 10;     // Tempo inicial de cada fase (em segundos)
let tempoRestante = tempoInicial; // Tempo restante durante o jogo
let intervaloTempo;        // Referência ao intervalo do temporizador


function iniciarJogo() {
  if (jogoAtivo) return; // Evita reiniciar enquanto o jogo estiver rodando


// Inicia o cronômetro que conta de 1 em 1 segundo
  intervaloTempo = setInterval(() => {
    tempoRestante--;
    atualizarTempo();

 // Se o tempo acabar, o jogador perde
 if (tempoRestante <= 0) {
  clearInterval(intervaloTempo);
  alert("Tempo esgotado! Tente novamente.");
  jogoAtivo = false;
}
}, 1000);
}