
// Seleciona elementos da página
const obj = document.getElementById("objetoNaoIdentificado");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // Contexto para desenhar
const tileSize = 35; // Tamanho de cada "bloco" no labirinto
const chegada = { row: 19, col: 18 }; // Posição final do jogo
const contadorSpan = document.getElementById("contador");
const rankingList = document.getElementById("melhoresTempos");
const btnReiniciar = document.getElementById("reiniciar");

// Variáveis de controle
let x = 0, y = 0; // Posição do jogador
let tempo = 0; // Contador de tempo
let intervalo; // Intervalo do temporizador
let fimDeJogo = false; // Se o jogo terminou
let historicoTempos = []; // Guarda os melhores tempos

// Matriz do labirinto (1 = parede, 0 = caminho)
const maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  // ... restante omitido por espaço ...
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
];

// Desenha o labirinto no canvas
function renderMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < maze.length; row++) {
	for (let col = 0; col < maze[row].length; col++) {
	  if (maze[row][col] === 1) {
		ctx.fillStyle = "#2e7d32"; // Cor das paredes
		ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
	  }
	}
  }
}

// Verifica se a posição é válida para mover
function podeMover(novoX, novoY) {
  const col = Math.floor(novoX / tileSize);
  const row = Math.floor(novoY / tileSize);
  if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length) return false;
  return maze[row][col] === 0;
}

// Verifica se o jogador chegou ao final
function chegouNoFinal() {
  const col = Math.floor(x / tileSize);
  const row = Math.floor(y / tileSize);
  return row === chegada.row && col === chegada.col;
}

// Captura as teclas pressionadas para movimentar
window.addEventListener("keydown", (event) => {
  if (fimDeJogo) return; // Se terminou, não movimenta

  let novoX = x;
  let novoY = y;
  const tecla = event.keyCode;

  if (tecla === 39) novoX += tileSize; // Direita
  else if (tecla === 37) novoX -= tileSize; // Esquerda
  else if (tecla === 38) novoY -= tileSize; // Cima
  else if (tecla === 40) novoY += tileSize; // Baixo

  if (podeMover(novoX, novoY)) {
	x = novoX;
	y = novoY;
	obj.style.left = x + "px";
	obj.style.top = y + "px";

	if (chegouNoFinal()) {
	  fimDeJogo = true;
	  clearInterval(intervalo);
	  alert(`🎉 Parabéns! Você chegou no final em ${tempo} segundos!`);

	  // Salva tempo e atualiza ranking
	  historicoTempos.push(tempo);
	  historicoTempos.sort((a, b) => a - b);
	  if (historicoTempos.length > 3) historicoTempos.length = 3;
	  atualizarRanking();
	}
  }
});

// Atualiza o ranking na tela
function atualizarRanking() {
  rankingList.innerHTML = "";
  historicoTempos.forEach((t, i) => {
	const li = document.createElement("li");
	li.textContent = `${i + 1}º lugar: ${t} segundos`;
	rankingList.appendChild(li);
  });
}

// Inicia o temporizador
function iniciarTempo() {
  tempo = 0;
  contadorSpan.textContent = tempo;
  intervalo = setInterval(() => {
	tempo++;
	contadorSpan.textContent = tempo;
  }, 1000);
}

// Reinicia o jogo
function reiniciarJogo() {
  x = 0;
  y = 0;
  obj.style.left = x + "px";
  obj.style.top = y + "px";
  fimDeJogo = false;
  clearInterval(intervalo);
  iniciarTempo();
}

// Quando clica no botão "Reiniciar"
btnReiniciar.addEventListener("click", reiniciarJogo);

// Loop principal que desenha o labirinto constantemente
function loop() {
  renderMaze();
  requestAnimationFrame(loop);
}

// Inicia o jogo
iniciarTempo();
loop();

