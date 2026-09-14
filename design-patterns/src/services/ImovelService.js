class ImovelService {

    /*   
    Delegar
     constructor() {
        this.imovelRepository = new ImovelRepository();
    }
    */

    constructor(imovelRepository) {
        this.imovelRepository = imovelRepository;
    }

    listarImoveis() {
        return this.imovelRepository.listarTodos();
    }

    buscarImovel(id) {
        return this.imovelRepository.buscarPorId(id);
    }
}

module.exports = ImovelService;