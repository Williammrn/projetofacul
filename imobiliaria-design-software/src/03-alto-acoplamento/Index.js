class BancoDeDados {
    salvarImovel(imovel) {
        console.log(
            `Salvando imóvel ${imovel.endereco} no banco de dados.`
        );
    }
}

class Imobiliaria {
    constructor() {
        this.banco = new BancoDeDados();
    }

    cadastrarImovel(imovel) {
        this.banco.salvarImovel(imovel);
    }
}

const imobiliaria = new Imobiliaria();

const imovel = {
    endereco: "Avenida Brasil, 500",
    valor: 350000
};

imobiliaria.cadastrarImovel(imovel);