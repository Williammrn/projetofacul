class Imovel {
    constructor(endereco, valor) {
        this.endereco = endereco;
        this.valor = valor;
    }

    exibirInformacoes() {
        console.log(
            `Imóvel: ${this.endereco} - R$ ${this.valor}`
        );
    }
}

module.exports = Imovel;