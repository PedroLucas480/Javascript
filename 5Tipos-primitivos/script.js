var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
Symbol("foo") === Symbol("foo");// false
var sym = new Symbol(); //TypeError
var sym = Symbol("foo");
typeof sym;
var symObj = Object(sym);
typeof symObj; //"Objeto"

let nome = "Carlos";
typeof nome;    //"string"
console.log(typeof nome);

let idade = 25;
typeof idade; //"number"

let ativo = true
typeof ativo; //"boolean"

let vazio = null;
typeof vazio; //"object" (esse é um comportamento hitorico do js

let indefinido;
typeof indefinido; // "underfiend"

let simbolo = Symbol("id");
typeof simbolo; // "symbom"