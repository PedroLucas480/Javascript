const algusto = {
    nome: "Algusto",
    idade: 20,
    ano: 2005,
    genero: "Metro sexual gay demais",
    mostrarInfo() {
        console.log(`${this.nome} tem ${this.idade} anos, nasceu em ${this.ano} e seu gênero é ${this.genero}.`);
    }
};

// chama o método
algusto.mostrarInfo();
