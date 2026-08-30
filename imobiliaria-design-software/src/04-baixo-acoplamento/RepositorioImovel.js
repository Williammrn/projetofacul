class RepositorioImovel {
    salvar(imovel) {
        console.log(
            `Salvando imóvel ${imovel.endereco} no banco de dados.`
        );
    }
}

module.exports = RepositorioImovel;