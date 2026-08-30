class Imobiliaria {
    cadastrarImovel(imovel) {
        console.log(`Imóvel ${imovel.endereco} cadastrado.`);
    }

    cadastrarCliente(cliente) {
        console.log(`Cliente ${cliente} cadastrado.`);
    }

    calcularComissao(valor) {
        return valor * 0.05;
    }

    enviarEmail(cliente, mensagem) {
        console.log(
            `Enviando e-mail para ${cliente}: ${mensagem}`
        );
    }

    gerarRelatorio() {
        console.log("Gerando relatório financeiro...");
    }
}

const imobiliaria = new Imobiliaria();

const imovel = {
    endereco: "Rua das Flores, 100",
    valor: 250000
};

imobiliaria.cadastrarImovel(imovel);

imobiliaria.cadastrarCliente("William");

const comissao = imobiliaria.calcularComissao(
    imovel.valor
);

console.log(`Comissão: R$ ${comissao}`);

imobiliaria.enviarEmail(
    "William",
    "Seu imóvel foi cadastrado."
);

imobiliaria.gerarRelatorio();