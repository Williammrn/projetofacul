const Endereco = require("./Endereco");
const Imovel = require("./Imovel");

const endereco = new Endereco(
    "Rua Principal",
    150,
    "Estrela"
);

const imovel = new Imovel(
    300000,
    endereco
);

imovel.exibirInformacoes();