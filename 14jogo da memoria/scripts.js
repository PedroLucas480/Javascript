// Seleciona todos os elementos com a classe "carta" (as cartas do jogo)
const cards = document.querySelectorAll('.carta');

// Controla se uma carta ja foi virada
let hasFlippedCard = false;

//Impede o jogador de virar mais cartas enquanto as anteriores estão sendo verificas
let lockBoard = false;

// Armazena a primeira e a segunda carta virada
let firstCard, secondCard;

// Função para virar uma carta (chamada ao clicar)
function flipCard(){
    if(lockBoard) return; // Se o tabuleiro estiver travado, não faz nada
    if (this === firstCard) return; // Impede Clicar duas vezes na mesma carta
    this.ClassList.add('flip'); // Adiciona a classe que aplica o efeito de virar
    if (!hasFlippedCard){
        hasFlippedCard = true; // Marca que a primeira carta foi virada
        firstCard = this; // Armazena a carta atual como primeira
        return; // Sai da função e aguarda a primeira carta
    }

    // Se for a segunda carta
    secondCard = this;
    lockBoard = true; // Bloqueia o tabuleiro até verificar o par

    checkForMatch(); // Verifica se as duas cartas são iguais
}

//Função para verificar se as duas cartas viradas são um par
function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    //se for par, desativa as cartas, senão, desvira
    isMatch ? disableCards() : unflipCards();
}

// Desativa o clique nas cartas que foram corretamente combinadas
function disableCards(){
    firstCard.removeEventListener('click', flipCard); // Remove o clique na primeira carta
    secondCard.removeEventListener('click', flipCard); // Remove o clique na segunda carta
    resetBoard();
}

// Desativa as cartas que não são par
function unflipCards(){
    setTimeout(() => { // Aguarda 1,5 segundo antes de desvirar
        firstCard.ClassList.remove('flip'); // Remove a classe paara desvirar a primeira carta
        secondCardCard.ClassList.remove('flip'); // Remove a classe para desvirar a segunda carta
        resetBoard(); // Reseta o estado do jogo
    }, 1500);
}

// Reseta o controle do tabuleiro após cada jogada
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false]; // Reseta os flags de controle
    [firstCard, secondCard] = [null, null]; // Limpa as cartas selecionadas
}
// função imediatamente executada que embaralha as cartas ao carregar a página
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12); // gera ´pso~]ap açeat[proa de 0 a 11]
        card.style.order = randomPos; // Dfome a prde, da carta mp çaypit fçexbpx
    });
})();

// Adiciona o evento de clique para virar cada carta
cards.forEach(card => card.addEventListener('click', flipCard));

// Aguarda o carregamento da página
window.onload = function(){
    let clickDiv = document.getElementById("click-div"); // Seleciona a div de clique
    clickDiv.onclick = incrementClick;// Define que ao clicar, o contador aumenta

    let resetBtn = document.getElementById("reset-button"); // Seleciona o botão de reset
    resetBtn.onclick = resetCounter; // Define que ao clicar, o contador é zerado
}

// variável que guarda o número de cliques do usuário
var counterVal = 0;

// função que incrementa o contador de cliques
incrementClick = function(){
    updateDisplay(++counterVal); // Aumenta o valor e atualiza o contador na tela
}
//Funçao que reseta o contador de clique 
function resetCounter(){
    counterVal = 0 //Zero o Valor
    updateDisplay(counterVal);//Atualiza atela com 0
}
//Atualiza o elemento html com o valor atual do contador
function updateDisplay(val){
    document.getElementById("couter-label").innerHTML = val; //mostra o valor na div
}