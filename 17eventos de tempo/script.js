// Declaração das variáveis principais
let numbers = [];          // Armazena os números embaralhados
let sortedNumbers = [];    // Armazena os números em ordem crescente (para comparar)
let tempoInicial = 10;     // Tempo inicial de cada fase (em segundos)
let tempoRestante = tempoInicial; // Tempo restante durante o jogo
let intervaloTempo;        // Referência ao intervalo do temporizador
let fase = 1;              // Controle da fase atual do jogo
let jogoAtivo = false;     // Indica se o jogo está em andamento
let tempoMinimo = 5;       // Tempo mínimo permitido (última fase)

// Função que gera e embaralha os números de 1 a 10
function gerarNumeros() {
  numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i); // Adiciona os números 1, 2, 3, ..., 10 no array
  }

  // Embaralha os números de forma aleatória
  numbers.sort(() => Math.random() - 0.5);

  // Cria uma cópia dos números em ordem crescente para verificar a sequência correta
  sortedNumbers = [...numbers].sort((a, b) => a - b);
}

// Exibe os números na tela
function exibirNumeros() {
  const container = document.getElementById("numbers"); // Pega o contêiner onde os números serão exibidos
  container.innerHTML = ""; // Limpa o conteúdo anterior

  // Para cada número, cria um elemento visual na tela
  numbers.forEach((num, index) => {
    const div = document.createElement("div");
    div.className = "numero";    // Adiciona a classe CSS
    div.textContent = num;       // Exibe o número
    div.onclick = () => verificarClique(index); // Define o clique para verificar se o número está certo
    container.appendChild(div);  // Adiciona o número ao contêiner
  });
}

// Inicia o jogo
function iniciarJogo() {
  if (jogoAtivo) return; // Evita reiniciar enquanto o jogo estiver rodando

  jogoAtivo = true;
  gerarNumeros();     // Cria novos números
  exibirNumeros();    // Mostra na tela
  document.getElementById("mensagem").innerHTML = "<p>Boa sorte!</p>";
  tempoRestante = tempoInicial; // Reinicia o tempo
  atualizarTempo();   // Atualiza a exibição do tempo

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

// Atualiza o tempo exibido na tela
function atualizarTempo() {
  document.getElementById("tempo").textContent = `Tempo: ${tempoRestante}s`;
}

// Verifica se o jogador clicou no número certo
function verificarClique(index) {
  if (!jogoAtivo) return; // Ignora cliques fora do jogo ativo

  // Verifica se o número clicado é o menor número esperado (próximo da sequência)
  if (numbers[index] === sortedNumbers[0]) {
    numbers.splice(index, 1);  // Remove o número clicado da tela
    sortedNumbers.shift();     // Remove o número da lista ordenada
    exibirNumeros();           // Atualiza a tela

    // Se o jogador acertou todos os números
    if (numbers.length === 0) {
      clearInterval(intervaloTempo);

      // Se já chegou no tempo mínimo, vence o jogo
      if (tempoInicial <= tempoMinimo) {
        venceuJogo();
      } else {
        alert(`Fase ${fase} completada!`);
        proximaFase(); // Vai para a próxima fase
      }
    }
  } else {
    // Caso clique no número errado
    alert("Ordem errada! Reinicie o jogo.");
    clearInterval(intervaloTempo);
    jogoAtivo = false;
  }
}

// Prepara a próxima fase
function proximaFase() {
  fase++; // Aumenta o número da fase
  tempoInicial = Math.max(tempoMinimo, tempoInicial - 1); // Reduz o tempo em 1 segundo (até o mínimo)
  document.getElementById("fase").textContent = `Fase: ${fase}`;
  document.getElementById("mensagem").innerHTML = "<p>Preparando próxima fase...</p>";
  jogoAtivo = false;

  // Aguarda 2 segundos e inicia a próxima fase
  setTimeout(() => {
    iniciarJogo();
  }, 2000);
}

// Função chamada quando o jogador vence o jogo
function venceuJogo() {
  jogoAtivo = false;
  document.getElementById("numbers").innerHTML = ""; // Limpa os números
  document.getElementById("mensagem").innerHTML = `
    <h2>Parabéns! Você venceu o jogo!</h2>
    <p>Você completou todas as fases!</p>
    <button onclick="resetarJogo()">Jogar novamente</button>
  `;
}

// Reinicia todo o jogo
function resetarJogo() {
  clearInterval(intervaloTempo);
  fase = 1;
  tempoInicial = 10;
  tempoRestante = 10;
  document.getElementById("fase").textContent = "Fase: 1";
  document.getElementById("tempo").textContent = "Tempo: 10s";
  document.getElementById("mensagem").innerHTML = '<button onclick="iniciarJogo()">Começar jogo</button>';
  jogoAtivo = false;
  document.getElementById("numbers").innerHTML = "";
}
