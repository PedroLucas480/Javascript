//var fiat1  = "Palio";
//var fiat2  = "Uno";
//var fiat3  = "Siena";
//var fiat4  = "Mobi";

//var volks1  =  "Gol";
//var volks2  =  "Voyage";
//var volks3  =  "Up";
//var volks4  =  "Parati";


const fiat =  ["Palio","Uno","Siena","Mobi"];
const volks = ["Gol","Voyage","Up","Parati"];


document.getElementById("fiat").innerHTML = "O carro que você escolheu foi o "+fiat[3]+".";


document.getElementById("volks").innerHTML = "O carro que você escolheu foi o "+volks[3]+".";


const matriz=["Denis"," Santos", " 44"," Betim"," Minas Gerais"];

const objeto = {nome:"Denis",sobrenome:"Santos",idade:44,cidade:"Betim",estado:"Minas Gerais"}



document.getElementById("matriz").innerHTML = "O dado que você escolheu foi o "+matriz[3]+".";

document.getElementById("objeto").innerHTML = "O dado que você escolheu foi o "+objeto.cidade+".";


document.getElementById("contaitens").innerHTML = "A quantidade de itens da array é "+matriz.length+".";

document.getElementById("contaitens1").innerHTML = "A quantidade de caracteres do conteudo que foi selecionado é "+matriz[2].length+".";


document.getElementById("contaitens2").innerHTML = "O ultimo iten da lista é "+ matriz[matriz.length - 1]  ;

matriz.push(" Brasileiro");

document.getElementById("contaitens3").innerHTML = "A matriz com o  iten adicionado é: "+ matriz +"." ;

document.getElementById("contaitens4").innerHTML = "A variavel e uma matriz: "+ Array.isArray(matriz) ;

matriz.pop();
document.getElementById("contaitens5").innerHTML = "A matriz sem o ultimo item: "+ (matriz) ;

matriz.shift();
document.getElementById("contaitens6").innerHTML = "A matriz sem o primeiro item: "+ (matriz) ;

matriz.unshift("Daniel");
document.getElementById("contaitens7").innerHTML = "Adicionar a  matriz no primeiro lugar: "+ (matriz) ;


matriz.splice(2,0,"item1","item2");
document.getElementById("contaitens8").innerHTML = "Matriz com itens adicionados no meio: "+ (matriz) ;

const carros =  fiat.concat(volks);
document.getElementById("contaitens9").innerHTML = "Matriz concatenada com outra matriz"+ (carros) ;

carros.sort();
document.getElementById("contaitens10").innerHTML = "Matriz em ordem alfabetica"+ (carros) ;

carros.reverse();
document.getElementById("contaitens11").innerHTML = "Matriz em ordem alfabetica Reversa"+ (carros) ;

const numeros=[ 50,100,1,1000,4,27,11]

numeros.sort(function(a,b){ return a - b});
document.getElementById("contaitens12").innerHTML = "Matriz em ordem crescente"+ (numeros) ;


numeros.sort(function(a,b){ return b - a});
document.getElementById("contaitens13").innerHTML = "Matriz em ordem crescente"+ (numeros) ;





