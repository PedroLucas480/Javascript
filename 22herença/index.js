// Herança em javascript
// Exemplo 1 - Herança Simples: Animal > Cachorro / Gato
// Neste exemplo, as classes filhas herdam atributos e métodos da classe pai
// Classepai (superClasse)
class Animal {
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log("Som genérico de animal"); // Método padrão da classe pai
    }
}

// Classe filha 1
class Cachorro extends Animal{
    // Cachorro herda da classe animal
    emitirSom(){ // Sobrescreve o método da classe pai
        console.log(`${this.nome} diz: Au au!`);
    }
}
class Gato extends Animal { // Gato também herda de Animal
    emitirSom(){ // Sobrescreve o mesmo método
        console.log(`${this.nome} diz: miau!`)
    }
}
// Criando objetos
const rex = new Cachorro("Rex"); // Instancia da classe cachorro
const mimi = new Gato("Mimi"); // instancia da classe gato
rex.emitirSom(); // Chama o método sobrescrito > "Rex dix: Auau!"
mimi.emitirSom(); // Chama o método sobrescrito > "Mimi diz: Miau!"

// Exemplo 2 - Herança entre veículos
// A classe Carro herda propriedades e  métodos da classe veículo

// Classe pai
class Veiculo {
    constructor(marca, modelo){
        this.marca = marca; // Mara do veículo
        this.modelo = modelo; // Modelo do veículo
    }

    ligar(){
        console.log(`${this.marca} ${this.modelo} está ligado`);
    }
}

// Classe filha
class Carro extends Veiculo{
    constructor(marca, modelo, portas){
        super(marca, modelo); // Chama o construtor da classe pai
        this.portas = portas;// Atributo adicional exclusivo do carro
    }

    exibirDetalhes(){
        console.log(`${this.marca} ${this.modelo} tem ${this.portas} portas`);
    }
}

// Criando um carro
const carro1 = new Carro("Toyota", "Corolla", 4);
carro1.ligar(); // Usa método herdado
carro1.exibirDetalhes(); // Usa método da própria classe

// Exemplo 3 - Herança em empresa: Pessoa > Funcionario > Gerente
// Exemplo de herança multinivel (cadeia)

// Classe base
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos`);
    }
}

// CLasse Filha

class Funcionario extends Pessoa{
    constructor(nome, idade, cargo){
        super(nome, idade);
        this.cargo = cargo;
    }

    trabalhar(){
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}
// Classe neta (herda de Funcionario)
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, setor){
        super(nome, idade, cargo); // Aproveita tudo da classe funcionario
        this.setor = setor; // Atributo exclusivo da classe gerente
    }
    supervisionar(){
        console.log(`${this.nome} supervisiona o setor de ${this.setor}`);
    }
}

// Criando objetos
const gerente1 = new Gerente("Marcos", 40, "Gerente", "Vendas");
gerente1.apresentar(); // Método herdado de pessoa
gerente1.trabalhar(); // Método herdado de Funcionários
gerente1.supervisionar(); // método da própria Classe