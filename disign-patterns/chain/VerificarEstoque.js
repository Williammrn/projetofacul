const estoque = {
    "item-1": 5
};

function verificarEstoque(req, res, next) {

    const { itemId, quantidade } = req.body;

    const qtdDisponivel = estoque[itemId] || 0;

    if (qtdDisponivel < quantidade) {
        return res.status(400).json({
            erro: "Estoque insuficiente."
        });
    }

    console.log("-> Estoque verificado com sucesso.");

    next();
}

module.exports = {
    verificarEstoque,
    estoque
};