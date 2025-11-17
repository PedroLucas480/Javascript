// =======================================================
// 1) Classe representando uma conta bancária
// =======================================================

class ContaBancaria {
    // Declaração da classe 'ContaBancaria'.
    
    // Atributo privado: só pode ser acessado dentro da classe
    #saldo = 0;
    // O '#' torna o atributo privado, impedindo acesso/modificação externa.
    
    // Método para depositar um valor
    depositar(valor) {
    // Define um método público 'depositar' que recebe 'valor' como argumento.
    if (valor > 0) {
    // Verifica se o valor a ser depositado é positivo.
    this.#saldo += valor;
    // Se for positivo, adiciona 'valor' ao saldo (acumulador interno).
    } else {
    // Se a condição (valor > 0) for falsa.
    console.log("Valor inválido para depósito!");
    // Exibe mensagem de erro.
    }
    }
    
    // Método público para mostrar o saldo atual
    verSaldo() {
    console.log(`Saldo atual: R$ ${this.#saldo}`);
    // Exibe o valor do saldo privado.
    }
    }
    
    // ==================== USANDO A CLASSE ========================
    
    const conta = new ContaBancaria();
    // Cria nova instância da classe.
    
    conta.depositar(1000);
    // Adiciona 1000 ao saldo.
    
    conta.verSaldo();
    // Mostra: R$ 1000
    
    // conta.#saldo = 500; ❌ ERRO — atributo privado
    // O JS impede acessar esse atributo por fora da classe.
    
    
    
    // =======================================================
    // 2) Classe que representa uma impressora
    // =======================================================
    
    class Impressora {
    // Declaração da classe 'Impressora'.
    
    // Método público principal
    imprimir(documento) {
    this.#iniciarImpressora();
    // chama método privado
    
    this.#carregarTinta();
    // chama método privado
    
    console.log(`Imprimindo: ${documento}`);
    // lógica visível
    
    this.#finalizarImpressao();
    // chama método privado
    }
    
    // Métodos privados: detalhes internos escondidos do usuário
    
    #iniciarImpressora() {
    console.log("Inicializando impressora...");
    // Lógica interna escondida
    }
    
    #carregarTinta() {
    console.log("Carregando tinta...");
    }
    
    #finalizarImpressao() {
    console.log("Impressão concluída.");
    }
    }
    
    // ==================== USANDO A CLASSE ========================
    
    const impressora = new Impressora();
    
    impressora.imprimir("Relatório.pdf");
    // Chama método principal
    
    // impressora.#carregarTinta(); ❌ ERRO (privado)
    
    
    
    // =======================================================
    // 3) Classe que representa um sistema de pedidos
    // =======================================================
    
    class Pedido {
    
    constructor(cliente, itens) {
    // Define propriedades públicas
    this.cliente = cliente;
    this.itens = itens;
    }
    
    // Método principal (USUÁRIO chama)
    finalizarPedido() {
    const total = this.#calcularTotal();
    // Obtém o total
    
    if (this.#validarItens()) {
    // Verifica se há itens válidos
    console.log(`Pedido de ${this.cliente} finalizado. Total: R$ ${total}`);
    this.#enviarConfirmacao();
    // Envia confirmação
    }
    }
    
    // Métodos privados (detalhes internos)
    
    #validarItens() {
    // Verifica se existe pelo menos um item
    return this.itens.length > 0;
    }
    
    #calcularTotal() {
    // Calcula total somando preços dos itens
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
    }
    
    #enviarConfirmacao() {
    console.log("E-mail de confirmação enviado!");
    }
    }
    
    // ==================== USANDO A CLASSE ========================
    
    const pedido = new Pedido("Carlos", [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
    ]);
    
    pedido.finalizarPedido();
    // Executa validação, cálculo e envio (métodos privados internamente)
    
    