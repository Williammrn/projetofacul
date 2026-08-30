class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    exibirInformacoes() {
        console.log(
            `Cliente: ${this.nome} - ${this.email}`
        );
    }
}

module.exports = Cliente;