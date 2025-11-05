function ligar() {
   var valor1 = document.getElementById("numero").value;
   var valor2 = 14;
   //var total = parseInt(valor1) == parseInt(valor2);
   if (valor1 == valor2) {

      document.getElementById("botao1").style.backgroundColor = "yellow";
      document.getElementById("botao1").style.color = "red";
      document.getElementById("numero2").innerHTML = "Acertou!!!";
   } else {

      if (valor1 < 10) {
         document.getElementById("numero2").innerHTML = "Não foi desta vez!!";

      }
      if (valor1 < 14) {
         document.getElementById("numero2").innerHTML = "Continue tentando!!!";

      }
      if (valor1 < 17) {
         document.getElementById("numero2").innerHTML = "Tenta de novo!!!";

      }
      if (valor1 < 20) {
         document.getElementById("numero2").innerHTML = "Tente mais uma!!!";
       }
      else{
         document.getElementById("numero2").innerHTML = 
         "Valor invalido, Digite novamente ";
      } 

      var x = 0;
      document.getElementById("contar").innerHTML = (valor1 != valor2) ? "" : "";


   }
}
var contarVal = 0;

function contarClick() {
   updateDisplay(++contarVal);
}

function resetarContador() {
   contarVal = 0;
   updateDisplay(contarVal);
}

function updateDisplay(val) {
   document.getElementById("contartentativas").innerHTML = val;
}

var btn = document.querySelector("#resetar");
btn.addEventListener("click", function () {

   location.reload();

})

// condição com switch 
function verificarnumero() {
   let teste1 = document.getElementById("testenumero").value;

   switch (teste1) {
      case "2":
         //caso o valor for igual ao valor informado
         document.getElementById("botao10").style.backgroundColor = "yellow";
         document.getElementById("numero3").innerHTML = "Parabens!!! você acertou o numero!!";
         document.getElementById("botao10").style.color = "red";
         break;
     
 
      default:
         //caso o valor for diferente do valor inserido 
         document.getElementById("numero3").innerHTML = "Não foi desta vez, Tente novamente!!!";
   }
}

//Exemplo 2 switch

var ganhou = Math.floor(Math.random() * 9) + 1;


function testar(elem) {
   var num = parseInt(elem.innerHTML);
   switch (num) {
      case ganhou:
         document.querySelector("#resposta").innerHTML = "Parabens!!! Você achou a caixa correta!!";
         document.querySelector("#resposta").style.backgroundColor = "yellow";

         break;
      case ganhou:
         document.querySelector(".caixa").innerHTML = "Parabens!!! Você achou a caixa correta!!";
         document.querySelector(".caixa").style.backgroundColor = "yellow";

      default:
         alert("Perdeu!");
         break;
   }
}
function contarClick2() {
   updateDisplay2(++contarVal);
}
function updateDisplay2(val) {
   document.getElementById("contartentativas2").innerHTML = val;
}
var btn = document.querySelector("#resetar2");
btn.addEventListener("click", function () {

   location.reload();

})





