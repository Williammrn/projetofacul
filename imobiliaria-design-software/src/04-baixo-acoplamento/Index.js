const Imobiliaria = require("./Imobiliaria");
const RepositorioImovel = require("./RepositorioImovel");

const repositorio = new RepositorioImovel();

const imobiliaria = new Imobiliaria(repositorio);

const imovel = {
    endereco: "Avenida Brasil, 500",
    valor: 350000
};

imobiliaria.cadastrarImovel(imovel);