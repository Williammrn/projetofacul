const { estoque } = require("./VerificarEstoque");

function finalizarPedido(req, res) {

    const { itemId, quantidade } = req.body;

    estoque[itemId] -= quantidade;

    console.log("-> Pedido finalizado com sucesso.");

    return res.status(200).json({
        mensagem: "Pedido concluído!",
        estoqueAtual: estoque[itemId]
    });
}

module.exports = finalizarPedido;