var valor1, valor2, valor3, valor4, valor5, valor6

valor1 = 10;
valor2 = 5;
valor3 = 2;
valor4 = "5"; /*you, há 4 dias * initial comit*/
valor5 = "Pedro";
valor6 = "Lucas";




//operadores aritimeticos
document.getElementById("ar1").innerHTML = valor1 + valor3
document.getElementById("ar2").innerHTML = valor1 - valor3
document.getElementById("ar3").innerHTML = valor1 * valor3
document.getElementById("ar4").innerHTML = valor1 / valor3


//operadores de atribuição
//document.getElementById("at1").innerHTML = ++valor1;
//document.getElementById("at2").innerHTML = --valor1;
//document.getElementById("at3").innerHTML = valor1 += valor3; //É a mesma coisa que (valor1 = valor1 + valor3)
//document.getElementById("at4").innerHTML = valor1 -= valor3;
//document.getElementById("at5").innerHTML = valor1 *= valor3;
//document.getElementById("at6").innerHTML = valor1 /= valor3;
//document.getElementById("at7").innerHTML = valor2 %= valor3;

//operadores de sequência
document.getElementById("sq1").innerHTML = valor5 + valor6;

//operadores de comparação
document.getElementById("comp1").innerHTML = valor1 > valor2;
document.getElementById("comp2").innerHTML = valor1 < valor2;
document.getElementById("comp3").innerHTML = valor1 >= valor2;
document.getElementById("comp4").innerHTML = valor1 <= valor2;
document.getElementById("comp5").innerHTML = valor2 == valor4;
document.getElementById("comp6").innerHTML = valor1 != valor4;
document.getElementById("comp7").innerHTML = valor2 === valor4;
document.getElementById("comp8").innerHTML = valor2 !== valor2;
document.getElementById("comp9").innerHTML = valor2 && valor3 > valor4;
document.getElementById("comp10").innerHTML = valor2 && valor1 || valor3;

//operador condicional

document.getElementById("cond1").innerHTML = (valor1 >= valor2) ? "sim, o valor é maior":"Não, o valor não é maior" ;
getElementById("cond1").innerHTML = (valor2 == valor4 + (valor2 === valor4)) ? "sim, o valor é igual":"Não, o valor não é ihual";
document.getElementById("cond1").innerHTML = (valor2 === valor4) ? "sim, o valor é identico":"Não, o valor não é identico" ;

//operador logico

document.getElementById("cond1").innerHTML = (valor1 <= valor2 || valor3 >= valor4)?"verdadeiro":"falso"; 