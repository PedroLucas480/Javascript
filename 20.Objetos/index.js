// Exemplo: Criando um objeto simples chamado "carro"

// Cria um objeto literal chamado "carro"
const carro = {
    // Propriedade "marca" armazena uma string
    marca: "Toyota",

    // Propriedade "modelo" armazena o nome do modelo do carro
    modelo: "Corolla",

    // Propriedade "ano" armazena o ano de fabricação
    ano: 2020,

    // Método "ligar" é uma função que mostra mensagem no console
    ligar: function() {
        console.log("O carro está ligado!");
    },

    // Método "mostrarInfo" exibe informações do carro no console
    // Usa "this" para acessar as propriedades do próprio objeto
    mostrarInfo: function() {
        console.log(`${this.marca} ${this.modelo} - Ano: ${this.ano}`);
    }
};

// Chama o método "ligar" do objeto "carro"
carro.ligar();

// Chama o método "mostrarInfo" para exibir os dados do carro
carro.mostrarInfo();


// 2 Exemplo: Criando objetos com Função Construtora

// Define uma função construtora chamada "Pessoa"
function Pessoa(nome, idade) {
    // Atribui o valor do parâmetro "nome" à propriedade "nome" do objeto
    this.nome = nome;

    // Atribui o valor do parâmetro "idade" à propriedade "idade" do objeto
    this.idade = idade;

    // Cria um método que apresenta a pessoa com nome e idade
    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Cria um novo objeto "pessoa1" com o nome "Denis" e idade 44
const pessoa1 = new Pessoa("Denis", 44);

// Cria outro objeto "pessoa2" com o nome "Maria" e idade 25
const pessoa2 = new Pessoa("Maria", 25);

// Chama o método "apresentar" de cada pessoa
pessoa1.apresentar();
pessoa2.apresentar();


// 3 Exemplo: Objeto dentro de outro objeto aninhado

// Cria um objeto chamado "aluno"
const aluno = {
    // Propriedade "nome"
    nome: "João",

    // Propriedade "idade"
    idade: 17,

    // Propriedade "endereco" é um outro objeto dentro de "aluno"
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    },

    // Método que mostra o endereço completo do aluno
    mostrarEndereco: function() {
        console.log(`${this.nome} mora na ${this.endereco.rua}, nº ${this.endereco.numero}, ${this.endereco.cidade}.`);
    }
};

// Chama o método "mostrarEndereco" para exibir as informações
aluno.mostrarEndereco();


// 4 Exemplo: Usando array de objetos (lista de dados)

// Cria um array contendo vários objetos "produto"
const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 100 },
    { nome: "Monitor", preco: 800 }
];

// Usa o método "forEach" para percorrer cada item do array
produtos.forEach(produto => {
    // Exibe no console o nome e o preço de cada produto
    console.log(`${produto.nome} custa R$${produto.preco}`);
});

// Usa o método "reduce" para somar os preços de todos os produtos
// "soma" começa em 0 e vai acumulando o preço de cada produto
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);

// Mostra o valor total da soma no console
console.log("Total: R$" + total);
