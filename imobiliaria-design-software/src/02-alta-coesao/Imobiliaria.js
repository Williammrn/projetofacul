class Imobiliaria {
    constructor() {
        this.imoveis = [];
        this.clientes = [];
    }

    cadastrarImovel(imovel) {
        this.imoveis.push(imovel);

        console.log(
            `Imóvel ${imovel.endereco} cadastrado.`
        );
    }

    cadastrarCliente(cliente) {
        this.clientes.push(cliente);

        console.log(
            `Cliente ${cliente.nome} cadastrado.`
        );
    }
}

module.exports = Imobiliaria;