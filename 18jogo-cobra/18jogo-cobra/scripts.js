let headImg = new Image();
headImg.src = "Rota.png"; // cabeça da cobra

let bodyImg = new Image();
bodyImg.src = "Rota.png"; // corpo da cobra

let foodImg = new Image();
foodImg.src = "comida.png"; // imagem da comida (ex: maçã, fruta, etc.)

let bgImg = new Image();
bgImg.src = "favela.webp"; // imagem de fundo

let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 50;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos

let imagensCarregadas = 0;
const totalImagens = 4; // agora são 4 imagens!

function verificarCarregamento() {
    imagensCarregadas++;
    if (imagensCarregadas === totalImagens) {
        jogo = setInterval(iniciarJogo, 120);
    }
}

headImg.onload = verificarCarregamento;
bodyImg.onload = verificarCarregamento;
foodImg.onload = verificarCarregamento;
bgImg.onload = verificarCarregamento;

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// 🟩 Função que desenha o fundo (agora usa a imagem carregada)
function criarBG() {
    context.drawImage(bgImg, 0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
            // cabeça
            context.drawImage(headImg, snake[i].x, snake[i].y, box, box);
        } else {
            // corpo
            context.drawImage(bodyImg, snake[i].x, snake[i].y, box, box);
        }
    }
}

function drawFood() {
    context.drawImage(foodImg, food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';

    if (event.keyCode == 65 && direction != 'right') direction = 'left';
    if (event.keyCode == 87 && direction != 'down') direction = 'up';
    if (event.keyCode == 68 && direction != 'left') direction = 'right';
    if (event.keyCode == 83 && direction != 'up') direction = 'down';
}

function iniciarJogo() {
    // Faz a cobra reaparecer do outro lado
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    // Verifica se bateu nela mesma
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();        // desenha o fundo primeiro
    criarCobrinha();  // depois a cobrinha
    drawFood();       // e por último a comida

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // Se não comeu, tira o último pedacinho
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        // Comeu -> gera nova comida
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
