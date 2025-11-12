const lista = [ "Pedro" , "Geovana", "Casar" , "Casa" , "Honda civic" , "Caderno", "Celular", "PcGamer", "Fone", "Relógio", "Café" ]

const amigos = ["Pietro" , "Julio" , "Augusto" ,  
    "Justino(meia noite)"]


document.getElementById("lista").innerHTML = "Os itens da listas são: " + lista + ".";

document.getElementById("lista1").innerHTML = "O item seleciondo da lista é: " + lista[7] + ".";

lista.push("Polo" , "auguto");
document.getElementById("lista2").innerHTML = "A matriz com o item adicionado é: " + lista + ".";

lista.splice(5, 1,);
document.getElementById("lista3").innerHTML = "Matriz sem itens o item 5: " + lista + ".";

document.getElementById("amigos").innerHTML = "Os itens da listas são: " + amigos + ".";

const unida = lista.concat(amigos)
document.getElementById("lista4").innerHTML = "Matriz concatenada com outra matriz: " + unida +".";


import { waapi, animate, stagger } from 'animejs';

waapi.animate('.square',  {
  rotate: 'var(--rotation)',
  borderColor: ['var(--hex-orange-1)', 'var(--hex-red-1)'],
  duration: 500,
  delay: stagger(100),
  loop: true,
});

animate('.square',  {
  scale: 'var(--scale)',
  background: ['var(--hex-red-1)', 'var(--hex-orange-1)'],
  duration: 500,
  delay: stagger(100),
  loop: true,
  alternate: true,
});


