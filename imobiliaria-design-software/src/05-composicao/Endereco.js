class Endereco {
    constructor(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }

    exibir() {
        return `${this.rua}, ${this.numero} - ${this.cidade}`;
    }
}

module.exports = Endereco;