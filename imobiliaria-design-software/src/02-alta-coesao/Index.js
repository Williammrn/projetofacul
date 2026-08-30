const Imovel = require("./Imovel");
const Cliente = require("./Clientes");
const Imobiliaria = require("./Imobiliaria");

const imobiliaria = new Imobiliaria();

const imovel = new Imovel(
    "Rua das Flores, 100",
    250000
);

const cliente = new Cliente(
    "William",
    "william@email.com"
);

imobiliaria.cadastrarImovel(imovel);
imobiliaria.cadastrarCliente(cliente);

console.log("\nInformações:");

imovel.exibirInformacoes();
cliente.exibirInformacoes();