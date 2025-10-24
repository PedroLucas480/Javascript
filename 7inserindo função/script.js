function soma(){
var valor1 =  document.getElementById("num1").value;
var valor2 =  document.getElementById("num2").value;



var total = parseInt(valor1) + parseInt(valor2);
document.getElementById("total").innerHTML = "O resultado é: " + total;
}

function par() {
    var x, texto;

    // Obtenha o valor do campo de entrada com id="numb"
    x = document.getElementById("numero").value;

    // Se x não for um número ou menor que 1
    // A função isNaN() determina se o valor é NaN ou se é menor que 1.
    if (isNaN(x) || x < 1) {
        texto = "Entrada inválida";
    } else {
        // Se x é par
        if (x % 2 == 0) {
            texto = "O número é par";
        } else {
            // Se x é ímpar
            texto = "O número é ímpar";
        }
    }

    document.getElementById("resultado").innerHTML = texto;
}

function converterCelsiusParaFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado2').innerHTML = "A conversão para fahrenheit é : " + fahrenheit;
}
