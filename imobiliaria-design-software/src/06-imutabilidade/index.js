"use strict";

class Imovel {
    constructor(endereco, valor) {
        this.endereco = endereco;
        this.valor = valor;

        Object.freeze(this);
    }

    exibirInformacoes() {
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Valor: R$ ${this.valor}`);
    }
}

const imovel = new Imovel(
    "Rua Principal, 150",
    300000
);

console.log("Imóvel criado:");

imovel.exibirInformacoes();

console.log("\nTentando alterar o valor...");

try {
    imovel.valor = 500000;
} catch (erro) {
    console.log("Não foi possível alterar o imóvel.");
}

console.log("\nImóvel após a tentativa:");

imovel.exibirInformacoes();