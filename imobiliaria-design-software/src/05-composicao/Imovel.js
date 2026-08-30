class Imovel {
    constructor(valor, endereco) {
        this.valor = valor;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        console.log(`Valor: R$ ${this.valor}`);
        console.log(
            `Endereço: ${this.endereco.exibir()}`
        );
    }
}

module.exports = Imovel;