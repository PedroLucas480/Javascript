// Muda a cor da área 1 para verde quando clicado
function area1clickMouse(){
  document.getElementById("area1").style.backgroundColor = "lime";
}

// Muda a cor da área 1 para amarelo ao clique duplo
function area1clickduplo(){
  document.getElementById("area1").style.backgroundColor = "yellow";
}

// Muda a cor da área 1 para vermelho ao passar o mouse
function area1PasseMouse(){
  document.getElementById("area1").style.backgroundColor = "red";
}

// Muda a cor da área 1 para laranja ao tirar o mouse
function area1TiraMouse(){
  document.getElementById("area1").style.backgroundColor = "orange";
}

// Gera uma cor hexadecimal aleatória (ex: #A3F12C)
function mudarColoAleatoria() {
  var letters = '0123456789ABCDEF'; // caracteres hexadecimais
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; // adiciona letra aleatória
  }
  return color; // retorna cor aleatória
}

// Muda a cor da área 2 para uma cor aleatória quando o mouse se move
function eventoMoverMouse() {
  $("#area2").css("background-color", mudarColoAleatoria());
}

// Move o quadrado vermelho (areainterna) diagonalmente para baixo
function eventoPressionaMouse() {
  let id = null; // controle do intervalo
  const elem = document.getElementById("areainterna");
  let pos = 0; // posição inicial
  clearInterval(id); // limpa qualquer animação anterior
  id = setInterval(frame, 10); // executa a cada 10ms

  function frame() {
      if (pos == 225) { // limite do movimento
          clearInterval(id); // para a animação
      } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
      }
  }
}

// Move o quadrado vermelho (areainterna) de volta à posição original
function eventoSoltaMouse() {
  let id = null;
  const elem = document.getElementById("areainterna");
  let pos = 200; // começa do fim
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
      if (pos == 0) { // volta ao topo
          clearInterval(id);
      } else {
          pos--;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
      }
  }
}

// Quando o campo recebe foco, muda o fundo da área 3 para azul
function eventoFoco(){
  document.getElementById("area3").style.backgroundColor = "blue";
}

// Quando o campo perde o foco, muda o fundo da área 3 para amarelo
function eventoSaiFoco(){
  document.getElementById("area3").style.backgroundColor = "yellow";
}

// Quando o conteúdo do campo muda, muda o fundo para amarelo
function eventoAlterou(){
  document.getElementById("area4").style.backgroundColor = "yellow";
}

// Exibe alerta ao clicar no botão de reset
function eventoReset() {
  alert("Você irá resetar todos os inputs.");
}
