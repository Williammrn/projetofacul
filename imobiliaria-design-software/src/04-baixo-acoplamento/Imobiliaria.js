class Imobiliaria {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    cadastrarImovel(imovel) {
        this.repositorio.salvar(imovel);
    }
}

module.exports = Imobiliaria;