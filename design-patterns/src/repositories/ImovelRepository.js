const imoveis = require("../data/imoveis");

class ImovelRepository {

    listarTodos() {
        return imoveis;
    }

    buscarPorId(id) {
        return imoveis.find(imovel => imovel.id === id);
    }
}

module.exports = ImovelRepository;