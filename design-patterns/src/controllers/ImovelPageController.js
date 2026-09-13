class ImovelPageController {

    constructor(imovelService) {
        this.imovelService = imovelService;
    }

    listar(req, res) {
        const imoveis = this.imovelService.listarImoveis();

        res.json(imoveis);
    }

    buscarPorId(req, res) {
        const id = Number(req.params.id);

        const imovel = this.imovelService.buscarImovel(id);

        if (!imovel) {
            return res.status(404).json({
                mensagem: "Imóvel não encontrado"
            });
        }

        res.json(imovel);
    }
}

module.exports = ImovelPageController;