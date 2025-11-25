class colegas {
    
    Justino(){
        console.log("Opa galerinha"); // Método padrão da classe pai
    }
}

class piada extends colegas {

    Justino(){
        console.log("Nao fale comigo nesse tom de pele");
    }
}

class Pedro extends colegas {

    Justino(){
        console.log("Como vai o trabalho na plantaçao de algodão");
    }
}

// Lista de colegas (corrigido o nome para não sobrescrever a classe)
const listaColegas = [new piada(), new Pedro()];

// Chama o mesmo método em diferentes objetos
listaColegas.forEach(f => f.Justino());
